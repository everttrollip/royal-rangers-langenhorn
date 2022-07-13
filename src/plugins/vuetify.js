import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1E398F',
        secondary: '#fce604',
        accent: '#547282',
        error: '#E3000F',
      },
      dark: {
        primary: '#1E398F',
        secondary: '#fce604',
        accent: '#547282',
        error: '#E3000F',
      },
    },
  },
})

/**
 * Das FARBSYSTEM
 * Royal Rangers Deutschland

  RR_gelb
  HKS / Pantone   02 / 604 C
  CYMK            5 | 0 | 100 | 0
  RGB             252 | 233 | 0
  HEX             #fce604

  RR_rot
  HKS / Pantone   14 / 1795 C
  CYMK            0 | 100 | 100 | 0
  RGB             227 | 0 | 15
  HEX             #E3000F

  RR_blau
  HKS / Pantone   42 / 7687 C
  CYMK            100 | 85 | 0 |0
  RGB             30 | 57 | 143
  HEX             #1E398F

  RRA_blau
  CYMK            72 | 47 | 39 |10
  RGB             84 | 114 | 130
  HEX             #547282

  RR_braun
  HKS / Pantone   84 / 7603 C
  CYMK            10 | 80 | 70 | 60
  RGB             116 | 43 | 32
  HEX             #742B20

  RR_schwarz
  HKS             88
  CYMK            0 | 0 | 0 | 100
  RGB             26 | 26 | 24
  HEX             #1A1A18

  RR_beige
  CYMK            11 | 7 | 44 | 34
  RGB             174 | 169 | 125
  HEX             #aea97d

  RRA_grau
  CYMK            5 | 0 | 5 | 5
  RGB             237 | 241 | 237
  HEX             #edf1ed

 */
