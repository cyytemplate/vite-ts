<!--
 * @Author: cyy
 * @Date: 2021-06-16 13:26:58
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 13:52:20
 * @Description: 导航栏
-->
<template>
  <div class="top-nav">
    <ul>
      <img class="logo" alt="Vue logo" src="@/assets/logo.png" />
      <router-link :to="{ name: 'Home', params: { userId: 123 } }"
        >Home
      </router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </ul>
    <span>
      <span class="user" v-if="user.name">{{ user.name }}</span>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </span>
  </div>
</template>

<script lang='ts'>
import { useStore } from "../store";
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup: () => {
    const store = useStore();
    const user = store.state.user;
    return { user }
  }
})

</script>

<style lang="scss" scoped>
.top-nav {
  background-color: #eee;
  padding: 10px 20px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  a {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
    padding: 5px;
    &:hover {
      background-color: #fff;
    }
  }
  .user {
    color: rgb(61, 76, 202);
    margin-right: 10px;
  }
}
.logo {
  width: 30px;
  vertical-align: middle;
  margin-right: 20px;
}
</style>