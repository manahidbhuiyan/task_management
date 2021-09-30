<template>
  <div >
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand ><b-button v-b-toggle.sidebar-menu><b-icon icon="list"></b-icon></b-button></b-navbar-brand>


      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/taskdevide" class="nav-link">Task Management</router-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto right-nav">
          <b-nav-form >
            <div class="nav-form">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-sm-0" type="submit">Search</b-button>
              </div>
          </b-nav-form>


          <b-nav-item-dropdown id="dropdown-right" right text="Right align" variant="primary" >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar variant="info" src="https://placekitten.com/300/300" ></b-avatar>
            </template>

            <b-dropdown-item class="nav-item"><router-link to="/profile" class="nav-link">Profile</router-link><b-icon icon="chevron-right" class="icon-arrow" variant="dark"></b-icon></b-dropdown-item>
            <b-dropdown-item class="nav-item" ><router-link to="/profile" class="nav-link">Give Feedback</router-link><b-icon icon="chevron-right" class="icon-arrow" variant="dark"></b-icon></b-dropdown-item>
            <b-dropdown-item class="nav-item" ><router-link to="/setting & privacy" class="nav-link">Setting & Privacy</router-link><b-icon icon="chevron-right" class="icon-arrow" variant="dark"></b-icon></b-dropdown-item>

<!--            <b-dropdown-item class="nav-item" ><a class="nav-link ">Setting & Privacy </a><b-icon icon="chevron-right" class="icon-arrow" variant="dark"></b-icon></b-dropdown-item>-->

<!--            <div  v-bind:class="{'side-nab' : this.show}">-->
<!--              <li class="nav-item ps-3"><router-link to="/massage-box" class="nav-link"><b-icon icon="people" class="icon " variant="light"></b-icon>Massage Box</router-link></li>-->
<!--              <li class="nav-item ps-3"><router-link to="/notification" class="nav-link"><b-icon icon="bell-fill" class="icon " variant="light"></b-icon>Notification</router-link></li>-->
<!--            </div>-->

            <b-dropdown-item class="nav-item" ><a class="nav-link" @click="signout">Sign Out</a><b-icon icon="chevron-right" class="icon-arrow" variant="dark"></b-icon></b-dropdown-item>

          </b-nav-item-dropdown>



        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>


</template>

<script>

import router from "../router";

export default {
  name: "navbar",
  data(){
    return{
      show : true
    }
  },
  methods:{
    signout(){
      if (confirm("are You sure to Sign Out")){
        router.push('/login')
      }
    },
    sub_nab_show(){
      if (this.show == true){
        this.show = false
      }else{
        this.show = true
      }


    }
  }
}
</script>

<style lang="scss">
.side-nab{
  display: none;
}
.nav-form{
  display: flex ;
  margin-top: 10px;
}

.nav-form .form-control{
  padding: 0.375rem 0.75rem !important;
  margin-right: 5px;

}
.right-nav .nav-link{
  margin: 0;
}
#dropdown-right .nav-link{
  color: black !important;
}
.nav-item{
  border-bottom: 1px solid #626262;
}
.nav-item:last-child{
  border: none;
}

.dropdown-menu{
  right: 20px !important;
  width: 250px;
}
.dropdown-item{
  display: flex !important;
  justify-content: space-between ;

}
.icon-arrow{
  color: black !important;
  margin-top: 12px;

}

</style>
