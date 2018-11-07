<template>
    <div class="container">
        <div v-if="getToken">
            <form>
                <div class="form-group">
                    <h2 style="font-family: 'Poor Story', cursive;">Application Form</h2>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">To</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option v-for="item in names">{{item.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Reference</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option v-for="item in names">{{item.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Subject</label>
                    <input type="email" class="form-control">
                </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Body</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-primary ">Submit</button>
              </div>
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
          names:null
      }
  },
  computed:mapGetters(['getToken']),
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
