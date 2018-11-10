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
            <div class="btn-group"><button @click="onAdminApprove" class="btn btn-primary">Approve</button><button class="btn btn-primary">Decline</button></div>
        </div>
    </div>
</template>
<script>
import checkStatus from '../services/checkStatus';
import axios from 'axios';
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
        },
        onAdminApprove(){
            checkStatus(this.item._id).get('toAdminApprove');
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

