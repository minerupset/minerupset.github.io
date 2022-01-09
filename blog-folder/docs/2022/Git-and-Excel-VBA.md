---
title: Using GitHub for Excel VBA Projects
description: Using git for version control doesn't have to be restricted to conventional coding projects - with a little tooling, you can set up Git to work with VBA projects
date: Januray 10, 2022
duration: 10 min
tags:
  - Excel
  - Software
  - git
  - GitHub
hide:
  - navigation
---

# Using GitHub for Excel VBA Projects

## VBA Projects are Real Projects

Just because VBA is a bit of a garbage language doesn't mean it's not worthy of good tools to help maintain it. Setting up version control should be the first step in just about any code project, and with a few lines of VBA, you can integrate your Excel macro project with `git` and GitHub, the most widely used version control tool set available today.

To complete this, we'll:

1. Install GitHub Desktop (if you already have `git` installed, we can skip this)
2. Use VBA to export our code files to an external folder for source control
3. Use VBA to import the code files back in case we have multiple branches

## Set Up GitHub Desktop

GitHub (and the underlying tool, `git`) are <a href='/2021/Git-Intro' target='_blank'>phenomenal version control tools</a>, and you don't need to know the command line to get started with them. We'll be using GitHub desktop to manage our VBA code repository (though if you are familiar with git on the command line, you can use that as well)

1. Go to <a href='https://desktop.github.com/' target='_blank'>this link</a> to download GitHub for Desktop
2. Follow <a href='https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop' target='_blank'>this guide</a> to get set up

GitHub accounts are free and you can have unlimited private repositories: you should feel comfortable signing up for an account if you haven't already.

Once you have your GitHub Desktop account setup, create a new repository (basically a folder) in a good, consistent location. You don't need to store it with the Excel file: in fact, I'd recommend storing all of your repositories in a separate location.

If you're newer to `git` and its capabilities, please see <a href='/2021/Git-Intro' target='_blank'>my other post</a> for an introduction and more reference materials.

## Exporting Project Files to Your Repo

The code below can be pasted as a new module into your VBA project. Whenever you want to copy your latest codebase to your folder, simply run this macro and all of your relevant files will be copied over. There are two additional elements to consider:

1. Update the variable 'pathName' to your repository location
2. Add 'Microsoft Visual Basic for Applications Extensibility 5.3' as a reference to the project (_instructions in the code below_)

```vbscript title='VBA Script for Exporting Files'
Sub ExportFilesToRepo()

    ' Tool for exporting VBA-based components to an external folder (say for storing in a git repo)
    ' Make sure to go to the Toolbar Menu -> Tools -> References -> Select "Microsoft Visual Basic For Applications Extensibility 5.3"
    ' Without this, you will not be able to access the VBA Project of the workbook

    ' Adjust your path name here
    Dim pathName As String: pathName = "C:\PATH-TO-YOUR-REPO\"

    ' The VBComponent Class represents those objects that make up an Excel Workbook
    Dim vbModule As VBComponent

    ' This loops through each of those VBComponents in the Active Workbook
    For Each vbModule In ActiveWorkbook.VBProject.VBComponents

        ' Some Debug.Print statements for easy testing during development
        Debug.Print vbModule.Name

        ' Runs a selection based on the type of module the component is and either exports it
        ' to the specified path (or doesn't) based on that type. It also adds the correct file extension
        ' based on that type. For a reference on types go to:
        'https://docs.microsoft.com/en-us/office/vba/language/reference/visual-basic-add-in-model/properties-visual-basic-add-in-model#type

        Select Case vbModule.Type
            Case 1
                vbModule.Export pathName & vbModule.Name & ".bas"
                Debug.Print "Exported"
            Case 2
                vbModule.Export pathName & vbModule.Name & ".cls"
                Debug.Print "Exported"
            Case 3
                vbModule.Export pathName & vbModule.Name & ".frm"
                Debug.Print "Exported"
            Case Else
                Debug.Print "Not exporting " & vbModule.Name
        End Select
    Next vbModule
End Sub
```

## Commit and Push Your Code

I'm not going to go in-depth on `git` or GitHub here, but there are plenty of resources covering the key topics of committing to a branch, pushing / pulling a branch, and merging a branch that will all be very useful in maintaining your VBA Project. See my <a href='/2021/Git-Intro' target='_blank'>previous post</a> on the topic for a brief primer on `git` for the command line and how it can help manage your code projects.

## Import Project Files From Your Repo

Like the export code above, be sure and update your pathName variable to point to your repository. You'll notice I named the VBA Module that handles both import and export as `gitConnector`: whatever you name your file, make sure you handle that as an edge case. It may require you to do a bit more manual work anytime you edit this specific file, but that shouldn't be too frequent.

```vbscript title='VBA Script for Importing Files'
Sub ImportFilesToRepo()

    ' Tool for importing VBA files from a given folder destination
    ' Make sure to go to the Toolbar Menu -> Tools -> References -> Select "Microsoft Visual Basic For Applications Extensibility 5.3"
    ' Without this, you will not be able to access the VBA Project of the workbook

    Dim pathName As String: pathName = "C:\PATH-TO-YOUR-REPO\"

    'Dir is a function that allows you to iterate through files in a directory
    Dim filePath As Variant: filePath = Dir(pathName)
    Dim vbModule As VBComponent

    Do While Len(filePath) > 0

        'Accounting for modules, classes, and forms
        If Right(filePath, 3) = "bas" Or Right(filePath, 3) = "cls" Or Right(filePath, 3) = "frm" Then

            'Remove the edge case of this file
            If filePath <> "gitConnector.bas" Then

                'Need to remove the existing module
                For Each vbModule In ThisWorkbook.VBProject.VBComponents

                    'If the name of the module matches the name of the file (without its extension)
                    If vbModule.Name = Left(filePath, Len(filePath) - 4) Then

                        'Delete the module
                        ThisWorkbook.VBProject.VBComponents.Remove vbModule

                        'Import the new module from the path
                        ActiveWorkbook.VBProject.VBComponents.Import (pathName & filePath)
                    End If
                Next
            End If
        End If

        'This is how Dir iterates to the next file
        filePath = Dir
    Loop
End Sub
```

That's it - with these two methods (and GitHub for Desktop on your machine) you should be able to maintain your projects for many iterations to come.
