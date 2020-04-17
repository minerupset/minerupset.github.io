# Intro to MongoDB

## What is MongoDB?
MongoDB is a document-based database system. What that means is you query your documents in a JSON-like structure, as opposed to indexed tables. 

<table>
    <tr>
        <th>SQL type</th>
        <th>MongoDB</th>
    </tr>
    <tr>
        <td>Database</td>
        <td>Database</td>
    </tr>
    <tr>
        <td>Table</td>
        <td>Collection</td>
    </tr>
    <tr>
        <td>Record</td>
        <td>Document</td>
    </tr>
</table>

MongoDB is the actual database, but there are multiple ways to interact with a Mongo database:
- via the command line
- with a GUI tool (like Mongo Compass)
- through an ODM in your code, like mongoose for Node

## Architecture of Mongoose in Node.js
To make use of a MongoDB with Node, we use the mongoose ODM to act as that in-between layer. It will manage all of our queries and database actions, and its architecture allows for some clean abstraction.

### File Structure and Requirements

Things I assume you know:

- How Node handles exports
- What Promises & Async/Await are

Assuming you have already:

- used `#!bash npm init` to create a new node project
- added mongoose to your project with `npm i mongoose`
- you want to make a model of a single object type simple, like "User"

You'll want to have the following 3 documents:
```bash
|-db.js
|-User.js
|-userController.js
```

Your `#!bash db.js` file handles your database connection and routing. The `#!bash User.js` deals with the _Schema_, or structure of what defines a User object, and your `#!bash userController.js` drives the actual actions your system will take. 

### `#!bash db.js`

Let's look at `#!bash db.js`first:

```js
const mongoose = require("mongoose");

//This is your connection string to the example-database
const connectionString = "mongodb://localhost:27017/example-database";

//Mongoose has some deprecated functions to be aware of
//useFindAndModify always gives me a headache
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() =>{
    console.log(`Connected to MongoDB @ ${connectionString}`);
})
.catch((err) => console.log(`Mongoose Error: ${err}`))

module.exports = {User: require("./User")};
```

So `#!bash db.js` essentially just gets us to the database. That's it. The one interesting nuance is the very last line, the `#!js module.exports`. We'll cover that when we get to `#!bash userController.js`, but this will make our syntax clean and consistent with the CLI for MongoDB

### `#!bash User.js`

Next for our User definition. Like `#!bash db.js`, this is more in configuration than actual logic

```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    //Never actually do this with passwords
    //This is just an example
    password: {type: String, required: true},
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
```

All we've done here is define what constitutes a User, in this case a name, an email, and a password. You can see that we set some requirements for our User, in that they are required to have certain elements and some of those elements must be true. You can look here (LINK) for more information on what data types are available for MongoDB.

### `#!bash userController.js`

We've defined our database and what is a User. Now let's give it some functionality.

```js
const User = require("./db");

async function createUser(userData) {
    await User.create(userData);
}

```