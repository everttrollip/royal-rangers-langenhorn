
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'hero',
        'theme-features',
        'features',
        'affiliates',
        'interest',
        'contact-us',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
