<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div
          v-if="user!=''"
          class="main col-md-12"
        >
          <div class="profile-header">
            <div class="profile-photo text-center">
              <img
                :src="user.images[0].url"
                alt
                class="img-fluid rounded"
              >
            </div>
            <div class="profile-info">
              <ul>
                <li>
                  <a
                    :href="user.url"
                    target="_blank"
                  >
                    {{ user.name }}
                  </a>
                </li>
                <li>
                  <span>{{ user.description }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="profile-content">
            <div
              v-for="(item, index) in articlesList"
              :key="index"
              class="articles-content col-md-12 mt-3 p-0 ml-3"
            >
              <!-- <div
                class="articles-number text-right p-0"
                :class="commentCount(item.comment).color"
              >{{commentCount(item.comment).number}}</div>-->
              <div class="articles-main pl-2">
                <div class="articles-category">
                  <router-link :to="'/articles/'+item.id">
                    【 {{ item.categoryType }} 】【 {{ item.category.name }} 】
                  </router-link>
                </div>
                <div class="articles-title">
                  <router-link :to="'/articles/'+item.id">
                    {{ item.title }}
                  </router-link>
                </div>
                <div class="articles-info pr-2">
                  <a
                    :href="item.author.url"
                    target="_blank"
                  >
                    {{ item.author.name }}
                  </a>
                  <p class="date m-0">
                    {{ item.postTime | moment("MM/DD") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      user: "",
      articlesList: []
    };
  },
  created() {
    // this.$bus.$emit("active", {
    //   url: "/profile/"+this.$route.params.id,
    //   name: "個人文章"
    // });
    this.$emit("handle", { url: this.$route.path, name: "個人文章" });
    this.getProfile();
    this.getArticles();
  },
  methods: {
    getProfile() {
      var vm = this;
      this.$firebase
        .database()
        .ref(`${process.env.NODE_ENV}/users/` + this.$route.params.id)
        .once("value")
        .then(function(snapshot) {
          vm.user = snapshot.val();
        });
    },
    getArticles() {
      this.articlesList = [];
      var vm = this;
      this.$firebase
        .database()
        .ref(`${process.env.NODE_ENV}/articles`)
        .once("value")
        .then(function(snapshot) {
          let articles = snapshot.val();
          for (let item in articles) {
            if (articles[item].author.id == vm.$route.params.id) {
              articles[item].id = item;
              vm.articlesList.push(articles[item]);
            }
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
.container {
  height: 78vh;
  padding: 0 5%;
  overflow: auto;
  .main {
    margin-top: 2%;
    .profile-header .profile-info,
    .profile-content {
      ul {
        padding: 2%;
        margin: 0;
        text-align: center;
        li {
          list-style: none;
          span {
            color: $color-white;
          }
          a {
            text-decoration: none;
            font-size: 1.8em;
            color: $color-white;
            &:hover {
              color: $color-kkbox-blue;
            }
          }
        }
      }
      .articles-content {
        display: flex;
        background-color: $color-ptt-grey;
        line-height: 1.4em;
        font-size: 1.4em;
        cursor: pointer;
        .articles-number {
          width: 5%;
        }
        .articles-main {
          width: 95%;
          color: $color-white;
          a {
            color: $color-white;
          }
          .articles-info {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
