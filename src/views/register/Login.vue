<template>

    <div class="login">
      <div class="row ">
        <div class="col-sm-6 left no-gutters">
          <div class="loginpic">
            <img class="img img-fluid" src="../../assets/login.png" alt="IMG">
          </div>
        </div>
        <div class="col-sm-6 right-gray">
          <div class="">
            <div class="right">
              <h3 >Member Login</h3>
              <form @submit.prevent="signin" class="form-group">

                <div  class="wrap-input100 validate-input"  data-validate="Valid email is required: ex@abc.xyz">
                  <input @blur="iconPrevios" @focus="eichange"  v-model="email" class="input100" :class="{'changeStyle':changeStyle}" type="text" name="email" placeholder="Email" required>
                  <span  class="symbol-input100"  v-bind:class="{changeIcon}">
                    <b-icon icon="envelope-fill"> </b-icon>
                  </span>
                </div>


                <div class="wrap-input100 validate-input"  data-validate="Valid email is required: ex@abc.xyz">
                  <input @blur="iconPrevios()"  @focus="pichange" v-model="password" class="input100" :class="{'changePassStyle':changePassStyle}" type="password" name="password" placeholder="Password" required>

                  <span class="symbol-input100" v-bind:class="{changePassIcon}">
                    <b-icon icon="lock-fill"> </b-icon>
                  </span>
                </div>

                <div class="login-btn ">
                  <button type="submit" class="btn btn-login">
                    Login
                  </button>
                </div>

                <router-link to="/forgot" class="forgot-pass"><small>Forgot <span>Username / Password ?</span></small></router-link>
              </form>

              <router-link to="/signup" class="nav-link"><small>Create Your Account > </small></router-link>
            </div>
          </div>

        </div>
      </div>
    </div>

</template>

<script>

import router from "../../router";

export default {
name: "login",
  data(){
  return{
    email: '',
    password: '',
    changeIcon:false,
    changePassIcon:false,
    changeStyle:false,
    changePassStyle:false
     }
  },
  methods:{
    signin(){
      confirm("Sign in complate");
      router.push('/taskdevide')
    },
    changeFocusStyle(){
      this.changeStyle = false
      this.changePassStyle = false
    },
    eichange(){
      this.changeIcon = true
      this.changeStyle = true
      setTimeout(function () { this.changeFocusStyle() }.bind(this), 1000)
    },
    pichange(){
      this.changePassIcon = true
      this.changePassStyle = true
      setTimeout(function () { this.changeFocusStyle() }.bind(this), 1000)

    },
    iconPrevios(){
      this.changeIcon = false
      this.changePassIcon = false
      console.log("Item Changed")
    }
  }
}
</script>

<style lang="scss" >

@import '../../scss/index.scss';

//
//.navbar{
//  padding: 0 10px;
//}
//
//.side-nab{
//  display: none;
//}
//.nav-form{
//  display: flex ;
//  margin-top: 10px;
//}
//
//.nav-form .form-control{
//  padding: 0.375rem 0.75rem !important;
//  margin-right: 5px;
//
//}
//.right-nav .nav-link{
//  margin: 0;
//}
//#dropdown-right .nav-link{
//  color: black !important;
//}
//.nav-item{
//  border-bottom: 1px solid #626262;
//}
//.nav-item:last-child{
//  border: none;
//}
//
//.dropdown-menu{
//  right: 20px !important;
//  width: 250px;
//}
//.dropdown-item{
//  display: flex !important;
//  justify-content: space-between ;
//
//}
//.icon-arrow{
//  color: black !important;
//  margin-top: 12px;
//
//}


</style>
