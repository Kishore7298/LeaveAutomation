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
            items:
[{
    
    "sub" : "leave",
    "body" : "hi how are you"
},
{
    
    "sub" : "vacation",
    "body" : "im on vacation"
},
{
    
    "sub" : "college",
    "body" : "how are you"
},
{
    
    "sub" : "school",
    "body" : "im okay"
}]
        }
    },
    components:{
        PendingListItem
    }
}
</script>
