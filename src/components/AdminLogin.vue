<template>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group ">
                <label class="col-sm-2" for="email">Email:</label>
                <div class="col-sm-10">
                    <input type="email" v-model="adminEmail" class="form-control" id="email" style="width:50%;" placeholder="Enter email" name="email">
                 </div>
            </div>
             <div class="form-group">
               <label class="col-sm-2" for="pwd">Password:</label>
               <div class="col-sm-10">
                    <input type="password" v-model="adminPassword" class="form-control" id="email" style="width:50%;" placeholder="Enter password" name="password">
                </div>
             </div>
             <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" @click="onAdminSubmit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from 'axios';
import api from '../services/api';
import { router } from "../main";
export default {
    name:"StudentLogin",
    data: function(){
        return {
            adminEmail:'',
            adminPassword:'',
            adminName:'',
        }
    },
    methods:{
        ...mapActions(['adminLogin']),
        onAdminSubmit(e){
            e.preventDefault();
            api(this.adminEmail,this.adminPassword).get('adminauth').then((res,err)=>{
                if(res.data.length != 0){
                    this.adminName = res.data.name[0].name;
                    this.adminLogin(this.adminName);
                    router.push('/request'); 
                }
            
            }); 
        }
    }
}
</script>
<style scoped>
.container{
    margin-top: 20px;
};
</style>

