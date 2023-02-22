<template>
    <section class="products-owner">
        <h2 class="products-owner__title">Информация о владельце:</h2>
        <p class="products-owner__info">{{ owner.name }}</p>
        <p class="products-owner__info">tel: {{ owner.phone }}</p>
        <p class="products-owner__info">email: {{ owner.email }}</p>
    </section>
</template>

<script>
export default {
    name: 'ProductsOwner',
    props: {
        owner: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.products-owner {
    padding: 20px;
    background: $card-bg;
    font-weight: 400;

    &__title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    &__info {
        margin-top: 6px;
    }
}</style>