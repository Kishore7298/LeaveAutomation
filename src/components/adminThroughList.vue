<template>
     <div @click="itemClicked" class="container">
        <div v-if="!isItemClicked">
            <div><h5>Name : {{ item.name }}</h5></div>
            <div><h5>Through : {{ item.through }}</h5></div>
            <div><h5>Subject : {{ item.sub }}</h5></div>
        </div>
        <div v-else>
            <div><h5>Name : {{ item.name }}</h5></div>
            <div><h5>Through : {{ item.through }}</h5></div>
            <div><h5>Subject : {{ item.sub }}</h5></div>
            <div><h5>Body : {{ item.body }}</h5></div>
            <div><button>Approve</button><button>Decline</button></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"adminFeedItem",
    data:function(){
        return {
            isItemClicked:false
        }
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
    
}
</style>

