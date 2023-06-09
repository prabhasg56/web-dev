function showOnLocalStorage(e) {
  e.preventDefault();
  let name = e.target.username.value;
  let email = e.target.email.value;
  let mobile = e.target.phone.value;

  let user = {
    name,
    email,
    mobile,
  };

  axios
    .post(
      "https://crudcrud.com/api/6f1ea414d8884c88a5adbf2dfff66554/appointment",
      user
    )
    .then((response) => {
      showOnBrowserScreen(response.data);
    })
    .catch((err) => {
      alert("Something went wrong");
    });
  
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/6f1ea414d8884c88a5adbf2dfff66554/appointment"
    )
    .then((responseAll) => {
      for(let i=0; i<responseAll.data.length;i++) {
       showOnBrowserScreen(responseAll.data[i]);
      }
    })
    .catch((err) => alert(err));
});

function showOnBrowserScreen(user) {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  let itemList = document.getElementById("items");

    const childHtml = `<li id= ${user._id} > ${user.name} - ${user.email} - ${user.mobile} 
        <button onclick = removeItemFromLocalStorage('${user._id}')> DELETE </button>
        <button onclick = editItem('${user._id}','${user.name}','${user.email}','${user.mobile}')> EDIT </button>
        </li>`;
    itemList.innerHTML += childHtml;
}

function editItem(id, name, email, phone) {
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
  const parentNode = document.getElementById("items");
  const childNodeTobeDeleted = document.getElementById(id);

  if (childNodeTobeDeleted) {
    parentNode.removeChild(childNodeTobeDeleted);
  }

  removeItemFromRemote(id);
}

function removeItemFromRemote(id){
  axios.delete(`https://crudcrud.com/api/6f1ea414d8884c88a5adbf2dfff66554/appointment/${id}`)
    .then(() => console.log('Successfully Deleted'))
    .catch(err => alert(err));
}
