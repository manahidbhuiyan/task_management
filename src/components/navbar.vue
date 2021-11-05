<template>
  <div>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand
        ><b-button v-b-toggle.sidebar-menu
          @click="addToSidebar"
          ><b-icon icon="list" ></b-icon></b-button
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/taskdevide" class="nav-link"
              >Task Management</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto right-nav">
          <b-nav-form>
            <div class="nav-form">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-sm-0" type="submit"
                >Search</b-button
              >
            </div>
          </b-nav-form>

          <b-nav-item-dropdown
            id="dropdown-right"
            right
            text="Right align"
            variant="primary"
          >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
              ></b-avatar>
            </template>

            <b-dropdown-item class="nav-item"
              ><router-link to="/profile" class="nav-link">Profile</router-link
              ><b-icon
                icon="chevron-right"
                class="icon-arrow"
                variant="dark"
              ></b-icon
            ></b-dropdown-item>
            <b-dropdown-item class="nav-item"
              ><router-link to="/profile" class="nav-link"
                >Give Feedback</router-link
              ><b-icon
                icon="chevron-right"
                class="icon-arrow"
                variant="dark"
              ></b-icon
            ></b-dropdown-item>
            <b-dropdown-item class="nav-item"
              ><router-link to="/setting & privacy" class="nav-link"
                >Setting & Privacy</router-link
              ><b-icon
                icon="chevron-right"
                class="icon-arrow"
                variant="dark"
              ></b-icon
            ></b-dropdown-item>

            <b-dropdown-item class="nav-item"
              ><a class="nav-link" @click="signout">Sign Out</a
              ><b-icon
                icon="chevron-right"
                class="icon-arrow"
                variant="dark"
              ></b-icon
            ></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
<!-- sidebar area  -->
  <div>

    <b-sidebar
        id="sidebar-menu"
        title="Task Management"
        text-variant="light"
        shadow
        aria-labelledby="sidebar-no-header-title"
        no-header
        v-bind:class="{'sidehide' : ishide }"
    >

      <div class="sidebar-header" >
        <div id="sidebar-menu-title"><b>Task Management</b></div>
        <button type="button" class="close" aria-label="Close" @click="SidebarHide">
          <b-icon icon="x" class="icon" variant="light"></b-icon>
        </button>
      </div>
      <div class="sidebar">
        <ul class="main_slide">
          <router-link tag="li" to="/dashboard" class="nav-item" exact>   <b-icon icon="dash-square"  class="icon "  variant="light"></b-icon> Dashboard </router-link>

          <li  @click="sub_nab_show" > <a class="nav-item" href="#" id="2">
            <span v-bind:class="{'rotateicon':isrotate }" class="fas fa-caret-down"  ></span> Manage Task </a></li>
          <div v-bind:class="{ 'side-nab': this.show }">
            <router-link tag="li" to="/create-task" class="nav-item" ><b-icon icon="textarea" class="icon" variant="light"></b-icon> Create Task </router-link>
            <router-link tag="li" to="/task-list" class="nav-item"> <b-icon icon="card-list" class="icon" variant="light"></b-icon> Task List  </router-link>
          </div>

          <router-link tag="li" to="/profile" class="nav-item"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon> Profile </router-link>

          <li  @click="task_manage_show" > <a class="nav-item" href="#" id="1">
            <span v-bind:class="{'rotateicon':isInrotate }" class="fas fa-caret-down" ></span> Inbox </a></li>
          <div v-bind:class="{ 'side-nab': this.display }">
            <router-link tag="li" to="/massage-box" class="nav-item" ><b-icon icon="chat-square" class="icon" variant="light"></b-icon> Massage Box </router-link>
            <router-link tag="li" to="/notification" class="nav-item"> <b-icon icon="bell-fill" class="icon " variant="light"></b-icon> Notification  </router-link>
          </div>

          <router-link tag="li" to="/teams" class="nav-item"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon> Teams </router-link>

          <li  @click="create_team_show" > <a class="nav-item" href="#" id="3">
            <span v-bind:class="{'rotateicon':isTmrotate }" class="fas fa-caret-down" ></span> Team Manage </a></li>
          <div v-bind:class="{ 'side-nab': this.newteam }">
            <router-link tag="li" to="/create-project" class="nav-item"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon> Create Project </router-link>
            <router-link tag="li" to="/create-team" class="nav-item"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon> Create Team </router-link>
          </div>

          <li class="nav-item last-item" @click="signout"> <b-icon icon="chevron-right" class="icon-arrow" variant="dark"></b-icon> Sign Out</li>
        </ul>
      </div>
    </b-sidebar>
    <div class="mini-sidebar">
      <ul class="miniItem">
        <router-link tag="li" to="/dashboard" class="miniList" >   <b-icon icon="dash-square"  class="icon "  variant="light"></b-icon> </router-link>
        <router-link tag="li" to="/create-task" class="miniList" ><b-icon icon="textarea" class="icon" variant="light"></b-icon>  </router-link>
        <router-link tag="li" to="/task-list" class="miniList"> <b-icon icon="card-list" class="icon" variant="light"></b-icon>   </router-link>
        <router-link tag="li" to="/profile" class="miniList"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon>  </router-link>
        <router-link tag="li" to="/massage-box" class="miniList" ><b-icon icon="chat-square" class="icon" variant="light"></b-icon>  </router-link>
        <router-link tag="li" to="/notification" class="miniList"> <b-icon icon="bell-fill" class="icon " variant="light"></b-icon>   </router-link>
        <router-link tag="li" to="/teams" class="miniList"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon>  </router-link>
        <router-link tag="li" to="/create-project" class="miniList"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon>  </router-link>
        <router-link tag="li" to="/create-team" class="miniList"> <b-icon icon="person-circle" class="icon" variant="light"></b-icon>  </router-link>
        <li class="miniList" @click="signout"> <b-icon icon="chevron-right" class="icon-arrow" variant="light"></b-icon> </li>

      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import router from "../router";


export default {
  name: "navbar",
  data() {
    return {
      show: true,
      display: true,
      newteam: true,
      isrotate: false,
      isInrotate: false,
      isTmrotate: false,
      ishide: false,
    };
  },
  methods: {
    addToSidebar() {
      this.ishide = !this.ishide
      },
    signout() {
      if (confirm("are You sure to Sign Out")) {
        router.push("/login");
      }
    },
    sub_nab_show() {
      if (this.show == true) {
        this.show = false;
        this.isrotate = true;
      } else {
        this.show = true;
        this.isrotate = false;
      }
    },
    task_manage_show() {
      if (this.display == true) {
        this.display = false;
        this.isInrotate = true;
      } else {
        this.display = true;
        this.isInrotate = false;
      }
    },
    create_team_show() {
      if (this.newteam == true) {
        this.newteam = false;
        this.isTmrotate = true;
      } else {
        this.newteam = true;
        this.isTmrotate = false;
      }
    },
    SidebarHide(){
      this.ishide = !this.ishide
    }
  },
};
</script>

<style lang="scss">
@import "../scss/index.scss";
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');




//Navbar ----------------------------

.navbar {
  height: 70px;
  padding: 0 10px;
}

.side-nab {
  display: none;
}
.nav-form {
  display: flex;
  margin-top: 10px;
}

.nav-form .form-control {
  padding: 0.375rem 0.75rem !important;
  margin-right: 5px;
}
.right-nav .nav-link {
  margin: 0;
}
#dropdown-right .nav-link {
  color: black !important;
}
.nav-item {
  border-bottom: 1px solid #626262;
}
.nav-item:last-child {
  border: none;
}

.dropdown-menu {
  right: 20px !important;
  width: 250px;
}
.dropdown-item {
  display: flex !important;
  justify-content: space-between;
}
.icon-arrow {
  color: black !important;
  margin-top: 12px;
}

//Sidebar--------------


#sidebar-menu{
  //background-color: #1b1b1b !important;
  background-color: #212529 !important;
  display: block !important;

}
.sidehide{
  display: none ;
}

#sidebar-menu-title{
  font-size: 18px;
}
.b-sidebar{
  width: 250px !important;
  position: relative;
}
.nav-item p {
  margin-bottom: 0;
  cursor: pointer;
}
.sidebar-header{
  padding: 22px 10px !important;
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.sidebar-header .close {
  float: none;
  background: black ;
  border: none ;
  width: 25px !important;
  height: 25px !important;
  padding: 0 !important;
  margin: 0;
}
.sidebar-header .close .b-icon {
  color: white !important;
  font-size: 25px;
  margin: 0;
}
.sidebar ul {
  background: #1b1b1b;
  height: 100%;
  width: 100%;
  list-style: none;
  padding:0px 10px;
}
.sidebar ul li {
  line-height: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebar ul li:last-child {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.sidebar ul .nav-item {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  display: block;
  width: 100%;
  border-left: 3px solid transparent;
}
.router-link-active, .router-link-exact-active{
  color: #FC5404 !important;
  background: #1e1e1e !important;
  border-left-color: #FC5404 !important;
}
.rotateicon {
  transform: rotate(180deg);
}
.nav-item:hover {
  color: #FC5404 !important
}
.last-item{
  position: absolute !important;
  top: 95%;
  width: 92% !important;
}
//mini sidebar
.mini-sidebar{
  position: absolute;
  width: 50px;
  margin: 0;
  background-color: #212529;
  height: 100vh;
}
.miniItem{
  margin: 0;
  padding: 0;
}
.miniItem li{
  list-style: none;
  color: white;
  text-align: center;
  font-size: 15px;
  padding: 10px 0;
  cursor: pointer;
}

@media (min-width: 1200px){
  //#sidebar-menu{
  //  display: flex;
  //  position: fixed;
  //}
}

</style>
