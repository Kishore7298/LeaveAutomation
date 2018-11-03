<template>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group ">
                <label class="col-sm-2" for="email">Email:</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" style="width:50%;" placeholder="Enter email" name="email">
                 </div>
            </div>
             <div class="form-group">
               <label class="col-sm-2" for="pwd">Password:</label>
               <div class="col-sm-10">
                    <input type="password" class="form-control" id="email" style="width:50%;" placeholder="Enter password" name="password">
                </div>
             </div>
             <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:"StudentLogin"
}
</script>
<style scoped>
.container{
    margin-top: 20px;
};
</style>

