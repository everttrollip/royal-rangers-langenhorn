<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-btn
      :color="!theme.isDark ? 'primary' : 'white'"
      href="mailto:info@citylighthamburg.de?subject=Pfadfinder%20Langenhorn"
      outlined
      target="_blank"
    >
      <v-icon left>
        mdi-email
      </v-icon>
      Schreib uns!
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
    },
  }
</script>
