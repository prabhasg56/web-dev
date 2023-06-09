axios.get("https://crudcrud.com/api/91091e72433a40088dbbfebb04a57d3d/appointment")
.then((responseAll) => {
    if (responseAll.length !== 0) {
        window.onload = showOnBrowserScreen(responseAll.data);
      }
})
.catch(err => alert(err));

function showOnLocalStorage(e){
    e.preventDefault();
    let name = e.target.username.value;
    let email = e.target.email.value;
    let mobile = e.target.phone.value;

   let user = {
      name,
      email,
      mobile,
    };

    axios.post("https://crudcrud.com/api/91091e72433a40088dbbfebb04a57d3d/appointment",user)
        .then((response) => {
           showOnBrowserScreen(response.data);
        })
        .catch((err) => {
            alert('Something went wrong');  
        })
    // localStorage.setItem(email, JSON.stringify(user));
    // showOnBrowserScreen(user);
  }

  function showOnBrowserScreen(user){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';

    let itemList = document.getElementById("items");

    for(let i = 0;i<user.length; i++){
        const childHtml = `<li id= ${user[i]._id} > ${user[i].name} - ${user[i].email} - ${user[i].mobile} 
        <button onclick = removeItemFromLocalStorage('${user[i]._id}')> DELETE </button>
        <button onclick = editItem('${user[i]._id}','${user[i].name}','${user[i].email}','${user[i].mobile}')> EDIT </button>
        </li>`;
      itemList.innerHTML += childHtml;
    }
   
  }

  function editItem(id,name, email, phone) {
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;

    removeItemFromLocalStorage(id);
  }

  function removeItemFromLocalStorage(id) {
    localStorage.removeItem(id);

    removeItemFromScreen(id);
  }

  function removeItemFromScreen(id) {
    const parentNode = document.getElementById('items');
    const childNodeTobeDeleted = document.getElementById(id);

    if (childNodeTobeDeleted) {
      parentNode.removeChild(childNodeTobeDeleted);
    }
  }