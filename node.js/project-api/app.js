const express = require('express');

const messageController = require('./controllers/messages.controller');
// const friendsController = require('./controllers/friends.controller');
const friendsRouter = require('./routes/friends.router');
const friendsMessages = require('./routes/messages.router');


const app = express();

const PORT = 3000;


app.use((req, res, next ) =>{
    const start = Date.now();
    console.log(`${req.method } ${req.url}`);
    next();
    const delta = Date.now() - start;
    redableData = new Date(+start);
    console.log(`${redableData }ms  ${delta}ms`);
});

app.use(express.json());


app.get('/messages ', messageController.getMessages)



// ///////////////////////////////////////////////////////
app.use('/friends', friendsRouter);
///////////////////////////////////////////

app.listen(PORT, ()=>{
    console.log(`app i running on ${PORT}`)
});