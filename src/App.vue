<template>
    <div>
       <AppHeader></AppHeader>
       <router-view></router-view>
    </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import StudentLogin from "./components/StudentLogin";
export default {
    name:"App",
    components:{
        AppHeader,
        StudentLogin
        }
}
</script>

