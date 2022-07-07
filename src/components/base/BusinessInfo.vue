<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="WIE KANN ICH EUCH FINDEN?"
        pace="6"
      />

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },
  }
</script>
