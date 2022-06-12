// Link:- `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=ML-2aO2xG9Xatms6AMNhzeabapTqORRufyD0pTKyM_w`
//  access key = "ML-2aO2xG9Xatms6AMNhzeabapTqORRufyD0pTKyM_w" 


const API = "ML-2aO2xG9Xatms6AMNhzeabapTqORRufyD0pTKyM_w";

import navbar from "../component/navbar.js";

// console.log(navbar)
let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();

import { searchImg, append } from "./fetch.js";




let search = (event) => {
    if (event.key == "Enter") {
        let query = document.getElementById("query").value;
        let sort = undefined;
        let filter = undefined;
        searchImg(API, query,sort,filter).then((data) => {
            // console.log(data.results);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });

    }
};
document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

// console.log(categories);


function cSearch(){
    // console.log(this.id);
    let sort = undefined;
    let filter = undefined;
    searchImg(API, this.id,sort,filter).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
} 


for(let el of categories){
    el.addEventListener("click", cSearch)
}

//Sort functionality
document.getElementById("sortImg").addEventListener("change",function(event){
    let sort = event.target.value;
    // console.log(sort);
    let filter = undefined;
    let query = localStorage.getItem("query");
    searchImg(API, query,sort,filter).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
});

//Filter functionality
document.getElementById("filter").addEventListener("change",function(event){
    let filter = event.target.value;
    // console.log(filter);
    let sort = undefined;
    let query = localStorage.getItem("query");
    searchImg(API, query,sort,filter).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
})


// let searchImg = async () => {
//     let query = document.getElementById("query").value;
//     try{
//         let res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=ML-2aO2xG9Xatms6AMNhzeabapTqORRufyD0pTKyM_w`);
//         let data = await res.json();
//         console.log(data);

//     }catch(err){
//         console.log(err);

//     }
// }