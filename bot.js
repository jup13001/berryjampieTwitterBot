console.log('The bot is starting');

//import the package/library twit and config
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var params = {
  q: 'ice cream',
  count: 30
}
var tweet = {
  status: 'hello world!'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
 console.log(data)
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  console.log(data);
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};
