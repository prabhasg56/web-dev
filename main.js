const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) =>{
    event.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.item').lastElementChild.innerHTML = '<h1> Hello </h1>';
});

btn.addEventListener('mouseover', (event) =>{
    event.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.item').lastElementChild.innerHTML = '<h1> Hello </h1>';
});

btn.addEventListener('mouseout', (event) =>{
    event.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.item').lastElementChild.innerHTML = '<h1> Hello </h1>';
});

//handling form data

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

const onSubmit = (event) => {
    event.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all the fields';

        setTimeout(() => msg.remove(), 2000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}