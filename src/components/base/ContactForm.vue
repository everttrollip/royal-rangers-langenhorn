<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
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
        </v-col>

        <v-col>
          <base-img
            :src="require('@/assets/rr-2.jpeg')"
            class="hidden-xs-only"
            contain
            max-width="100%"
          />
          <!-- <v-img
            :src="require('@/assets/rr-1.jpeg')"
            class="white--text"
            gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
            max-width="100%"
          /> -->
        </v-col>
      </v-row>
    </v-container>
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
