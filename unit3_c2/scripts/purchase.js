let wallet_balance=document.getElementById("wallet_balance")
let user=JSON.parse(localStorage.getItem("user"))
wallet_balance.innerText=user.wallet
wallet_balance.style.color="blue"
let remain_amount=JSON.parse(localStorage.getItem("remain_amount"))
console.log(remain_amount);

let h3=document.getElementById("balance")
h3.innerText=remain_amount.remaining_money;


let purchase=JSON.parse(localStorage.getItem("purchase"))

let purchased_vouchers=document.getElementById("purchased_vouchers")

purchase.forEach(function(el) {
  
  let div= document.createElement("div")

  let img=document.createElement("img")
   img.src=el.image

  let name=document.createElement("h3")
  name.innerText=el.name

  let price=document.createElement("h2")
  price.innerText=el.price


 div.append(img,name,price)

purchased_vouchers.append(div);

});

