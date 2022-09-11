<template>
  <base-section
    id="features"
    class=""
  >
    <base-section-heading title="Was bieten wir an?">
      Wir haben drei Teams: Entdecker 4-6 Jahre, Forscher 6-8 Jahre und Kundschafter 9-12 Jahre
    </base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row justify="center">
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="3"
            md="3"
          >
            <base-info-card
              align="center"
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          image: 'rr-entdecker-1.png',
          title: 'Entdecker (4-6 Jahre)',
          text: 'Wir sind die Entdecker im Alter von 4-6 Jahren. Bei uns gibt es viel zu erleben: Wir lernen die Natur zu entdecken, basteln und essen zusammen und verdienen uns unsere Aufkleber für die ersten Abzeichen. Dabei kommt die Bewegung nicht zu kurz. Wir klettern, laufen, springen, balancieren und spielen gemeinsam. Und haben dabei viel Spaß und Freude.',
        },
        {
          image: 'rr-forscher-1.png',
          title: 'Forscher (6-8 Jahre)',
          text: 'Die Forscher sind die Rangers der zweitjüngsten Altersstufe. Im Alter von 6 bis 8 Jahren erforschen sie mit Spaß und Abenteuer die Natur und können ihre manchmal temperamentvolle Natur bei uns ausleben. Mit actionreichen Spielen, fesselnden Andachten und den Forscherprüfungen bestreiten sie jede Woche aufs neue erfolgreich den Freitag Nachmittag in der Natur.',
        },
        {
          image: 'rr-kundschafter-1.png',
          title: 'Kundschafter (9-12 Jahre)',
          text: 'Mit einer Menge Spaß bei den Teamstunden können wir Kundschafter jede Woche aufs neue ihre Fähigkeiten erweitern und notwendige Dinge fürs Leben lernen. Dies geschieht ganz natürlich im gemeinsamen Teamleben in welchem man mit den anderen Teammitgliedern auskommen und sich manchmal auch einigen muss. Ebenso können wir Kundschafterprüfungen ablegen und damit auch unser Wissen und ihre Fähigkeiten unter Beweis stellen und zeigen.',
        },
      ],
    }),
  }
</script>
