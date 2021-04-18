"use strict";
const products = [{
        id: 1,
        title: 'Netbook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },
];

/**
 * Создание разметки для карточки товара
 * @param {string} переменная заголовка товара 
 * @param {number} переменная цены товара 
 * @returns {string} разметка страницы
 */
const renderProduct = ({title}, {price}) => {
    return `<div class="products-item">
                <h3 class="products-title">${title}</h3>
                <p class="products-price">${price}</p>
                <button class="products-by-btn">Добавить в корзину</button>
            </div>`;
}

/**
 * Создание разметки (в переменной), вывод разметки на страницу
 * @param {array} list массив объектов для разметки 
 */
const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item, item);
    });

    // ? Вывод совершается с запятой, так как переменная состоит из массива разметки с запятой
    // ? для того, чтобы обойти этот момент, проще всего через цикл вывести содержимое массива
    // * document.querySelector(".products").innerHTML = productList;

    productList.forEach((product) => {
        document.querySelector('.products').insertAdjacentHTML("beforeend", product);
    });
}

// Можно было деконструрировать объект, выделить переменные, и передавать переменные, вместо всего объекта
renderProducts(products);