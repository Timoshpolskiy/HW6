'use strict';
let allIngredientes = {};
function createAllIngredients(allIngredientes){
    for(let i = 0; i < goods.length; i++){
        for(let ingredient in goods[i].composition){
            allIngredientes[ingredient] = goods[i].composition[ingredient];
        }
    }
}
createAllIngredients(allIngredientes);
let productsView = 'tile';

let tile = document.querySelector('.tile');
let list = document.querySelector('.list');

tile.addEventListener('click', function(){
    if(productsView !== 'tile'){
        productsView = 'tile';
        clearProducts();
        if(filteredArr.length !== 0){
            renderProducts(filteredArr, productsView);
        } else{
            renderProducts(goods, productsView);
        }
    } else{
    }
});
list.addEventListener('click', function(){
    if(productsView !== 'list'){
        productsView = 'list';
        clearProducts();
        if(filteredArr.length !== 0){
            renderProducts(filteredArr, productsView);
        } else{
            renderProducts(goods, productsView);
        }
    }
});

function sortNamesToLow(goods){
    goods.sort((a, b) => a.name.replace(/ /g, "") > b.name.replace(/ /g, "") ? 1 : -1);
}
function sortNamesToHigh(goods){
    goods.sort((a, b) => a.name.replace(/ /g, "") < b.name.replace(/ /g, "") ? 1 : -1);
}
function sortPricesToHigh(goods){
    goods.sort((a, b) => a.price - b.price);
}

function sortPricesToLow(goods){
    goods.sort((a, b) => b.price - a.price);
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
let productsList = document.querySelector('.products-list');
function renderProducts(goods, productsView){
    if(productsView === 'tile'){
        for(let i = 0; i < goods.length; i++){
            var productCard = document.createElement("div");
            productCard.classList.add('product-card');
            var cardSideFront = document.createElement("div");
            cardSideFront.classList.add('card-side', 'product-card__front');
            var cardSideBack = document.createElement("div");
            cardSideBack.classList.add("card-side", "product-card__back");
            var productCardName = document.createElement('h4');
            productCardName.classList.add('product-card__name');
            productCardName.innerText = goods[i].name;
            var productCardIngredients = document.createElement('div');
            productCardIngredients.classList.add('product-card__ingredients');
            var productCardIngredientsTitle = document.createElement('span');
            productCardIngredientsTitle.classList.add('product-card__ingredients-title');
            productCardIngredientsTitle.innerText = "Состав: ";
            var ingredientsList = document.createElement('ul');
            for(var key in goods[i].composition){
                var ingredient = document.createElement('li');
                if(Object.keys(goods[i].composition)[Object.keys(goods[i].composition).length - 1] === key){
                    ingredient.innerText = goods[i].composition[key].name;
                } else if(Object.keys(goods[i].composition)[Object.keys(goods[i].composition).length - 1] !== key){
                    ingredient.innerText = goods[i].composition[key].name+ ", ";
                }
                ingredientsList.appendChild(ingredient);
            }
            var changeIngredientes = document.createElement('a');
            changeIngredientes.href = '#';
            changeIngredientes.classList.add('product-card__add-ingredients');
            changeIngredientes.innerText = 'Изменить состав пиццы';
            var productCardCalorie = document.createElement('div');
            productCardCalorie.classList.add('product-card__calorie');
            var productCardCalorieTitle = document.createElement('span');
            productCardCalorieTitle.classList.add("product-card__calorie-title");
            productCardCalorieTitle.innerText = "Калорийность: ";
            var caloriesSum = 10;
            for (var key in goods[i].composition){
                var productCardCaloresSum = document.createElement('span');
                caloriesSum += goods[i].composition[key].calories*goods[i].composition[key].amount;
            }
            goods[i].calories = caloriesSum;
            productCardCaloresSum.innerText = caloriesSum + " Ккал.";
            var productCardPrice = document.createElement('h5');
            productCardPrice.classList.add('product-card-price-tile');
            var productCardPriceTitle = document.createElement('span');
            productCardPriceTitle.classList.add('product-card__price-title');
            productCardPriceTitle.innerText = "Цена: ";
            var priceSum = 60;
            for (var key in goods[i].composition){
                var productCardPriceValue = document.createElement('span');
                priceSum += goods[i].composition[key].price*goods[i].composition[key].amount;
            }
            goods[i].price = priceSum;
            productCardPriceValue.innerText = priceSum + " грн.";

            var addToCartProduct = document.createElement('a');
            addToCartProduct.href = '#';
            addToCartProduct.classList.add('product-card__add-cart');
            addToCartProduct.innerText = 'Добавить в корзину';
            var productCardImg = document.createElement('div');
            productCardImg.classList.add('product-card__img');
            productCardImg.setAttribute("style", "background-image: url(" + goods[i].img + ")");

            productsList.append(productCard);
            productCard.append(cardSideFront);
            productCard.append(cardSideBack);
            cardSideFront.append(productCardName);
            cardSideFront.append(productCardIngredients);
            cardSideFront.append(changeIngredientes);
            cardSideFront.append(productCardCalorie);
            cardSideFront.append(productCardPrice);
            cardSideFront.append(addToCartProduct);
            cardSideBack.append(productCardImg);
            productCardIngredients.append(productCardIngredientsTitle);
            productCardIngredients.append(ingredientsList);
            productCardCalorie.append(productCardCalorieTitle);
            productCardCalorie.append(productCardCaloresSum);
            productCardPrice.append(productCardPriceTitle);
            productCardPrice.append(productCardPriceValue);
        }
    } else if (productsView === 'list'){
        for(let i = 0; i < goods.length; i++){
            var productCard = document.createElement("div");
            productCard.classList.add('product-card--list');
            var productCardLogo = document.createElement('div');
            productCardLogo.classList.add('product-card__logo');
            var productCardInfo = document.createElement('div');
            productCardInfo.classList.add('product-card__info');
            var productCardName = document.createElement('h4');
            productCardName.classList.add('product-card__name', 'product-card__name--list');
            productCardName.innerText = goods[i].name;
            var productCardPriceList = document.createElement('h5');
            productCardPriceList.classList.add('product-card-price-list');
            productCardPriceList.innerText = goods[i].price + " грн.";
            var basket = document.createElement('button');
            basket.href = '#';
            basket.classList.add('product-card__basket');
            basket.innerText = 'Добавить в корзину';

            productsList.append(productCard);
            productCard.append(productCardLogo);
            productCard.append(productCardInfo);
            productCardInfo.append(productCardName);
            productCardInfo.append(productCardPriceList);
            // productsList.append(basket);
        }
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

renderProducts(goods, productsView);
function renderPopup(target){
    // Ingr menu
    var titleModal = document.createElement('h5');
    titleModal.classList.add('product-modal__title');
    titleModal.innerText = target.parentElement.querySelector('.product-card__name').innerText;
    var priceCaliriesModal = document.createElement('div');
    priceCaliriesModal.classList.add('product-modal__price-calories');
    var priceModal = document.createElement('div');
    var priceModalText = document.createElement('span');
    priceModalText.innerText = "Цена: ";
    var priceModalValue = document.createElement('span');

    var caloriesModal = document.createElement('div');
    var caloriesModalText = document.createElement('span');
    caloriesModalText.innerText = "Калории: ";
    var caloriesModalValue = document.createElement('span');

    var ingredientsModal = document.createElement('div');
    ingredientsModal.classList.add('product-modal__ingredient-wrapper');
    var compositionModal = document.createElement('span');
    compositionModal.classList.add('product-modal__composition');
    compositionModal.innerText = 'Состав: ';
    var ingredientsModalNotChecked = document.createElement('div');
    var addIngredients = document.createElement('h5');
    addIngredients.classList.add('product-modal__add');
    addIngredients.innerText = 'Добавить ингредиенты';
    ingredientsModalNotChecked.classList.add('product-modal__ingredient-wrapper-bottom');
    for(let i = 0; i< goods.length; i++){
        if(target.parentElement.querySelector('.product-card__name').innerText === goods[i].name){
            var priceSum = 60;
            var caloriesSum = 10;
            for (var key in goods[i].composition){
                priceSum += goods[i].composition[key].price*goods[i].composition[key].amount;
                caloriesSum += goods[i].composition[key].calories*goods[i].composition[key].amount;
            }
            goods[i].price = priceSum;
            priceModalValue.innerText = goods[i].price + " грн.";
            goods[i].calories = caloriesSum;
            caloriesModalValue.innerText = goods[i].calories + " Ккал.";
            for(let ingredient in goods[i].composition){
                if(goods[i].composition[ingredient].amount == 1){
                    let ingredientsModalItem = document.createElement('span');
                    ingredientsModalItem.classList.add('product-modal__ingredient-item');
                    ingredientsModalItem.innerText = goods[i].composition[ingredient].name + ", ";
                    ingredientsModalItem.dataset.amount = 1;
                    ingredientsModalItem.dataset.name = ingredient;
                    ingredientsModal.append(ingredientsModalItem);
                }
            }
            for (let ingredient in allIngredientes){
                for(let defaultIngredient in goods[i].ingredients){
                    if(goods[i].composition[defaultIngredient].name == allIngredientes[ingredient].name){
                        delete allIngredientes[ingredient];
                        break;
                    }
                }
            }
            for(let ingredient in allIngredientes){
                let ingredientsModalItemNotChecked = document.createElement('span');
                ingredientsModalItemNotChecked.classList.add('product-modal__ingredient-item');
                ingredientsModalItemNotChecked.innerText = allIngredientes[ingredient].name + ", ";
                ingredientsModalItemNotChecked.dataset.amount = 0;
                ingredientsModalItemNotChecked.dataset.name = ingredient;
                ingredientsModalNotChecked.append(ingredientsModalItemNotChecked);
            }
        }
    }
    popUpContent.append(titleModal);
    popUpContent.append(priceCaliriesModal);
    priceCaliriesModal.append(priceModal);
    priceModal.append(priceModalText);
    priceModal.append(priceModalValue);
    priceCaliriesModal.append(caloriesModal);
    caloriesModal.append(caloriesModalText);
    caloriesModal.append(caloriesModalValue);
    popUpContent.append(compositionModal);
    popUpContent.append(ingredientsModal);
    popUpContent.append(addIngredients);
    popUpContent.append(ingredientsModalNotChecked);
}
// Return card
let target;
let allCardsTiles = document.querySelector('.products-list');
let overlay = document.querySelector('.overlay');
let popUp = document.querySelector('.pop-up');
let popUpContent = document.querySelector('.pop-up-content');
let body = document.querySelector('body');
if(productsView === 'tile'){
    allCardsTiles.addEventListener( 'click', function(e) {
        if(e.target.closest('.product-card') && e.target.closest('.product-card__add-ingredients') === null && e.target.closest('.product-card__add-cart') === null){
            e.target.closest('.product-card').classList.toggle('rotated');
        } else if(e.target.closest('.product-card__add-ingredients')){
            createAllIngredients(allIngredientes);
            target = e.target;
            overlay.classList.add('visible');
            body.classList.add('overflow');
            renderPopup(target);
        } else if(e.target.closest('.product-card__add-cart')){
            for(let i = 0; i< goods.length; i++){
                if(e.target.parentElement.querySelector('.product-card__name').innerText === goods[i].name){
                    cartNumbers(goods[i]);
                }
            }
        }
    });
}
// Add or remove ingr
popUpContent.addEventListener('click', function(e){
    if(e.target.classList == 'product-modal__ingredient-item'){
        for(let i = 0; i< goods.length; i++){
            if(target.parentElement.parentElement.querySelector('.product-card__name').innerText === goods[i].name){
                if(e.target.dataset.amount == '1'){
                    allIngredientes[e.target.dataset.name] = goods[i].composition[e.target.dataset.name];
                    delete goods[i].composition[e.target.dataset.name];

                } else if( e.target.dataset.amount == '0'){
                    goods[i].composition[e.target.dataset.name] = allIngredientes[e.target.dataset.name];
                }
            }
        }
        popUpClear();
        renderPopup(target);
    }
});
// Close ingr menu
let popupClose = document.querySelector('.pop-up__close');
popupClose.addEventListener('click', function(){
    clearProducts();
    renderProducts(goods,productsView);
    overlay.classList.remove('visible');
    body.classList.remove('overflow');
    popUpClear();
});

//Clear ingr menu
function popUpClear(){
    popUpContent.innerText = '';
}