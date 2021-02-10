<template>
  <div class="appartment-booking">
    <p> Reisedaten auswählen und Verfügbarkeit prüfen </p>

    <input type="date" id="start" name="trip-start" v-model="arrival" required>
    <input type="date" id="start" name="trip-end"   v-model="leave" required>
    <button @click.stop="showInformations(); calculateDays()" id="showAvailability"> Verfügbarkeit prüfen </button>

    <div class="appartment-booking_informations">
      
      <div class="appartment-booking_informations_show-date"> 
        <div class="theDate">
          <span class="day"> {{new Date(this.arrival).getDate()}} </span><span class="date"> {{this.month[new Date(this.arrival).getMonth()]}} {{new Date(this.arrival).getFullYear()}} </span>
        </div>
        <div class="theTime">
          <i class="far fa-clock"></i>
          <span class="time"> ab 14:00 Uhr </span>
        </div>
      </div>

      <div class="appartment-booking_informations_show-date"> 
        <div class="theDate">
          <span class="day"> {{new Date(this.leave).getDate()}} </span><span class="date"> {{this.month[new Date(this.leave).getMonth()]}} {{new Date(this.leave).getFullYear()}} </span>
        </div>
        <div class="theTime">
          <i class="far fa-clock"></i>
          <span class="time"> bis 12:00 Uhr </span>
        </div>
      </div>

      <div class="appartment-booking_informations_show-price">
        <div class="price">
          <span> {{this.days}} Übernachtungen  ({{this.booking[0].price}},00 €) </span><span> {{this.days * this.booking[0].price}},00 € </span>
        </div>
        <div class="price">
          <span> einmalige Reinigungsgebühr </span><span> {{this.booking[1].fee}},00 € </span>
        </div>
        <div class="finalPrice">
          <span>  {{this.days * this.booking[0].price + this.booking[1].fee}},00 € </span>
        </div>
      </div>

      <input type="text" id="name"  v-model="name"  placeholder="Name .." size="30" required>
      <input type="text" id="phone" v-model="phone" placeholder="Telefonnummer .." size="30" required>
      <input type="text" id="email" v-model="email" placeholder="E-Mail .." size="30" required>

      <div class="appartment-booking_informations_show-date_buttons">
        <span id="setBack" @click.stop="setBackInformations"> Zurücksetzen </span>
        <button @click.stop="confirmation"> Anfrage absenden </button>       
      </div>
      <p class="italic"> ** Maximale Personenanzahl: 4 Personen </p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AppartmentBooking',
  data: function() {
    return {
       visible: false,
       arrival: 0,
       leave: 0,
       days: 0,
       month: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
       name: "",
       phone: "",
       email: ""
    }
  },
  props: [
    "booking"
  ],
  methods: {
    showInformations() {
      if(this.visible == false) {
        document.querySelector('.appartment-booking_informations').style.display = "block";
        document.querySelector('#showAvailability').style.display = "none";
        this.visible = true;
      }
    },
    setBackInformations() {
      if(this.visible) {
        document.querySelector('.appartment-booking_informations').style.display = "none";
        document.querySelector('#showAvailability').style.display = "block";
        this.name  = "";
        this.phone = "";
        this.email = "";
      }
    },
    calculateDays() {
      var date1 = new Date(this.arrival);
      var date2 = new Date(this.leave);
      this.days = Math.round((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24); 
    },
    confirmation() {
      alert("Vielen Dank für Ihre Buchungsanfrage! Wir melden uns in kürze bei Ihnen." + "\n" + "\n Ihre Buchungsinformationen:" + "\n" + " " + this.name + "\n" + " " + this.phone + "\n" + " " + this.email);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-booking {
  width: 100%;
  line-height: 1.9;
  letter-spacing: $letter-spacing;

  @include respond(tablet) {
    margin: 2.5vh 0 7.5vh 0;
  }

  & input {
    display: block;
    box-sizing: border-box;
    background-color: transparent;
    border: .5px solid black;
    border-radius: 0;
    width: 100%;
    padding: 7.5px 5px;
    margin: 0 0 2vh 0;

    &::placeholder {
      color: #000;
      letter-spacing: $letter-spacing;
      font-family: $font-family;
    }
  }
  
  & button {
    display: block;
    min-width: 55%;
    background-color: $color-elements-green;
    letter-spacing: $letter-spacing;
    color: #fff;
    font-size: .9rem;
    border: none;
    padding: 10px 25px;
    cursor: pointer;

    &#showAvailability {
      margin: 0 0 0 auto;
    }
  }

  & p {
    line-height: $line-height-p-lg;
    letter-spacing: $letter-spacing;

    &.italic {
      line-height: 1;
      display: block;
      margin: 1vh 0 3vh 0;
      font-size: .6rem;
      font-style: italic;
      font-weight: 400;
    }
  }

  &_informations {
    width: 100%;
    margin: 0 0 0 0;
    display: none;

    &_show-date {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &:nth-of-type(1) {
        margin: 3vh 0 0 0;
      }

      &:nth-of-type(2) {
        margin: 0 0 2.5vh 0;
      }

      & .theDate {
        display: flex;
        flex-direction: row;
        align-items: center;

        & .day {
          min-width: 10px;
          font-size: 1.5rem;
          margin: 0 10px 0 0;

          @include respond(phone) {
            font-size: 1.6rem;
          }
        }

        & .date {
          font-size: .85rem;
        }
      }

      & .theTime {
        display: flex;
        align-items: center;

        & i {
          font-size: 1.5rem;
          margin: 0 10px 0 0;
        }

        & .time {
          min-width: 100px;
          font-size: .85rem;
          border: .5px solid #000;
          padding: 2.5px 10px;
        }
      }

      &_buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 3vh 0 0 0;

        & #setBack {
          font-size: .9rem;
          cursor: pointer;
        }
      }
    }

    &_show-price {
      width: 100%;
      line-height: $line-height-p-lg;
      letter-spacing: $letter-spacing;
      margin: 2.5vh 0;
      
      & .price {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      & .finalPrice {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin: 10px 0 0 0;
        
        & span {
          padding: 10px 0 0 20px;
          border-top: 1px solid black;
        }
      }
    }
  }
}
</style>