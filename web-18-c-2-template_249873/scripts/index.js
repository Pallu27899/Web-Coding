// Add the coffee to local storage with key "coffee"
const url =  `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    console.log(res);
    display(res.menu.data)
})

        let arr =JSON.parse(localStorage.getItem("coffee"))||[]
        let total = arr.length;
        let item_div = document.querySelector("#coffee_count");
        item_div.innerText=total

function display(data){
    data.map(function(el){
        var div = document.createElement("div")
        let itemimage=document.createElement("img");
        itemimage.src=el.image;
        let itemName=document.createElement("h3");
        itemName.innerText=el.title;
        let itemprice=document.createElement("h3");
        itemprice.innerText="RS"+" "+el.price;

        let bukbutton = document.createElement("button")
        bukbutton.innerText="Add to Bucket"
        bukbutton.setAttribute("id","add_to_bucket")
        bukbutton.addEventListener("click",function(){
            addtobucket(el);
        })

        div.append(itemimage,itemName,itemprice,bukbutton)
        console.log(div)
        document.querySelector("#menu").append(div)
    
    })
    function addtobucket(el){
        arr.push(el)
        localStorage.setItem("coffee",JSON.stringify(arr))
        let total = arr.length;
        let item_div = document.querySelector("#coffee_count");
        item_div.innerText=total
        


    }
}