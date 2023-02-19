<template>
  <h1>{{ title }}</h1>
<!-- <Button v-on:click="amountOfClicks += 1">Click me</Button> -->
<!-- <Button  @click="increment" outlined>Click me</Button>
<DirectivesTest/> -->
<StartRating :rating="4"/>
</template>

<script>

// import Button from './components/Button.vue'
// import DirectivesTest from './components/DirectivesTest.vue'
import StartRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    // Button,
    // DirectivesTest,
    StartRating
  },
        // data нужен для того что бы изменятть свой state то есть свое состояние 
data(){
  return {
    amountOfClicks:0
  }
},
computed:{
  title(){
    return `Amount of clicks ${this.amountOfClicks}`
  }
},
methods:{
  increment(){
    this.amountOfClicks += 1
  }
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
