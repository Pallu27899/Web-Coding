let cartItems = JSON.parse(localStorage.getItem("cart_items"));

console.log(cartItems.price);

let total = cartItems.reduce(function(sum,{price}){    
    return sum + Number(price);
},0);


let total_value = document.querySelector("#cart_total");
total_value.innerText=total;

cartItems.map(function(ele,index){

    var div = document.createElement("div");
    div.className = "item";

    let itemImage = document.createElement("img");
    itemImage.src=ele.image;

    let itemName = document.createElement("h2");
    itemName.innerText=ele.name;

    let itemPrice = document.createElement("h2")
    itemPrice.innerText= ele.price;

    let addBtn = document.createElement("button");
    addBtn.innerText="Remove";
    addBtn.class="remove";
    addBtn.addEventListener("click",()=>{
        remove(ele,index);
    })

    div.append(itemImage,itemName,itemPrice,addBtn);
    document.querySelector("#cart").append(div);
})


function  remove(ele,index){
    cartItems.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(cartItems));
    window.location.reload();
}