<template>
    <div class="products-item">
<div class="products-item__inner">
    <img :src="imgSrc" alt="" class="products-item__photo">
    <div class="products-item__content">
        <p class="products-item__description">
            {{ descr }}
        </p>
        <div class="products-item__rating">
           <StarRating :rating = "rating"/>
        </div>
        <div class="products-item__price">UAH {{ price }}</div>
    </div>
</div>
    </div>
</template>

<script>
import StarRating from '../StarRating.vue'
    export default {
        name:'ProductsItem',
        components:{
            StarRating
        },
        props:{
            descr:{
               type:String,
               default:''
            }, 
            rating:{
                type:Number,
                default:0
            },
            price:{
                type:Number,
                required: true
            },
            imgSrc:{
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.products-item {
  position: relative;
  width: 33.333%;
  padding: 0 15px;
  margin-bottom: 30px;
  &__inner {
    position: relative;
  }
  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }
  &__rating {
    margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }
  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>