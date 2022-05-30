document.querySelector("form").addEventListener("submit",checkoutFun);

function checkoutFun(){
    event.preventDefault();
    document.querySelector("#name").value=null;
    document.querySelector("#number").value=null;
    document.querySelector("#address").value=null;
    let i=0;
    setInterval(function(){
        if(i==0){
            alert("Your order is accepted")
        }
        else if(i==3){
            alert("Your order is being Prepared")
        }
        else if(i==8){
            alert("Your order is being packed")
        }
        else if(i==10){
            alert("Your order is out for delivery")
        }
        else if(i==12){
            alert("Order delivered")
        }
        
    })

}