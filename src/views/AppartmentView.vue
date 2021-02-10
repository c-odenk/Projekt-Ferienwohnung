<template>
  <div class="appartment">
    <AppartmentGallery :thumbnail="this.appartment.images[0]" :images="this.appartment.images" />
    <div class="appartment-content">
      <div class="appartment-content_col-1">
        <AppartmentHeading :heading="this.appartment.heading" />
        <AppartmentInfo :information="this.appartment.information" />
        <AppartmentMap />
        <AppartmentFurnishing :furnishing="this.appartment.furnishing" />
        <AppartmentCancellation />
      </div>
      <div class="appartment-content_col-2">
        <AppartmentBooking :booking="this.appartment.booking" />        
      </div>
    </div>
  </div>
</template>

<script>

import AppartmentGallery from '@/components/appartment/AppartmentGallery.vue'
import AppartmentHeading from '@/components/appartment/AppartmentHeading.vue'
import AppartmentInfo from '@/components/appartment/AppartmentInfo.vue'
import AppartmentMap from '@/components/appartment/AppartmentMap.vue'
import AppartmentFurnishing from '@/components/appartment/AppartmentFurnishing.vue'
import AppartmentCancellation from '@/components/appartment/AppartmentCancellation.vue'
import AppartmentBooking from '@/components/appartment/AppartmentBooking.vue'

import json from '@/assets/texts/appartments.json'

export default {
  name: 'AppartmentView',

  data: function() {
    return {
      appartments: json,
      appartment: null
    }
  },
  created() {
    if(this.$route.params.ferienwohnung == "elisabeth"){
      this.appartment = this.appartments.elisabeth
    } else if(this.$route.params.ferienwohnung == "hedwig") {
      this.appartment = this.appartments.hedwig
    }
  },
  components: {
    AppartmentGallery,
    AppartmentHeading,
    AppartmentInfo,
    AppartmentMap,
    AppartmentFurnishing,
    AppartmentCancellation,
    AppartmentBooking
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment {
  width: 100%;

  &-content {
    width: 90%;
    margin: 10vh auto 2.5vh auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    @include respond(tablet) {
      width: 95%;
      margin: 3.5vh auto 0 auto;
    }

    @include respond(phone) {
      margin: 0 auto;
    }
    
    &_col-1 {
      width: 70%;

      @include respond(tablet) {
        width: 100%;
        order: 1;
      }
    }

    &_col-2 {
      width: 21%;

      @include respond(tablet) {
        width: 95%;
        margin: 0 auto;
        order: 2;
      }
    }
  }  
}

</style>