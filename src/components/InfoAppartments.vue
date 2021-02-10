<template>
  <div class="landing-service" id="ferienwohnungen">
    <div class="landing-service_col-1">
      <h1> Unsere Ferienwohnungen </h1>
      <p> Moderne, ruhige Ferienwohnungen in hervorragender Lage von Bad Neuenahr-Ahrweiler. <br>
          Nur ca 500 Meter vom Bahnhof Bad Neuenahr entfernt, sind alle Kur- und Wellnesseinrichtungen (Ahr-Resort, Kurhaus, Sinnfonie usw.)
          in wenigen Gehminuten zu erreichen. Viele Restaurants und Geschäfte sind in direkter Umgebung. </p>
      <p> Unsere Wohnungen werden mit Bettwäsche und Handtüchern an unsere Gäste übergeben. Wir legen großen Wert auf Familienfreundlichkeit,
          jedoch sind Haustiere nur nach Absprache gestattet. Die Kurgästekarten mit attraktiven Vorteilen und Angebiten erhalten Sie bei der
          Schlüsselübergabe. </p>
    </div>
    <div class="landing-service_col-2">
      <div class="landing-service_col-2_row">
        <div class="item">
          <i class="fas fa-home"></i>
          <h3> Ganze Appartments </h3>
        </div>
        <div class="item">
          <i class="fas fa-blender"></i>
          <h3> Vollaus. Küchen </h3>
        </div>
        <div class="item">
          <i class="fas fa-shower"></i>
          <h3> Vollaus. Bäder </h3>
        </div>
        <div class="item">
          <i class="fas fa-wifi"></i>
          <h3> WLAN inklusive </h3>
        </div>
        <div class="item">
          <i class="fas fa-parking"></i>
          <h3> Parkmöglichkeiten </h3>
        </div>
        <div class="item">
          <i class="fas fa-smoking-ban"></i>
          <h3> Nichtraucher </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoAppartments',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.landing-service {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #F0F0F0;
  padding: 60px;

  @include respond(tablet) {
    padding: 0;
    flex-direction: column;
  }

  &_col-1 {
    width: 52%;

    @include respond(tablet) {
      width: 90%;
      margin: 5vh 5vw 2.5vh 5vw;
    }

    & h1 {
      margin: 0 0 30px 0;
      font-size: $font-size-h1-lg;
      letter-spacing: $letter-spacing;
      line-height: $line-height-p-sm;
      text-transform: uppercase;

      @include respond(phone) {
        font-size: $font-size-h1-sm;
        text-align: center;
      }
    }

    & p {
      line-height: 1.9;
      letter-spacing: $letter-spacing;
      text-align: justify;
    }
  }

  &_col-2 {
    width: 40%;
    height: 100%;
    align-self: center;

    @include respond(tablet) {
      width: 90%;
      margin: 2.5vh 5vw 3vh 5vw;
    }

    &_row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      & .item {
        width: 30%;
        height: 100px;
        text-align: center;
        align-self: center;

        @include respond(phone) {
          width: 50%;
        }

        & h3 {
          font-size: 1rem;
        }

        & i {
          font-size: 2.3rem;
        }

        &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
          margin: 0 0 30px 0;
        }

        @include respond(phone) {
          &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
            margin: 0;
          }
        }
      }
    }
  }
}

</style>