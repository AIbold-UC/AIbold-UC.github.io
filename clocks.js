function displayTime() {
					//document.getElementById('digit-clock').innerHTML="Current time: "+ new Date();
					$("#digit-clock").html("Current time: "+ new Date());
				}
				$(function () {
					displayTime();
					setInterval(displayTime,500);
});
				

//since most of the code is imported for this function, there wasn't a ton for me to change to make it jQuery
//var canvas=document.getElementById("analog-clock");

var canvas=$("#analog-clock");
				var ctx= canvas.getContext( "2d")
				var radius=canvas.height / 2;
				ctx.translate(radius,radius);
				radius=radius*0.9;

				setInterval(drawClock,1000);
				
				function drawClock(){
					drawFace(ctx,radius);
					drawNumbers(ctx,radius);
					drawTime(ctx,radius);
				} 