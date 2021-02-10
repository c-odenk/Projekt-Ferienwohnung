<template>
  <div id="app">
    <TheHeader />
    <router-view/>
    <TheFooter />    
  </div>
</template>

<script>

import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  data: function() {
    return {  
    }
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import '@/variables/variables.scss';

html {
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  background-color: $color-body-background;
  font-family: $font-family;
  width: 100%;
  margin: 0;
  padding: 1% 3% 0 3%;

  @include respond(tablet) {
    padding: 0;
  }
}

</style>
