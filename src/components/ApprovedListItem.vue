<template>
     <div @click="itemClicked" class="container animated rotateIn">
        <div v-if="!isItemClicked">
            <div><h5>To : {{ item.to }}</h5></div>
            <div><h5>Through : {{ item.through }}</h5></div>
            <div><h5>Subject : {{ item.sub }}</h5></div>
        </div>
        <div v-else>
            <div><h5>To : {{ item.to }}</h5></div>
            <div><h5>Through : {{ item.through }}</h5></div>
            <div><h5>Subject : {{ item.sub }}</h5></div>
            <div><h5>Body : {{ item.body }}</h5></div>
            <div><h5>ID : {{ item._id }}</h5></div>
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
    background-color:rgb(214, 210, 202);
    border: 1px solid gray;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 5px 5px 5px #888888;
    
}
</style>
