<template>
  <div class="login">
    <div class="row ">
      <div class="col-sm-6 left leftsignup no-gutters">
        <div class="loginpic">
          <img class="img img-fluid" src="../../assets/login.png" alt="IMG">
        </div>
      </div>
      <div class="col-sm-6 right-gray">
        <div class="">
          <div class="right">
            <h3 >Member Register</h3>

            <form @submit.prevent="handlesubmit" class="form-group signup">
              <span class="symbol-input100">
							<i class="fas fa-envelope"></i>
						</span>
              <input v-model="username" class="form-control" type="text" name="username" placeholder=" name" required>

              <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
              <input v-model="email" class="form-control" type="email" name="email" placeholder=" email" required>

              <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
              <input @change="errorshow" v-model="pass1" v-bind:class="{isActive}" class="form-control" type="password" name="password" placeholder=" password" required>
              <div v-if="passworderror" class="error"> {{ passworderror }} </div>


              <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
              <input v-model="pass2" @change="errormatch" v-bind:class="{ismatch}" class="form-control" type="password" name="password" placeholder=" password" required>
              <div v-if="passwordmatch" class="error"> {{ passwordmatch }} </div>


                <button  class="btn btn-login">
                  Register
                </button>


              <b-form-checkbox
                  id="checkbox-1"
                  v-model="cheakbox"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  required
              >
                <small> &nbsp; I read and agree to<span style="color: green"> Terms and Conditions</span></small>
              </b-form-checkbox>
            </form>

            <router-link to="/login" class="nav-link"><small>Already have an account ?<span style="color: green"> log In ></span> </small></router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";
export default {
  name: "Signup",
data(){
    return{
      username: "",
      email: "",
      pass1: "",
      pass2: "",
      cheakbox: 'not_accepted',
      passworderror: '',
      passwordmatch: '',
      isActive: false,
      ismatch: false
    }
},
  methods: {
    handlesubmit(){
        confirm("form submitted");
        router.push('/login')

    },
    errorshow(){
      if (this.pass1.length < 5) {
        this.isActive = true
        this.passworderror = "Password must be 6 digit"
      }

    },
    errormatch(){
      if (this.pass1 != this.pass2){
        this.isActive = true
        this.ismatch = true
        this.passwordmatch = "passowrd doesn't match"
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.right{
  max-width: 300px !important;
  padding: 100px 0px;
  margin: 0 auto;
}

.error{
  color: red;
}
.leftsignup{
  padding: 175px 0px !important;
}
.isActive ,.ismatch{
  border-color: red;
}


@media (max-width:575.8px) {
  .leftsignup {
    padding: 50px 0px !important;
  }
}
</style>

