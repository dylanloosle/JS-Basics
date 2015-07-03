//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var name = 'Tyler';
var isTyler = function(){
    if(name === 'Tyler') {
        return 'true';
    }
    else {
        return 'false';
    }
};
isTyler();


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function(){
    var userName = prompt('What is your name?');
    return userName;
};
getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function(){
    alert("Welcome," + userName);
}
welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
/* parameters are inside the paranthesis next to function and are typically variables defined within a function*/
/* arguments are actual values used when CALLING the function that correspond with the parameters set earlier */


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
/*/
 emptry string
 0
 false
 undefined
 null
 NaN

 To check if something is falsy, you can just test the function with an if else statement. EXAMPLE:
 if(foo) {
 return true;

 else {
 return false;
 }
 }
 */


//Next Problem



//Create a function called myName that returns your name

  //Code Here
var myName = function(){
    return 'Dylan';
};
myName();

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = function(){
    return function(name) {
        return name;
    };
};



//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn('Dylan');