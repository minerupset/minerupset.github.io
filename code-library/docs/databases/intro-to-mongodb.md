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
|-usersController.js
```

Your `#!bash db.js` file handles your database connection and routing. The `#!bash User.js` deals with the _Schema_, or structure of what defines a User object, and your `#!bash usersController.js` drives the actual actions your system will take. 

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

So `#!bash db.js` essentially just gets us to the database. That's it. The one interesting nuance is the very last line, the `#!js module.exports`. We'll cover that when we get to `#!bash usersController.js`, but this will make our syntax clean and consistent with the CLI for MongoDB

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

### `#!bash usersController.js`

We've defined our database and what is a User. Now let's give it some functionality.

```js
const User = require("./db");

async function createUser(userData) {
    await User.create(userData);
}

module.exports = {createUser}

```

## Tying Objects Together

### Linking Two Separate Models
Let's say you have an object that is comments on a blog post, and you have an object that is the user who made the blog post. Let's look at how you link those two:

First, in the User Schema, you need to bring give it a list of comments. For example:

```js
const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);
```

What we did here was add a comments as a property of User. It is an array of objects, and those objects have an ObjectId linked to them, referring to objects of type 'Comment'.

Next, when you create a new Comment, you want it to be linked to a given User. Let's look at an example here:

```js
//commentRoutes.js
//...

router.post("/", async (req, res) =>{
    //Create a comment, and get a User based on the form body
    const newComment = await commentsController.createComment(req.body);
    const thisUser = await usersController.getUserById(req.body.authorId);

    //Our User has a comments array property, so we push that on
    thisUser.comments.push(newComment);
    
    //This is runs an update on our User to save this new comment
    await thisUser.save();
    res.redirect("...some response");
})
```

### Querying User by Comment and Vice Versa
Great, you've added a comment to a user object. But let's say you've found a comment in the wild. How are you querying to find the user? We can't use a JOIN statement in a NoSQL database, but we do have `populate()`. Let's take a look. 

```js
//commentRoutes.js
//...

router.get("/:id", async (req, res) =>{
    await usersController.findOne({comments: req.params.id})
    .populate({
        path: "comments",
        match: {_id: req.params.id}
    })
    .exec();

    res.redirect("...some response");
})
```

`populate()` essentially takes the ObjectId from the schema and actually fills it with the object in question. In this case, we also use the `match` parameter, which allows to find a specific comment. If we had wanted all the comments from a given user, we could have left the match parameter off. 

We also have the `select` parameter, so that we can select just a certain field from the populated object, and not the whole thing.

### Changing a Comment or User
If you edit a Comment and change the User, that has to be reflected. How do we achieve that?

```js
//commentRoutes.js
//EDIT ROUTE
router.get("/edit/:id", async (req, res) => {
    //This allows you to pass the list of all users to your edit view
    const allUsers = await usersController.find();
    //This gets the single user and the single comment
    const thisUser = await usersController.findOne({"comments", req.params.id})
    .populate({path: 'comments', match: {_id: req.params.id}})
    .exec();

    
    res.redirect("...some response"{
        allUsers: allUsers,
        thisUser: thisUser,
        thisComment: thisUser.comments[0]
    });
})

//...
//PUT ROUTE
//This allows you to update the comment, remove it from one user, and add it to another as needed
router.put(":/id", async(req, res) =>{
    const updatedComment = await commentsController.findByIdAndUpdate(req.params.id, req.body, {new: true});
    const thisUser = usersController.findOne({'comments._id': req.params.id});
    if(thisUser._id.toString() !== req.body.userId){
        thisUser.comments.remove(req.params.id);
        await thisUser.save();
        const newUser = await usersController.findById(req.body.userId);
        newUser.comments.push(updatedComment);
        await newUser.save();
    }
    res.redirect("...some response");
})

```



### Deleting a Comment or User
If we delete a Comment, the User should know about it. Similarly, if we delete a User, the associated comments should know about it. Let's look at how.

```js
//commentRoutes.js
router.delete("/:id", async (req, res) => {
    await commentsController.findByIdAndRemove(req.params.id);
    const thisUser = await usersController.findOne({'comments': req.params.id});
    thisUser.comments.remove(req.params.id);
    await thisUser.save();
    res.redirect("...some response");
})
```

```js
//userRoutes.js
router.delete("/:id", async (req, res) => {
    const deletedUser = await usersController.findByIdAndRemove(req.params.id);
    await commentsController.remove({
        _id:{
            $in: deletedUser.comments
        }
    });
    res.redirect("...some response");
})

```

So in both of these cases, you just use the `req.params.id` for the object you deleted to trace it back to the other impacted object and perform the necessary function. If you delete a comment, you remove that comment from its list and save the user. If you delete a user, you go and remove all of the comments that have an _id from the deleted User's comment section.