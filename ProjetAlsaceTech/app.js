/*var app = new Vue({
  el: '#app',
  data: {
    liste: ListeContact.html
  },
  methods: {

  },
  computed: {

  }
});  */

var liste = new Vue({
  el: '#liste',
  data: {
    selectedSearchIndexes: [
      'cname',
      'ecam',
      'ecpm',
      'ei',
      'exia',
      'em',
      'engees,'
      'architecture',
      'ensc',
      'ensisa',
      'esbs',
      'insa',
      'telecom',
      'eost'
    ]
  },
});


var entreprise = new Vue({
  el: '#entreprise',
  data: {
    entreprise: '',
  },
  methods: {

  },
  computed: {

  }
});
