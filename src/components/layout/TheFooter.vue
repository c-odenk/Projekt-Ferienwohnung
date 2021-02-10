<template>
  <footer>
    <nav class="footer_nav">
      <ul>
        <li><router-link to="/"> Startseite </router-link></li>
        <li><router-link to="/hausordnung"> Hausordnung </router-link></li>
        <li><router-link to="/impressum"> Impressum </router-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

footer {
  box-sizing: border-box;
  width: 100%;
  margin: 2vh 0 2.5vh 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @include respond(tablet) {
    justify-content: flex-start;
    margin: 0;
    padding: 2vh 0;
  }

  @include respond(phone) {
    background-color: #F0F0F0;
    padding: 3vh 3vw 2vh 3vw;
  }

  & nav {

    & ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;

      @include respond(phone) {
        flex-direction: column;
      }

      & li {
        margin: 0 0 0 25px;
        padding: 0;
        list-style: none;
        text-transform: uppercase;
        letter-spacing: $letter-spacing;

        @include respond(phone) {
          margin: 0;
          padding: 1vh 0;
        }

        & a {
          text-decoration: none;
          color: $color-text-dark;
        }
      }
    }
  }
}

</style>