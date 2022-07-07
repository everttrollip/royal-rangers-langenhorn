<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.3380365382731!2d10.021522529281475!3d53.64069289382262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18849aa4eef21%3A0x68eea93cf23caac!2sFlughafenstr.%2089%2C%2022415%20Hamburg!5e0!3m2!1sen!2sde!4v1657209549443!5m2!1sen!2sde"
      width="100%"
      height="450"
      style="border:0; display: block;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
