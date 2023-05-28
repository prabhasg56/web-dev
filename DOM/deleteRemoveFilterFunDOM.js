let form = document.getElementById('addForm');
let itemList = document.getElementById('items')
let button = document.getElementsByClassName('delete');
let filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', searchItem);
// remove item from the list
// Array.from(button).forEach((element,index) => {
//     element.addEventListener('click', ()=>removeItem(index));
// });

function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;
    let newItemDes = document.getElementById('itemD').value;

    // create new li element
    let li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add next node with input value
    li.appendChild(document.createTextNode([newItem +" "+ newItemDes]));

    // create delete button
    let delBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    // add class to del button
    delBtn.className = 'btn btn-danger btn-sm mr-2 float-right delete';
    editBtn.className = 'btn btn-primary btn-sm float-right edit';

    //Appen text node
    delBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));

    // Append to del button to li
    li.appendChild(editBtn);

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
          let li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }

}

function searchItem(e) {
  let searchItem = e.target.value.toLowerCase();

  let listItem = itemList.getElementsByTagName('li');

  Array.from(listItem).forEach((item) => {
    let itemName = item.firstChild.textContent;

    if(itemName.toLowerCase().indexOf(searchItem) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}
