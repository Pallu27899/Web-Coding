document.querySelector("form").addEventListener("submit",checkoutFun);

function checkoutFun(){
    
    event.preventDefault();
    document.querySelector("#user_name").value=null;
    document.querySelector("#user_number").value=null;
    document.querySelector("#user_address").value=null;
    let i=0;


    setInterval(function(){
        
        if(i==0){
            alert("Your order is confirmed ");
        }
        else if(i==3){
            alert("Your order is being Packed ");
        }
        else if(i==8){
            alert("Your order is in transit");
        }else if(i==10){
            alert("Your order is out for delivery ");
        }
        else if(i==12){
            alert("Order delivered");
        }
        i++;       

    },1000);

}