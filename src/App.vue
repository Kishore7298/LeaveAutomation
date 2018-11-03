<template>
    <div>
       <AppHeader></AppHeader>
       <router-view></router-view>
    </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import Form from "./components/Form"
export default {
    name:"App",
    components:{
        AppHeader,
        Form
        }
}
</script>

