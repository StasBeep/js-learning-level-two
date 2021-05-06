class Specifications {
    constructor(el) {
        this.calories = +el.dataset['calories'];
        this.price = +el.dataset['price'];
    }
}

class Burger {
    constructor(bun, cheese, meat, additional) {
        this.bun = new Specifications(this._select(bun));
        this.cheese = new Specifications(this._select(cheese));
        this.meat = new Specifications(this._select(meat));
        this.additional = this._getAdditionalAll(additional);
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _getAdditionalAll(name) {
        let array = [];
        this._selectAll(name).forEach((el) => array.push(new Specifications(el)));
        return array;
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }

    _sumCalories() {
        let sum = this.bun.calories + this.cheese.calories + this.meat.calories;
        this.additional.forEach((el) => sum += el.calories);
        return sum;
    }

    _sumPrice() {
        let sum = this.bun.price + this.cheese.price + this.meat.price;
        this.additional.forEach((el) => sum += el.price);
        return sum;
    }

    showSum(calories, price) {
        document.querySelector(calories).textContent = this._sumCalories();
        document.querySelector(price).textContent = this._sumPrice();
    }
}

window.onload = () => {
    document.getElementById('check').addEventListener('click', () => {
        let burger = new Burger('bun', 'cheese', 'meat', 'additional');
        burger.showSum('#calories', '#price');
    })
}