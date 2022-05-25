document.querySelector("#sign").addEventListener("submit", storeuser)
function usersdetails(n,m,e,p){
    this.name=n;
    this.mobile=m;
    this.email=e;
    this.pass=p
}
let users=[]
function storeuser(){
    event.preventDefault()
    let form=document.querySelector("#sign")
    let name=form.name.value;
    let mobile=form.mobile.value;
    let email=form.email.value;
    let pass=form.pass.value;
    console.log(name,mobile,email, pass)
    let userdetail=new usersdetails(name,mobile,email,pass)
    
    users.push(userdetail)
    localStorage.setItem("userdetails", JSON.stringify(users))
    window.location.href="login.html"
    alert("signup successful")
}