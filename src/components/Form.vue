<template>
    <div class="container">
        <div v-if="getToken">
            <form>
                <div class="form-group">
                    <h2>Application Form</h2>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">From</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">To</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Reference</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Body</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-primary ">Submit</button>
              </div>
            </form>
        </div>
        <div v-else>
            <h3> Login to continue...</h3>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Form",
  computed:mapGetters(['getToken'])
};
</script>
<style scoped>
.container {
  font-family: 'Hind', sans-serif;
  margin-top: 20px;
}
</style>
