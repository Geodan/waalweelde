$(document).ready(function(){
$('#json-resultaat').on('click',function(){
	var geojson = $(this).data('response');
	alert('en weer terug....')
	reset();
})

$('.btn-final').on('click',function(){
	reset()
})
var reset = function(){
	//alles resetten!
	select.removeAllFeatures();
    result.removeAllFeatures();
    perceelcontrol.deactivate();
    navcontrol.activate();
    editcontrol.deactivate();
    selectcontrol.deactivate();
    resultcontrol.deactivate();
    $('.resultaat').fadeOut('slow');
    $('.classificeren').fadeOut('slow');
    $('#btn-calc').hide();
    $(".btn-group label").removeClass('disabled').prop('disabled',false);
}
});