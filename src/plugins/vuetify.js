// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#0c4583',
        secondary: '#fce503',
        accent: '#d31117',
      },
      dark: {
        primary: '#0c4583',
        secondary: '#fce503',
        accent: '#d31117',
      },
    },
  },
})

// /* CSV */
// 0c4583,d31117,fce503,5f342e,c1eeff

// /* With # */
// #0c4583, #d31117, #fce503, #5f342e, #c1eeff

// /* Array */
// ["0c4583","d31117","fce503","5f342e","c1eeff"]

// /* Object */
// {"Yale Blue":"0c4583","Maximum Red":"d31117","Middle Yellow":"fce503","Caput Mortuum":"5f342e","Light Blue":"c1eeff"}

// /* Extended Array */
// [{"name":"Yale Blue","hex":"0c4583","rgb":[12,69,131],"cmyk":[91,47,0,49],"hsb":[211,91,51],"hsl":[211,83,28],"lab":[29,8,-40]},{"name":"Maximum Red","hex":"d31117","rgb":[211,17,23],"cmyk":[0,92,89,17],"hsb":[358,92,83],"hsl":[358,85,45],"lab":[45,68,51]},{"name":"Middle Yellow","hex":"fce503","rgb":[252,229,3],"cmyk":[0,9,99,1],"hsb":[54,99,99],"hsl":[54,98,50],"lab":[90,-10,89]},{"name":"Caput Mortuum","hex":"5f342e","rgb":[95,52,46],"cmyk":[0,45,52,63],"hsb":[7,52,37],"hsl":[7,35,28],"lab":[27,19,12]},{"name":"Light Blue","hex":"c1eeff","rgb":[193,238,255],"cmyk":[24,7,0,0],"hsb":[196,24,100],"hsl":[196,100,88],"lab":[92,-11,-13]}]

// /* XML */
// <palette>
//   <color name="Yale Blue" hex="0c4583" r="12" g="69" b="131" />
//   <color name="Maximum Red" hex="d31117" r="211" g="17" b="23" />
//   <color name="Middle Yellow" hex="fce503" r="252" g="229" b="3" />
//   <color name="Caput Mortuum" hex="5f342e" r="95" g="52" b="46" />
//   <color name="Light Blue" hex="c1eeff" r="193" g="238" b="255" />
// </palette>
