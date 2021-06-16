<template>
  <div class="login-form">
    <form action="javascript:;">
      <div>用户名：<input type="text" v-model="name"></div>
      <button @click="submit">提交</button>
    </form>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { useStore } from "../store";
const store = useStore();

const name = ref('')

const submit = () => {
  store.dispatch('user/setUser', {name: name.value})
}
</script>

<style lang="scss" scoped>
.login-form {
  margin: 20px;
  text-align:center;
  button {
    margin-top: 20px;
  }
}
</style>