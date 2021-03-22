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
    }

  }
});