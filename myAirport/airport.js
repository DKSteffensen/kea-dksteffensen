
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