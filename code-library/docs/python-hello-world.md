# Python - Some Basics and Hello World

<hr>

## Python Value Prop

<hr>
Python has been one of the fastest growing languages of the past decade. With a low barrier to entry, widespread use across operating systems, and a massive library of available modules, it's easy to understand why. Python may not always be the best language for whatever task you're tackling, but chances are there is someway it can handle the task.Python brings with it some interesting features that make it both a valuable and useful language, but can provide some headaches:

<h3>The Good</h3>

- **Clean Syntax:** Python has an incredibly clean looking language that practically reads like pseudo-code in many cases. This makes it very digestible for beginners and helps show what the underlying code is doing.

- **Massive `pip` Library:** The sheer volume of modules that exist in `pip` is incredible, and while the level of maintenance differs across them, rarely have I been completely at a loss for a utility that I've needed and not wanted to write myself.

- **Something for Every Occasion:** This is an extension of the above point, but whether you're writing scripts to automate a workflow, building a web application, or doing heavy-duty data science, Python has something for that. Even this blog (at the time of this writing), is built using a Python templating engine. Because of its portability and easy consumption, Python really can be useful in just about any occasion.

<h3>The Bad</h3>

- **Sneaky Errors:** Because Python doesn't use brackets (but instead uses spacing and indentation), seemingly innocuous typing errors like an extra space here or there can completely break a module. Combine that with the fact that Python is interpreted, not compiled, and it can make debugging a nightmare. There are code linters that help with this, but it's hard to get the kind of Intelli-Sense help you get in languages like C#.

- **Pythonic to a Fault:** There is an idea in Python of 'pythonicness', where code should be written with as many Python-specific features as possible. While I am all for fast, efficient code that uses the features of the language, there are many elements of pythonicness that in my opinion, go against the clean syntax mentioned above. This is especially problematic when code becomes contests of who can write the fewest characters to get an idea across. I believe strongly in the statement that you only write code 10% of the time, and the other 90% is spent maintaining, so code should be written to be read cleanly and effectively (of course assuming negligible differences in runtime).
  <br>

## Basic Python - Hello World

<hr>
Assuming you have:

- Downloaded VS Code and,
- Installed the Python Extension

This is quite simple. In your project directory, create a new file called 'hello.py'. In that new file, write the line:

```python
print('Hello World!')
```

In the terminal, type the command `python hello.py` (in Mac or Linux, it may need to be `python3 hello.py`, depending on what version you have installed.) You should see 'Hello World!' show up on your console. If you don't, check and make sure that you have Python included in your PATH variables, so that you can call it from the terminal window.

As you can see, unlike C#, Python is very clean; no need for using statements or namespaces or anything like that. Python is an interpreted language, which means that it is not pre-compiled into machine code the way C# and many other languages are today. It runs in real time, which can be both a blessing and a curse, depending on the application.
