<template>
  <div class="appartment-heading">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <h1> {{this.heading[0]}} </h1>
    
    <ul>
      <li><i class="fas fa-map-marker-alt"></i> {{this.heading[1]}} </li>
      <li><i class="fas fa-bed"></i> {{this.heading[2]}} </li>
      <li><i class="fas fa-bath"></i> {{this.heading[3]}} </li>
      <li><i class="fas fa-users"></i> max. {{this.heading[4]}} </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'AppartmentHeading',
  props: [
    "heading"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-heading {

  & h1 {
    margin: 0;
    font-size: $font-size-h1-lg;
    line-height: $line-height-p-sm;
    letter-spacing: $letter-spacing;
    text-transform: uppercase;

    @include respond(tablet) {
      font-size: $font-size-h1-sm;
    }
  }

  & ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @include respond(tablet) {
      margin: 1vh 0 2vh 0;
      flex-direction: column;
      align-items: flex-start;
      padding: 5px 0;
    }

    & li {
      padding: 2.5vh 0 7.5vh 0;
      letter-spacing: $letter-spacing;
      line-height: $line-height-p-sm;
      align-content: center;

      @include respond(tablet) {
        padding: 5px 0;
      }

      & i {
        font-size: 1.6rem;
        margin: 0 10px 0 0;
        color: #808080;

        @include respond(tablet) {
          width: 35px;
        }

        @include respond(phone) {
          width: 30px;
        }
      }
    }
  }
}

</style>