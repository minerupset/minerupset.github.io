# C# - Some Basics and Hello World

<hr>

## C# Value Prop

I have a confession to make: I started learning how to code in the most business-like of environments, the VBA window of Excel files. I will forever feel like 'not a real developer' because of this. Since then, I like to think I've advanced some, but at the end of the day, I'm still the same anxious consultant looking to get an accurate answer as fast as possible. VBA was good for that then, because I was almost always crunching Excel data, but now, I would say my go to language is C#. It's a good mix of familiar constructs and powerful tools and libraries, and has a wide range of application.

<h3>Why C# has worked well for me:</h3>

- **Strong typing:** Don't get me wrong, I love Python because it 'just works'. But that same beauty has been a major thorn in my side in enterprise settings, making sure things are consistent throughout an application. C# is almost always [strongly typed](`#`resources-and-references), but does have a type (dynamic) for when something might shift over time.
- **Object-oriented structure:** Call me old fashion, but I often think in terms of concrete objects. Actual things that have properties and methods that I can visualize. Not everyone thinks this way, it may even be a crutch to think this way, but it's my default. C# makes working with classes and objects simple, and I can easily visualize my tasks in an intuitive way that I can't as easily with functional programming.
- **Wide-spread use:** We all know Python gets a lot of love because it can do anything. And it's well-earned; Python is practically synonymous with machine learning and data science, it stitches together some of the most popular web apps around the world, and it's a great introductory language to boot. But C# is hardly esoteric; ASP.NET still powers many widely used websites, .NET Core can be deployed on Windows, Mac, and Linux, and .NET integrates quite seamlessly with Azure deployment (Amazon's biggest competitor in the space). Throw in some newer toys like ML.NET, and you're hardly limited with C#.

<h3>Challenges with C#</h3>

- **Fewer libraries**: It seems like pip for Python and npm for NodeJS have just about every tool you could possibly think of (whether you need it or not). Microsoft's NuGet on the other hand has definitely left me with some headaches in the past. There have been improvements, but it's a far cry from a perfect set up.
- **Too Many -azors**: If you've ever seen the movie 'Dodgeball', you may recall <a href="https://youtu.be/LHVIUN8dC9U?t=22">a scene</a> where Ben Stiller's character introduces his mercenary team of pro dodgeballers. I can't look at Razor Pages or Blazor Pages without thinking of this scene, and feeling as confused as the protagonists. I'm all for good front-end templates, but this is one part where Microsoft did lose me. Blazor seems to have been a step in the right direction with its component structure, but it still requires a boatload of configuration to make it work.
  <br>

## Basic C# Console App - Hello World

<hr>
Ok, to the meat of it. Let's make a simple Hello World app.

Assuming you have:

- Downloaded VS Code and,
- Installed the C# Extension

This is actually relatively simple. Open the terminal window (Ctrl + ~), navigate to the directory of choice, and run [`dotnet new console`](`#`resources-and-references). This should create the necessary files you need, such as your bin folder, your .csproj file, and your Program.cs file, which will be the main code entry point into your application.

When you've done this, you should see a chunk of code that looks roughly like this:

```csharp
using System;

namespace YOUR_PROJECT
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

If you run this application with `dotnet run`, you should see "Hello World!" appear in your terminal.

Now, this is one of the downsides I find with C#: like Java, there's a lot of additional magic that is required to make it work (what the hell is `using System;`, and what are `args`?) This is in contrast to Python, where 'things just work'. While this can be frustrating at first, it doesn't take that long to learn, and once you learn, you begin to see how the guardrails help you.
<br>

## What the heck did I just do?

<hr>
In order:

- `using System;` tells the machine, "Hey, there's a library of code called System. Please reference this library as I'm writing my code". System contains thing like the console, the filesystem, and a lot of the basics that make a computer run
- Lines in C# end with `;`. It's a habit you can easily pick up, don't worry about it
- Chunks of code are wrapped in brackets `{ }`. This helps determine the scope of variables and methods (bigger details for later)
- A `namespace` is a collection of code. Technically, `System` is a namespace. It's just a grouping of a bunch of classes. In this code, `YOUR_PROJECT` may end up containing one class or 20 classes, so a namespace is just a way of collecting them. If you want to use a namespace in your project, you use the `using` keyword like you did with the System namespace
- I'm not going to go into depth with classes here, as any description I give would be insufficient. In short, classes are templates for objects in the world of object-oriented-programming (OOP). I may cover that later, but not today
- `static void Main (string[] args)` is a mouth full:
  - `static` is a detail of the class - it means we don't need to create an instance of program to run it, we can just run it directly (detail that will make more sense later)
  - `void` means the method `Main` doesn't return anything. It doesn't result in a string or integer or anything else, it just runs a process and stops
  - `Main` is the name of the method. It's a keyword here because the complier is going to look for a Main method as the entry point to the program
  - `(string[] args)` means that Main takes a in a single argument that is an array `[]` of strings, and that this array is called `args`
- `Console.WriteLine("Hello World!");` means there is an object, the `Console`, that has a method `WriteLine`, and the line we want it to write is `"Hello World!"`. Which is why when you run this, the line "Hello World!" appears on your console
  <br>

## Resources and References

<hr>

1. <a href="https://www.sitepoint.com/typing-versus-dynamic-typing/">Static vs. Strong Typing</a>
2. <a href="https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore22">`dotnet new` Docs</a>
