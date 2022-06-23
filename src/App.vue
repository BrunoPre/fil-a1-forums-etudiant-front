<template>
  <div class="container">
    <div class="navbar">
      <div class="logout-button">
        <button v-if="isLoggedIn" v-on:click="logOut" class="logout-button">
          Déconnexion
        </button>
      </div>
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

<script>
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import store from "@/store";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  components: { Sidebar },
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
      isLoggedIn: "isLoggedIn",
    }),
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  //data() {},
  methods: {
    logOut() {
      store.dispatch("auth/logout");
      this.$router.push("/login");
      window.location.reload();
    },
  },
  //mounted() {this.userName =  Object(this.getUserProfile).userName},
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

.logout-button {
  grid-area: logout-button;
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
