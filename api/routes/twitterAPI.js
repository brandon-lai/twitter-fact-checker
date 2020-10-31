var express = require("express");
var router = express.Router();

var Twitter = require('twitter');

var client = new Twitter({
    // consumer_key: process.env.TWITTER_CONSUMER_KEY,
    // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    // bearer_token: process.env.TWITTER_BEARER_TOKEN
    consumer_key: 'CmtsHGHrg9qWcukdnAcrKk8uF',
    consumer_secret: '0xxox3UtlE28lIrfGzswkWrFZvTcxYZhWSTKqX3qJWOTFeKOw3',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAELDIwEAAAAAkXW1fFhAHsWxt1OPe20xutQy64k%3D2Drzxe0eKdiTQoUMz4Jfka3aakRKiRBFouMK1JkNGvbHtZ7gUN'
});

client.get("search/tweets", {q: 'node.js'}, function(error, tweets, response) {
    console.log(tweets);
});

module.exports = router;