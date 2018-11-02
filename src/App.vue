<template>
    <div>
       <AppHeader></AppHeader>
       <Form></Form>
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

