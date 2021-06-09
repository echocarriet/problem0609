import productModal from './productModal.js';

const apiUrl = 'https://vue3-course-api.hexschool.io/';
const apiPath = 'carrie';

const app = Vue.createApp({
    data() {
        return {
            loadingStatus: {   //讀取效果
                loadingItem: '',
            },
            products: [], //產品列表
            product: {},  //props 傳遞到內層的暫存資料　
            form: {  //表單結構 (API結帳頁面)
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: ''
                },
                message: ''
            },
            cart: {}, //購物車列表
        }
    },
    methods: {
        getProducts() {
            const url = `${apiUrl}api/${apiPath}/products`;
            axios.get(url)
                .then((res) => {
                    if (res.data.success) {
                        console.log(res);
                        this.products = res.data.products;
                    } else {
                        console.log(res.data.messages);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        openModal() {
            // this.$refs.userProductModal.openModal(); //讀不到 ?
            console.log(`kkk`);  // 有讀到 ?
        },
    },
    mounted() {
        this.getProducts();
    },
});

app.component('userProductModal', productModal);

app.mount('#app');

