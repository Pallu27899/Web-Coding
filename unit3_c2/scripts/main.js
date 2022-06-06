document.getElementById("submit").addEventListener("click",function(){
    event.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value;
 
    function user(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=am;
    }  
    
    let p1=new user(name,email,address,amount)
     
    localStorage.setItem("user",JSON.stringify(p1))
    
    
    window.location.reload()
    
    })