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

console.log(itemList.lastElementChild)

itemList.lastElementChild.textContent = 'hello';
itemList.lastElementChild.style.color = 'red'