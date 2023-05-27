// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// getElementById //

// console.log(document.getElementById('header-title'))
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'goodby';
// console.log(headerTitle.textContent);//Item Lister 123
// console.log(headerTitle.innerText);//Item Lister 
// headerTitle.innerHTML = '<h3>Hello 2</h3>';
// header.style.borderBottom = 'solid 3px #000'

// getElementByClass//

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow' 

// for(let i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'lightgray';
// }


//getElementByTagName //

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(items[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow' 

// for(let i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = 'lightgray';
// }

//QuerySelector //

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//QuerySelectorAll //

// let title = document.querySelectorAll('.title');

// console.log(title);
// title[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


//// Make the 3 rd element in the list have green background color ////


// let items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = 'green';

// //Make all the elements in the list have bold color font//

// for(let i = 0; i<items.length; i++){
//     items[i].style.fontWeight = "bold"
// }


//// Add a new li element without the same class Name ////
//// And try editing it with getelementsbyclassname and then by getelementbytagname ////

// let classItem = document.getElementsByClassName('list-group-item');

// for(let i = 0; i<classItem.length; i++){
//     classItem[i].style.backgroundColor = 'yellow'; // all the list item's background color are yellow except last item which is not belongs to class 'list-group-item'
// }

// let item = document.getElementsByTagName('li');

// for(let i = 0; i<item.length; i++){
//     item[i].style.backgroundColor = 'blue'; // all the list item's background color are blue
// }


//// 1.Make the 2nd item have green background color ////
//// 2.Make the 3rd item invisible ////

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green'











