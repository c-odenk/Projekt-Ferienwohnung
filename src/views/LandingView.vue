<template>
  <div class="landing">
    <TheWallpaper />
    <InfoAhrtal />
    <InfoAppartments />
    <TheAppartments />
    <AppartmentTestimonials />
  </div>
</template>

<script>

import TheWallpaper from '@/components/TheWallpaper.vue'
import InfoAhrtal from '@/components/InfoAhrtal.vue'
import InfoAppartments from '@/components/InfoAppartments.vue'
import TheAppartments from '@/components/TheAppartments.vue'
import AppartmentTestimonials from '@/components/AppartmentTestimonials.vue'

export default {
  name: 'LandingView',
  components: {
    TheWallpaper,
    InfoAhrtal,
    InfoAppartments,
    TheAppartments,
    AppartmentTestimonials
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

</style>