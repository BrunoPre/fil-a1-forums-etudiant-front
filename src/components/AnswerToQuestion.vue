<template>
  <div class="answer-to-question">
    <div class="vote">
      <div class="upvote"></div>
      <div class="vote-count">8</div>
      <div class="downvote"></div>
    </div>
    <div class="answer-container">
      <div class="answer-infos">
        <div class="user-image">
          <img
            src="../assets/user_image_placeholder.png"
            alt="Profile picture"
          />
        </div>
        <p>
          Question posée par <span class="user-span">User Name</span> le
          <span class="date-span">24 Mai 2022</span>
        </p>
      </div>
      <div class="answer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.
      </div>
      <div class="reply-button"></div>
      <div class="comments-container">
        <div class="comment"></div>
        <div class="new-comment"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerToQuestion",
};
</script>

<style scoped>
.answer-to-question {
  display: grid;
  grid-template-columns: 0.08fr 0.92fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "vote answer-container";
  align-items: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.vote {
  display: inline-block;
}

.user-image {
  display: inline-block;
  vertical-align: middle;
}

.user-image img {
  width: 65%;
}

.user-span {
  color: #6a8bff;
}

span {
  font-weight: 600;
}

.answer {
  margin-top: 2.5vh;
  font-weight: normal;
  font-size: 1.3rem;
}

.answer-infos p {
  display: inline-block;
}

.vote {
  grid-area: vote;
}
.answer-container {
  grid-area: answer-container;
}
</style>
