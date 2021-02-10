<template>
  <div class="appartment-info">
    <p v-for="information in information" :key="information"> {{information}} </p>
  </div>
</template>

<script>

export default {
  name: 'AppartmentInfo',
  data: function() {
    return {
    }
  },
  props: [
    "information"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-info {
  & p {
    line-height: $line-height-p-lg;
    letter-spacing: $letter-spacing;
    text-align: justify;
    margin: 0 0 30px 0;
  }
}

</style>