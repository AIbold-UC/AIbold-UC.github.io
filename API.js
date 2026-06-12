

function jokeAPI(){

	$.get("https://v2.jokeapi.dev/joke/Programming?type=single",
						function (result) {
							if (result.length==0) return;
							
							console.log("from jokeAPI: "+JSON.stringify(result));
							$("#jokeResponse").text("a programming joke of the day: "+ result.joke);
						})

}
jokeAPI();
setInterval(jokeAPI,60000);
