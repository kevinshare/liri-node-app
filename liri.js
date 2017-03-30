var data = require("./keys.js");

var keys = data.twitterKeys;

var input = process.argv[2];


var arg = process.argv;
var array =[];
for(var i= 2; i < arg.length; i++ ){
			
	array.push(parseFloat([i]));

}
if(!array){
	var inputSong = "The Sign by Ace of Base";
}
else{
	var inputSong = array;
}


var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: inputSong }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data.)
 
   	 
});
 
var params = {__share_: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    if(input === "my-tweets"){
    	
    	console.log(JSON.stringify(tweets));
    }
  }
});

var request = require("request");

var movieName = process.argv[2];
// ...


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

request(queryUrl, function(error, response, body){
	if(!error && response.statusCode ===200){
		for( var i=process.argv[2]; i < process.argv.length; i++ ){
			
		}
	console.log(JSON.parse(body).Released);
	}
});




