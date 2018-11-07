<template>
     <div @click="itemClicked" class="container">
        <div v-if="!isItemClicked">
            <div><h5>To:{{ item.to }}</h5></div>
            <div><h5>Reference:{{ item.reference }}</h5></div>
        </div>
        <div v-else>
            <div><h5>To:{{ item.to }}</h5></div>
            <div><h5>Reference:{{ item.reference }}</h5></div>
            <div><h5>Body:{{ item.body }}</h5></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ApprovedListItem",
    data:function(){
        return {isItemClicked:false}
    },
    methods:{
        itemClicked(){
            if(this.isItemClicked == false)
                this.isItemClicked = true;
            else
                this.isItemClicked = false;
        }
    },
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
