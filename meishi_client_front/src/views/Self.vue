<template>
<div>
    <top-menu></top-menu>
    <div class="nav">我的第一个页面</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
//scoped 实现原理:为模板template 样式style 选择器加上随机码属性
<style scoped>
.nav{
    margin: 0 auto;
    width: 300px;
    background: red;
}

</style>