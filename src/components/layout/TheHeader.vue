<template>
  <header>
    <nav>
      <div class="header_logo">
        <a href="#"> Ferienwohnungen Odenkirchen </a> 
        <i class="fas fa-bars" @click="toggleNav()"></i>
      </div>
      <div class="header_navbar">
        <ul>
          <li><router-link to="/"> Startseite </router-link></li>
          <li><router-link to="/"> Ahrtal </router-link></li>
          <li><router-link to="/#ferienwohnungen"> Unterkünfte </router-link></li>
          <li><router-link to="/"> Kontakt </router-link></li>
        </ul>
      </div>
    </nav>    
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data: function () {
    return {
      visible: false
    }
  },
  methods: {
    toggleNav() {
      if(this.visible == false) {
        document.querySelector('header nav .header_navbar').style.display = "block";
        this.visible = true;
      } else {
        document.querySelector('header nav .header_navbar').style.display = "none";
        this.visible = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

header {
  width: 100%;
  padding: 20px 0;

  @include respond(tablet) {
    padding: 0;
  }

  & nav {
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    & .header_logo {

      @include respond(tablet) {
        box-sizing: border-box;
        width: 100%;
        padding: 2vh 3vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      & a {
        color: $color-text-dark;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2rem;

        @include respond(tablet) {
          font-size: 1.6rem;
        }
      }

      i {
        display: none;
        font-size: 1.6rem;

        @include respond(tablet) {
          display: inline-block;
        }
      }
    }

    & .header_navbar {
      
      @include respond(tablet) {
        min-width: 100%;
        display: none;
      }

      & ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;

        @include respond(tablet) {
          flex-direction: column;
          padding: 1vh 3vw 2vh 3vw;
        }

        & li {
          margin: 0 0 0 25px;
          padding: 0;
          list-style: none;
          text-transform: uppercase;
          letter-spacing: $letter-spacing;

          @include respond(tablet) {
            padding: 10px 0;
            margin: 0;
          }

          & a {
            text-decoration: none;
            color: $color-text-dark;
            font-size: $font-size-p-lg;
            font-weight: 500;

            @include respond(tablet) {
              font-size: $font-size-p-sm;
            }
          }
        }
      }
    }
  }
}

</style>