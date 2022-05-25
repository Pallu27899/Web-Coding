document.querySelector("form").addEventListener("submit", checkuser)
function checkuser(){
    let form=document.querySelector("form")
    let email=form.email.value;
    let pass=form.pass.value;
    let data=JSON.parse(localStorage.getItem("userdetails"))
    data.map(function(el){
     if(email==el.email&&pass==el.pass){
        window.location.href="index.html"
         alert("login successful");
         
        
     }
     else{
         alert("Invalid Credentials")
     }

    })
}