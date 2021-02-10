<template>
<div class="landing-info" id="ahrtal">
    <div class="landing-info_col-1">
      <h1> Urlaub im Ahrtahl ... </h1>
      <p> ... das ist Urlaub im Rotweinparadies! <br>
          Auf steilen Felsterrassen wachsen im Ahrtal Rotweine, die zu den besten ihrer Art in Deutschland zählen.
          Rotweinwanderweg und Ahrsteig führen vorbei an den sonnigen Lagen und behalten dabei fast immer den Fluss im Auge.</p>
      <h2> Der Kurort Bad Neuenahr-Ahrweiler </h2>
      <p> Das Freizeitangebot an der Ahr ist so vielfältig und facettenreich wie seine Landschaft. Die Kurstadt Bad Neuenahr
          besticht dabei durch ihr modernes Flair. Die Kuranlagen im Jugendstil sind einzigartig, wie beispielsweise das
          Thermalbadehaus und die angrenzende Spielbank. Auch Gesundheit, Entspannung und Schönheit stehen im Ahrtal im
          Mittelpunkt </p>
      <p> Ahrweiler mit seinen romantischen Fachwerkhäusern und seiner komplett erhaltenen mittelalterlichen Stadtmauer und den
          traditionellen Weinwirtschaften bidlet dazu den Gegensatz. <small> (Textquelle: Ahrtaltourismus) </small> </p>
      <a target="_blank" href="https://www.ahrtal.de/"><i class="fas fa-arrow-right"></i> Erfahre mehr </a>
    </div>
    <div class="landing-info_col-2">
      <div class="landing-info_col-2_row">
        <img :src="image1">
        <img :src="image2">
        <img :src="image3">
      </div>
    </div>
  </div>
</template>

<script>

import imageUferlichter from '@/assets/images/Ahrtor.jpg'
import imageSpielbank from '@/assets/images/Spielbank.jpg'
import imageAhrtor from '@/assets/images/Uferlichter.jpg'

export default {
  name: 'InfoAhrtal',
   data: function () {
    return {
      image1: imageUferlichter,
      image2: imageSpielbank,
      image3: imageAhrtor
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.landing-info {
  width: 80%;
  margin: 17.5vh 10vw;
  display: flex;
  flex-direction: row;

  @include respond(tablet) {
    width: 90%;
    margin: 7.5vh 5vw 5vh 5vw;
    padding: 0;
  }

  &_col-1 {
    width: 45%;

    @include respond(tablet) {
      width: 100%;
    }

    & h1 {
      margin: 0 0 30px 0;
      font-size: $font-size-h1-lg;
      letter-spacing: $letter-spacing;
      text-transform: uppercase;
    }

    & h2 {
      margin: 35px 0 15px 0;
      font-size: $font-size-h2-lg;
      letter-spacing: $letter-spacing;
      text-transform: uppercase;
    }

    & p {
      line-height: 1.9;
      letter-spacing: $letter-spacing;
      text-align: justify;
    }

    & a {
      display: block;
      text-decoration: none;
      color: $color-text-dark;
      letter-spacing: $letter-spacing;
      margin: 25px 0 0 0;
    }
  }

  &_col-2 {
    width: 45%;
    align-items: center;
    position: relative;

    @include respond(tablet) {
      display: none;
    }

    &_row {
      width: 100%;
      align-items: center;

      & img {
        width: 360px;
        height: 220px;
        position: absolute;
        box-shadow: 10px 20px 20px #888888;
        transition: .3s all;

        &:nth-of-type(1) {
          top: 10%;
          left: 30%;
        }
        &:nth-of-type(2) {
          top: 20%;
          left: 65%;
        }
        &:nth-of-type(3) {
          top: 40%;
          left: 47.5%;
        }

        &:hover {
          z-index: 999;
          transform: scale(1.05);
        }
      }
    }
  }
}

</style>