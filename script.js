$('#p-1').hide();
$('#p-2').hide();
$('#p-3').hide();

$('#heading-1').click(function){
	$('#p-1').show();
	$('#p-2').hide();
	$('#p-3').hide();
});

$('#heading-2').click(function){
	$('#p-1').hide();
	$('#p-2').show();
	$('#p-3').hide();
});

$('#heading-3').click(function){
	$('#p-1').hide();
	$('#p-2').hide();
	$('#p-3').show();
});