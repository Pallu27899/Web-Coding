//link -https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY

//key=ML-2aO2xG9Xatms6AMNhzeabapTqORRufyD0pTKyM_w 
const API="ML-2aO2xG9Xatms6AMNhzeabapTqORRufyD0pTKyM_w";
import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js";


let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("query").value;
    searchImages(API,value).then((data)=>{
        console.log(data);
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.results,container)
    });
     
    }
};
document.getElementById("query").addEventListener("keydown",search);


let categories=document.getElementById("categories").children;
// console.log(categories)

function cSearch(){
    console.log(this.id);
    searchImages(API,this.id).then((data)=>{
        console.log(data);
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.results,container)
    });
     
}
for(let el of categories){;
    el.addEventListener("click",cSearch)
}


// let searchImages =async() =>{
//     let value=document.getElementById("query").value;
//     try{
//         let res= await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
//         );

//         let data = await res.json();
//         console.log(data);

//     }catch(err){
//         console.log(err);
//     }
// };