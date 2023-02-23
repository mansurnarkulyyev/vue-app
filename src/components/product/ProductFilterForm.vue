<template>
    <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city"  class="form__select"/>
    <CustomInput  class="form__submit" 

    v-model="price"

          placeholder="Цена, от"
          error-message="Не должно быть пустым"
          :rules="rules"
          />

    <SubmitButton class="form__submit" type="submit">
        Подбор продукта
    </SubmitButton>
    </form>
</template> 

<script>
import CustomInput from '../shared/CustomInput.vue'
import CustomSelect from '../shared/CustomSelect.vue'
import SubmitButton from '../shared/Button';
import { isRequired, charLimit } from '../../utils/validationRules';

    export default {
    components: {
        CustomSelect,
        CustomInput,
        SubmitButton,
    },
    data() {
        return {
            price: '',
            city: '',
        };
    },
    inheritAttrs: false,
    computed: {
        rules() {
            return [isRequired, charLimit(10)];
        },
        cities() {
            return [
                { value: '', label: 'Город', selected: true },
                'Kyiv',
                'Odesa',
                'Poltava',
                'Kharkiv',
                'Dnipro',
                'Lviv',
                'Kherson',
                'Mariupol',
            ];
        },
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', {
                city: this.city,
                price: this.price,
            });
        },
    },
};

</script>

<style lang="scss" scoped>
.form {
    margin-bottom: 40px;
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>