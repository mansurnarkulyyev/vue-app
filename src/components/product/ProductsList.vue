<template>
<Container>
    <slot name="title"></slot>

     <div class="products-list">    
         <template v-for="product in items">
            <slot name="product" v-bind:product="product"></slot>
         </template>
        </div>
        <!-- <slot name="description"></slot> -->
</Container>
</template>

<script>
import Container from '../shared/Container.vue'
    export default {
        components:{
            Container,
        },
        props:{
            items:{
                type:Array,
                default: () => [],
            }
        }
    }
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>