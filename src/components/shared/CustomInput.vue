<template>
   <input
     :value="modelValue" 
     type="text"
     @input="$emit('update:modelValue', $event.target.value)" 
     class="custom-input"
     />
   
</template>

<script>
    export default {
        name: 'CustomInput',
        props:{
            modelValue:{type:String, default:null}
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.custom-input {
  height: 40px;
  /* width: 100%; */
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

}
</style>