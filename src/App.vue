<template>
  <div class="container">
    <div class="navbar">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/accueil" class="nav-link text-white"
            >Accueil</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/parcourir" class="nav-link text-white"
            >Parcourir</router-link
          >
        </li>
      </ul>
    </div>
    <div class="sidebar">
      <sidebar-menu @search-input-emit="search" />
    </div>
    <div class="page-content">
      Hello team
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    SidebarMenu,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
* {
  font-family: "Poppins", sans-serif;
}
.container {
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 0px;
  grid-template-areas:
    "navbar navbar"
    "sidebar page-content";
}
.navbar {
  grid-area: navbar;
  background: #6a8bff;
  color: #ffffff;
}
.sidebar {
  grid-area: sidebar;
}
.page-content {
  grid-area: page-content;
}
</style>
<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
