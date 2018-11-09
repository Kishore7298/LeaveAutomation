<template>
    <div>
       <adminThroughList v-for="item in items" v-bind:item="item">

       </adminThroughList>
    </div>
</template>
<script>
import adminThroughList from './adminThroughList';
import reqRef from '../services/reqRef';
import { mapGetters } from "vuex";
export default {
    name:"adminFeed",
    data:function(){
        return {
            items:null
        }
    },
    components:{
        adminThroughList
    },
    computed: mapGetters(['getAdminName']),
    created(){
        reqRef(this.getAdminName).get('reference').then((result,err)=>{
             this.items = result.data;
        })
    }
}
</script>
<style scoped>

</style>

