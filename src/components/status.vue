<template>
    <div class="container">
        <div><h1>Application status</h1></div>
        <div><input v-model="id" type="text"></div>
        <div><button style="margin-top:10px;" @click="onSubmit" class="btn btn-primary">Submit</button></div>
        <div v-if="!!submit">
            <div>Through:{{items.to}} {{items.toApproved}}</div>
            <div>To: {{items.through}} {{items.throughApproved}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import checkStatus from '../services/checkStatus';
export default {
    name:"status",
    data: ()=>{
        return {
            submit:null,
            id:null,
            items:null
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();
            checkStatus(this.id).get('status').then((result,err)=>{
             this.items = result.data[0];
             this.submit = 'abc';
        })
    }
        }
    }

</script>
<style scoped>
.container{
    margin: 20px;
}
</style>
