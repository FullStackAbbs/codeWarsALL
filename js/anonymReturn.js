// Anonymous Returns : https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript
//
// When a function is called by itself it is bound to the global context; the this variable of the function will be bound to the global object.
//
// When the getNameFunc function is called on the alpha object the value of the name variable outside of the object is returned: "The Window".
//
// We do not want this, we want the value of the name property inside the alpha object to be returned.
//
// Fix getNameFunc so the right value is returned.
// Paramter a variable assignment that is a string
// Return instead of My Alpha we want to see 'The Window'
// Example 'The Window'
// PsuedoCode:
// (a) there can be a modification added after the alpha object decleration (although we cannot chnage the name variable )
// (b) a simple key property may be able to be used but may not work due to referencing
// (c) look into Binding as a means of grabbing the name variable ....
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// //
var name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function(){
    return function(){
        return this.name;
        }
    .bind(this);
    }
};
