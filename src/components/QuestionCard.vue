<template>
  <div class="question-card">
    <div class="question-container">
      <h2>{{ question.title }}</h2>
      <div class="question-infos">
        <div class="user-image">
          <img
            src="../assets/user_image_placeholder.png"
            alt="Profile picture"
          />
        </div>
        <p>
          Question posée par
          <span class="user-span">{{ question.user }}</span> le
          <span class="date-span">{{ question.date }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    question: {
      title: String,
      user: String,
      date: String,
      voteCount: Number,
      bestAnswer: {
        content: String,
        user: String,
        date: String,
        voteCount: Number,
      },
    },
  },
};
</script>

<style scoped>
.question-card {
  background-color: #f8f9ff;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.question-container {
  /*TODO Grid layout*/
  margin-left: 3vh;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
}

.question-card h2 {
  color: #6a8bff;
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0;
}

.question-infos p {
  display: inline-block;
  margin: 0;
}

.user-image {
  display: inline-block;
  vertical-align: middle;
}

.user-image img {
  width: 70%;
}

.user-span {
  color: #6a8bff;
}

span {
  font-weight: 600;
}
</style>
