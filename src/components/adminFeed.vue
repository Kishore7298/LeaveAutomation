<template>
    <div>
       <adminFeedItem v-for="item in items" v-bind:item="item">

       </adminFeedItem>
    </div>
</template>
<script>
import adminFeedItem from './adminFeedItem';
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
        adminFeedItem
    },
    computed: mapGetters(['getAdminName']),
    created(){
        reqRef(this.getAdminName).get('request').then((result,err)=>{
             this.items = result.data;
        })
    }
}
</script>
<style scoped>

</style>

