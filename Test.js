function myFunction(data) {
	 var http = require("http");
	
	console.log(data);
	var options = {
		host: 'api.thingspeak.com',
		port: 80,
		path: '/update?api_key=7FLSZM59NDJJ8LOS&field1=' + encodeURIComponent(data)
	};
	
	http.get(options, function(resp){
		resp.on('data', function(chunk){
			console.log('sent to thingspeak');
		});
	}).on("error", function(e){
		console.log("error sending to thingspeak: " + e.message);
	});
}

while(true){
	myFunction(Math.random(0, 1000));
	setTimeout(myFunction, 1000);
}