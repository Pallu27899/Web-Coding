// The cart items should be stored in local storage with key :- “cart_items”
const url = ` https://grocery-masai.herokuapp.com/items`;

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    display(res.data);
})

let arrItems =JSON.parse(localStorage.getItem("cart_items"))||[]; 
let total_items = arrItems.length;
let item_div = document.querySelector("#wallet");
item_div.innerText=total_items;


function display(data){
    data.map(function(ele){ 
      

        var div = document.createElement("div");        

        let itemImage = document.createElement("img");
        itemImage.src=ele.image;

        let itemName = document.createElement("h2");
        itemName.innerText=ele.name;

        let itemPrice = document.createElement("h2")
        itemPrice.innerText= ele.price;

        let addBtn = document.createElement("button");
        addBtn.innerText="Add to Cart";
        addBtn.class="add_to_cart";
        addBtn.addEventListener("click",function(){
        //    if(account-Number(ele.price)>=0){
        //     saveToCart(ele);
        //     account=account=Number(data.price)
        //     Tmt.innerText=account
        //    }
        //    else{
        //        alert("Insufficient balance");
        //    }
           
        saveToCart(ele);
           
        })        

        div.append(itemImage,itemName,itemPrice,addBtn);
        document.querySelector("#groceries").append(div);
    })
}


function saveToCart(ele){      
    arrItems.push(ele);
    localStorage.setItem("cart_items",JSON.stringify(arrItems));
    let total_items = arrItems.length;
    let item_div = document.querySelector("#wallet");
    item_div.innerText=total_items;
}