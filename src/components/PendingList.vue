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
    "name" : "john",
    "sub" : "leave",
    "body" : "hi how are you"
},
{
    "name" : "heller",
    "sub" : "vacation",
    "body" : "im on vacation"
},
{
    "name" : "david",
    "sub" : "college",
    "body" : "how are you"
},
{
    "name" : "michael",
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
