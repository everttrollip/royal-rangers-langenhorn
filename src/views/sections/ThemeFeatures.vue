<template>
  <base-section id="theme-features">
    <base-section-heading title="Wir lieben das Abenteuer">
      Wir lieben es, gemeinsam unterwegs zu sein, neue Horizonte kennenzulernen
      und Lagerfeueratmosphäre zu genießen. Unsere Philosophie: Wir lieben das
      Abenteuer.
    </base-section-heading>

    <v-container>
      <v-row justify="center">
        <v-col class="align">
          <iframe
            width="840"
            height="472"
            src="https://www.youtube.com/embed/Egjye1izoPs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </v-col>
      </v-row>

      <v-row
        class="mt-12"
        justify="center"
      >
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          class="d-flex justify-center align-center"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Wir sind in Langenhorn',
          text: 'Flughafenstr. 89, 22415 Hamburg',
          icon: 'mdi-map',
        },
        {
          title: 'Wann treffen wir?',
          text: 'Jeden Freitag! Von 17-19 Uhr',
          icon: 'mdi-clock-outline',
        },
      ],
    }),
  }
</script>
