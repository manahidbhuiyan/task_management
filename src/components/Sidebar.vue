<template>
 <p>hh</p>

</template>
<script>
import router from "../router";

export default {
  name: "Sidebar",
  components:{

  },


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
  mounted() {

  },

  methods: {
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
    signout() {
      if (confirm("are You sure to Sign Out")) {
        router.push("/login");
      }
    },
    SidebarHide(){
      this.ishide = !this.ishide
    }
  },


};
</script>

<style lang="scss">


</style>
