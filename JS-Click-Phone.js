/*
 * Google Tag Manager - Variable 
 * 
 * Name - JS Click Phone
 * Type - Custom Javascript
 *
 */ 
function() {
	var b = {{Click URL}};
	var a = b.replace("tel:","");
	if (a == b) return false;
	var result = a.replace(/\?.*/g, "");
	return result.toLowerCase();
}