<template>
   <div>
       <div>
           
           <PendingListItem v-for="item in items" v-bind:item="item">

           </PendingListItem>
       </div>
    </div> 
</template>
<script>
import PendingListItem from "./PendingListItem"
export default {
    name:"PendingList",
    data:function(){
        return {
            items:null
        }
    },
    components:{
        PendingListItem
    }
}
</script>
