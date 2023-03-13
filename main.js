console.log('jis is wired!');

let theButtons = document.querySelectorAll('button'),
    theList = document.querySelector('ul');

//rules for working / creating objects

// 1. needs a name, wrapped in curly bracktes
// 2. commas between keys

let profs = {
    marco : {
        name: 'Marco',
        role: 'Coordinator',
        nickname: 'marco',
        Bio: 'info',
        avatar: 'marco.jpg'
    },

    joe : {
        name: 'joe',
        role: 'Digital Media',
        nickname: 'Teddy  bear',
        Bio: 'joeinfo',
        avatar: 'joe.jpg'
    },

    jhon : {
        name: 'Jhon',
        role: 'Motion',
        nickname: 'Jhon',
        Bio: 'jhoninfo',
        avatar: 'jhon.jpg'
    }

} ;

//functions go here
function listProf() {
   //empty the list
        theList.innerHTML = "";
        
    
    for (item in profs[this.dataset.prof]) {
        let newItem = document.createElement('li');

        newItem.textContent = profs[this.dataset.prof][item];
        theList.appendChild(newItem);
    }
    
}

//add event handling here
theButtons.forEach(profButton => profButton.addEventListener('click', listProf));



