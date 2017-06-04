function mOnload(){
	$('#selector').change(function() {
		if($(this).prop('checked'))
			showOp1();
		else
			showOp2();
    });
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
		document.body.style.width=100+'%';
	}
	else if (juan <= tomy){
		var caluclo=0;
		document.body.style.width=682+'px';	
	}	
}
$(function(){
	$("#formulario").submit(function(event){
		event.preventDefault();
		var values = $(this).serialize();
		$.ajax({
			url: "assets/php/mail.php",
			type: "post",
			data: values,
			success: function(response){
				$("#MsgboxMSJ").text("Gracias por ponerse en contacto conmigo. Se le responderá a la brevedad.");
				$("#formulario")[0].reset();
				$("#Msgbox").modal();
			},
			error: function(jqHXR, status, err){
				$("#MsgboxMSJ").text("Ocurrió un error, por favor inténtelo nuevamente en unos momentos.");
				$("#Msgbox").modal();
				console.log(status, err);
			}
		});
	});
});