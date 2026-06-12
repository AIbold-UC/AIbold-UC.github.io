

function jokeAPI(){

	$.get("https://v2.jokeapi.dev/joke/Any?type=single&blacklistFlags=nsfw,racist,sexist,explicit",
						function (result) {
							if (result.length==0) return;
							
							console.log("from jokeAPI: "+JSON.stringify(result));
							$("#jokeResponse").text("a joke of the day: "+ result.joke);
						})

}


//given that this was a provided api, and it seems to lead to the same comic each time, im gonna assume I don't need to randomize
function comicAPI(){

	$.get("https://xkcd.vercel.app/?comic=latest",
						function (comicResult) {
							if (comicResult.length==0) return;
							
							console.log("from comicAPI: "+JSON.stringify(comicResult));
							$("#comicText").text("alternate text: " +comicResult.alt);
							$("#comicImg").attr("src", comicResult.img);
						})

}
$(function () {
	jokeAPI();                 //for initial setup
	comicAPI();
    setInterval(jokeAPI, 60000);
                      
});