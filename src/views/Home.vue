<!--
 * @Author: cyy
 * @Date: 2021-06-16 13:22:33
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 13:24:00
 * @Description: 
-->
<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>

</style>