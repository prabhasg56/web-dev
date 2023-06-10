let form = document.getElementById("addForm");

form.addEventListener("submit", itemSaveOnRemote);

function itemSaveOnRemote(e) {
  e.preventDefault();

  let itemName = document.getElementById("item").value,
    description = document.getElementById("desc").value,
    price = document.getElementById("price").value,
    quantity = document.getElementById("quantity").value;

  let itemObj = {
    itemName,
    description,
    price,
    quantity,
  };

  axios
    .post(
      "https://crudcrud.com/api/bd6003dbc43f444c81cf1a59ba041bf2/storeItems",
      itemObj
    )
    .then((response) => showOnBrowserScreen(response.data))
    .catch((err) => alert("Something went wrong"));
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/bd6003dbc43f444c81cf1a59ba041bf2/storeItems")
    .then((responseAll) => {
      for (let i = 0; i < responseAll.data.length; i++) {
        showOnBrowserScreen(responseAll.data[i]);
      }
    })
    .catch((err) => alert(err));
});

function showOnBrowserScreen(itemObj) {
  document.getElementById("item").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";

  let itemList = document.getElementById("items");

  const childHtml = `<li id= ${itemObj._id} > ${itemObj.itemName} - ${
    itemObj.description
  } - ${itemObj.price} - ${itemObj.quantity}
          <button style="background-color: lightgreen; border-radius: 2px; " onclick = buy1(${JSON.stringify(
            itemObj
          )})> BUY1 </button>
          <button style="background-color: lightgreen; border-radius: 2px; margin-top: 10px;" onclick = buy2(${JSON.stringify(
            itemObj
          )})> BUY2 </button>
          <button style="background-color: lightgreen; border-radius: 2px; margin-top: 10px;" onclick = buy3(${JSON.stringify(
            itemObj
          )})> BUY3 </button>
          </li>`;
  itemList.innerHTML += childHtml;
}

function updateItem(itemObj, noOfBuyItems) {
  axios
    .put(
      `https://crudcrud.com/api/bd6003dbc43f444c81cf1a59ba041bf2/storeItems/${itemObj._id}`,
      {
        itemName: itemObj.itemName,
        description: itemObj.description,
        price: (itemObj.price - noOfBuyItems).toString(),
        quantity: itemObj.quantity,
      }
    )
    .then((res) => location.reload())
    .catch((err) => alert(err));
}

function buy1(itemObj) {
  updateItem(itemObj, 1);
}

function buy2(itemObj) {
  updateItem(itemObj, 2);
}

function buy3(itemObj) {
  updateItem(itemObj, 3);
}
