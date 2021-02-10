<template>
  <div class="landing-appartments">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <div class="landing-appartments_row">

      <router-link :to="appartment.link" v-for="appartment in appartments" :key="appartment">
        <div class="appartment">
          <div class="appartment_image-gallery">
            <div class="img-big">
              <img :src="appartment.picture1">
            </div>
            <div class="img-small">
              <img :src="appartment.picture2">
            </div>
            <div class="img-small">
              <img :src="appartment.picture3">
            </div>
          </div>
          <div class="appartment_text">
            <h2> {{appartment.name}} </h2>
            <p> {{appartment.adress}} </p>
          </div>
        </div>  
      </router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAppartments',
  data: function () {
    return {
      appartments: [
        {name: 'Ferienwohnung Elisabeth', picture1: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134497022.jpg', picture2: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134497018.jpg', picture3: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134497016.jpg', adress: 'Ravensbergerstraße 21, 53474 Bad Neuenahr-Ahrweiler', link: '/wohnung/elisabeth'},
        {name: 'Ferienwohnung Hedwig',    picture1: 'https://a0.muscache.com/im/pictures/81d28d64-6ddd-43bf-9ef6-b4c70512e286.jpg?im_w=1200', picture2: 'https://cf.bstatic.com/images/hotel/max1024x768/113/113901092.jpg', picture3: 'https://cf.bstatic.com/images/hotel/max1024x768/113/113901095.jpg', adress: 'Ravensbergerstraße 21, 53474 Bad Neuenahr-Ahrweiler', link: '/wohnung/hedwig'}
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.landing-appartments {
  width: 80%;
  margin: 17.5vh 10vw;

  @include respond(tablet) {
    width: 90%;
    margin: 7.5vh 5vw;
  }

  & h1 {
    width: 100%;
    letter-spacing: $letter-spacing;
    text-transform: uppercase;
  }

  &_row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include respond(tablet) {
      flex-direction: column;
    }

    & a {
      width: 46%;
      text-decoration: none;
      color: #000;

      @include respond(tablet) {
        width: 100%;
        margin: 1.5vh 0;
      }

      & .appartment {
        padding: 0 0 20px 0;

        &_image-gallery {
          width: 100%;
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 3;
          grid-gap: 15px;
          transition: .3s all;

          & .img-big {
            background-color: red;
            grid-column: 1/2;
            grid-row: 1/3;

            @include respond(phone) {
              grid-column: 1/3;
              grid-row: 1/3;
            } 

            & img {
              width: 100%;
              height: 100%;
            }
          }

          & .img-small {
            grid-column: 2/3;
            height: 150px;

            &:nth-of-type(2), {
              grid-row: 1/2
            }

            &:nth-of-type(3) {
              grid-row: 2/3
            }

            @include respond(phone) {
              display: none;
            } 

            & img {
              width: 100%;
              min-height: 100%;
            }
          }

          & .img-big, .img-small {
            transition: .3s all;
            &:hover {
              transform: scale(1.05);
            }
          }
        }

        &_text {

          & h2 {
            margin: 10px 0 0 0;
            line-height: 1.9;
            letter-spacing: $letter-spacing;
          }

          & p {
            margin: 0;
            line-height: $line-height-p-sm;
            letter-spacing: $letter-spacing;
          }
        }
      }
    }
  }
}

</style>