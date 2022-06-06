var ARR=[];


 async function data(){
   try{
    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let res=await fetch(url)
    let d=await res.json()
    
     return d[0].vouchers
   }catch(error){
     console.log(error)
   }
 }


async function appended(){
let Data= await data()

let voucher_list=document.getElementById("voucher_list")

var user=JSON.parse(localStorage.getItem("user"))
console.log(user)
let wallet_balance=document.getElementById("wallet_balance")
wallet_balance.innerText=user.wallet

 Data.forEach(function(el){
   
  let div= document.createElement("div")

  let img=document.createElement("img")
   img.src=el.image

  let name=document.createElement("h3")
  name.innerText=el.name

  let price=document.createElement("h2")
  price.innerText=el.price

  let button=document.createElement("button")
  button.setAttribute("class","buy_voucher")
  button.innerText="buy_voucher"

button.addEventListener("click",function(){

if(user.wallet>=el.price){ 

function rem(a){
  this.remaining_money=a;
}
  
  
let voucher=document.getElementsByClassName("voucher")
voucher.innerText=(el.name)

  alert("Hurray! purchase successful")
user.wallet=user.wallet-el.price

let xx=new rem(user.wallet)
console.log('xx:', xx)
localStorage.setItem("remain_amount",JSON.stringify(xx))


  wallet_balance.innerText=user.wallet
ARR.push(el)


localStorage.setItem("purchase",JSON.stringify(ARR))
}

        else{

        alert("Sorry! insufficient balance")
        }

})

  div.append(img,name,price,button)
  voucher_list.append(div)
 })

}
appended()



