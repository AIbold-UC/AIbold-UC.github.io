

function jokeAPI(){

	$.get("https://v2.jokeapi.dev/joke/Any?type=single&nsfw=false&racist=false",
						function (result) {
							if (result.length==0) return;
							
							console.log("from jokeAPI: "+JSON.stringify(result));
							$("#jokeResponse").text("a joke of the day: "+ result.joke);
						})

}
$(function () {
    jokeAPI();                 //for initial setup
    setInterval(jokeAPI, 60000); 
});

//given that this was a provided api, and it seems to lead to the same comic each time, im gonna assume I don't need to randomize
function comicAPI(){

	$.get("https://xkcd.vercel.app/?comic=latest",
						function (result) {
							if (result.length==0) return;
							
							console.log("from comicAPI: "+JSON.stringify(result));
							$("#comicText").text("a joke of the day: "+ result.alt);
							$("#comicImg").attr("src", result.img);
						})

}
$(function () {
    comicAPI();                  
});