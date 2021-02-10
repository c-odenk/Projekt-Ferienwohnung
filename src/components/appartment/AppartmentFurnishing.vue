<template>
  <div class="appartment-furnishing">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <div class="basics">
      <p class="free"><span> Kostenlos ! </span> Private Parkplätze stehen kostenfrei an der Unterkunft (Reservierung ist nicht erforderlich) zur Verfügung. </p>
      <p class="free"><span> Kostenlos ! </span> WLAN ist in allen Bereichen nutzbar und ist kostenfrei. </p>
    </div>

  <div v-for="furnishing in furnishing" :key="furnishing">
    <h2> {{furnishing.room}} </h2>
    <ul>
      <li v-for="furnishing in furnishing.furnishing" :key="furnishing"> {{furnishing}} </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AppartmentFurnishing',
  data: function() {
    return {
      
    }
  },
  props: [
    "furnishing"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-furnishing {

  & p {
    line-height: 1.9;
    letter-spacing: $letter-spacing;
    margin: 0 0 30px 0;
  }

  & .basics {

    & .free {
      margin: 0 0 10px 0;

      & span {
        padding: 5px 5px 5px 12.5px;
        margin: 0 10px 0 0;
        font-size: .9rem;
        background-color: $color-elements-green;
        letter-spacing: $letter-spacing;
        color: #fff;
      }
    }
  }

  & h2 {
    margin: 5vh 0 0 0;
    letter-spacing: $letter-spacing;
  }

  & ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

    & li {
      width: 20%;
      margin: 0 0 12.5px 0;
      letter-spacing: $letter-spacing;

      @include respond(tablet) {
        width: 25%;
      }

      @include respond(phone) {
        width: 100%;
      }

      &::before {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f14a";
        color: $color-elements-green;
        margin: 0 3px 0 0;
      }
    }
  }
}

</style>