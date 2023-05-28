// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild



let itemList = document.querySelector('#items');

//// parentElement ////

// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = 'lightgray';

// console.log(itemList.parentElement.parentElement.parentElement)

//// lastelementchild ////

// console.log(itemList.lastElementChild)

// itemList.lastElementChild.textContent = 'hello';
// itemList.lastElementChild.style.color = 'red'


// lastchild //

// console.log(itemList.lastChild)

// itemList.lastElementChild.textContent = 'hello';
// itemList.lastElementChild.style.color = 'red'


//// firstelementchild ////

// console.log(itemList.firstElementChild)

// itemList.firstElementChild.textContent = 'Hello';
// itemList.firstElementChild.style.color = 'red'


//// firstchild ////

// console.log(itemList.firstChild)

// itemList.firstChild.textContent = 'Hello';
// itemList.firstChild.style.backgroundColor = 'red'

////nextsibling////

// console.log(itemList.nextSibling);

////nextElementSibling////

// console.log(itemList.nextElementSibling);

////prevElementSibling////

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);


//// createElement ////

// create div

let newDiv = document.createElement('div');

//add id
newDiv.id = 'hello';

//add class

newDiv.className = 'hello1';

//add attribute
newDiv.setAttribute('title','Hello div');

//create text node 
let newDivText = document.createTextNode('Hello world');

// Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
console.log(newDiv);



