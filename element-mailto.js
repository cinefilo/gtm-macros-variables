/*
 * Google Tag Manager - Macro/Variable 
 * 
 * Name - element mailto
 * Type - Custom Javascript
 *
 */ 
function() {
	var b = {{element url}};
	var a = b.replace("mailto:","");
	if (a == b) return false;
	var result = a.replace(/\?.*/g, "");
	return result.toLowerCase();
}