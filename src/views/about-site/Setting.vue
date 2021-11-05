<template>
  <div class="py-3">
    <div class="top-bar">
      <li class="list-item" @click="scrollToSetting">Setting</li>
      <li class="list-item" @click="scrollToElement">Privacy</li>
      <li class="list-item" @click="scrollToTearms">Tearms & Conditions</li>
    </div>
    <div class="container container-setting">
      <!--  Privacy section-->
      <section id="general" ref="scrollToSetting">
        <h2 class="head pb-2"><b>Notification</b></h2>
        <div class="notifi-btn">
          <p>You want to off Notification</p>
          <div
            id="dark-btn"
            @click="hover"
            v-bind:class="{ darkbtnon: isactive }"
          >
            <span></span>
          </div>
        </div>
      </section>

      <section id="privacy" ref="scrollToMe">
        <Privacy />
      </section>

      <!--  Tearms & Conditins-->

      <section id="tearms" ref="scrolltotearms">
        <Tearms />
      </section>
    </div>
  </div>
</template>

<script>
import Privacy from "../../views/about-site/Privacy";
import Tearms from "../../views/about-site/Tearms";

export default {
  name: "Setting",
  data() {
    return {
      isactive: false,
    };
  },
  components: {
    Privacy,
    Tearms,
  },
  mounted() {
    this.scrollToElement();
    this.scrollToTearms();
    this.scrollToSetting();
  },
  methods: {
    scrollToElement() {
      const el = this.$refs.scrollToMe;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
      // else{
      //   this.el = this.$refs.scrollToMe[0];
      // }
    },
    scrollToSetting() {
      const el = this.$refs.scrollToSetting;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    },

    // scrollToTearms() {
    //   const el = this.$refs.scrolltotearms;
    //
    //   if (el  ) {
    //     // Use el.scrollIntoView() to instantly scroll to the element
    //     el.scrollIntoView({behavior: 'smooth'});
    //
    //     // else{
    //     //  this.el = this.$refs.scrolltotearms[0];
    //     // }
    //   }
    //
    // },
    scrollToTearms(to, from, savedPosition) {
      savedPosition = this.$refs.scrolltotearms;
      if (savedPosition) {
        return savedPosition.scrollIntoView({ behavior: "smooth" });
      } else {
        return this.$refs.scrolltotearms[0];
      }
    },
    hover() {
      this.isactive = !this.isactive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";
</style>
