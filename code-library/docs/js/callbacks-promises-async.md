# JavaScript - Callbacks, Promises, and Async
<hr>

## Why does JS need any of this?
Unlike local desktop applications, websites have to deal with the reality of decentralized systems. Decentralized systems are great for parallel processing and spreading data around, but what happens if one of your partner systems is down? Or if your internet is slow? You can't have a website just not load at all - users would stop coming. Instead, the web had to be built on the fundamentals of asynchronous actions. This means that a process might finish in half a second, 5 seconds, or 15 seconds, and your website still has to function. 

JavaScript, being the language of the web, needs to handle this, and handle it cleanly. The methods for doing this have changed over time, starting with callbacks, then Promises, then async/await functions. I'll approach them chronologically here, but don't spend too much time on callbacks. They should be avoided when possible because of the anti-patterns they create. If you're maintaining legacy code, you should replace your callbacks with at least Promises, if not async/await functions. 

To start off, it's great to have a way to model and test these kinds of delayed events. The very simple JavaScript method `#!js setTimeout()` will serve well in creating delayed events that could easily happen with arbitrary database / network calls.

For these exercises, let's think of a very basic thing that might happen in a standard REST API construct: you call to get a specific user, then you want to get all of those users blog posts, then you want to get all of the comments on the first blog post. Three sequential API calls that all depend on each other in sequence. 

_(Note: shout out to several various web blog posts and tutorials for coming up with similar training examples - I believe Mosh Hamedani had one on GitHub users, which is also frequently done)_

## Callbacks: to Hell and Back
Let's start with the first one, getting our user:
```javascript
getUser(1, (user) => {
    console.log(user);
});

function getUser(id, ourCallback) {
    setTimeout(() => {
        console.log('Reading user from the db...')
        ourCallback({id:id, userName: "Bob"});
    }, 2000);    
}
```
So we did two things when we called the `#!js getUser()` function. We asked for user with id `#!js 1` and, when that user was found, we asked the function `#!js ourCallback()` to be called. In this case, we just set an arbitrary time out of 2000ms, but it's the same idea. We took 2 seconds to find our user object `#!js {id: '1', username:'Bob'}` and when it was returned, we simply logged it to the console using our arrow function. 

This gets out of hand really fast though when you have to start nesting these calls. Lets look at our example of getting that users blog posts, and then the comments on their first blog post:

```javascript
getUser(1, (user) => {
    getPosts(user.id, (blogPosts) => {
        getComments(blogPosts[0], (comments) => {
            console.log(comments);
        });
    });
});
```
I haven't fleshed out each of these methods of `#!js getPosts()` and `#!js getComments()`, but we don't need to. This code is clear: get a user with `#!js id` of 1, then get the posts associated with that user, then get the comments associated with a given post, then log those comments. This gets nested really quickly in an ugly way. **This is 'Callback Hell'**, when the functions and callbacks get nested and indented farther and farther (also sometimes called the Christmas tree problem). 

Now, we can fix this by using named functions, but honestly, it's not that much better, because you wind up just calling `#!js getUser()` and that implicitly has all the other functions beneath it. Hardly good from a code readability standpoint. 

## Promises: Save Us from Hell
Promises get a bit dicey, so here is a clear defintion:

!!! note ""
    **A Promise is an object that holds the result of an asynchronous task**

Important to note here that it is a normal JavaScript object, and that it holds the eventual result of some work that will take an undetermined amount of time. It has three phases (and one nonexistent phase):

- Pending (it's in process)
- Resolved (or fulfilled, completed with a result)
- Rejected (or failed with some kind of error)
- Undefined (it's not really a state of the Promise, but the Promise doesn't exist anymore)

Let's look at an example:

```javascript
function flipCoin(){
    return (Math.floor(Math.random() * 2) === 0);
}

const ourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let coinTossResult = flipCoin();
        if (coinTossResult)
            resolve('Heads');
        else
            reject(new Error('Came up tails'));
    }, 2000);
});

ourPromise
    .then(result => console.log('Result of our Promise',result))
    .catch(err => console.log('Error', err.message));
```

This is example creates a Promise that essentially flips a coin and if it's 0, it's heads, if it's 1, it's tails. But let's look at our Promise:

- It's an object with a `#!js .then()` method for if it resolves
- If it errors out for any reason, the `#!js .catch()` method is invoked.

Let's take our previous callback methods and replace them with Promises:

```javascript
// getUser(1, (user) => {
//     getPosts(user.id, (blogPosts) => {
//         getComments(blogPosts[0], (comments) => {
//             console.log(comments);
//         });
//     });
// });

getUser(1)
    .then(user => getPosts(user.id))
    .then(blogPosts => getComments(blogPosts[0]))
    .then(comments => console.log('Comment', comments))
    .catch(err => console.log('Error', err.message));
```

So, this code reads a little more cleanly. It still isn't quite as clean as completely synchronous code, but it's an improvement:

- `#!js getUser` with id of 1
- once you have that user, get their posts
- once you have the posts, get the comments from the first post
- once you have the comments, log them to the console

This will run patiently and sequentially, waiting until the results are completed before moving on to the next `#!js .then()` statement. This is also referred to as _**chaining**_ our Promise statements together. As well, if an error occurs on any step, it will go to the `#!js .catch()` statement, so there's no need to error handle each then statement on the way down. 

## Calling Multiple Promises: Get All the Promises
So if you're like me, one of the first things you want to do is run a bunch of Promises simultaneously. I don't mean chaining 3 Promises back to back like we did, but run those 3 chained Promises 100 times to test performance. To do this, you need to put all of the Promise objects into an array, and make use of the `#!js Promise.all()` function. This allows the separate Promise chains to run such that they're not blocking each other (asynchronously), but each individual Promise will follow its own chain of `#!js .then()` statements. 

Let's look at how I handled this in my example:

```javascript
promiseArray = [];
resultArray = [];

for(let i = 0; i < 100; i++){
    promiseArray.push(
        getUser(1)
            .then(user => getPosts(user.id))
            .then(blogPosts => getComments(blogPosts[0]))
            .then(comments => resultArray.push(`${entry} ${i}`))
            .catch(err => resultArray.push(`${err.message} ${i}`));
    );
}

Promise.all(promiseArray)
    .then(results => {
        console.log("Results", results, resultArray);
    })
    .catch(err => 
    console.log("Error in the overall promising", err.message, resultArray));
```

So, we've built an array that makes our group of Promises - we have them push to a separate array of results because our Promises are objects that will become undefined once they're completed, so we want to retain those results after the fact.

Now note: we have our promise array essentially protected against the overall failure. What this means is that if one of our chains of getting users, then posts, then comments fails, the whole thing won't fail, because we our array of promises never has the errors passed up to them. We never pass the reject function forward. This was done intentionally in this example so that if one out of our 100 promises failed, it doesn't torpedo the other 99, but note that there are times when you do want that to fail. If so, you need to elevate that failure so that the `#!js Promise.all()` call will receive the `#!js reject()` call and then hit its `#!js catch()` statement.

This is definitely an area I need to dig more; I won't pretend this is the be-all end-all explanation of Promises, but instead a means of investigating them. I'm sure I'll be building this out as I go.

## Async / Await: Sugar Coated Promises
We've spent all this time looking at Promise architectures, but now, we're going to get rid of it - Promises are great, and it's important to know how they work, but realistically, they have a very different flow in their structure than does normal code. It would be great to keep writing in a synchronous style, and just have Promises work. This is where `#!js async` and `#!js await` come in (very similar to C#'s use of `#!csharp async` and `#!csharp await` with C# Task objects).

Below is a direct comparison of our same three versions: Callbacks, Promises, and Async / Await
```javascript
//Callback Based
getUser(1, (user) => {
    getPosts(user.id, (blogPosts) => {
        getComments(blogPosts[0], (comments) => {
            console.log(comments);
        });
    });
});

//Promise based
getUser(1)
    .then(user => getPosts(user.id))
    .then(blogPosts => getComments(blogPosts[0]))
    .then(comments => console.log('Comment', comments))
    .catch(err => console.log('Error', err.message));

//Async / Await based
async function displayComments(){
    try{
        const user = await getUser(1);
        const blogPosts = await getPosts(user.id);
        const comments = await getComments(blogPosts[0]);
        console.log("Comments", comments);
    }
    catch (err){
        console.log(err.message);
    }
}

displayComments();
```

So what did we do with our Async / Await functionality? Three major changes:

1. First, we put `#!js await` in front of all of our methods that return Promises. This allows us to stop chaining them together and just treat them like normal synchronous code
2. We had to wrap all of that in an `#!js async` function - JavaScript requires that functions that have `#!js await` elements must be called in an asynchronous manner, so we just created our wrapper function `#!js displayComments()` to handle that for us
3. On their own, `#!js await` functions don't have error handling, so we wrapped it in a traditional `#!js try...catch` block. While this may feel a bit klunkier than the elegant `#!js .catch()` method we saw with Promises, it's much more consistent with the rest of the code, and consistency is always nice. 

Keep in mind, it's a false dichotomy to pit Promises against Async / Await functionality - they're inherently the same. Async / Await is just some syntactic sugar wrapped around Promise architecture so that we don't need to keep in mind the unique API of a Promise. This keeps us more consistent with our structures, and generally leads to better code. Does it add more lines? Yes. Yes it does. But lines are not the only metric of code readability - we've sacrificed adding a couple of additional lines to have a consistent and readable structure that flows like our remaining synchronous code. 

<span style='font-size: 0.75em'>Accurate as of January 15, 2020</span>