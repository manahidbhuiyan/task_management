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

@import '../../scss/index';


</style>
