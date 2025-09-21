        /* let grandtotal= 0
function updateGrandTotal(){
    
    document.querySelectorAll(".control").forEach(control => {
        const totalPrice = parseInt(control.querySelector(".totalprice").textContent)
        grandtotal += totalPrice
    });
    totalgranddisplay.textContent= grandtotal
}
*/

        document.querySelectorAll(".number-control").forEach(control => {
            const decreasebtn = control.querySelector(".decreasebtn")
            const increasebtn = control.querySelector(".increasebtn")
            const quantitydisplay = control.querySelector(".numberdisplay")
            const totalpricedisplay= control.querySelector(".totalprice")
 const pricedisplay = control.querySelector(".baseprice")
           
        
            const baseprice = parseInt(pricedisplay.textContent)
           let quantity = 1
           const updateDisplay= () =>{
            quantitydisplay.textContent = quantity
           const totalprice= quantity * baseprice
            totalpricedisplay.textContent = `
            Sub-total:  $${totalprice}
    `
   
            //updateGrandTotal()
           }
            decreasebtn.addEventListener("click", function () {
                if (quantity > 1) {
                    quantity--
                    updateDisplay()

                }
            })
            increasebtn.addEventListener("click", function () {
                quantity++
                updateDisplay()
            })
        })



//updateGrandTotal()


        
         document.querySelectorAll(".number-control").forEach(control => {
                    const quantitydisplay = control.querySelector(".numberdisplay")
                    const decreasebtn= control.querySelector(".decreasebtn")
                   const increasebtn= control.querySelector(".increasebtn")
                     const pricedisplay=control.querySelector(".amount")
                   
                     let value = 1
                   const incremnetVal= parseInt(pricedisplay.textContent)
                   let currentcount= parseInt(quantitydisplay.textContent)
        
                     decreasebtn.addEventListener("click", function(){
                        if(value > 1){
                        value--;
                        quantitydisplay.textContent= value
                        
                        }
                     })
        increasebtn.addEventListener("click", function(){
                        value++
                        quantitydisplay.textContent= value
                      
                     })
                })
        


/*function addtocart(name, price){
    const cart= JSON.parse(localStorage.getItem("cart")) || []
    const existingItem = cart.find(item =>item.name === name);
    
    if(existingItem){
        existingItem.quantity++
    }
    else{
        cart.push({name, price, quantity:1})
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
}

function updateCartCount(){
    const cart= JSON.parse(localStorage.getItem("cart")) || []
    const count= cart.reduce((sum, item) => sum + item.quantity, 0)
    document.getElementById("cart-count").textContent = count
}

updateCartCount()

function loadcart(){
    const cart= JSON.parse(localStorage.getItem("cart")) || []
    const cartContainer=  document.getElementById("cartitems")
    const totalElement = document.getElementById("total")

    cartContainer.innerHTML= "";
    let total= 0 

    if(cart.length === 0){
        cartContainer.innerHTML= "<p>Your cart is empty</p>"
        totalElement.textContent= '0';
        return;
    }
cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal
    const div= document.createElement('div')
    div.innerHTML= `${item.name} - $${item.price} x ${item.quantity} == $${itemTotal}`
    cartContainer.appendChild(div)
});
totalElement.textContent = total;
}

function clearCart(){
    localStorage.removeItem('cart')
    loadcart()
}
loadcart()*/