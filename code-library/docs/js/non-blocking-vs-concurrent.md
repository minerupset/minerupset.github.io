# Non-Blocking vs. Concurrent Code

## What Are These Things?
Node has a rather unique architectural setup in that it is entirely asynchronous, or non-blocking in its operations. This means that code does not block the execution of the next line of code. Here's an example in Python vs. Node.js

```python
#Python Version
wait_input_number_of_seconds(5) #Takes 5 seconds to complete this task
print('I finished') #Prints 'I finished' once those 5 seconds are done
```

```js
//JavaScript Version
waitInputNumberOfSeconds(5); //Starts some task that will take 5 seconds
console.log('I finished'); //Logs to the console almost immediately
```
So what gives? Our python code was polite and everyone waited their turn (like most other languages), while in JavaScript, line 2 seemed to jump the line and log to the console immediately. This is because Node is non-blocking. It is built specifically for the web, and knows that things may take an indeterminate amount of time to finish. Rather than wait in a holding pattern, Node is essentially just constantly queueing tasks up to be run at a certain time, and doesn't really wait for their execution. 

In our example above, the single thread in Node queues up our `#!js waitInputNumberOfSeconds(5)` method, then jumps to the next line. If we had given that method a callback, in 5 seconds it would call it back, but not before. This single threaded architecture allows Node to respond very quickly to user requests because no single request ever distracts Node for very long. 

Think about a web server and a user on your site: if your user sends in an HTTP request that might take 5 seconds to complete, you don't want that user to box out every other request that might come in. On the other hand, you don't want to maintain the threads for every single user that might be clicking at any given moment; that's a lot of parallel (or concurrent) threads. Node solves this by having a single thread that is essentially a project manager. It's not doing any of the actual work: it's coordinating and delegating work to databases, microservices, and other systems, and it has a really good internal clock to check back in on those tasks. This keeps you able to service many users quickly and reliably, with minimal horizontal scaling (going and buying more server space). 

## Why Do I Care?
This architecture really does drive some of Node's value, but highlights some serious limitations. Because Node has a single thread, you would not want it to be handling a CPU intensive task. That would be a nightmare, because that single thread would constantly be getting tied up in complicated tasks. However, for input / output (I/O) tasks where you're constantly moving data in and out of a database but not manipulating it, Node is perfect: it throws a task (usually in the form of a Promise) at a database, goes and handles the next request, and when the first request comes back with an answer, Node is ready to quickly pass the result to the first user. 

Let's pretend it takes ~2 seconds for your service to process a login request with authentication and everything. And let's say User1 (U1) and U2 both submit logins just a couple milliseconds apart. If this were run on a Python API, U1 would would take 2 seconds, U2 would hang there for those 2 seconds, then it would take 2 seconds to process their request. So U1 got their info in 2 seconds, and U2 waited 4 seconds. If we run the same scenario in Node, U1 would send off their request, and almost simultaneously U2 would kick off their request, and both would be handled in 2 seconds. This assumes that your Node application is not handling the requests itself, but instead is passing this task off to a different part of your architecture (likely a database). 

## Where Can I Learn More?
Though it's a few years old, this <a href='https://www.youtube.com/watch?v=8aGhZQkoFbQ' target='_blank'>this widely shared video</a> is honestly one of the best sources you'll find on the event-loop and how Node handles the queue. It's incredibly valuable to understanding just what's going on under the hood of a JavaScript application and why Node (or any kind of browser-based engine) might be good or bad for certain tasks. 