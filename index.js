var exec = require('child_process').exec;
var login = require("facebook-chat-api");

function reagan(api, threadID, message)
{
	exec('python sample.py', function(error, stdout, stderr) {
		a = stdout.replace('1,800','').replace('1,800','')
		if(message)
        	api.sendMessage(a, threadID)
    })
}
//ADD YOUR EMAIL AND PASSWORD 
login({ email: "YOUREMAIL", password: "YOURPASSWORD" }, function callback(err, api) {
    if (err) return console.error(err);
    api.listen(function callback(err, message) {
    	reagan(api, message.threadID, message.body)
    });
});
