<template>
  <div class="mailbox">
    <div class="container">
      <div
        v-if="mailList!=''"
        class="row"
      >
        <div
          v-for="(item, index) in mailList"
          :key="index"
          class="mail-content col-md-12 mt-3 p-0 ml-2"
        >
          <div class="mail-number text-right p-0">
            <span
              v-if="$store.state.profile.id == item.sender.id"
              class="thumb_up"
            >
              S
            </span>
            <span
              v-else
              class="thumb_down"
            >
              R
            </span>
          </div>
          <div class="mail-main pl-2">
            <div class="mail-category">
              <router-link :to="'/mailbox/'+index">
                【 {{ item.categoryType }} 】【 {{ item.category.name }} 】
              </router-link>
            </div>
            <div class="mail-title">
              <router-link :to="'/mailbox/'+index">
                {{ item.title }}
              </router-link>
            </div>
            <div class="mail-info pr-2">
              <a
                :href="item.sender.url"
                target="_blank"
              >
                {{ item.sender.name }}
              </a>
              <p class="date m-0">
                {{ item.time | moment("MM/DD") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Mailbox",
  data() {
    return {
      mailList: "",
      keyword: ""
    };
  },
  mounted() {
    // this.$bus.$emit("active", {
    //   url: "/mailbox",
    //   name: "個人信箱"
    // });
    this.$emit("handle", { url: "/mailbox", name: "個人信箱" });
    this.getMail();
  },
  methods: {
    getMail() {
      var vm = this;
      this.$firebase
        .database()
        .ref(
          `${process.env.NODE_ENV}/users/` +
            this.$store.state.profile.id +
            "/mailbox"
        )
        .once("value")
        .then(function(snapshot) {
          vm.mailList = snapshot.val();
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
.mailbox {
  color: $color-white;
  overflow: auto;
  .container {
    padding: 0 5%;
    height: 500px;
    input {
      width: 100%;
      line-height: 1.6em;
      font-size: 1.6em;
      border: none;
      color: $color-white;
      background-color: #222222;
    }
    .mail-content {
      display: flex;
      background-color: $color-ptt-grey;
      line-height: 1.4em;
      font-size: 1.4em;
      cursor: pointer;
      .mail-number {
        width: 5%;
      }
      .mail-main {
        width: 95%;
        a {
          color: $color-white;
        }
        .mail-info {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .commentBar {
    background-color: $color-ptt-grey;
    color: $color-grey;
    margin: 0 5%;
    line-height: 1.6em;
    font-size: 1.6em;
    cursor: pointer;
    text-decoration: none;
    a {
      color: $color-grey;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
