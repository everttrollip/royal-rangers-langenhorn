<template>
  <base-section id="theme-features">
    <base-section-heading title="Wir lieben das Abenteuer">
      Wir lieben es, gemeinsam unterwegs zu sein, neue Horizonte kennenzulernen und Lagerfeueratmosphäre zu genießen. Unsere Philosophie: Wir lieben das Abenteuer.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
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
          link: 'https://goo.gl/maps/pDNdc3pHFAHEXfx59',
          icon: 'mdi-map',
        },
        {
          title: 'Trees',
          icon: 'mdi-leaf-maple',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Hikes',
          icon: 'mdi-walk',
        },
        {
          title: 'Campfires',
          icon: 'mdi-campfire',
        },
        {
          title: 'Love for nature',
          icon: 'mdi-tree',
        },
        {
          title: 'Camping',
          icon: 'mdi-tent',
        },
      ],
    }),
  }
</script>
