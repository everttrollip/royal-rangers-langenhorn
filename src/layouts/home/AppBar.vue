<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
    >
      <base-img
        :src="require('@/assets/logo.png')"
        class="mt-12 mr-3"
        contain
        max-width="128"
        width="100%"
        @click="handleClickLogo"
      />
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    data: () => ({
      drawer: null,
      items: [
        'Home',
      ],
    }),

    methods: {
      handleClickLogo () {
        this.$router.push('/')
      },
    },
  }
</script>

<style lang="sass">
  #home-app-bar
    border-top: 5px solid #fce604
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
