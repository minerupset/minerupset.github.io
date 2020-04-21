# Azure Deployment: Basics

## Deploying a Static Site
Followed the tutorial provided by Microsoft at [this website](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html)

Following this guide, here was what I used: 

```bash 
az webapp up --location westus --name <APPNAME HERE> --html
```

It needed the --html flag to tell it that it was a statically hosted site, per [these instructions](https://github.com/Azure/app-service-linux-docs/blob/master/AzWebAppUP/runtime_detection.md)


## Deploying a Node Application
Ok, so for this one, I just used the Azure site and 'created a new resource' that was an app service. What were the gotchas I ran into?

- Pushing with git hub. I had to add the site with 'local git' and add Azure git credentials, as well as add a remote titled azure. So instead of just `git push`, I used `git push azure master` to push my master branch up to the azure remote that I had configured. I did this configuration with `git remote add azure <APP SERVICE GIT URL>` so that it would push directly to Azure. Note, I used the Kudu build server, not the Azure pipelines. 
- `web.config` file: this is a configuration file that you need to have included with your application that will instruct the IIS server how to handle your Node application. Boilerplate should work fine, just make sure it's pointing at your file name, the default is `index.js`
- DB White listing: This was the big one. Find your Azure IP addresses (in the Properties section) and then make sure that your database (in my case, a Mongo Cloud database) is configured to receive from those IP addresses.

## Stopping Deployment

[Reading the docs here](https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-stop), you can see that the command 

```bash 
az webapp stop --name <APPNAME HERE> --resource-group <RESOURCE GROUP>
```

You can access the resource group from the web app site. Also note, that you don't need the CLI to stop an app: you can do that from the web app configuration itself. 
