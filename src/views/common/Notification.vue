<template>
  <div>
    <sidebar></sidebar>
    <navbar />
    <div class="container mb-5">
      <div class="body">
        <h3>Notifications</h3>
        <div class="head">
          <a @click="new_show"> New </a>
          <a @click="all_show"> All </a>
        </div>
      </div>

      <New_Notification v-bind:class="{ 'new-not-show': done }" />
      <All_Notification v-bind:class="{ 'all-not-show': none }" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";
import New_Notification from "../notification/New_Notification";
import All_Notification from "../notification/All_Notification";
import Footer from "../../components/Footer";
export default {
  name: "Notification",
  components: {
    New_Notification,
    All_Notification,
    Navbar,
    Sidebar,
    Footer,
  },
  data() {
    return {
      done: false,
      none: true,
    };
  },
  methods: {
    new_show() {
      this.done = false;
      this.none = true;
    },
    all_show() {
      this.none = false;
      this.done = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";

.new-not-show {
  display: none;
}
.all-not-show {
  display: none;
}
.body {
  margin: 50px 0;
  padding: 0 12px;
}
.head {
  display: flex;
}
.head a {
  color: white;
  margin-left: 20px;
  color: #3b3a3a;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
}
.head a:first-child {
  margin-left: 0;
}
.head a:hover {
  border-bottom: 1px solid #37a7e3;
}
</style>
