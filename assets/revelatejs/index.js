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
