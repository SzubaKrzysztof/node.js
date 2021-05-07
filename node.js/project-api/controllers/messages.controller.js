function getMessages(req, res) {
    console.log('messages are moving');
    res.send('<p>Hello</p>')
}

function postMessages(req, res) {
    console.log('hello');
}


module.exports = {
    getMessages, 
    postMessages,
}