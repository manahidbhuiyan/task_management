<template>
<div class="login loginForgot">
 <div class="row no-gutters" >
   <div class="col-sm-6 picside">
     <div class="forgotpic">
       <img class="img img-fluid" src="../../assets/forgotpass.jpg" alt="IMG">
     </div>
   </div>
   <div class="col-sm-6 formside">
     <form @submit.prevent="reset" action=""  class="forgotpass">

       <label style="margin-bottom: 16px;padding-left: 10px "><span style="color: red;">Forgot Your Password ?</span><br> Enter Email or Username to set new Password</label>


       <div class="wrap-input100 validate-input " data-validate="Valid email is required: ex@abc.xyz">
         <input  v-model="forgotpass" class="input100" type="forgotpass" name="password" placeholder="Email or Username">
         <span class="symbol-input100">
           <b-icon icon="lock-fill"> </b-icon>
         </span>
       </div>


<!--       <input v-model="forgotpass" class="form-control" type="text" name="forgotpass" placeholder="Email or Username">-->
       <button type="submit" class="btn btn-login reset">Reset</button>
     </form>
   </div>
 </div>
</div>
</template>

<script>
export default {
name: "ForgotPass",
  data(){
  return{
    forgotpass : ''
  }
  },
  methods: {
    reset(){
      alert("Password reset")
    }
  }
}
</script>

<style lang="scss">

body {
  //background: linear-gradient(-135deg,#c850c0,#4158d0);
  //background-color: rgba(0, 0, 0, 0);
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  //  background-image: linear-gradient(-135deg, rgb(200, 80, 192), rgb(65, 88, 208));
  //  background: linear-gradient(-135deg,#c850c0,#4158d0)

}
.forgotpass{
  background-color: white;
  height: 392px;
  padding: 105px 50px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.forgotpic img{
  height: 392px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.picside , .formside{
  padding: 0px !important;
}

//Responsive

@media (min-width:576px)and (max-width:991px) {
  .forgotpass {
    padding: 80px 25px;
    height: 380px;
  }
  .forgotpic img{
   height: 380px
  }

}

//

</style>
