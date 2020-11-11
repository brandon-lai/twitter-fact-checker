var express = require("express");
var router = express.Router();
const fs = require('fs');

var Twitter = require('twitter');

var client = new Twitter({
    // consumer_key: process.env.TWITTER_CONSUMER_KEY,
    // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    // bearer_token: process.env.TWITTER_BEARER_TOKEN
    consumer_key: 'CmtsHGHrg9qWcukdnAcrKk8uF',
    consumer_secret: '0xxox3UtlE28lIrfGzswkWrFZvTcxYZhWSTKqX3qJWOTFeKOw3',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAELDIwEAAAAAkXW1fFhAHsWxt1OPe20xutQy64k%3D2Drzxe0eKdiTQoUMz4Jfka3aakRKiRBFouMK1JkNGvbHtZ7gUN'
});

// const query = "from:realDonaldTrump -is:retweet is:verified -has:media -has:images -has:videos";

client.get("search/tweets", {q: "from:realDonaldTrump -is:retweet -has:videos -has:images -has:media"}, function(error, tweets, response) {
    const jsonString = JSON.stringify(tweets);
    fs.writeFile('../recentTweetData.json', jsonString, err => {
        if (err) {
            console.log('Error writing to file', err);
        } else {
            console.log('Successfully wrote to file');
        }
    })
});

module.exports = router;