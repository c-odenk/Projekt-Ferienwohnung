<template>
  <div class="impressum">
    <div class="impressum_wallpaper">
    </div>
    <div class="impressum_content">
        <h1> Impressum </h1>
        <h2> Angaben gemäß § 5 TMG </h2>
        <p> Odenkirchen Grundstücksverwaltung Gbr <br>
            Dagmar, Sebastian und Christopher Odenkirchen <br>
            Ravensbergerstraße 21a <br>
            53474 Bad Neuenahr-Ahrweiler </p>
        
        <h2> Kontakt </h2>
        <p> Telefon: +49 (0) 177 - 2196803 <br>
            E-Mail: christopher.odenkirchen@gmail.com </p>

        <h2> Haftung für Inhalte </h2>
        <p> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. </p>
        <p> Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. </p>
        
        <h2> Haftung für Links </h2>
        <p> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. </p>
        <p> Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. </p>

        <h2> Urheberrecht </h2>
        <p> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. </p>
        <p> Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. </p>
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

.impressum {

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

        & h2 {
            font-size: $font-size-h2-lg;
            letter-spacing: $letter-spacing;
            text-transform: uppercase;

            &:nth-of-type(1) {
                margin: 20px 0 20px 0;
            }

            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4),
            &:nth-of-type(5) {
                margin: 40px 0 20px 0;
            }
        }

        & p {
            line-height: 1.9;
            letter-spacing: $letter-spacing;
            text-align: justify;

            @include respond(phone) {
                text-align: left;
            }
        }
    }
}

</style>