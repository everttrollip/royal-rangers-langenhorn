<template>
  <v-theme-provider>
    <base-section
      id="interest"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="INTERESSIERT? SEHR COOL!"
            />

            <base-body space="0">
              <span>
                Melde dich an mit unsere form und wir wissen bescheid!
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              large
              outlined
              @click="handleSignUp"
            >
              <v-icon left>
                mdi-open-in-new
              </v-icon>
              Hier anmelden
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionInterest',
    methods: {
      handleSignUp () {
        const jotform = 'https://form.jotform.com/222505635355353'
        window.open(
          jotform,
          '_blank',
        )
      },
    },
  }
</script>

<style lang="sass">
  a:link
    text-decoration: none
  a:visited
    text-decoration: none
  a:hover
    text-decoration: none
  a:active
    text-decoration: none
</style>
