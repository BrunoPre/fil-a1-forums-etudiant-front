<template>
  <div class="answer-to-question" :style="setBorderBottom()">
    <div class="vote">
      <div class="upvote" v-on:click="upvote">
        <img src="../assets/upvote-arrow.svg" alt="upvote" />
      </div>
      <div class="vote-count">{{ answer.voteCount }}</div>
      <div class="downvote" v-on:click="downvote">
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
          Question posée par
          <span class="user-span">{{ answer.user }}</span> le
          <span class="date-span">{{ answer.date }}</span>
        </p>
      </div>
      <div class="answer">{{ answer.content }}</div>
    </div>
    <div class="actions" v-on:click="reply = true">
      <div class="reply">
        <p>Répondre</p>
        <img src="../assets/reply.svg" alt="Reply" />
      </div>
      <div class="delete-answer" @click="deleteAnswer">
        <p>Supprimer</p>
      </div>
    </div>
    <div class="comments-container" v-if="reply || comments.length !== 0">
      <div v-for="comment in comments" :key="comment">
        <CommentToAnswer
          :comment-prop="comment"
          @delete-comment="deleteComment"
        ></CommentToAnswer>
      </div>
      <CommentToAnswerInput @new-comment="newComment"></CommentToAnswerInput>
    </div>
  </div>
</template>

<script>
import CommentToAnswer from "@/components/CommentToAnswer";
import CommentToAnswerInput from "@/components/CommentToAnswerInput";
import ReplyService from "@/services/reply.service";
import VoteService from "@/services/vote.service";
import { mapGetters } from "vuex";
import Utils from "@/utils/Utils";
export default {
  name: "AnswerToQuestion",
  components: { CommentToAnswerInput, CommentToAnswer },
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
    }),
  },
  props: {
    answerProp: {
      id: String,
      postId: String,
      content: String,
      user: String,
      date: String,
      voteCount: Number,
    },
    isLastAnswer: Boolean,
  },
  data: function () {
    return {
      answer: this.answerProp,
      comments: [],
      reply: false,
    };
  },
  methods: {
    setBorderBottom() {
      return this.isLastAnswer ? "" : "border-bottom: #e2e2e2 solid 1px;";
    },
    async newComment(comment) {
      console.log(
        "this.parentPostId,\n" +
          "        this.answer.id,\n" +
          "        this.getState.user.username,\n" +
          "        comment",
        this.answer.postId,
        this.answer.id,
        this.getState.user.username,
        comment
      );
      await ReplyService.postCommentToAnswer(
        this.answer.postId,
        this.answer.id,
        this.getState.user.username,
        comment
      );
      this.comments.push({
        content: comment,
        date: Utils.convertTimestampToHumanReadable(new Date().getDate()), // TODO: change it
        user: this.getState.user.username,
        voteCount: 0,
      });
      console.log(this.comments);
    },
    async upvote() {
      if (this.answer.voteCount < 0) return;
      await VoteService.postLike(this.getState.user.username, this.answer.id)
        .then((res) => (this.answer.voteCount += 1))
        .catch((err) => console.log("Upvote already sent"));
    },
    async downvote() {
      if (this.answer.voteCount <= 0) return;
      await VoteService.postDislike(this.getState.user.username, this.answer.id)
        .then((res) => (this.answer.voteCount -= 1))
        .catch((err) => console.log("Downvote already sent"));
    },
    async deleteComment(comment) {
      await ReplyService.deleteReply(comment.id);
      this.comments = this.comments.filter((c) => c.id !== comment.id);
    },
    async deleteAnswer() {
      await ReplyService.deleteReply(this.answer.id);
      this.$emit("deleteAnswer", this.answer);
    },
    async setComments() {
      await ReplyService.getCommentsByReplyId(this.answer.id)
        .then((coms) => {
          //TODO: translate date & map voteCount
          coms.forEach(
            (c) => (c.date = Utils.convertTimestampToHumanReadable(c.date))
          );
          this.comments = coms;
        })
        .catch((err) => {
          console.log("no comment for reply id ", this.answer.id, err);
          this.comments = []; // just in case
        });
    },
    async setVoteCounterAnswer() {
      await VoteService.getVoteCounter(this.answer.id).then((val) => {
        this.answer.voteCount = val;
      });
    },
    async setVoteCounterComments() {
      for (const com of this.comments) {
        await VoteService.getVoteCounter(com.id).then((val) => {
          com.voteCount = val;
        });
      }
    },
  },
  async mounted() {
    await this.setVoteCounterAnswer();
    await this.setComments();
    await this.setVoteCounterComments();
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
}

.vote-count {
  font-size: 1.6rem;
  text-align: center;
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
.actions {
  cursor: pointer;
}

.actions {
  grid-area: reply;
  justify-self: end;
  margin-right: 2vw;
}

.reply {
  display: inline-block;
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

.delete-answer {
  display: inline-block;
  margin-left: 2vw;
}

.delete-answer p {
  color: #ff7c94;
  font-weight: 500;
  transition: 0.2s;
}

.delete-answer p:hover {
  color: #ff4869;
}

.actions img {
  filter: invert(64%) sepia(67%) saturate(4842%) hue-rotate(207deg)
    brightness(103%) contrast(101%);
  display: inline-block;
  vertical-align: middle;
  transition: 0.3s;
}

.actions:hover img {
  filter: invert(35%) sepia(86%) saturate(2059%) hue-rotate(217deg)
    brightness(102%) contrast(104%);
}

.comments-container {
  grid-area: comments;
  border-top: #e2e2e2 solid 1px;
}
</style>
