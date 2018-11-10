<template>
  <div id='all'>
   <nav class="navbar bg-dark navbar-dark navbar-expand-sm animated slideInDown">
       <div class="container">
           <a href="#" class="navbar-brand">Leave Automation</a>
           <div class="navbar-nav" v-if="getToken">
               
               <router-link to='/' class="nav-item nav-link active">Form</router-link>
               <router-link to='/pending' class="nav-item nav-link active">Pending</router-link>
               <router-link to='/approved' class="nav-item nav-link active">Approved</router-link>
               <a href="#" class="nav-item nav-link active" @click="logout">Logout</a>
           </div>
           <div class="navbar-nav" v-if="isLoggedIn">
               
               <router-link to='/request' class="nav-item nav-link active">Request</router-link>
               <router-link to='/through' class="nav-item nav-link active">Through</router-link>
               <router-link to='/adminapproved' class="nav-item nav-link active">Approved</router-link>
               <a href="#" class="nav-item nav-link active" @click="adminLogout">Logout</a>
           </div>
           <div class="navbar-nav" v-if="!getToken && !isLoggedIn">
               <router-link to="/status" class="nav-item nav-link active" >Status</router-link>
               <router-link to="/login" class="nav-item nav-link active" >Login</router-link>
           </div>
           
       </div>
   </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name:"AppHeader",
    computed:mapGetters(['getToken','isLoggedIn']),
    methods:mapActions(['logout','adminLogout'])
}
</script>
<style scoped>
#all{
    font-family: 'Poppins', sans-serif;
};
</style>


