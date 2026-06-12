
var shown=false;
function showhideEmail(){
	if(shown){
		$("#email").html("Show my email");

		shown=false;
	}else{
		var myemail="<a href='mailto:iboldam@mail.uc.edu'> iboldam@mail.uc.edu </a>";
		$("#email").html(myemail);


		shown=true;
	}


}