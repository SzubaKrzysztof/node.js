const friends = require('../models/friends.model');

function postFriend(req, res ){
    if (!req.body.name) {
      return  res.status(400 ).json({
            error: `bad request something went wrong`
        });
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);

    res.json(newFriend);
}



function getFriends(req, res){
        res.json(friends);
    }

function getOneFriend(req, res){
    // tutaj musimy zmienić req na number bo z automatu dostajemy stringa
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];
    if (friend) {
        res.status(200).json(friend);
        
    } else {
        res.status(404).json({
            error: "friend does not found"
        });
    }
}
 
    


module.exports = {
    postFriend,
    getFriends,
    getOneFriend
}