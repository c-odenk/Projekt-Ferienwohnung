<template>
  <div class="appartment-gallery">
    <div>
      
      <!-- #### IMAGE GALLERY #### -->
      <a href="#" @click.prevent="show">
        
        <img :src="thumbnail">
        <img :src="images[1]">
        <img :src="images[2]">
        <img :src="images[3]">
        <img :src="images[4]">

      </a>
      
      <!-- #### THE LIGHTBOX #### -->
      <div class="lightbox" v-if="visible" @click="hide">
        
        <div @click.stop="hide" class="close"><i class="fas fa-times"></i></div>
        
        <div class="carousel">
          <div @click.stop="prev"><i class="fas fa-chevron-left"></i></div>
          <div class="carousel-image" @click.stop="">
            <img :src="images[index]">
          </div>
          <div @click.stop="next"><i class="fas fa-chevron-right"></i></div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'AppartmentGallery',
  props: {
        thumbnail: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            visible: false,
            index: 0,
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
            this.index = 0;
        },
        hasNext() {
            return this.index + 1 < this.images.length;
        },
        hasPrev() {
            return this.index - 1 >= 0;
        },
        prev() {
            if (this.hasPrev()) {
                this.index -= 1;
            }
        },
        next() {
            if (this.hasNext()) {
                this.index += 1;
            }
        },
        onKeydown(e) {
            if (this.visible) {
                switch (e.key) {
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown)
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown)
    },
}

</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-gallery {

  & a {
    width: 100%;
    height: 60vh;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;

    @include respond(tablet) {
      max-height: 35vh;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 15px;
    }

    @include respond(phone) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 25vh;
      margin: 0 0 8vh 0;
    }

    & img {
      transition: .3s all;
      width: 100%;
      height: 100%;

      &:nth-of-type(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;

        @include respond(tablet) {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }

        @include respond(phone) {
          grid-column: 1 / 1;
          grid-row: 1 / 1;
        }
      }

      &:nth-of-type(2) {
        grid-column: 2 / 2;
        grid-row: 1 / 1;

        @include respond(tablet) {
          grid-column: 2 / 2;
          grid-row: 1 / 2;
        }

        @include respond(phone) {
          display: none;
        }
      }

      &:nth-of-type(3) {
        grid-column: 3 / 3;
        grid-row: 1 / 2;

        @include respond(tablet) {
          grid-column: 2 / 2;
          grid-row: 2 / 3;
        }

        @include respond(phone) {
          display: none;
        }
      }

      &:nth-of-type(4) {
        grid-column: 2 / 2;
        grid-row: 2 / 3;

        @include respond(tablet) {
          display: none;
        }
      }

      &:nth-of-type(5) {
        grid-column: 3 / 3;
        grid-row: 2 / 3;

        @include respond(tablet) {
          display: none;
        }
      }

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}

.lightbox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  & .close {
    font-size: 1.8rem;
    color: #fff;
    position: absolute;
    top: 2.5vh;
    right: 2.5vw;
    cursor: pointer;

    @include respond(tablet) {
      font-size: 1.7rem;
      top: 2vh;
      right: 3.5vw;
    }

    @include respond(phone) {
      font-size: 1.5rem;
      top: 1.5vh;
      right: 5vw;
    }
  }

  & .carousel {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & i {
      font-size: 2rem;
      color: #fff;
      margin: 0 1vw;
      cursor: pointer;

      @include respond(tablet) {
        font-size: 1.8rem;
        margin: 0 2vw;
      }

      @include respond(phone) {
        font-size: 1.5rem;
      }
    }

    &-image {

      & img {
        max-width: 85vw;
      }
    }
  }
}

</style>