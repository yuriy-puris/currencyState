<template>
  <div id="app">
    <Header/>
    <main class="wrapper">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/SharedComponents/Header/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
