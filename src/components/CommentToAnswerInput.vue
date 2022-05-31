<template>
  <div class="new-comment">
    <input
      type="text"
      class="add-comment"
      placeholder="Ajouter un commentaire ..."
    />
  </div>
</template>

<script>
export default {
  name: "CommentToAnswerInput",
};
</script>

<style scoped>
.new-comment input[type="text"] {
  margin-left: 6vw;
  width: 80%;
  border: none;
  margin-top: 1vh;
  margin-bottom: 3vh;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

.new-comment input[type="text"]:focus {
  outline: none;
}

.new-comment input[type="text"]::placeholder {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}
</style>
