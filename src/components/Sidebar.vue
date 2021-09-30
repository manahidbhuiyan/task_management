<template>
  <div>

    <b-sidebar id="sidebar-menu" title="Task Management" bg-variant="dark" text-variant="light" shadow>
      <div class="sidebar">
        <ul>
          <li  class="nav-item"><router-link to="/dashboard" class="nav-link"><b-icon icon="dash-square" class="icon " variant="light"></b-icon> Dashboard </router-link></li>
          <li class="nav-item"><router-link to="/create-task" class="nav-link"><b-icon icon="textarea" class="icon " variant="light"></b-icon>Create Task </router-link></li>
          <li class="nav-item"><router-link to="/task-list" class="nav-link"><b-icon icon="check2-square" class="icon " variant="light"></b-icon>My Task </router-link></li>
          <li class="nav-item"><router-link to="/profile" class="nav-link"><b-icon icon="person-circle" class="icon " variant="light"></b-icon>Profile</router-link></li>
          <li class="nav-item " @click="sub_nab_show"><p class="nav-link" ><b-icon icon="bell-fill" class="icon " variant="light"></b-icon> Inbox </p></li>

          <div  v-bind:class="{'side-nab' : this.show}">
            <li class="nav-item ps-3"><router-link to="/massage-box" class="nav-link"><b-icon icon="people" class="icon " variant="light"></b-icon>Massage Box</router-link></li>
            <li class="nav-item ps-3"><router-link to="/notification" class="nav-link"><b-icon icon="bell-fill" class="icon " variant="light"></b-icon>Notification</router-link></li>
          </div>
          <li class="nav-item"><router-link to="/teams" class="nav-link"><b-icon icon="person-circle" class="icon " variant="light"></b-icon>Teams</router-link></li>




        </ul>

      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
name: "Sidebar",
  data(){
  return{
    show : true
  }
  },
  methods:{
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

<style lang="scss" >
.side-nab{
  display: none;
}
.nav-item p{
  margin-bottom: 0;
  cursor: pointer;
}

.nav-link{
  color: white !important;
}
.b-sidebar > .b-sidebar-header .close {
  float: none;
  font-size: 1.5rem;
  background: black !important;
  border: none !important;
}
.sidebar ul{
  padding: 0;
  margin: 0;
}
.sidebar .nav-item{
  text-decoration: none;
  list-style: none;
  border-bottom: 1px solid #f3f5f7;
 border-bottom-width: thin;

}
.sidebar .nav-item:hover{
  padding: 5px;
  transition: 0.4s;
}
.sidebar .nav-link {
  text-decoration: none;
  color: white;
}
.b-icon{
  font-size: 15px !important;
  padding: 0px !important;
}
.icon{
margin-right: 10px;
}

</style>
