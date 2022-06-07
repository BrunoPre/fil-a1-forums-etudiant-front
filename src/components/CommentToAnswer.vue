<template>
  <div class="comment-to-answer">
    <div class="vote">
      <img
        class="upvote"
        src="../assets/upvote-arrow.svg"
        alt="upvote"
        v-on:click="upvote"
      />
      <p class="vote-count">{{ comment.voteCount }}</p>
      <img
        class="downvote"
        src="../assets/upvote-arrow.svg"
        alt="downvote"
        v-on:click="downvote"
      />
    </div>
    <div class="comment">
      <p>
        {{ comment.content }}
        <span class="comment-info">
          &nbsp;- {{ comment.date }} par
          <a href="">{{ comment.user }}</a>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentToAnswer",
  props: {
    commentProp: {
      content: String,
      date: String,
      user: String,
      voteCount: Number,
    },
  },
  data() {
    return {
      comment: {
        content: this.commentProp.content,
        date: this.commentProp.date,
        user: this.commentProp.user,
        voteCount: this.commentProp.voteCount,
      },
    };
  },
  methods: {
    upvote() {
      if (this.comment.voteCount < 0) return;
      this.comment.voteCount += 1;
    },
    downvote() {
      if (this.comment.voteCount <= 0) return;
      this.comment.voteCount -= 1;
    },
  },
};
</script>

<style scoped>
.comment-to-answer {
  border-bottom: #e2e2e2 solid 1px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-gap: 1vw;
  padding-top: 0.3vh;
  padding-bottom: 0.3vh;
}

.vote {
  margin-left: 1vw;
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: 100%;
  align-items: center;
  justify-items: center;
}

.vote p {
  font-size: 1.2rem;
  margin: 0;
}

.upvote {
  filter: invert(90%) sepia(25%) saturate(404%) hue-rotate(63deg)
    brightness(103%) contrast(106%);
  transition: 0.3s ease-in-out;
}

.upvote:hover {
  filter: invert(91%) sepia(10%) saturate(1383%) hue-rotate(61deg)
    brightness(102%) contrast(101%);
}

.downvote {
  filter: invert(68%) sepia(81%) saturate(155%) hue-rotate(302deg)
    brightness(101%) contrast(101%);
  transform: rotate(180deg);
  transition: 0.3s ease-in-out;
}

.downvote:hover {
  filter: invert(67%) sepia(16%) saturate(2678%) hue-rotate(304deg)
    brightness(103%) contrast(101%);
}

.upvote,
.downvote {
  cursor: pointer;
}

.comment {
  display: inline-block;
  margin-left: 1vw;
  font-size: 1.1rem;
  margin-top: 0.7vh;
  margin-bottom: 0.7vh;
}

.comment p {
  margin-top: 0;
  margin-bottom: 0;
}
.comment-info {
  font-weight: 300;
  font-size: 0.9rem;
}

.comment-info a {
  color: #6a8bff;
  text-decoration: none;
}
</style>
