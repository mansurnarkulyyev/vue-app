<template>
    <div>
        <Container>
           <ProductsMainInfo :product="product"/>
        </Container>
    </div>
</template>

<script>
import Container from '../components/shared/Container.vue'
import products from '../components/product/products'
import ProductsMainInfo from '../components/product/ProductsMainInfo.vue'

    export default {
        name:'ProductPage',
        components:{
            Container,
            ProductsMainInfo,
        },
        computed:{
            product(){
                return products.find(
                    (product) => product.id === this.$route.params.id
                )
            }
        },
        mounted(){
            console.log(this.product);
            console.log(this.route);
        }
        
    }
</script>

<style lang="scss" scoped>

</style>