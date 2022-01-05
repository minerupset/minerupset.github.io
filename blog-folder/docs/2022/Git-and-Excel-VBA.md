---
title: Using GitHub for Excel VBA Projects
description: Using git for version control doesn't have to be restricted to conventional coding projects - with a little tooling, you can set up Git to work with VBA projects
date: Januray 10, 2022
# update_date:
# specific_css:
# specific_js:
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

## Never Too Early to Learn Version Control

This seciton describes why it's helpful. You'll probably be doing it less frequently than other developers, but it's definitely better than nothing

## Set Up GitHub Repo

I'm going to assume they're using GitHub desktop. Why? Because they're new at this

## Exporting Project Files

use the script below to do the export

```vbscript title='VBA Script for Exporting Files'
Sub UpdateFilesForGitHub()

    ' Simple tool for exporting VBA-based components to an external folder (say for storing in a git repo)
    ' Make sure to go to the Toolbar Menu -> Tools -> References -> Select "Microsoft Visual Basic For Applications Extensibility 5.3"
    ' Without this, you will not be able to access the VBA Project of the workbook

    ' Adjust your path name here: your OS may require a different path style
    Dim pathName As String: pathName = "C:\Users\matth\Development Projects\VBA-Library\"

    ' The VBComponent Class contains those objects that make up an Excel Workbook
    ' Not just VBA Modules, but also Sheets, Forms, and all other objects
    Dim vbModule As VBComponent

    ' This loops through each of those VBComponents in the Active Workbook
    For Each vbModule In ActiveWorkbook.VBProject.VBComponents

        ' Some Debug.Print statements for easy testing during development
        Debug.Print vbModule.Name

        ' Runs a selection based on the type of module the component is and either exports it
        ' to the specified path or ignores it. It also adds the correct file extension
        ' based on that type

        'Here is a reference to the types:
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
                Debug.Print "Not being exported"
        End Select
    Next vbModule


End Sub
```

## Commit and Push Your Code

[^1]:
