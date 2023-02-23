<template>
    <main class="homepage">
       
        <Container>
                <ProductFilterForm @submit="filter" :filters="filters" class="products-filter"/>
            </Container>
            <Container>
                <p v-if="!filteredProducts.length">Ничего не найдено</p>
                <ProductsList :items="filteredProducts">

                    <template v-slot:product="{ product }">
                        <ProductsItem 
                        :key="product.id" 
                        :id="product.id" 
                        :descr="product.description" 
                        :rating="product.rating.rate"
                            :price="product.price"
                             :imgSrc="product.image"
                             />
                    </template>
                    <!-- пример как передавать слоты через пропс, этот слот забераем с продуктлист -->
                    <!-- <template v-slot:description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum voluptates possimus doloremque quisquam ad non. Nam excepturi debitis quisquam aspernatur sunt laboriosam quia dolorem aut impedit inventore, quibusdam quidem.</template> -->
                </ProductsList>
            </Container>
    </main>

</template>

<script>

import ProductsList from '../components/product/ProductsList.vue'
// import products from '../components/product/products'
import ProductsItem from '../components/product/ProductsItem.vue'
import Container from '../components/shared/Container.vue'
import ProductFilterForm from '../components/product/ProductFilterForm.vue'
import { getProductList } from '@/services/products-service'


export default {
    name: 'App',
    components: {
        ProductsList,
        ProductsItem,
        Container,
        ProductFilterForm,
    },
    // data нужен для того что бы изменятть свой state то есть свое состояние 
    data() {
        return {
            text: '',
            products:[],
            filters: {
                city: '',
                price: 0
            }
        }
    },
    inheritAttrs: false,
    computed: {
        filteredProducts() {
            return this.filterByCityName(this.filterByPrice(this.products))
        }
    },

    async created(){
        try{
            const {data } = await getProductList();
            this.products = data;

        }catch(error){
            console.error(error);
        }
    },

    methods: {
        filter({ city, price }) {
            this.filters.city = city
            this.filters.price = price
        },
        filterByCityName(products) {
            if (!this.filter.city) return products

            return products.filter(product => {
                return product.location.city === this.filters.city
            })
        },
        filterByPrice(products) {
            if (!this.filter.price) return products

            return products.filter(product => {
                return product.price >= this.filters.price
            })
        }
    }

}
</script>

<style lang="scss" scoped>

// .products-filter {
//     margin-bottom: 40px;
// }
</style>
