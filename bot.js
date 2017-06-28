console.log('Beep boop beep, Bot activated.');

//import the package/library twit and config
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var params = {
  q: 'ice cream',
  count: 2
}

setInterval(tweetIt, 1000*20)

function tweetIt() {
  var r = Math.floor(Math.random()*100);
  var tweet = {
    status: 'beep boop, Bot reporting..here is a random number ' + r + ' from node.js :)'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Error");
    }
   else {
     console.log("It worked");
   }
  }
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};
