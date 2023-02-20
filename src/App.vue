<template>
     <ProductsItem
      :descr="product.description"
      :rating="product.rating.rate"
      :price="product.price"
      :imgSrc="product.image"
      />
</template>

<script>

import ProductsItem from './components/product/ProductsItem.vue'

export default {
  name: 'App',
  components: {
   ProductsItem,
  },
        // data нужен для того что бы изменятть свой state то есть свое состояние 
         data() {
    return {
      product: {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
          rate: 4.1,
          count: 259
        }
      }
    }
  }

}
</script>

<style>
#app {
  font-family: Monserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
