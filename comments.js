//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Import the comments.js file
const comments = require('./comments.js');

//Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

//Get comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.getComment(req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

//Start the web server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});