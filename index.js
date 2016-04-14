/**
 * Function to deal with the desire to format exponents with ###x10^# rather than with e notation
 *
 * @method niceExp
 * @param {number} n the number to base the formated number on
 * @param {len} n the number of decimal places to leave on the number
 *
 * @returns {object} and object containing:
 *   raw: {number} the raw number  
 *   rawShort: {number} raw number rounded to len
 *   nForExp: {number} the number side of the number (raw with decimal moved) 
 *   nForExpShort: {number} the number side of the number rounded to len as it will appear in the exponents
 *   exp: {number} the exponent based on the number decimals moved for nForExp
 *   nNice: {string} the html formated number in the format of ##x10<sup>#</sup>
 *
 */

module.exports = {
	formatNumb : function(n,len) {
		var returnObj = {},
		len = len || 3;

		returnObj.raw = n*1;
		returnObj.rawShort = parseFloat(returnObj.raw.toFixed(len));

		returnObj.exp = Math.floor(Math.log(n)/Math.log(10));
		returnObj.nForExp = n/Math.pow(10,returnObj.exp);
		returnObj.nForExpShort = parseFloat(returnObj.nForExp.toFixed(len)); // parseFloat used to remove trailing zeros as described here: http://stackoverflow.com/a/19623253/1112097
		returnObj.nNice = returnObj.nForExpShort + "&#215;10<sup>" + returnObj.exp + "</sup>";

		return returnObj;
	}
}
