console.log('jis is wired!');

let theButton = document.querySelector('button'),
    theList = document.querySelector('ul')

//rules for working / creating objects

// 1. needs a name, wrapped in curly bracktes
// 2. commas between keys

let coffeeCup = {
    //descriptive keys : propeties 
    color : "white", //String
    lidColor : "grey", //String
    height : 20, //String
    contents : 'cappucino', //String

    // functional keys: methods (things an objetc can do)
    drink : () => {
        console.log('sippy sip')
        console.log('i have sipped')
    }, // use the braces if you have more than one action, if its just one you dont need them
    mix : () => console.log('add cream, sugar, etc')
} ;

//functions go here
function listProps() {
    
if (theList.children.length >0) { // if the lust is full so empty it
    theList.innerHTML = "";
    // exit the rest of the function
    return;
}

    for (prop in coffeeCup){ //prop is short property
        console.log(coffeeCup[prop]);
        
        let newProp = document.createElement('li');
        newProp.textContent = coffeeCup[prop];
        newProp.classList.add('red-list');

        theList.appendChild(newProp);
    }
}

//add event handling here
theButton.addEventListener('click', listProps);



//my example
let mobilePhone = {
    //descriptive keys : propeties 
    color : "blue", //String
    lidColor : "white", //String
    height : 20, //String
    contents : 'information', //String

    // functional keys: methods (things an objetc can do)
    call : () => {console.log('press phone')},
    text : () => console.log('write a message')
} ;

