<template>
  <div>
    <Navbar></Navbar>
    <b-container fluid>
      <b-row>
        <b-col col lg="3">
          <LeftSidebar></LeftSidebar>
        </b-col ></b-col>
        <b-col col lg="6">
          <router-view></router-view>
        </b-col>
        <b-col col lg="3">
          <RightSidebar></RightSidebar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../views/includes/Navbar.vue";
import LeftSidebar from "../views/includes/LeftSidebar.vue";
import RightSidebar from "../views/includes/RightSidebar.vue";

export default {
  components: { Navbar, LeftSidebar, RightSidebar },
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>