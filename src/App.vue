<template>
<h2>{{ text }}</h2>
<!-- <input type="text" v-model="text" class="custom-input"> -->
<CustomSelect :items="['name','label', 'salary']"/>
<CustomInput v-model="text" />

     <ProductsList :items="products">

      <template v-slot:product="{product}">
        <ProductsItem
             :key="product.id"
              :descr="product.description"
                  :rating="product.rating.rate"
                  :price="product.price"
                  :imgSrc="product.image"
                  @click="handleEventClick"
             />
  </template>
        <!-- пример как передавать слоты через пропс, этот слот забераем с продуктлист -->
     <!-- <template v-slot:description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum voluptates possimus doloremque quisquam ad non. Nam excepturi debitis quisquam aspernatur sunt laboriosam quia dolorem aut impedit inventore, quibusdam quidem.</template> -->
     </ProductsList>
</template>

<script>

import ProductsList from './components/product/ProductsList.vue'
import products from './components/product/products'
import ProductsItem from './components/product/ProductsItem.vue'
import CustomInput from './components/shared/CustomInput.vue'
import CustomSelect from './components/shared/CustomSelect.vue'

export default {
  name: 'App',
  components: {
   ProductsList,
   ProductsItem,
   CustomInput,
   CustomSelect,
  },
        // data нужен для того что бы изменятть свой state то есть свое состояние 
   data() {
    return {
      text: '',
      products,
    }
  },
  methods:{
    handleEventClick(){
      console.log("HandleEventClicked")
    }
  }

}
</script>

<style lang="scss" scoped>

#app {
  font-family: Monserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
