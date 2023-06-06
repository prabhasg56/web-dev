let form = document.getElementById("addForm");

// Form submit event
if (localStorage.length !== 0) {
  window.onload = showOnBrowserScreen();
}

form.addEventListener("submit", showOnLocalStorage);

function showOnLocalStorage(e) {
  e.preventDefault();

  let amount = document.getElementById("amount").value;
  let description = document.getElementById("desc").value;
  let category = document.getElementById("cat").value;

  let expObj = {
    amount,
    description,
    category,
  };

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }

  let oldData = JSON.parse(localStorage.getItem("data"));
  oldData.push(expObj);

  localStorage.setItem("data", JSON.stringify(oldData));

  showOnBrowserScreen();
}

function showOnBrowserScreen() {
  document.getElementById("amount").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("cat").value = "";

  let itemList = document.getElementById("items");

  let data = JSON.parse(localStorage.getItem("data"));

  //Clear previous displayed data
  for (let i = 0; i < data.length; i++) {
    const childNodeTobeDeleted = document.getElementById(i);

    if (childNodeTobeDeleted) {
      itemList.removeChild(childNodeTobeDeleted);
    }
  }

  //Show data on browser screen
  for (let key in data) {
    let amount = data[key].amount;
    let category = data[key].category;
    let description = data[key].description;

    const childHtml = `<li class="list-group-item" id = ${key}> ${amount} - ${category} - ${description} 
        <button class="btn btn-primary btn-sm float-right edit" onclick = editItem('${amount}','${category}','${description}','${key}')> Edit Expense </button>
    
        <button class="btn btn-danger btn-sm mr-2 float-right delete" onclick = removeItemFromLocalStorage('${key}')> Delete Expense </button>      
        </li>`;
    itemList.innerHTML += childHtml;
  }
}

function removeItemFromLocalStorage(key) {
  let data = JSON.parse(localStorage.getItem("data"));
  let deleteData = data.filter((data, index) => {
    if (index === Number(key)) {
      return false;
    }
    return true;
  });
  localStorage.setItem("data", JSON.stringify(deleteData));
  removeItemFromScreen(key);
}

function removeItemFromScreen(key) {
  const parentNode = document.getElementById("items");
  const childNodeTobeDeleted = document.getElementById(key);

  if (childNodeTobeDeleted) {
    parentNode.removeChild(childNodeTobeDeleted);
  }
}

function editItem(amount, category, description, key) {
  document.getElementById("amount").value = amount;
  document.getElementById("cat").value = category;
  document.getElementById("desc").value = description;

  removeItemFromLocalStorage(key);
}
