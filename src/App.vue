<template>
  <div class="container">
    <div class="navbar">
      <div class="home-btn">
        <router-link to="/accueil" class="navbar-links">Accueil</router-link>
      </div>
      <div class="navigate-btn">
        <router-link to="/parcourir" class="navbar-links"
          >Parcourir</router-link
        >
      </div>
    </div>
    <sidebar></sidebar>
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: { Sidebar },
  props: {},
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
    ". . home-btn navigate-btn . ."
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
  margin-left: 9vw;
  margin-right: 9vw;
  margin-top: 5vh;
}
</style>
