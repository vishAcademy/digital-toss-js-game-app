// JavaScript Document
$(document).on('change','#userChoice',function(){
	var userchoice = $(this).val();
	if(userchoice == ""){
		alert("Please select a coin side.");
		$('#btnFlip').attr('disabled','disabled');
	} else{
		/**/
		$('#btnFlip').removeAttr('disabled');
	}
});

// 
$(document).on('click','#btnFlip',function(){
	var flipr = $('.coinBox>div').addClass('flip');
	setTimeout(function(){
		flipr.removeClass('flip');
	},2000);
	return false;
});