// On clicking remove button the item should be removed from DOM as well as localstorage.
let arr = JSON.parse(localStorage.getItem("coffee"))

console.log(arr.price)
let total =arr.reduce(function(sum,{price}){
    return sum + Number(price);
},0)


arr.map(function(el,index){
    var div = document.createElement("div")
        let itemimage=document.createElement("img");
        itemimage.src=el.image;
        let itemName=document.createElement("h2");
        itemName.innerText=el.title;
        let itemprice=document.createElement("h2");
        itemprice.innerText="RS"+" "+el.price;

        let rebutton = document.createElement("button")
        rebutton.innerText="Remove"
        rebutton.setAttribute("id","remove_coffee")
        rebutton.addEventListener("click",function(){
            remove(el,index);
        })

        div.append(itemimage,itemName,itemprice,rebutton)
        console.log(div)
        document.querySelector("#bucket").append(div)
    
    
})
function remove(el,index){
    arr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}