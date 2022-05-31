<template>
  <div class="answer-to-question">
    <div class="vote">
      <div class="upvote">
        <img src="../assets/upvote-arrow.svg" alt="upvote" />
      </div>
      <div class="vote-count">{{ answer.voteCount }}</div>
      <div class="downvote">
        <img src="../assets/upvote-arrow.svg" alt="upvote" />
      </div>
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
          Question posée par <span class="user-span">{{ answer.user }}</span> le
          <span class="date-span">{{ answer.date }}</span>
        </p>
      </div>
      <div class="answer">{{ answer.content }}</div>
    </div>
    <div class="reply">
      <p>Répondre</p>
      <img src="../assets/reply.svg" alt="Reply" />
    </div>
    <div class="comments-container">
      <div v-for="comment in comments" :key="comment">
        <CommentToAnswer :comment="comment"></CommentToAnswer>
      </div>
      <CommentToAnswerInput></CommentToAnswerInput>
    </div>
  </div>
</template>

<script>
import CommentToAnswer from "@/components/CommentToAnswer";
import CommentToAnswerInput from "@/components/CommentToAnswerInput";
export default {
  name: "AnswerToQuestion",
  components: { CommentToAnswerInput, CommentToAnswer },
  props: {
    answer: {
      content: String,
      user: String,
      date: String,
      voteCount: Number,
    },
  },
  data() {
    return {
      comments: [
        {
          content: "Done cursus pharetra vulputate. Donec eu imperdiet nibh.",
          date: "24 Mai 2022",
          user: "Bop Bap",
          voteCount: 4,
        },
        {
          content: "Done cursus pharetra vulputate. Donec eu imperdiet nibh.",
          date: "24 Mai 2022",
          user: "Bop Bap",
          voteCount: 2,
        },
        {
          content: "Done cursus pharetra vulputate. Donec eu imperdiet nibh.",
          date: "24 Mai 2022",
          user: "Bop Bap",
          voteCount: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.answer-to-question {
  display: grid;
  grid-template-columns: 0.08fr 0.92fr;
  grid-template-rows: repeat(2, auto);
  gap: 0px 0px;
  grid-template-areas:
    "vote answer-container"
    ". reply"
    ". comments";
  align-items: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
  border-bottom: #e2e2e2 solid 1px;
}

.vote {
  display: inline-block;
  width: min-content;
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

.answer {
  margin-top: 2.5vh;
  margin-right: 2vw;
  font-weight: 400;
  font-size: 1.2rem;
}

.answer-infos p {
  display: inline-block;
}

.vote {
  grid-area: vote;
  margin-left: 1vw;
  /*TODO mettre une grid ici ?*/
}

.vote-count {
  font-size: 1.6rem;
  margin-left: 0.2vw;
}
.answer-container {
  grid-area: answer-container;
}

.upvote img {
  filter: invert(90%) sepia(25%) saturate(404%) hue-rotate(63deg)
    brightness(103%) contrast(106%);
  transition: 0.3s ease-in-out;
  margin-bottom: 1vh;
}

.upvote img:hover {
  filter: invert(91%) sepia(10%) saturate(1383%) hue-rotate(61deg)
    brightness(102%) contrast(101%);
}

.downvote img {
  filter: invert(68%) sepia(81%) saturate(155%) hue-rotate(302deg)
    brightness(101%) contrast(101%);
  transform: rotate(180deg);
  transition: 0.3s ease-in-out;
  margin-top: 1.5vh;
}

.downvote img:hover {
  filter: invert(67%) sepia(16%) saturate(2678%) hue-rotate(304deg)
    brightness(103%) contrast(101%);
}

.upvote,
.downvote,
.reply {
  cursor: pointer;
}

.reply {
  grid-area: reply;
  justify-self: end;
  margin-right: 2vw;
}

.reply p {
  color: #6a8bff;
  font-weight: 600;
  display: inline-block;
  margin-right: 0.5vw;
  transition: 0.3s;
}

.reply:hover p {
  color: #4971ff;
}

.reply img {
  filter: invert(64%) sepia(67%) saturate(4842%) hue-rotate(207deg)
    brightness(103%) contrast(101%);
  display: inline-block;
  vertical-align: middle;
  transition: 0.3s;
}

.reply:hover img {
  filter: invert(35%) sepia(86%) saturate(2059%) hue-rotate(217deg)
    brightness(102%) contrast(104%);
}

.comments-container {
  grid-area: comments;
  border-top: #e2e2e2 solid 1px;
}
</style>