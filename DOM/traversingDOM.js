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

//// parentElement ////

let itemList = document.querySelector('#items');

console.log(itemList.parentElement);

itemList.parentElement.style.backgroundColor = 'lightgray';

console.log(itemList.parentElement.parentElement.parentElement)