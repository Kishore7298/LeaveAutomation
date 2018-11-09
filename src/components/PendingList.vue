<template>
   <div>
       <div>
           
           <PendingListItem v-for="item in items" v-bind:item="item">

           </PendingListItem>
       </div>
    </div> 
</template>
<script>
import PendingListItem from "./PendingListItem";
import pending from '../services/getPending';
import { mapGetters } from "vuex";
export default {
    name:"PendingList",
    data:function(){
        return {
            items:null
        }
    },
    computed: mapGetters(['getEmail']),
    components:{
        PendingListItem
    },
    created(){
        pending(this.getEmail).get('pending').then((result,err)=>{
             this.items = result.data;
        })
    }
}
</script>
