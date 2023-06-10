//let container = document.querySelector("#container");
// let data = [];
const API = "https://jsonplaceholder.typicode.com/todos";

let storeData;

//Fetching data from API
async function getData() {

    try{
        let res = await fetch(API);
        let fetchedata = await res.json();
        return fetchedata;
    }
    catch(err) {
        console.log(err);
    }
    // console.log(data)
}

//Display function
 function display(data) {
   // container.innerHTML = "";
    for(let index = 0; index < data.length; index++) {
        console.log(data[index]);
    }
}


getData().then((res) => {
   setTimeout(() => {
    storeData = res;
   }, 10000);
});

getData().then(()=>display())
// display(storeData);