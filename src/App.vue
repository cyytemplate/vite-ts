<template>
  <TopNav />
  <router-view></router-view>
</template>
<script lang="ts">
import TopNav from './components/Nav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    TopNav
  }
})
</script>
