### Single Responsibility Principle (SRP)

A main stay of Uncle Bob's _Clean Code_, the single responsibility principle says something should have one reason to need to change. Now, Uncle Bob has been a bit of a stickler at times, but this is one I agree with, and one that Excel lends itself nicely to.

If you're building any kind of model or calculator, you don't want to hide too much logic in any one row or formula: what if your business rules change? Now you have to do root around and hope you don't break anything in the process. Not to mention, your user may be confused if a number magically appears out of one cell and they want to know the steps you took. T

### Object Oriented Programming (OOP)

Object Oriented Programming (OOP) is far too big a topic for this post, but the gist is developers create _classes_ of objects that have given properties and methods and that can inherit from each other. A common example may be making a class for **Car** followed by a class for **Sedan** that inherits some properties and methods from Car. This means the user can create multiple copies of Cars or Sedans (or even make a new class like **Truck**) and they will all have the same structure and capabilities.

VBA can leverage OOP principles in designing simple or complicated objects, and while it's not as elegant as it is in some more modern languages, it is certainly effective in its design and implementation.

### Monolithic vs. Microservice Architectures

When designing a web site,

- When done correctly, can introduce useful coding concepts (SRP, OOP, even web development concepts of front end, backend, and database)
