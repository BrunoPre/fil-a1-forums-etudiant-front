<template>
  <div>
    <div class="path">
      <p>Ecoles / IMT Atlantique / Formations</p>
    </div>
    <div class="question-title">
      <h1>Vestibulum ac condimentum metus ?</h1>
    </div>
    <div class="question-infos">
      <div class="user-image">
        <img src="../assets/user_image_placeholder.png" alt="Profile picture" />
      </div>
      <p>
        Question posée par <span class="user-span">User Name</span> le
        <span class="date-span">24 Mai 2022</span>
      </p>
    </div>
    <div class="question-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
      nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
      Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
      efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
      Aliquam vitae rutrum mi, a fermentum elit.
    </div>
    <div class="answers-container">
      <div class="answer-number">
        <p>3 réponses</p>
      </div>
      <div class="answers">
        <AnswerToQuestion></AnswerToQuestion>
      </div>
    </div>
    <div class="new-answer-container"></div>
  </div>
</template>

<script>
import AnswerToQuestion from "@/components/AnswerToQuestion";
export default {
  name: "QuestionPage",
  components: { AnswerToQuestion },
};
</script>

<style scoped>
.path {
  font-size: 0.9rem;
  font-weight: lighter;
}

.question-title {
  font-weight: bold;
  color: #6a8bff;
}

.question-title h1 {
  font-size: 2.2rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.question-infos {
  font-weight: lighter;
}

.question-infos p {
  display: inline-block;
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

.question-description {
  margin-top: 2.5vh;
  font-weight: normal;
  font-size: 1.3rem;
}

span {
  font-weight: 600;
}

.answers-container {
  margin-top: 6vh;
}

.answers-container p {
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
  padding: 0 0 1vh;
  border-bottom: #e2e2e2 solid 1px;
}
</style>
