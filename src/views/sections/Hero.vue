<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/rr-1.jpeg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="1200"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title="Wir starten unsere Wöchentlichen Treffen am 26. August 2022"
          />

          <base-heading
            size="text-h2"
            title="ROYAL RANGERS LANGENHORN"
            weight="medium"
          />

          <base-heading
            size="text-h2"
            title="Jeden Freitag von 17-19 Uhr"
            weight="medium"
          />

          <base-body>
            Wir lieben das Abenteuer. Du auch? Dann sei bereit!
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Interessiert!
            </base-btn>

            <!-- <span class="font-weight-bold ml-6 mr-4 my-4">or</span> -->

            <!-- <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn> -->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
