'use strict';

// let productsList = document.querySelector('.product-list');

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.pop-up');
let productsView = '';
modal.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.closest('.pop-up__button--tile')){
        productsView = 'tile';
        overlay.classList.remove('visible');
        renderProducts(goods, productsView);
    } else if(e.target.closest('.pop-up__button--list')){
        productsView = 'list';
        overlay.classList.remove('visible');
        renderProducts(goods, productsView);
    }

});

function sortNamesToLow(goods){
    goods.sort((a, b) => a.name.replace(/ /g, "") > b.name.replace(/ /g, "") ? 1 : -1);
}
function sortNamesToHigh(goods){
    goods.sort((a, b) => a.name.replace(/ /g, "") < b.name.replace(/ /g, "") ? 1 : -1);
}
function sortPricesToHigh(goods){
    goods.sort(function (a, b) {
        return +a.price.replace(/\D/g, "") > +b.price.replace(/\D/g, "") ? 1 : -1});
}

function sortPricesToLow(goods){
    goods.sort(function (a, b) {
        return +a.price.replace(/\D/g, "") > +b.price.replace(/\D/g, "") ? -1 : 1});
}
let filteredArr = [];
function filterIngredients(checkedIngredientes, goods){
    filteredArr = [];
    for(let i = 0; i < goods.length; i++){
        if(checkIncludesIngredients(checkedIngredientes, goods[i].composition)){
            filteredArr.push(goods[i]);
        }
    }
}
function checkIncludesIngredients(checkedIngredientes, pizzaObj){
    let counter = 0;
    for(let i = 0; i < checkedIngredientes.length; i++){
        if(checkedIngredientes[i] in pizzaObj){
            counter++;
        }
    }
    if(counter === checkedIngredientes.length){
        return true;
    } else {
        return false;
    }
}

function clearProducts(){
    let productsCont = document.querySelector('.products-list');
    productsCont.innerHTML = '';
}
function renderProducts(goods, productsView){
    let newHtml;
    let productCard;
    if(productsView === 'tile'){
        productCard = `         
                    <div class="product-card">
                        <div class="product-card__img" style='background-image: url("%product-image%")'></div>                    
                        <h4 class="product-card__name">%pizza-name%</h4>
                        <div class="product-card__ingredients"><span class="product-card__ingredients-title">Состав: </span>%composition%</div>
                        <div class="product-card__calorie"><span class="product-card__calorie-title">Калорийность: </span>%calories%</div>
                        <h5 class="product-card-price-tile"><span class="product-card__price-title">Цена: <span class="product-card__price">%price%</h5>
                    </div>`;
    } else if (productsView === 'list'){
        productCard = `         
                    <div class="product-card--list">
                        <div class="product-card__logo"></div>
                        <div class="product-card__info">
                            <h4 class="product-card__name product-card__name--list">%pizza-name%</h4>
                            <h5 class="product-card-price-list">%price%</h5>
                        </div>
                    </div>`;
    }


    for(let i = 0; i < goods.length; i++){
        newHtml = productCard.replace('%product-image%', goods[i].img);
        newHtml = newHtml.replace('%pizza-name%', goods[i].name);
        newHtml = newHtml.replace('%composition%', Object.values(goods[i].composition).join(", "));
        newHtml = newHtml.replace('%calories%', goods[i].calories);
        newHtml = newHtml.replace('%price%', goods[i].price);
        document.querySelector('.products-list').insertAdjacentHTML("beforeend", newHtml);
    }
}
let namesSelect = document.querySelector('.names-select');
let priceSelect = document.querySelector('.price-select');
//filter by name show
namesSelect.addEventListener('change', function(){
    if(priceSelect.value !== 'none'){
        priceSelect.value = 'none';
    }
    if (this.value === 'namesToLow'){
        if(filteredArr.length !== 0){
            sortNamesToLow(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortNamesToLow(goods);
            clearProducts();
            renderProducts(goods, productsView);
        }
    } else if (this.value === 'namesToHigh'){
        if(filteredArr.length !== 0){
            sortNamesToHigh(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortNamesToHigh(goods);
            clearProducts();
            renderProducts(goods, productsView);
        }
    }
});
//Filter by price show
priceSelect.addEventListener('change', function(){
    if(namesSelect.value !== 'none'){
        namesSelect.value = 'none';
    }
    if (this.value === 'priceToHigh'){
        if(filteredArr.length !== 0){
            sortPricesToHigh(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortPricesToHigh(goods);
            clearProducts();
            renderProducts(goods, productsView);
        }

    } else if (this.value === 'priceToLow'){
        if(filteredArr.length !== 0){
            sortPricesToLow(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortPricesToLow(goods);
            clearProducts();
            renderProducts(goods, productsView);
        }
    }
});

//Filter by ingridients
let checkedIngredientes = [];
let checkedIngredientesUl = document.querySelector('.products-filter__ingredients-list');
let checkedIngredientesLi = document.querySelectorAll('.products-filter__ingredients-item');
checkedIngredientesUl.addEventListener('click', function(e){
    if (e.target.classList == 'products-filter__checkbox'){
        for (let i = 0; i < checkedIngredientesLi.length; i++){
            if(checkedIngredientesLi[i].querySelector('input').checked){
                checkedIngredientes.push(checkedIngredientesLi[i].querySelector('input').name);
            }
        }
        clearProducts();
        if(namesSelect.value === 'namesToLow'){
            sortNamesToLow(goods);
        } else if (namesSelect.value === 'namesToHigh'){
            sortNamesToHigh(goods);
        } else if(priceSelect.value === 'priceToLow'){
            sortPricesToLow(goods);
        } else if (priceSelect.value === 'priceToHigh'){
            sortPricesToHigh(goods);
        }
        filterIngredients(checkedIngredientes, goods);
        renderProducts(filteredArr, productsView);
        checkedIngredientes = [];
    }
});
