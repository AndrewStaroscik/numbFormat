# numbFormat
Generates an object with information about how to display large and small numbers in scientific notation 

<a name="niceExp">`numbFormat.formatNumb(n,[len])`</a>
Function to deal with the desire to format exponents as nx10^n in html rather than with e notation.  Takes the number and an optional number of decimal places to put on the number. It returns an object with information about the conversion process to make the back calculating easier if the number needs to displayed as html and also used again as a number

```js
numbFormat.formatNumb(0.00005678,3);
/** 
 * returns: 
 *   {
 *     exp: -5
 *     nForExp: 5.678
 *     nForExpShort: 5.678
 *     nNice: "5.678&#215;10<sup>-5</sup>"
 *     raw: 0.00005678
 *     rawShort: 0
 *  }
 *
 * use sP.niceExp(0.00005678,3).nNice to get the html string. 
 **/
```
