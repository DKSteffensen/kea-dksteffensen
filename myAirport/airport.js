
$(".navScrollTo").click(function(){
	$(".subPage").addClass("hiddenPage").removeClass("pageActive");	
})
//
// ScrollTo Plugin.
var $target = $('#contentBG');	
$('.navScrollTo').click(function(){
	var page = $(this).attr("data-page");
	$target.scrollTo( $('#'+page) , 500);
});
//

checkLogin();
function checkLogin(){
	$.ajax({
		url: "airportMain.php",
		type: "post",
		dataType: "json",
		data: {
			action: "checkLogin"
		}
	})
	.done(function(oResponse){
		var loggedIn = oResponse.status;

		if(loggedIn == 0){
			$("#loggedOut").addClass("menuActive").removeClass("hiddenMenu");
			$("#loggedIn").removeClass("menuActive").addClass("hiddenMenu");
			$("#contentBG").hide();
			$("#notLoggedIn").show();

		}
		else if(loggedIn == 1){
			$("#loggedIn").addClass("menuActive").removeClass("hiddenMenu");
			$("#loggedOut").removeClass("menuActive").addClass("hiddenMenu");	
			$("#contentBG").show();
			$("#notLoggedIn").hide();

			var welcomeMessage = "Welcome "+oResponse.firstname+" "+oResponse.lastname;
			$("#welcomeUser").html(welcomeMessage);	
			$("#profileUsername").val(oResponse.username);
			$("#profileEmail").val(oResponse.email);
			$("#profileFirstname").val(oResponse.firstname);
			$("#profileLastname").val(oResponse.lastname);
			$("#profilePassword").val(oResponse.password);
			$("#profileCPR").val(oResponse.cpr);
		}
	})
}
function logout(){
	$.ajax({
		url: "airportMain.php",
		type: "post",
		data: {
			action: "logout"
		}
	})
}
$("#btnUserLogout").click(function(){
	console.log("Logout");
	logout();
	window.location.reload();
})
$("#btnLogin").click(function(){
	var userid = $("#loginUserID").val();
	var password = $("#loginPassword").val();

	if(!password.trim() && !userid.trim()){
		$("#loginStatus").html("Please fill out username/email & password");
	}
	else if(!password.trim()){
		$("#loginStatus").html("Please fill out password");		
	}
	else if(!userid.trim()){
		$("#loginStatus").html("Please fill out username/email");		
	}
	else{

		$.ajax({
			url: "airportMain.php",
			type: "post",
			data: {
				action: "login",
				userid: userid,
				password: password
			}
		})
		.done(function(){
			checkLogin();
		})

	}
})