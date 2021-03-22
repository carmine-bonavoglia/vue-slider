/* 
Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
Bonus1: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
Bonus2: Introdurre l' evento click sui pallini e visualizzare immagine relativa.
Bonus3: spazio alla fantasia
*/

var app = new Vue({
  el: '#app',
  
  data: {
    counter: 0,
    immagini: [
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg'
    ],
    intervallo: ''
  },

  created(){
    
    self.addEventListener('keydown', function(e){
      app.keyCode = e.key;
      app.keyDown(e);
    });

    this.intervallo = setInterval(this.nextPhoto, 3000);
  },

  methods:{

    nextPhoto(){
      if(this.counter == this.immagini.length - 1){
        this.counter = 0;
      } else {
        this.counter++;
      }
    },

    prevPhoto(){
      if(this.counter < 1){
        this.counter = this.immagini.length - 1;
      } else {
        this.counter--;
      }
    },

    changePhoto(dot){
      this.counter = dot;
      clearInterval(this.intervallo);
    },

    keyDown(e){
      if(e.keyCode == 39){
        this.nextPhoto();
      } else if(e.keyCode == 37){
        this.prevPhoto();
      }
    }

  }
});