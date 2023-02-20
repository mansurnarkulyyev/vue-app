<template>
    <!--  v-if=" "  - eсли isVisible:true тогда отображается вес дерево,  если не true то нет -->
    <div v-if="isVisible">
        <!--  v-show=" "  - eсли isVisible:true тогда отображается только элемент,  если не true то нет -->
<h1 v-show="false"> HI Directives</h1>

<ul>
    <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" :key="fruit" >{{ fruit }}</li>
    </template>
</ul>

<ul>
    <!-- <li v-for="car in cars" :key="car.color" >{{ car.color }}</li> -->
    <li v-for="{ key } in cars" :key="key" >{{ key }}</li>
</ul>

    </div>
</template>

<script>
    export default {
    name:"DirectivesTest",
         // data нужен для того что бы изменятть свой state то есть свое состояние 
    data() {
        return{
            isVisible:true,
            fruits:['kiwi', 'apple', 'banana'],
            cars:{
                audi:{
                    color:"green"
                },
                bmw:{
                    color:"blue"
                }
            }
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>