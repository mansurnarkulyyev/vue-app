<template>
     <main class="product-page">
        <Container>
             <div  class="product-page__content">
                <ProductsMainInfo :product="product"/>
                <div class="apartment-page__additional-info">
                <ProductsOwner 
                    class="product-page__owner"
                     :owner="product.owner"/>
                      <ProductReviews :reviews="reviewsList" />
                </div>

            </div>
        </Container>
     </main>
</template>

<script>
import Container from '../components/shared/Container.vue'
import products from '../components/product/products'
import ProductsMainInfo from '../components/product/ProductsMainInfo.vue'
import ProductsOwner from '../components/product/ProductsOwner.vue'
import ProductReviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';

    export default {
        name:'ProductPage',
        components:{
            Container,
            ProductsMainInfo,
            ProductsOwner,
            ProductReviews,
        },
        computed:{
            reviewsList(){
                return reviewsList;
            },
            product(){
                return products.find(
                    (product) => product.id === this.$route.params.id
                )
            }
        },
      
        
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