<template>
  <div class="container">
    <div class="navbar">
      <div class="home-btn">
        <router-link to="/home" class="navbar-links">Home</router-link>
      </div>
      <div class="navigate-btn">
        <router-link to="/explore" class="navbar-links">Explore</router-link>
      </div>
    </div>
    <sidebar></sidebar>
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import { mapGetters } from "vuex";
import store from "@/store";

export default defineComponent({
  name: "App",
  components: { Sidebar },
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
    }),
    currentUser() {
      return store.state.auth.user;
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

html {
  font-size: 80%;
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 100%;
  }
}

* {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "navbar navbar"
    "sidebar page-content";
}

.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . . ."
    "logout-button . home-btn navigate-btn . ."
    ". . . . . .";
  grid-area: navbar;
  background: rgba(106, 139, 255, 0.6);
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
}

.navbar-links {
  color: white;
  text-decoration: none;
}

.home-btn {
  grid-area: home-btn;
  text-align: center;
}

.navigate-btn {
  grid-area: navigate-btn;
  text-align: center;
}

.page-content {
  grid-area: page-content;
  margin: 5vh 9vw;
}
</style>
