function mOnload(){
	$('#selector').change(function() {
		if($(this).prop('checked'))
			showOp1();
		else
			showOp2();
    })

}
function showOp1(){
	$("#partes").hide();
	$("#expediente").show();
	$("#expediente").addClass("animated fadeInLeft");
}
function showOp2(){
	$("#expediente").hide();
	$("#partes").show();
	$("#partes").addClass("animated fadeInRight");
}

function carlos(){
	var juan= $(window).width();
	var tomy= $("#imagentut").width();
	if(juan > tomy){
	
		document.body.style.width=100+'%'
	}
	else if (juan <= tomy){
		
		var caluclo=0;
		document.body.style.width=682+'px'
		
	}
	
}