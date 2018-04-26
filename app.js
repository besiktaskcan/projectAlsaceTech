//faire afficher un lien
/*var app = new Vue({
  el: '#app',
  data: {
    name: 'Alsace Tech',
    job:'Recrutement',
    website: 'http://www.salutcava.com',
    websiteTag:'<a href="http://www.salutcava.com">The best site</a>'

  },
  methods: {
    greet: function(){
      return 'Vous êtes actuellement sur la base de données ' + this.name;
    }
  }
});

//faire afficher du texte sous forme de tableau
var app2 = new Vue({
  el: '#app-2',
  data: {
    todos: [
      { text: 'Apprendre Javascript'},
      { text: 'Apprendre Vue'}
    ]
  }
});

//faire afficher l'age ainsi que des boutons qui permettent d'incrémenter ou non l'age
var app3 = new Vue({
  el: '#app-3',
  data: {
    age: '20',
    x: '0',
    y: '0'
  },
  methods: {
    add: function(inc){
      this.age += inc;
    },
    subtract: function(dec){
      this.age -= dec;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});*/

//faire afficher deux entré pour écrire
var app4 = new Vue({
  el: '#app-4',
  data: {
    name: '',
    age: ''
  },
  methods: {
      logName: function(){
        console.log('you entered your name');
      },
      logAge: function(){
        console.log('you entered your age');
      }
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    age: 20,
    a: 2,
    b: 6
  },
  methods: {
    /*addToA: function(){
      return this.a + this.age;
    },
    addToB: function(){
      return this.b + this.age;
    }*/
  },
  computed: {
    addToA: function(){
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function(){
      console.log('addToB');
      return this.b + this.age;
    }
  }
});

//partie css dynamique qui fait changer la couleur ou
//rajoute une case en plus lorsqu'on appuie sur les boutons
var app6 = new Vue({
  el: '#app-6',
  data: {
    available: false,
    nearby: false,
  },
  methods: {

  },
  computed: {
    compClasses: function(){
      return{
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    error: false,
    success: false
  },
  methods: {

  },
  computed: {

  }
});
