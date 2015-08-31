/*
 * 
 *  You must make include jquery latest version. 
 *              AKSYS Group
 * 
 * 
 */
var FORM_NAME = "validasi";
var ERROR_CODES = {
	EMAIL_ERRORS : {
		Err1 : "@ nerde?",
		Err2 : "Uzun girdin?"
	},
	lastName : "Doe",
	age : 50,
	eyeColor : "blue"
};
var INPUT_TYPES = {
	email : isValidEmail,
	PASSWORD : "isValidEmail",
	TEXT : "isValidEmail"
};

var inputs;
var myform;
$(document).ready(function() {
	myform = $("form[class='" + FORM_NAME + "']");

	myform.each(function() {
		console.log("geldi");
		$(this).find(":input").each(function(index) {
			$(this).change(function() {

				divideElement($(this));
			});

		});

	});

});

function divideElement(inp) {
	var typeValue = inp.attr('type');
	var k;
	for (var target  in INPUT_TYPES){
		//alert()
	       if(typeValue==target) {
	    	   isProcess( INPUT_TYPES[target](inp.val()),inp);
	       } 
	}
	
	/*isProcess( isValidEmail(inp.val()) );

		if (!isValidEmail(inp.val())) {
			
		} else {
			inp.css("background-color", "green");
		}
		break;

	default:
		break;
		

	}
*/
}

function isValidEmail(emailAddress) {

	var pattern = new RegExp(
			/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);

};


function isProcess(status,element){
	if(status === true) {
			trueProcesses(element);
	} else {
			falseProcesses(element);
	}
	
}

function trueProcesses( elm ) {
	
	elm.css("background-color", "green");
	
}

function falseProcesses( elm ) {
	elm.css("background-color", "red");
}