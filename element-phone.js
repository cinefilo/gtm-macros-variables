/*
 * Google Tag Manager - Macro/Variable 
 * 
 * Name - element phone
 * Type - Custom Javascript
 *
 */ 
function() {
	var b = {{element url}};
	var a = b.replace("tel:","");
	if (a == b) return false;
	var result = a.replace(/\?.*/g, "");
	return result;
}