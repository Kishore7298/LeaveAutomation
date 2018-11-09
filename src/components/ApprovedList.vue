<template>
    <div>
        <ApprovedListItem v-for="item in items" v-bind:item="item"></ApprovedListItem>
        
    </div>

</template>
<script>
import ApprovedListItem from "./ApprovedListItem";
import pending from '../services/getPending';
import { mapGetters } from "vuex";
export default {
    name:"ApprovedList",
    components:{
        ApprovedListItem
    },
    data:function(){
        return {
            items:[]
        }
    },
    computed: mapGetters(['getEmail']),
    created(){
        pending(this.getEmail).get('approved').then((result,err)=>{
             this.items = result.data;
        })
    }
}
</script>

