<template>
  <div class="container">
    <div class="sidebar"></div>
    <div class="question-page">
      <QuestionPage></QuestionPage>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionPage from "@/components/QuestionPage.vue";

export default defineComponent({
  name: "App",
  components: {
    QuestionPage,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

#app {
  font-family: Poppins, sans-serif;
  font-size: 100%;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "sidebar question-page question-page question-page question-page question-page question-page";
}
.sidebar {
  grid-area: sidebar;
  background-color: #f5f8ff;
  height: 100vh;
}
.question-page {
  grid-area: question-page;
  margin-left: 9vw;
  margin-right: 9vw;
  margin-top: 5vh;
}
</style>
