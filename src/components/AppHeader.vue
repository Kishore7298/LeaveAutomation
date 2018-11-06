<template>
  <div id='all'>
   <nav class="navbar bg-dark navbar-dark navbar-expand-sm">
       <div class="container">
           <a href="#" class="navbar-brand">Leave Automation</a>
           <div class="navbar-nav" v-if="!getToken">
               <router-link to="/login" class="nav-item nav-link active" >Login</router-link>
           </div>
           <div class="navbar-nav" v-else>
               
               <router-link to='/' class="nav-item nav-link active">Form</router-link>
               <router-link to='/pending' class="nav-item nav-link active">Pending</router-link>
               <router-link to='/approved' class="nav-item nav-link active">Approved</router-link>
               <a href="#" class="nav-item nav-link active" @click="logout">Logout</a>
           </div>
       </div>
   </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name:"AppHeader",
    computed:mapGetters(['getToken']),
    methods:mapActions(['logout'])
}
</script>
<style scoped>
#all{
    font-family: 'Poppins', sans-serif;
};
</style>


