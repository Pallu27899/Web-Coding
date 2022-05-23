//store the products array in localstorage as "products"
var arr=JSON.parse(localStorage.getItem("products"))||[]
document.querySelector("#add_product").addEventListener("submit", addFuncation)
function addFuncation(){
    event.preventDefault();
    let form=document.querySelector("form");
    let brand=form.Type.value;
    let des=form.desc.value;
    let pri=form.price.value;
    let img=form.Image.value;
    let obj=new arrAdd(brand,des,pri,img);
    arr.push(obj)
    
    localStorage.setItem("products", JSON.stringify(arr))
}
function arrAdd(b,d,p,i){
    this.type=b;
    this.desc=d;
    this.price=p;
    this.image=i;
}