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

- Downloaded VS Code
- Installed the C# Extension

This is actually relatively simple. Open the terminal window (Ctrl + ~), navigate to the directory of choice, and run [`dotnet new console`](`#`resources-and-references). This should create the necessary files you need, such as your bin folder, your .csproj file, and your Program.cs file, which will be the main code entry point into your application. 
<br>

## Resources and References
<hr>

1. <a href="https://www.sitepoint.com/typing-versus-dynamic-typing/">Static vs. Strong Typing</a>
2. <a href="https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore22">`dotnet new` Docs</a>