<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-clock-outline',
          title: 'Wann treffen wir uns?',
          text: 'Wir treffen uns jeden Freitag!<br>Von 17-19 Uhr',
        },
        {
          icon: 'mdi-map-marker-outline',
          title: 'Wo kann ich euch finden?',
          text: 'Wo kann ich euch finden?<br>Flughafenstr. 89, 22415 Hamburg',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'Wir freuen uns auf jeden interessiert! <br>info@citylighthamburg.de',
        },
      ],
    }),
  }
</script>
