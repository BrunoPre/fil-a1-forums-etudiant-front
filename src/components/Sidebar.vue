<template>
  <div class="sidebar">
    <div class="profile">
      <div class="profile-picture">
        <img v-if="profilePicPath" :src="profilePicPath" alt="profilePic" />
        <i v-else class="bx bxs-user-circle" />
        <!-- just in case -->
      </div>
      <div class="profile-attributes">
        <div class="profile-attributes-username">{{ userName }}</div>
        <div class="profile-attributes-school">{{ userSchool }}</div>
      </div>
    </div>

    <div class="grid-buttons">
      <div
        v-for="[_, button] in buttons"
        :key="button.index"
        class="grid-one-button"
      >
        <router-link :to="button.route" class="button-icon">
          <img
            v-if="button.iconPath"
            :src="require('./../assets/' + button.iconPath)"
            alt="{{button.buttonName}}"
          />
          <i v-else class="bx" :class="button.iconBoxIcon" />
        </router-link>
        <router-link :to="button.route" class="button-link">{{
          button.label
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ButtonSidebar } from "@/types/ButtonSidebar";
import { defineComponent } from "vue";
import buttonsJson from "./../assets/buttonsSidebar.json";

export default defineComponent({
  name: "Sidebar",
  data() {
    return {
      buttons: new Map<number, ButtonSidebar>(),
      profilePicPath: "",
      userName: "",
      userSchool: "",
    };
  },
  methods: {
    setButtons() {
      for (const b_json_index in buttonsJson) {
        let button: ButtonSidebar = buttonsJson[b_json_index];
        this.buttons.set(button.index, button);
      }
    },
    setProfile() {
      this.profilePicPath = require("./../assets/profilePic.png");
      this.userName = "User Name";
      this.userSchool = "IMT Atlantique";
    },
  },
  mounted() {
    this.setButtons();
    this.setProfile();
  },
});
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

.sidebar {
  display: grid;
  grid-template-rows: 0.5fr 1fr 2fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "profile"
    "grid-buttons"
    "...";
  grid-area: sidebar;
  background: #f5f8ff;
}

.profile {
  padding-left: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    "profile-picture profile-attributes profile-attributes"
    ". . .";
  grid-area: profile;
}

.profile-picture {
  grid-area: profile-picture;
}

.profile-picture img {
  margin: auto;
  display: block;
  width: 60%;
}

.profile-attributes {
  grid-area: profile-attributes;
}

.profile-attributes-username {
  font-weight: 600;
  font-size: 1.3rem;
}

.profile-attributes-school {
  font-size: 1rem;
}

.grid-buttons {
  padding-left: 1em;
  display: grid;
  grid-template-rows: repeat(3, 18%);
  gap: 0px;
}

.grid-buttons img {
  margin: auto;
  display: block;
  height: auto;
  max-height: 100%;
}

.grid-one-button {
  display: grid;
  grid-template-columns: 0.5fr 1.2fr;
  gap: 0px;
  justify-content: center;
  align-content: center;
}

.button-icon {
  margin: auto;
  display: block;
  height: 90%;
  align-self: center;
}

.button-link {
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  align-self: center;
}
</style>
