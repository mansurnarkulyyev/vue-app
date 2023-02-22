<template>
    <!-- <button v-bind:type="type" style="opacity:0.5; font-size:18px;" v-bind:class="["btn", "btn--outlined"]"> -->
    <button v-bind:type="type" :class="{btn:true, 'btn--outlined': outlined }">
        <!-- все что будем передавать этому компоненту внуртри оно бедт отрисоваться на место слота -->
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name:"ButtonComp",
        props:{
            // type:reset type: button , type:submit
            type:{
                type: String,
                default:'button'
            },
            outlined:{
                type:Boolean,
                default:false,
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn{
    display:inline-block;
    font-size:18px;
    background:#FF662D;
    color:#fff;
    cursor:pointer;
    min-width:220px;
    border:1px solid transparent;
    padding:8px 15px;

    &--outlined{
        background:none;
        border:1px solid #FF662D;
        color:#FF662D;
    }
}
</style>


