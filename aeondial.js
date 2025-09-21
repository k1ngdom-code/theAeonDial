
//for cart funtionality
const cartcount= document.getElementById("countcartitems")
 let counter = 0
function cartCount(){
cartcount.innerHTML = counter
}


function addToCart(productName, price, image){
    //get currnt cart or create new one
    const cart= JSON.parse(localStorage.getItem("cart")) || []
// check if item is already in the cart
const existingitem= cart.find(item => item.name === productName)

//if item exists, update the cart
if(existingitem){
    existingitem.qty += 1
     counter = counter + 1
     localStorage.setItem("showcount", counter )
window.addEventListener("load" , function(){
    
   
        cartcount.innerHTML= localStorage.getItem("showcount")
    
})  
    
}
else{
    cart.push({name : productName, price: price, qty: 1, image: image})
   counter = counter + 1
    localStorage.setItem("showcount", counter )
window.addEventListener("load" , function(){
   
    
        cartcount.innerHTML=  localStorage.getItem("showcount")
    
})  
   cartCount()
}
//save updated cart back to localstorage
localStorage.setItem("cart", JSON.stringify(cart))
                                                                                                                                                                                                                                                   
//alert user on successful update
alert(`${productName}` + " " + "added successfully!")

}
cartCount()


