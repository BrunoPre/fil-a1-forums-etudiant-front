<template>
  <div class="container-mock">
    <img :src="require('./../assets/mockThread.png')" class="img-mock">
    <reply-to-question-input></reply-to-question-input>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ReplyToQuestionInput from "./ReplyToQuestionInput.vue";

export default defineComponent({
  name: "ReplyComponentMocklyIntegrated",
  components : {ReplyToQuestionInput},
});
</script>

<style scoped>

.container-mock{
  padding : 5em;
}

.img-mock {
  max-width:100%;
  height:auto;
}

</style>