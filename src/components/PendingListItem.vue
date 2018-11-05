<template>
    <div class="container">
        <div><h4>Name of the Student:{{ item.name }}</h4></div>
        <div><h5>Subject:{{ item.sub }}</h5></div>
    </div>
</template>
<script>
export default {
    name:"PendingListItem",
    props:["item"]
}
</script>
<style scoped>
.container{
    margin: 20px;
    background-color:floralwhite;
    border: 2px solid gray;
    
}
</style>
