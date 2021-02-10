<template>
  <div class="hausordnung">
    <div class="hausordnung_wallpaper">
    </div>
    <div class="hausordnung_content">
        <h1> Hausordnung </h1>
        <p> Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImpressumView',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.hausordnung {
    min-height: 83.5vh;

     @include respond(tablet) {
         min-height: 87.5vh;
    }

    &_wallpaper {
        height: 15vh;
        background-color: $color-elements-green;
    }

    &_content {
        width: 80%;
        margin: 5vh auto;

        @include respond(tablet) {
            width: 90%;
            margin: 5vh 5vw 5vh 5vw;
            padding: 0;
        }

        & h1 {
            margin: 0;
            font-size: $font-size-h1-lg;
            letter-spacing: $letter-spacing;
            text-transform: uppercase;
        }

        & p {
            line-height: 1.9;
            letter-spacing: $letter-spacing;
            text-align: justify;
        }
    }
}

</style>