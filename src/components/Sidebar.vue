<template>
  <div class="sidebar">
  <div class="profile">
    <div class="profile-picture">
      <img v-if="profilePicPath" :src="profilePicPath" alt="profilePic" />
      <i v-else class="bx bxs-user-circle" /> <!-- just in case -->
    </div>
    <div class="profile-attributes">
      <div class="profile-attributes-username">{{ userName }}</div>
      <div class="profile-attributes-school">{{ userSchool }}</div>
    </div>
  </div>
  <div class="buttons">
    <div class="button-icon-1">
      <img v-if="questionMarkIconPath" :src="questionMarkIconPath" alt="questionMarkIcon" />
      <i v-else class="bx bx-question-mark" /> <!-- just in case -->
    </div>
    <div class="button-icon-2">
      <img v-if="replyIconPath" :src="replyIconPath" alt="replyIcon" />
      <i v-else class="bx bx-reply" /> <!-- just in case -->
    </div>
    <div class="button-icon-3">
      <img v-if="bookmarkIconPath" :src="bookmarkIconPath" alt="bookmarkIcon" />
      <i v-else class="bx bx-bookmarks" /> <!-- just in case -->
    </div>
    <div class="button-label-1">
      <router-link to="/mes-questions" class="button-link">Mes questions</router-link>
    </div>
    <div class="button-label-2">
      <router-link to="/mes-reponses" class="button-link">Mes réponses</router-link>
    </div>
    <div class="button-label-3">
      <router-link to="/suivis" class="button-link">Suivis</router-link>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  props: {
    // TODO: it should depend on user's actual profile pic
    profilePicPath: {type: String, required: true, default : require('./../assets/profilePic.png')},
    questionMarkIconPath: {type: String, required: true, default: require('./../assets/questionMarkIcon.png')},
    replyIconPath : {type: String, required: true, default: require('./../assets/replyIcon.png')},
    bookmarkIconPath : {type: String, required: true, default: require('./../assets/bookmarkIcon.png')},
    userName : {type: String, required: true, default: 'User Name'},
    userSchool: {type: String, required:false, default: 'IMT Atlantique'}
  },
});
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");


.sidebar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 0.7fr 1.6fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "profile profile profile"
    "buttons buttons buttons"
    ". . .";
  grid-area: sidebar;
  background: #F5F8FF;
}

.profile {  display: grid;
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
}

.profile-attributes {
  grid-area: profile-attributes;
}

.profile-attributes-username {
  font-weight: 600;
  font-size: large;
}

.profile-attributes-school {
  font-size: smaller;
}

.buttons {
  font-weight: 500;
  display: grid;
  padding-left: 20px;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: repeat(3, 0.5fr);
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "button-icon-1 button-label-1 button-label-1"
    "button-icon-2 button-label-2 button-label-2"
    "button-icon-3 button-label-3 button-label-3";
  grid-area: buttons;
  color: black;
}

.buttons img {
  margin: auto;
  display: block;
  width : 50%
}

.button-icon-1 { grid-area: button-icon-1; }

.button-icon-2 { grid-area: button-icon-2; }

.button-icon-3 { grid-area: button-icon-3; }

.button-label-1 { grid-area: button-label-1; }

.button-label-2 { grid-area: button-label-2; }

.button-label-3 { grid-area: button-label-3; }

.button-link {
  color: black;
  text-decoration: none;
}

</style>