<template>
  <div class="appartment-cancellation">
    <h2> Kostenlose Stornierung </h2>
    <p> Bis zu 30 Tage vor der Anreise können Sie kostenlos stornieren. Bei einer Stornierung in den 30 Tagen vor der Anreise zahlen Sie als Stornierungsgebühr einen Betrag in Höhe des Gesamtpreises. Bei Ihrer Nichtanreise zahlen Sie als Gebühr für die Nichtanreise einen Betrag in Höhe des Gesamtpreises. </p>
  </div>
</template>

<script>
export default {
  name: 'AppartmentCancellation',
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.appartment-cancellation {

  & h2 {
    margin: 5vh 0 1vh 0;
    letter-spacing: $letter-spacing;
  }

  & p {
    line-height: 1.9;
    letter-spacing: $letter-spacing;
    margin: 0 0 30px 0;
    text-align: justify;
  }
}

</style>