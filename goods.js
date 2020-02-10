'use strict';
const  goods = [
    {
        name: "Пеперони",
        price: "200 грн",
        img: "img/pizza1.png",
        calories: 700,
        composition: {
                oliveOil: "Масло оливковое",
                basil: "Базилик",
                tomatoSauce:"Соус томатный",
                mozarella:" Сыр моцарелла",
                sausages: "колбаски",
                pepperoni: "пеперони",}
    },
    {
        name: "Жульен",
        price: "230 грн",
        img: "img/pizza2.png",
        calories: 650,
        composition:{
                champignon:"Шампиньоны",
                redOnion: "Лук красный",
                parsley:"Петрушка",
                mozarella:"Сыр моцарелла",
                edam:"Сыр эдам",
                cream:"сливки",
                chickenFillet:"Филе куриное"}


    },
    {
        name: "Мясное ассорти",
        price: "260 грн",
        img: "img/pizza3.png",
        calories: 800,
        composition: {
                oregano:"Орегано",
                oliveOil:"Масло оливковое",
                champignon:"Шампиньоны",
                huntingSausages:"Колбаски охотничьи",
                pepperoniSausages: "Колбаски пеперони",
                smokedChiken:"Курица копченая",
                bulgarianPepper:"Перец болгарский",
                pork:"Свинина",
                tomatoSauce:"Соус томатный",
                mozarella:"Сыр моцарелла"}
    },
    {
        name: "Четыре сыра",
        price: "270 грн",
        img: "img/pizza4.png",
        calories: 500,
        composition: {
                parmesan:"Сыр пармезан",
                dorBlue:"Сыр Дорблю",
                mozarella:"Сыр моцарелла",
                edam:"Сыр эдам",
                cream:"сливки"}
    },
    {
        name: "Мюнхенская",
        price: "260 грн",
        img: "img/pizza5.png",
        calories: 830,
        composition:{
                oliveOil:"Масло оливковое",
                salami:"Салями",
                huntingSausages:"Колбаски охотничьи",
                pepperoniSausages:"Колбаски пеперони",
                homeMadeSausages:"Колбаски домашние",
                redOnion:"Лук красный",
                parsley:"Петрушка",
                mozarella:"Сыр моцарелла",
                sweetAndSourSauce:"Соус кисло-сладкий"}
    },
    {
        name: "Пять сыров",
        price: "290 грн",
        img: "img/pizza6.png",
        calories:700,
        composition: {
                feta:"Сыр фета",
                dorBlue:"Сыр Дорблю",
                mozarella:"Сыр моцарелла",
                edam:"Сыр эдам",
                cream:"сливки",
                brie:"Сыр бри"}
    },
    {
        name: "Дон Бекон",
        price: "250 грн",
        img: "img/pizza7.png",
        calories:650,
        composition:{
                oregano:"Орегано",
                oliveOil:"Масло оливковое",
                bacon:"Бекон",
                pepperoniSausages:"Колбаски пеперони",
                redOnion:"Лук красный",
                tomatoSauce:"Соус томатный",
                mozarella:"Сыр моцарелла",
                chickenFillet:"Филе куриное"}
    },
    {
        name: "Кальцоне Бьянка  ",
        price: "230 грн",
        img: "img/pizza8.png",
        calories:625,
        composition: {
                ham:"Ветчина",
                champignon:"Шампиньоны",
                dorBlue:"Сыр Дорблю",
                mozarella:"Сыр моцарелла",
                cream:"сливки",
                mustard:"Горчица"}
    },
    {
        name: "Баварская",
        price: "245 грн",
        img: "img/pizza9.png",
        calories: 900,
        composition: {
                oliveOil:"Масло оливковое",
                champignon:"Шампиньоны",
                huntingSausages:"Колбаски охотничьи",
                pepperoniSausages:"Колбаски пеперони",
                homeMadeSausages:"Колбаски домашние",
                bulgarianPepper:"Перец болгарский",
                parsley:"Петрушка",
                tomatoSauce:"Соус томатный",
                mozarella:"Сыр моцарелла",
                mustard:"Горчица"}

    },
    {
        name: "Мексиканская",
        price: "300 грн",
        img: "img/pizza10.png",
        calories:870,
        composition: {
                oliveOil:"Масло оливковое",
                bacon:"Бекон",
                pepperoniSausages:"Колбаски пеперони",
                redOnion:"Лук красный",
                cherryTomatoes:"Помидоры черри",
                mozarella:"Сыр моцарелла",
                chickenFillet:"Филе куриное",
                barbecueSauce:"Соус барбекю",
                pickledHotPeppers:"Острый перец маринованый",
                groundBeef:"Фарш говяжий"}

    },
    {
        name: "Барбекю",
        price: "265 грн",
        img: "img/pizza11.png",
        calories:920,
        composition: {
                oliveOil:"Масло оливковое",
                bacon:"Бекон",
                huntingSausages:"Колбаски охотничьи",
                smokedChiken:"Курица копченая",
                parsley:"Петрушка",
                mozarella:"Сыр моцарелла",
                smokedCheesePigtail:"Сыр копченый косичка",
                barbecueSauce:"Соус барбекю"}
    },
    {
        name: "Дольче",
        price: "340 грн",
        img: "img/pizza12.png",
        calories:560,
        composition: {
                pineapple:"Ананас",
                mozarella:"Сыр моцарелла",
                edam:"Сыр эдам",
                chickenFillet:"Филе куриное",
                tigerShrimp:"Креветка тигровая",
                cheeseSauce:"Сырный соус"}

    },
    {
        name: "Маргарита",
        price: "200 грн",
        img: "img/pizza13.png",
        calories:740,
        composition: {
                oliveOil:"Масло оливковое",
                basil:"Базилик",
                tomato:"Помидор",
                tomatoSauce:"Соус томатный",
                mozarella:"Сыр моцарелла"}

    },
    {
        name: "Королевская",
        price: "350 грн",
        img: "img/pizza14.png",
        calories:725,
        composition: {
                blackOlives:"Маслины",
                smokedSalmon:"Лосось копченый",
                mozarella:"Сыр моцарелла",
                cream:"сливки",
                tigerShrimp:"Креветка тигровая"}

    },
    {
        name: "Вегетарианская",
        price: "215 грн",
        img: "img/pizza15.png",
        calories:430,
        composition: {
                oliveOil:"Масло оливковое",
                basil:"Базилик",
                champignon:"Шампиньоны",
                bulgarianPepper:"Перец болгарский",
                tomato:"Помидор",
                tomatoSauce:"Соус томатный",
                blackEyedPeas:"Спаржевая фасоль",
                mozarella:"Сыр моцарелла",
                corn:"кукуруза"}

    }
];

// console.log(goods);
//
// let out = '';
//
// for(let key in goods) {
//     out += '<img src = "'+goods[key].img+'" width="80px" height="80px">'
//     out += 'Название: '+goods[key].name + '</br>'
//     out += 'Цена: '+goods[key].price + '</br>'
//     out += 'Каллории: '+goods[key].calories + '</br>'
//     out += 'Состав: '+goods[key].composition + '</br>'
// }
//
// document.getElementById('out'). innerHTML = out;


