/*const cartitems= document.querySelector("cartitems")
const count= document.getElementById("count")

const add= document.getElementById("add")
const sub=  document.getElementById("subtract")
const total= document.getElementById("totalamount")

let refCount = 2;

function updateSubCount(){
count.forEach(count => {
    count = refCount
});
}
updateSubCount()*/
document.addEventListener("DOMContentLoaded", function(){
    const products= documentElement.querySelectorAll(".product")

const quantities= {}
products.forEach(products => {
    const id= products.dataset.id;
    quantities[id]= 0
});

document.addEventListener("click", function(e){
    const productElement= e.target.closest('.product')
    if(!productElement) return;
    const id = productElement.dataset.id
    const price= parseFloat(productElement.dataset.price)
    const quantityelement= productElement.querySelector(".quantity")
    const subtotal= productElement.querySelector(".subtotal")

    if(e.target.classList.contains("increasebtn")){
        quantities[id]++
        updateDisplay()
    }
 if(e.target.classList.contains("decreasebtn")){
        quantities[id]--
        updateDisplay()
    }
})

function updateDisplay(){
    let grand= 0
    let hasItems= false

    products.forEach(products => {
        const id= product.dataset.id
        const price= parseFloat(product.dataset.price)
        const quantity= quantities[id]
        const subtotal = price * quantity
        
        product.querySelector(".quantity").textContent= 
        `Subtotal: $${subtotal.toFixed(2)}`

        grand += subtotal
        if(quantity > 0) hasItems = true
    });
}

})






