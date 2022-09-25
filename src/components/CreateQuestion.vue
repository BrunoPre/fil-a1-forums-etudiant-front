<template>
  <div class="create-question">
    <textarea
      v-model="question.title"
      :placeholder="placeholder_write_msg_here"
      class="question-box"
      required
    ></textarea>
    <textarea
      v-model="question.description"
      :placeholder="placeholder_write_description"
      class="description-box"
    ></textarea>
    <div class="categories">
      <div class="categories-container" v-if="!moreCategories">
        <button
          v-for="category in categories.slice(0, 4)"
          :key="category"
          @click="updateSelectedCategories(category)"
          :class="
            selectedCategories.includes(category)
              ? 'selected-category'
              : 'category-button'
          "
        >
          {{ category.libelle }}
        </button>
      </div>
      <div class="categories-container" v-else>
        <button
          v-for="category in categories"
          :key="category"
          @click="updateSelectedCategories(category)"
          :class="
            selectedCategories.includes(category)
              ? 'selected-category'
              : 'category-button'
          "
        >
          {{ category.libelle }}
        </button>
      </div>
      <div class="more-categories">
        <p v-if="moreCategories === false" @click="moreCategories = true">
          Show more categories ↓
        </p>
        <p v-else @click="moreCategories = false">Show less categories ↑</p>
      </div>
    </div>
    <button @click="(event) => submitQuestion(event)" class="button-submit">
      {{ submit_label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import postService from "@/services/post.service";
import { mapGetters } from "vuex";
import Utils from "@/utils/Utils";
import { IPost } from "@/types/IPost";
import { ICategory } from "@/types/ICategory";
import { PostFetched } from "@/types/PostFetched";

export default defineComponent({
  name: "CreateQuestion",
  props: {
    categories: { type: Array as () => Array<ICategory>, required: true },
    initSelectedCategory: { type: Object as () => ICategory, required: true },
  },
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
    }),
  },
  data() {
    return {
      question: this.initQuestion(),
      placeholder_write_msg_here: "Write your question here",
      placeholder_write_description: "Write a description (optional)",
      submit_label: "Submit",
      selectedCategories: new Array<ICategory>(),
      moreCategories: false,
    };
  },
  methods: {
    initQuestion() {
      return {
        title: "",
        description: "",
        user: "",
        date: Utils.convertTimestampToHumanReadable(new Date().getDate()),
        voteCount: 0,
        bestAnswer: null,
      };
    },
    async submitQuestion(event: any) {
      // Submits a message
      if (event) {
        // TODO: Do dynamic or at least a better validation
        if (this.question.title === "") {
          window.alert("Please write a question before continuing");
          return;
        }
        let params = this.$route.params;
        const _groupId: string = params.id2 as string;
        let post: IPost = {
          groupId: _groupId,
          title: this.question.title,
          content: this.question.description,
          categoryId: this.selectedCategories[0].id, // back-end does not handle multiple categories
          userName: this.getState.user.username,
        };
        await postService
          .postPost(post)
          .then((res: PostFetched) => {
            this.$emit("newQuestion", this.question); // update front-end and destroy this component
            window.alert("Your question has successfully been submitted");
          })
          .catch((err) => {
            if (err.response.status === 500)
              window.alert(
                "ERROR: an internal server error occurred and your message hasn't been posted"
              );
          });
      } else {
        window.alert("ERROR: message couldn't be posted");
      }
    },
    updateSelectedCategories(category: ICategory) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c: ICategory) => c !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
      console.log(this.selectedCategories);
    },
  },
  mounted() {
    this.selectedCategories = [this.initSelectedCategory];
  },
});
</script>

<style scoped>
.create-question {
  padding-top: 3vh;
  /* avoid submit button to float on the first question card */
  overflow: hidden;
}

textarea {
  background: #f8f9ff;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  border-radius: 5px;
  padding: 10px 15px 0;
  color: #446dff;
  border: none;
  margin-bottom: 1vh;
  font-size: 1rem;
}

textarea::placeholder {
  color: #6a8bff;
  font-size: 1rem;
}

textarea:focus {
  outline: none;
}

.question-box {
  /* TODO: force no bottom padding */
}

.description-box {
  height: 10vh;
}

.button-submit {
  float: right;
  background: rgba(106, 139, 255, 0.6);
  border: none;
  border-radius: 2px;
  padding: 8px 23px;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  /* text attributes */
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  color: white;
  transition: 0.2s;
}

.button-submit:hover {
  background-color: #6a8bff;
}

.categories {
  margin-top: 0;
  margin-bottom: 2vh;
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vh;
  row-gap: 0.5vw;
}

.category-button {
  background-color: #f8f9ff;
  color: #6a8bff;
}

.category-button:hover {
  background-color: #c9d1ff;
}

.categories p {
  color: #6a8bff;
  font-weight: 500;
}

.selected-category {
  background-color: #6a8bff;
  color: white;
}

.category-button,
.selected-category {
  border: none;
  font-size: 100%;
  font-weight: 500;
  border-radius: 5px;
  padding: 0.7vh 1vw;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.more-categories {
  cursor: pointer;
  margin-left: 0.1vw;
}

.more-categories p {
  font-weight: 300;
}
</style>
