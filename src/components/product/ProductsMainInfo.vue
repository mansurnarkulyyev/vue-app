<template>
    <article class="product-main-info">
        <div class="product-main-info__heading">
            <h1 class="product-main-info__title">{{ product.title }}</h1>
            <Rating :rating="product.rating.rate" />
        </div>
        <img :src="product.image" alt="" class="product-main-info__photo" />
        <p class="product-main-info__description">{{ product.description }}</p>
        <div class="product-main-info__btn">
            <Button @click="handleProductsBooking" :loading="isLoading">
                Заказать
            </Button>
        </div>
    </article>
</template>

<script>
import Rating from '../StarRating';
import Button from '../shared/Button';
// import { bookProduct } from '../../services/order.service';
export default {
    name: 'P roductsMainInfo',
    components: {
        Rating,
        Button,
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isLoading: false,
        };
    },
    // methods: {
    //     async handleProductsBooking() {
    //         const body = {
    //             productId: this.$route.params.id,
    //             date: Date.now(),
    //         };
    //         try {
    //             this.isLoading = true;
    //             await bookProduct(body);
    //             this.$notify({
    //                 type: 'success',
    //                 title: 'Заказ добавлен',
    //             });
    //         } catch (error) {
    //             this.$notify({
    //                 type: 'error',
    //                 title: 'Произошла ошибка',
    //                 text: error.message,
    //             });
    //         } finally {
    //             this.isLoading = false;
    //         }
    //     },
    // },
};
</script>

<style lang="scss" scoped>
.product-main-info {
    &__heading {
        display: flex;
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 20px;
        margin-right: 20px;
    }

    &__photo {
        max-width: 100%;
    }

    &__description {
        line-height: 1.3;
        margin-top: 30px;
    }

    &__btn {
        margin-top: 20px;
        text-align: center;
    }
}</style>