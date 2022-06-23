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
      <svg
        class="delete-icon"
        @click="deleteComment"
        width="18"
        height="20"
        viewBox="0 0 18 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.28571 7.72921V14.8006C6.28571 14.9152 6.24888 15.0093 6.17522 15.083C6.10156 15.1567 6.00744 15.1935 5.89286 15.1935H5.10714C4.99256 15.1935 4.89844 15.1567 4.82478 15.083C4.75112 15.0093 4.71429 14.9152 4.71429 14.8006V7.72921C4.71429 7.61463 4.75112 7.52051 4.82478 7.44685C4.89844 7.37318 4.99256 7.33635 5.10714 7.33635H5.89286C6.00744 7.33635 6.10156 7.37318 6.17522 7.44685C6.24888 7.52051 6.28571 7.61463 6.28571 7.72921ZM9.42857 7.72921V14.8006C9.42857 14.9152 9.39174 15.0093 9.31808 15.083C9.24442 15.1567 9.1503 15.1935 9.03571 15.1935H8.25C8.13542 15.1935 8.0413 15.1567 7.96763 15.083C7.89397 15.0093 7.85714 14.9152 7.85714 14.8006V7.72921C7.85714 7.61463 7.89397 7.52051 7.96763 7.44685C8.0413 7.37318 8.13542 7.33635 8.25 7.33635H9.03571C9.1503 7.33635 9.24442 7.37318 9.31808 7.44685C9.39174 7.52051 9.42857 7.61463 9.42857 7.72921ZM12.5714 7.72921V14.8006C12.5714 14.9152 12.5346 15.0093 12.4609 15.083C12.3873 15.1567 12.2932 15.1935 12.1786 15.1935H11.3929C11.2783 15.1935 11.1842 15.1567 11.1105 15.083C11.0368 15.0093 11 14.9152 11 14.8006V7.72921C11 7.61463 11.0368 7.52051 11.1105 7.44685C11.1842 7.37318 11.2783 7.33635 11.3929 7.33635H12.1786C12.2932 7.33635 12.3873 7.37318 12.4609 7.44685C12.5346 7.52051 12.5714 7.61463 12.5714 7.72921ZM14.1429 16.6176V4.97921H3.14286V16.6176C3.14286 16.7977 3.1715 16.9634 3.22879 17.1148C3.28609 17.2662 3.34542 17.3767 3.40681 17.4463C3.46819 17.5159 3.51116 17.5506 3.53571 17.5506H13.75C13.7746 17.5506 13.8175 17.5159 13.8789 17.4463C13.9403 17.3767 13.9996 17.2662 14.0569 17.1148C14.1142 16.9634 14.1429 16.7977 14.1429 16.6176ZM5.89286 3.40778H11.3929L10.8036 1.9714C10.7463 1.89774 10.6767 1.85272 10.5949 1.83635H6.70313C6.62128 1.85272 6.55171 1.89774 6.49442 1.9714L5.89286 3.40778ZM17.2857 3.80064V4.58635C17.2857 4.70094 17.2489 4.79506 17.1752 4.86872C17.1016 4.94238 17.0074 4.97921 16.8929 4.97921H15.7143V16.6176C15.7143 17.2969 15.522 17.8842 15.1373 18.3793C14.7526 18.8745 14.2902 19.1221 13.75 19.1221H3.53571C2.99554 19.1221 2.53311 18.8827 2.14844 18.4039C1.76376 17.9251 1.57143 17.346 1.57143 16.6667V4.97921H0.392857C0.278274 4.97921 0.184152 4.94238 0.110491 4.86872C0.0368304 4.79506 0 4.70094 0 4.58635V3.80064C0 3.68606 0.0368304 3.59193 0.110491 3.51827C0.184152 3.44461 0.278274 3.40778 0.392857 3.40778H4.18638L5.04576 1.35756C5.16853 1.05473 5.38951 0.796919 5.70871 0.584121C6.0279 0.371324 6.35119 0.264925 6.67857 0.264925H10.6071C10.9345 0.264925 11.2578 0.371324 11.577 0.584121C11.8962 0.796919 12.1172 1.05473 12.24 1.35756L13.0993 3.40778H16.8929C17.0074 3.40778 17.1016 3.44461 17.1752 3.51827C17.2489 3.59193 17.2857 3.68606 17.2857 3.80064Z"
          fill="#ff7c94"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentToAnswer",
  props: {
    commentProp: {
      id: String,
      content: String,
      date: String,
      user: String,
      voteCount: Number,
    },
  },
  data() {
    return {
      comment: {
        id: this.commentProp.id,
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
    deleteComment() {
      this.$emit("deleteComment", this.comment);
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
  display: inline-block;
}
.comment-info {
  font-weight: 300;
  font-size: 0.9rem;
}

.comment-info a {
  color: #6a8bff;
  text-decoration: none;
}

.delete-icon {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  margin-left: 2vw;
}

.delete-icon path {
  transition: 0.2s;
}

.delete-icon:hover path {
  fill: #ff4869;
}
</style>
