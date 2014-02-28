
var filterEcotoop = function(ecotoop) {
	var options = [];
	switch(ecotoop) {
		case 'O-UA-1':
			options = ['O-UG-1','O-UR-1'];
			break;			
		case 'O-UG-1-2':
			options = ['O-UG-1','O-UR-1'];
			break;
		case 'O-UB-1':
			options = ['O-UG-1','O-UR-1'];
			break;
		case 'O-UB-3':
			options = ['O-UB-1','O-UG-1','O-UR-1'];
			break;
		case 'O-UG-2':
			options = ['O-UG-1','O-UR-1'];
			break;
		case 'HG-1-2':
			options = ['HG-1','HR-1'];
			break;
		case 'HB-1':
			options = ['HG-1','HR-1'];
			break;
		case 'HB-3':
			options = ['HB-1','HG-1','HR-1'];
			break;
		case 'HG-2':
			options = ['HG-1','HR-1'];
			break;
		case 'HA-1':
			options = ['HG-1','HR-1'];
			break;
		case 'VI.8':
			options = ['VI.4','VI.2-3','VII.4'];
			break;
		case 'VII.3':
			options = ['VI.2-3','VII.4'];
			break;
		case 'UA-1':
			options = ['UG-1', 'UR-1'];
			break;
		case 'UG-1-2':
			options = ['UG-1', 'UR-1'];
			break;
		case 'UB-1':
			options = ['UG-1', 'UR-1'];
			break;
		case 'UB-3':
			options = ['UB-1','UG-1', 'UR-1'];
			break;
		case 'UG-2':
			options = ['UG-1', 'UR-1'];
			break;
		case 'VI.4':
			break;
			options = ['VI.2-3','VII.4'];
		default:
			options = ["O-UG-2","O-UR-1","O-UB-2","O-UP-1","REST-O","HG-1-2","HB-1","HG-1","REST-H","HB-3","HG-2","HB-2","HA-1","HR-1","HP-1","VI.8","VII.3","UA-1","UG-1-2","UB-4","UB-1","UG-1","REST-U","UB-3","UG-2","UM-1","UR-1","UB-2","UP-1","VII.4","VI.4","VI.2-3","II.2"];
	}
	return options;
}

var codeToToop = function(code) {
	code = code+'';
	return codes[code];
}

var genereerPopup = function(code,fid) {
	var text = '<div class="uitleg ecotoop">';
	var options = filterEcotoop(code);
	if(code=='leeg') {
		text += '<h4>Onbekende ecotoop</h4>';
		text += '<p>herclassificeer naar:</p>'
		text += '<select class="form-control">';
	}
	else {
		text += '<h4>'+codeToToop(code)+'</h4>';
		text += '<p>herclassificeer naar:</p>'
		text += '<select class="form-control">';
		text += '<option value="'+code+'">'+codeToToop(code)+'</option>';
	}
	$.each(options,function(i,ncode){
		text += '<option value="'+ncode+'">'+codeToToop(ncode)+'</option>';
	});
	text += '</select>';
	text += '<p/>';
	text += '<div class="btn-group pull-right clearfix">';
  	text += '<button type="button" class="btn btn-danger btn-annuleer" onclick="annuleer(\''+fid+'\')">Annuleer</button>'
  	text += '<button type="button" class="btn btn-success btn-classificeer"  onclick="classificeer(\''+fid+'\')">Classificeer</button>';
	text += '</div>';
	text += '<div class="clearfix"/>';
	text += '</div>';
	
	return text;
}
var annuleer = function(id) {
	select.getFeatureById(id).popup.hide();
	selectcontrol.unselectAll();
}
var rannuleer = function(id) {
	result.getFeatureById(id).popup.hide();
	resultcontrol.unselectAll();
}

var classificeer = function(id) {
	var feature = select.getFeatureById(id);
	var code = $(feature.popup.contentDiv).find('select')[0].value;
	feature.attributes.eco_code = code;
	feature.attributes.ecotoop = codeToToop(code)
	feature.popup.hide();
	selectcontrol.unselectAll();
	$('.berekenen').fadeIn('slow');
	$('#btn-calc').fadeIn('slow');
}
var codes = {"HA-1":"Overstromingsvrije akker",
"HA-2":"Overstromingsvrij bebouwd",
"HB-1":"Overstromingsvrij natuurlijk bos",
"HB-2":"Overstromingsvrij struweel",
"HB-3":"Overstromingsvrij productiebos",
"HG-1":"Overstromingsvrij natuurlijk grasland",
"HG-1-2":"Overstromingsvrij grasland (natuurlijk of productie)",
"HG-2":"Overstromingsvrij productiegrasland",
"HP-1":"Overstromingsvrije vegetatie met lage bedekking (5 - 25%)",
"HR-1":"Overstromingsvrije ruigte",
"I.1":"Dynamisch zoet tot zwak brak ondiep water",
"II.2":"Zoete zandplaten",
"III.2-3":"Matig tot sterk dynamisch hard substraat onder invloed van zoet of brak water",
"IV.8-9":"Helofytenmoeras (riet/moerasplanten) in oever",
"IX.a":"Akker in oever",
"O-UA-1":"Oeverwal of uiterwaard akker",
"O-UA-2":"Oeverwal of uiterwaard bebouwd",
"O-UB-1":"Oeverwal of uiterwaard natuurlijk bos",
"O-UB-2":"Oeverwal of uiterwaard struweel",
"O-UB-3":"Oeverwal of uiterwaard productiebos",
"O-UG-1":"Oeverwal of uiterwaard natuurlijk grasland",
"O-UG-1-2":"Oeverwal of uiterwaard grasland (natuurlijk of productie)",
"O-UG-2":"Oeverwal of uiterwaard productiegrasland",
"O-UK-1":"Oeverwal of uiterwaard onberoeid (natuurlijk)",
"O-UP-1":"Oeverwal of uiterwaard vegetatie met lage bedekking (5 - 25%)",
"O-UR-1":"Oeverwal of uiterwaard ruigte",
"REST-H":"Overstromingsvrij onbegroeid (antropogeen)",
"REST-O":"Onbegroeid (antropogeen) in oever",
"REST-O-U":"Oeverwal of uiterwaard onbegroeid (antropogeen)",
"REST-U":"Uiterwaard onbegroeid (antropogeen)",
"RvD":"Zeer diep water",
"RvM":"Matig diep water",
"RvO":"Ondiep water",
"RwD":"Zeer diep water",
"RwM":"Matig diep water",
"RwO":"Ondiep water",
"RzD":"Diep zomerbed",
"RzM":"Matig diep zomerbed",
"RzO":"Ondiep zomerbed",
"UA-1":"Uiterwaard akker",
"UA-2":"Uiterwaard bebouwd",
"UB-1":"Uiterwaard natuurlijk bos",
"UB-2":"Uiterwaard struweel",
"UB-3":"Uiterwaard productiebos",
"UB-4":"Uiterwaard hoogstamboomgaard",
"UG-1":"Uiterwaard natuurlijk grasland",
"UG-1-2":"Uiterwaard grasland (natuurlijk of productie)",
"UG-2":"Uiterwaard productiegrasland",
"UM-1":"Uiterwaard riet",
"UP-1":"Uiterwaard vegetatie met lage bedekking (5 - 25%)",
"UR-1":"Uiterwaard ruigte",
"V.1-2":"Moerasruigte in oever",
"VI.2-3":"Zachthout struweel in oever",
"VI.4":"Zachthout ooibos in oever",
"VI.8":"Productiebos in oever",
"VII.1":"Moerassig overstromingsgrasland in oever",
"VII.1-3":"Moerassig overstromingsgrasland/productiegrasland in oever",
"VII.3":"Productiegrasland in oever",
"VII.4":"Vegetatie met lage bedekking (5 - 25%) in oever"};