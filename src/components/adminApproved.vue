<template>
    <div>
       <adminApprovedList v-for="item in items" v-bind:item="item">

       </adminApprovedList>
    </div>
</template>
<script>
import adminApprovedList from './adminApprovedList';
import reqRef from '../services/reqRef';
import { mapGetters } from "vuex";
export default {
    name:"adminApproved",
    data:function(){
        return {
            items:null
        }
    },
    components:{
        adminApprovedList
    },
    computed: mapGetters(['getAdminName']),
    created(){
        reqRef(this.getAdminName).get('adminapproved').then((result,err)=>{
             this.items = result.data;
        })
    }
}
</script>
<style scoped>

</style>

