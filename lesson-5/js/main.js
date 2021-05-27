const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        cartUrl: '/getBasket.json',
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',

        searchLine: '',
        searchArr: [],

        isVisibleCart: {
            type: Boolean,
            default: false,
        },

        cartArr: [],
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product);
        },

        filterGoods() {
            //console.log(this.searchArr);
            let reg = new RegExp(this.searchLine, 'i');
            this.searchArr = this.products.filter(product => reg.test(product.product_name));
            //console.log(this.searchArr);
        },

    },
    beforeCreate() {},
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.searchArr.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartArr.push(el);
                }
            })
    },
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
});