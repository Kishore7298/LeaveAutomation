<template>
    <div class="container animated lightSpeedIn">
        <div v-if="getToken">
            <form>
                <div class="form-group">
                    <h2 style="font-family: 'Poor Story', cursive;">Application Form</h2>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">To</label>
                    <select class="form-control" v-model='selectedTo' id="exampleFormControlSelect1">
                        <option v-for="item in names">{{item.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Reference</label>
                    <select class="form-control" v-model='selectedRef' id="exampleFormControlSelect1">
                        <option v-for="item in names">{{item.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Subject</label>
                    <input type="email" v-model="subject" class="form-control">
                </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Body</label>
                <textarea class="form-control" v-model="body" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="text-center">
                <button type="button" @click="onSubmit" class="btn btn-primary ">Submit</button>
              </div>
              {{success}}
            </form>
        </div>
        <div v-else>
            <h3> Login to continue...</h3>
        </div>
    </div>
</template>
<script>
import admins from '../services/admins';
import axios from 'axios';
import { mapGetters } from "vuex";
export default {
  name: "Form",
  data:function(){
      return {
          names:null,
          selectedTo:'',
          selectedRef:'',
          subject:'',
          body:'',
          success:''
      }
  },
  methods:{
      onSubmit(){
          var obj = {
              name: this.getName,
              email: this.getEmail,
              to: this.selectedTo,
              through: this.selectedRef,
              sub: this.subject,
              body: this.body,
              toApproved:false,
              throughApproved:false
          }
            var jsonObj = JSON.stringify(obj);
            console.log(jsonObj);
            admins().post('/submit',obj).then((res,err)=>{
                console.log(res.data);
            })
      }
  },
  computed:mapGetters(['getToken','getName','getEmail']),
  created(){
      admins().get('admins').then((res,err)=>{
           this.names = res.data;
      })
  }
};
</script>
<style scoped>
.container {
  font-family: 'Open Sans', sans-serif;
  margin-top: 20px;
}
</style>
