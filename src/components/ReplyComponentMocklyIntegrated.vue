<template>
  <div class="container-mock">
    <img :src="require('./../assets/mockThread.png')" class="img-mock">
    <reply-question></reply-question>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ReplyQuestion from "./ReplyQuestion.vue";

export default defineComponent({
  name: "ReplyComponentMocklyIntegrated",
  components : {ReplyQuestion},
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