console.log('Beep boop beep, Bot activated.');

//import the package/library twit and config
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var params = {
  q: 'ice cream',
  count: 2
}

var stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg, null, 2);
  // fs.writeFile("tweet.json", json);

  var replyTo = eventMsg.in_reply_to_screen_name;
  var message = eventMsg.text;
  var from = eventMsg.user.screen_name;

  console.log(replyTo + ' ' + from);

  if (replyTo == 'berryjampie') {
    var newTweet = '@' + from + " boop beep, I am a bot. Talk to Julie instead."
    tweetIt(newTweet);
  }
}

//setInterval(tweetIt, 1000*20)

function tweetIt(message) {
  var tweet = {
    status: message
  }

  T.post('statuses/update', tweetEvent, tweeted);

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
