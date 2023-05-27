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

console.log(document.getElementById('header-title'))
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'goodby';
console.log(headerTitle.textContent);//Item Lister 123
console.log(headerTitle.innerText);//Item Lister 
headerTitle.innerHTML = '<h3>Hello 2</h3>';
header.style.borderBottom = 'solid 3px #000'

