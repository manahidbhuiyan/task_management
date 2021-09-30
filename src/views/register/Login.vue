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

body{
  //background: -webkit-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  //background: -o-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  //background: -moz-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  //background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  //background-size: cover;
  //background-position: 50% 21%;
  //text-align: left;
  //height: 100vh;
  //background-repeat: no-repeat;
  background: #f3f5f7 !important;
  background-position: center center;
  background-size: cover;

}
.login{
  max-width: 60%;
  margin: 100px auto;
  background-size: auto;
  background-origin: padding-box;
  background-clip: border-box;
}
.left{
  padding: 130px 0px;
  background-color: white;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.loginpic img{
  margin-left: 50%;
  transform: translateX(-50%);
}
.right{
  max-width: 300px !important;
  padding: 0px !important;
  margin: 0 auto;
}
.right-gray{
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.right h3{
  font-weight: bold;
  margin-bottom: 20px;
  padding: 150px 0 0 0;
}
.form-group{
  margin-bottom: 150px;
}
.login .form-control{
  width: 100% !important;
  background-color: #ded9d9 !important;
  border-radius: 20px !important;
  margin: 15px 0;
}
.login .form-control::placeholder{
  color: #474444;
}
.login .form-control:focus{
  border-color: transparent !important;
  background-color: white !important;
  box-shadow: rgba(134 ,230, 134,0.5) !important;
  transition: 0.15s;
}
.validate-input {
  position: relative;
}
.wrap-input100{
 width: 100%;
 z-index: 1;
 margin-bottom: 10px;
}
.input100 {
  font-size: 15px;
  line-height: 1.5;
  color: #666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border: none;
  border-radius: 25px;
  padding: 0 30px 0 60px;
}
.input100:focus{
  color: red;
  border: none;
  outline: 0;
  box-shadow: none;
}

.symbol-input100 {
  font-size: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666;
  //-webkit-transition: all .4s;
  //-o-transition: all .4s;
  //-moz-transition: all .4s;

}
.changeIcon , .changePassIcon{
  padding-left: 15px;
  transition: all .8s;
  color: deepskyblue;
}
.changeStyle{
  box-shadow: 1px 1px 5px #37a7e3 !important;
  transition: 0.4s !important;
}
.changePassStyle{
  box-shadow: 1px 1px 3px #37a7e3 !important;
  transition: 0.4s !important;
}

.btn-login{
  width: 100%;
  border-radius: 20px !important;
  margin: 10px 0;
  background-color: green !important;
  color: white !important;
}
.btn-login:hover{
  background-color: #474444;
  transition: 0.4s;
  color: white;
  font-weight: bold;
}

.login .nav-link{
  color: black !important;
  padding: 15px 0 !important;
}
.login .nav-link :hover{
  color: green;
  transition: 0.2s;
}
.forgot-pass{
  text-align: center;
  color: black;
  list-style: none;
  text-decoration: none;
}
.forgot-pass :hover{
  color: green;
  transition: 0.4s;
}


//Responsive

@media (min-width:576px)and (max-width:991px) {
  .login {
    max-width: 80%;
    margin: 50px auto;
  }
  .form-group {
    margin-bottom: 100px;
  }


}


@media (max-width:575.8px){
  .login {
    max-width: 90%;
    margin: 0px auto;
  }
  .left{
    padding: 50px 0px;

  }
  .form-group {
    margin-bottom: 50px;
  }
  .right h3 {
    padding: 0 0 0 0;
  }
}

</style>
