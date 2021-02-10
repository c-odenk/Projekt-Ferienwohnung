<template>
  <div class="landing-testimonials">
    <video autoplay muted loop>
      <source :src="backgroundVideo" type="video/mp4">
    </video>
    <div class="landing-testimonials_row">                   
      <div v-for="testimonial in testimonials" :key="testimonial" class="testimonial">
        <div class="testimonial_col-1">
          <img :src="testimonial.picture">
        </div>
        <div class="testimonial_col-2">
          <h2> {{testimonial.name }} <small> ({{testimonial.booked}}) </small></h2>
          <p> {{testimonial.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import backgroundVideo from '@/assets/video/Weinberg.mp4'
import pictureAndrei   from '@/assets/images/Andrei.png'
import pictureBenjamin from '@/assets/images/Benjamin.jpg'
import pictureUnknown  from '@/assets/images/NoPicture.jpg'

export default {
  name: 'AppartmentTestimonials',
  data: function() {
    return {
      // backgroundVideo: backgroundVideo,

      testimonials: [
        {picture: pictureBenjamin, name: 'Benjamin', booked: '2017 über AirBnB',      text: 'Wir haben uns wirklich sehr wohl gefühlt. Die Wohnung war sehr sauber und freundlich. Fußläufig ist in wenigen Minuren wirklich alles zu erreichen. Ein freundlicher Kontakt zum Vermieter rundet das ganze ab. Immer wieder gerne.'},
        {picture: pictureAndrei,   name: 'Andrei',   booked: '2017 über AirBnB',      text: 'Thank you, Christopher! It was a great time to stay at your place. Everything was at the top level. I and my wife really enjoyed your cozy appartment and the great location.'},
        {picture: pictureUnknown,  name: 'Ralf',     booked: '2019 über Booking.com', text: 'Die Ferienwohnung war sehr sauber, sehr gut ausgestattet, und geschmackvoll eingerichtet. Der Kontakt mit der Vermieterin war sehr nett, und die Übergabe des Schlüssels erfolgte pünktlich zur abgesprochenen Uhrzeit.'},
        {picture: pictureUnknown,  name: 'Armin',    booked: '2018 über Booking.com', text: 'Lage abseits der Straße, sehr ruhig! Trotzdem zentral. Geschmackvolle, durchdachte + moderne Einrichtung mit netten Details + sehr gepflegt. Schöne Aussensitzgelegenheit. Eigener Zugang. Nette Vermieter.'}
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.landing-testimonials {
  width: 100%;
  margin: 10vh 0 1vh 0;
  position: relative;

  background-color: $color-elements-green;

  @include respond(phone) {
    margin: 2.5vh 0 2.5vh 0;
  }

  & video {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    z-index: 9;

    @include respond(phone) {
      display: none;
    }
  }

  &_row {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include respond(tablet) {
      width: 90%;
      margin: 0 5%;
      flex-direction: row;
      overflow-y: hidden;
      overflow-x: scroll;
      transition: all .2s;
      transform: scale(.98);
      cursor: pointer;
      user-select: none;

      top: 50%;
      left: 0;
      transform: translate(0, -50%);

    }

    @include respond(phone) {
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }

    & .testimonial {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 7.5px 20px 7.5px 5px;
      background-color: rgba(#fff, .7);

      &:not(:last-child) {
        margin: 0 0 40px 0;
      }
      
      @include respond(tablet) {
        min-width: 100%;

        &:not(:last-child) {
          margin: 0 5% 0 0;
        }
      }

      @include respond(phone) {
        flex-direction: column;
        max-height: 100%;
        justify-content: flex-start;
        background-color: #F0F0F0;
      }

      &_col-1 {
        width: 17.5%;
        align-self: center;

        @include respond(tablet) {
          width: 20%
        }

        @include respond(phone) {
          width: 45%;
          margin: 1.5vh auto 1.5vh auto;
        }

        & img {
          width: 145px;
          height: 145px;
          border-radius: 50%;
          display: block;
          margin: 0 auto;
          opacity: 1;

          @include respond(tablet) {
            width: 100%;
            height: auto;
          }
        }
      }

      &_col-2 {
        width: 80%;

        @include respond(tablet) {
          width: 77.5%
        }

        @include respond(phone) {
          width: 85%;
          margin: 0 auto;
        }

        & h2 {
          margin: 10px 0 10px 0;

          & small {
            font-size: .7rem;
            font-weight: 400;
          }

          @include respond(phone) {
            text-align: center;
          }
        }

        & p {
          line-height: 1.9;
          letter-spacing: $letter-spacing;
          text-align: justify;
        }
      }
    }
  }
}

</style>