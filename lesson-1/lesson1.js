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

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
}

const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    // ? Вывод совершается с запятой, так как переменная состоит из массива разметки с запятой
    // ? для того, чтобы обойти этот момент, проще всего через цикл вывести содержимое массива
    // * document.querySelector(".products").innerHTML = productList;

    productList.forEach((product) =>{
        document.querySelector('.products').insertAdjacentHTML("beforeend", product);
    });
}

renderProducts(products);