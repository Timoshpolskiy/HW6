'use strict';
let huntingSausages = {name: "колбаски охотничьи", price: 28, calories: 120, amount: 1};
let tomatoSauce = {name: "соус томатный", price: 5, calories: 8, amount: 1};
let barbecueSauce = {name: "соус Барбекю", price: 8, calories: 18, amount: 1};
let cheeseSauce = {name: "соус сырный", price: 3, calories: 5, amount: 1};
let redOnion = {name: "лук красный", price: 6, calories: 10, amount: 1};
let oliveOil = {name: "масло оливковое", price: 8, calories: 5, amount: 1};
let mozarella = {name: "сыр моцарелла", price: 15, calories: 30, amount: 1};
let oregano = {name: "орегано", price: 17, calories: 7, amount: 1};
let parsley = {name: "петрушка", price: 4, calories: 3, amount: 1};
let homeMadeSausages = {name: "домашние сосиски", price: 42, calories: 128, amount: 1};
let cream = {name: "сливки", price: 6, calories: 6, amount: 1};
let champignon = {name: "шампиньоны", price: 23, calories: 21, amount: 1};
let chickenFillet = {name: "филе куриное", price: 20, calories: 100, amount: 1};
let smokedChiken = {name: "курица копченная", price: 50, calories: 150, amount: 1};
let smokedSalmon = {name: "лосось копченный", price: 80, calories: 110, amount: 1};
let pork = {name: "свинина", price: 27, calories: 115, amount: 1};
let cherryTomatoes = {name: "помидоры черри", price: 16, calories: 14, amount: 1};
let parmesan = {name: "сыр пармезан", price: 18, calories: 25, amount: 1};
let basil = {name: "базилик", price: 7, calories: 5, amount: 1};
let bacon = {name: "бекон", price: 29, calories: 125, amount: 1};
let sweetAndSourSauce = {name: "Соус кисло-сладкий", price: 8, calories: 6, amount: 1};
let pineapple = {name: "ананасы", price: 21, calories: 15, amount: 1};
let bulgarianPepper = {name: "перец болгарский", price: 9, calories: 12, amount: 1};
let tomato = {name: "помидор", price: 14, calories: 11, amount: 1};
let mustard = {name: "горчица", price: 3, calories: 7, amount: 1};
let ham = {name: "ветчина", price: 24, calories: 123, amount: 1};
let salami = {name: "салями", price: 29, calories: 126, amount: 1};
let pepperoni = {name: "пепперони", price: 28, calories: 115, amount: 1};
let sausages = {name: "колбаски", price: 25, calories: 110, amount: 1};
let pepperoniSausages = {name: "колбаски Пепперони", price: 35, calories: 130, amount: 1};
let feta = {name: "сыр Фета", price: 28, calories: 32, amount: 1};
let brie = {name: "сыр Бри", price: 23, calories: 31, amount: 1};
let edam = {name: "сыр Эдам", price: 25, calories: 35, amount: 1};
let dorBlue = {name: "сыр Дорблю", price: 45, calories: 45, amount: 1};
let tigerShrimp = {name: "королевская криветка", price: 145, calories: 125, amount: 1};
let pickledHotPeppers = {name: "Острый перец маринованый", price: 16, calories: 4, amount: 1};
let groundBeef = {name: "говяжий фарш", price: 43, calories: 125, amount: 1};
let smokedCheesePigtail = {name: "Сыр копченый косичка", price: 15, calories: 9, amount: 1};
let blackEyedPeas = {name: "Спаржевая фасоль", price: 14, calories: 8, amount: 1};
let corn = {name: "кукуруза", price: 8, calories: 5, amount: 1};
let blackOlives = {name: "маслины", price: 5, calories: 5, amount: 1};

const  goods = [
    {
        name: "Пеперони",
        img: "img/pizza1.png",
        composition: {oliveOil,basil,tomatoSauce,mozarella,sausages,pepperoni,}
    },
    {
        name: "Жульен",
        img: "img/pizza2.png",
        composition:{champignon, redOnion, parsley, mozarella, edam, cream, chickenFillet}


    },
    {
        name: "Мясное ассорти",
        img: "img/pizza3.png",
        composition: {oregano, oliveOil, champignon, huntingSausages, pepperoniSausages, smokedChiken, bulgarianPepper, pork, tomatoSauce, mozarella}
    },
    {
        name: "Четыре сыра",
        img: "img/pizza4.png",
        composition: {parmesan, dorBlue, mozarella, edam, cream}
    },
    {
        name: "Мюнхенская",
        img: "img/pizza5.png",
        composition:{oliveOil, salami, huntingSausages, pepperoniSausages, homeMadeSausages, redOnion, parsley, mozarella, sweetAndSourSauce}
    },
    {
        name: "Пять сыров",
        img: "img/pizza6.png",
        composition: {feta, dorBlue, mozarella, edam, cream, brie}
    },
    {
        name: "Дон Бекон",
        img: "img/pizza7.png",
        composition:{oregano, oliveOil, bacon, pepperoniSausages, redOnion, tomatoSauce, mozarella, chickenFillet}
    },
    {
        name: "Кальцоне Бьянка  ",
        img: "img/pizza8.png",
        composition: {ham, champignon, dorBlue, mozarella, cream, mustard}
    },
    {
        name: "Баварская",
        img: "img/pizza9.png",
        composition: {oliveOil, champignon, huntingSausages, pepperoniSausages, homeMadeSausages, bulgarianPepper, parsley, tomatoSauce,mozarella, mustard}

    },
    {
        name: "Мексиканская",
        img: "img/pizza10.png",
        composition: {oliveOil, bacon, pepperoniSausages, redOnion, cherryTomatoes, mozarella, chickenFillet, barbecueSauce, pickledHotPeppers, groundBeef}

    },
    {
        name: "Барбекю",
        img: "img/pizza11.png",
        composition: {oliveOil, bacon, huntingSausages, smokedChiken, parsley, mozarella, smokedCheesePigtail, barbecueSauce}
    },
    {
        name: "Дольче",
        img: "img/pizza12.png",
        composition: {pineapple, mozarella, edam, chickenFillet, tigerShrimp, cheeseSauce}

    },
    {
        name: "Маргарита",
        img: "img/pizza13.png",
        composition: {oliveOil, basil, tomato, tomatoSauce, mozarella}

    },
    {
        name: "Королевская",
        img: "img/pizza14.png",
        composition: {blackOlives, smokedSalmon, mozarella, cream, tigerShrimp}

    },
    {
        name: "Вегетарианская",
        img: "img/pizza15.png",
        composition: {oliveOil, basil, champignon, bulgarianPepper, tomato, tomatoSauce, blackEyedPeas, mozarella, corn}

    }
];
