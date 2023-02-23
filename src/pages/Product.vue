<template>
     <main class="product-page">
        <Container>
             <div v-if="product" class="product-page__content">
                <ProductsMainInfo :product="product"/>
                <div class="product-page__additional-info">
                <!-- <ProductsOwner 
                    class="product-page__owner"
                     :owner="product.owner"
                     /> -->
                      <ProductReviews :reviews="reviewsList" />
                </div>

            </div>
        </Container>
     </main>
</template>

<script>
import Container from '../components/shared/Container.vue'
// import products from '../components/product/products'
import ProductsMainInfo from '../components/product/ProductsMainInfo.vue'
// import ProductsOwner from '../components/product/ProductsOwner.vue'
import ProductReviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';
import { getProductListById } from '@/services/products-service';
    export default {
        name:'ProductPage',
        components:{
            Container,
            ProductsMainInfo,
            // ProductsOwner,
            ProductReviews,
        },
        data(){
            return{ 
                product: null
            }
        },
        computed:{
            reviewsList(){
                return reviewsList;
            },
            // product(){
            //     return products.find(
            //         (product) => product.id === this.$route.params.id
            //     )
            // }
        },
        async created(){
            try {
                const {id} = this.$route.params;
                const {data} = await getProductListById(id) 
                console.log(data);
                this.product = data
            } catch (error) {
                console.error(error); 
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.product-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>