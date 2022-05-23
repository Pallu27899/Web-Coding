var arr=JSON.parse(localStorage.getItem("product"))||[]
arr.map(function(e,i){
    let div = document.createElement("div");

    let img=document.createElement("img")
    img.src=e.image;
    img.setAttribute("alt", "image")

    let brand=document.createElement("h4")
    brand.innerText=e.type
      
    let des=document.createElement("h4")
    des.innerText=e.desc;

   let pri=document.createElement("p")
   pri.innerText="price $"+e.price;

   let btn=document.createElement("button")
   btn.innerText="Remove Product"
   btn.setAttribute("id","remove_product")
   btn.addEventListener("click",function (){
       removeFun(e,i)
   })
   div.append(img,brand,des,pri,btn)
   document.querySelector("#all_products").append(div)
})

function removeFun(e,i){
    arr.splice(i,1)
    localStorage.setItem("products", JSON.stringify(arr))
   
}