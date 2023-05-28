let form = document.getElementById('addForm');
let itemList = document.getElementById('items')
let button = document.getElementsByClassName('delete');
// Form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
// remove item from the list
// Array.from(button).forEach((element,index) => {
//     element.addEventListener('click', ()=>removeItem(index));
// });

function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add next node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button
    let delBtn = document.createElement('button');

    // add class to del button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Appen text node
    delBtn.appendChild(document.createTextNode('X'));

    // Append to del button to li
    li.appendChild(delBtn);

    //append li to list
    itemList.appendChild(li);

}

function removeItem(e){
    // let delBtn = document.createElement('button');
    // let li = document.getElementsByClassName('list-group-item');
    // li[index].remove();
    // console.log(index);

    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }

}