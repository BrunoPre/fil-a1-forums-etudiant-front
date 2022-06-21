<template>
  <div class="new-comment">
    <input
      type="text"
      class="add-comment"
      placeholder="Ajouter un commentaire ..."
      v-model="comment"
    />
    <div class="submit-comment" v-on:click="postComment">Envoyer</div>
  </div>
</template>

<script>
export default {
  name: "CommentToAnswerInput",
  data() {
    return {
      comment: null,
    };
  },

  methods: {
    postComment: function () {
      // TODO POST request
      if (!this.comment) return;
      this.$emit("newComment", this.comment);
      this.comment = null;
    },
  },
};
</script>

<style scoped>
.new-comment input[type="text"] {
  margin-left: 7.3vw;
  width: 75%;
  border: none;
  margin-top: 1vh;
  margin-bottom: 3vh;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  display: inline-block;
}

.new-comment input[type="text"]:focus {
  outline: none;
}

.new-comment input[type="text"]::placeholder {
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
}

.submit-comment {
  margin-left: 2vw;
  display: inline-block;
  color: #6a8bff;
  cursor: pointer;
}
</style>
