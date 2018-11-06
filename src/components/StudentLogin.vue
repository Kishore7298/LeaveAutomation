<template>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group ">
                <label class="col-sm-2" for="email">Email:</label>
                <div class="col-sm-10">
                    <input type="email" v-on:input="emailtyped" class="form-control" style="width:50%;" placeholder="Enter email" name="email">
                 </div>
            </div>
             <div class="form-group">
               <label class="col-sm-2" for="pwd">Password:</label>
               <div class="col-sm-10">
                    <input type="password" v-on:input="passwordtyped" class="form-control" style="width:50%;" placeholder="Enter password" name="password">
                </div>
             </div>
             <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button @click="onSubmit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            {{returned}}
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from 'axios';
import api from '../services/api'
export default {
    name:"StudentLogin",
    data: function(){
        return {
            email:null,
            password:null,
            returned:null,
        }
    },
    methods:{
        emailtyped(event){
            this.email = event.target.value;
        },
        passwordtyped(event){
            this.password = event.target.value;
        },
        ...mapActions(['login(token)']),
        onSubmit(e){
            e.preventDefault();
            api().get('auth').then((res,err)=>{console.log(res)});   
    }
}}
</script>
<style scoped>
.container{
    margin-top: 20px;
};
</style>

