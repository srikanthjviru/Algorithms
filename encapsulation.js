// https://www.intertech.com/Blog/encapsulation-in-javascript/
// refer above link for encapsulation 
// problem and solution will be explained there
// here by going with the IIFE the fullName is not available or accessesd directly 
// person.fullName will not work

var person = (function(){
    var fullName = "Srikanth";
    var reg = new RegExp(/\d+/);
    
    return {
        setFullName: function(newName){
            if(reg.test(newName)){
                alert("Name cant be a number")
            } else{
                alert("Name changed")
            }
        },
        getFullName: function(){
            return fullName
        }
    }
}());
person.getFullName();