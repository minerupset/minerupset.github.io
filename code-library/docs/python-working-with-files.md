# Python - Working With Files

<hr>

## Reading and Writing Files

A simple yet very useful task that may come up time and again is modifying one (or many hundreds) or text files in a consistent way. Luckily, Python scripting makes this very easy.

In the following example, I'm going to:

1. Read in a file from a path
2. Create a new file to write my modified file to
3. Make my modification and write it

(Note, you can't modify files in place: this is a limitation of streams of memory, not of Python).

```python
path = 'path/to/startingFile.txt'
newPath = '/path/to/resultFile.txt'

with open(path, 'r') as reader:
    startLines = reader.readlines()

with open(newPath, 'w') as writer:
    for line in startLines:
        newLine = '"' + line.rstrip() + '"' + ',\n'
        writer.write(newLine)

```

So in lines 4 and 5 we open up the file at `path` and read in the entire contents into a new variable called `startLines`. Then, in lines 7 through 10, we open up a file writer, iterate over those start lines, and make a modification called `newLine` and write this to our new file. You'll notice I haven't talked about the modification I made, because it honestly doesn't matter. You'll need to make your own modifications anyway.

!!! note "FYI"
    Because you asked, all I did was wrap each line in quotes and add a comma to the end. This is because I needed to add each line of the file to an array for making a VS Code snippet.

This is one of the huge advantages; I saved myself a boatload of time in just 10 lines of code, and I can reuse these chunks of code again and again for all kinds of small but helpful projects. 

## Working with the Directory
It's all well and good to work with individual files themselves, and there are plenty of times that's helpful, but there are also times where you'll want to work with the filesystem itself. To do this, you'll want to work with Python's built-in <a href='https://docs.python.org/3/library/os.html' target='_blank'>os module</a> that makes operations like this much easier.