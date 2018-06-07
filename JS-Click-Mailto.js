/*
 * Google Tag Manager - Variable 
 * 
 * Name - JS Click Mailto
 * Type - Custom Javascript
 *
 */ 
function() {
	var b = {{Click URL}};
	var a = b.replace("mailto:","");
	if (a == b) return false;
	var result = a.replace(/\?.*/g, "");
	return result.toLowerCase();
}