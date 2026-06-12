
var shown=false;
function showhideEmail(){
	if(shown){
		$("#email").html("Show my email");
		//document.getElementById('email').innerHTML = "Show my email";
		shown=false;
	}else{
		var myemail="<a href='mailto:iboldam@mail.uc.edu'> iboldam@mail.uc.edu </a>";
		$("#email").html(myemail);

		//document.getElementById('email').innerHTML = myemail;
		shown=true;
	}


}