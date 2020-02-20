//cart
let carts = document.querySelectorAll('.product-card__add-cart');
let cartAmount = document.querySelector('.cart__amount');
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        cartAmount.textContent = productNumbers;
        cartAmount.classList.remove('hidden');
    }
}
onLoadCartNumbers();
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart__amount').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart__amount').textContent = 1;
        cartAmount.classList.remove('hidden');
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart +=1;

    } else{
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }

    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}