 // Lista de URLs das imagens
 var imagens = [
  "fotos/4lan.jpg",
  "fotos/Adolfz.jpg",
  "fotos/Axtlol.jpg",
  "fotos/Ayel.jpg",
  "fotos/Bianquinha.jpg",
  "fotos/BlackOutz.jpg",
  "fotos/Boo.jpg",
  "fotos/BRTT.jpg",
  "fotos/Bueirinho.jpg",
  "fotos/Cellbit.jpg",
  "fotos/Cerol.jpg",
  "fotos/Chris Paiva.jpg",
  "fotos/CSR.jpg",
  "fotos/Daniels.jpg",
  "fotos/Defante.jpg",
  "fotos/DMenor11.jpg",
  "fotos/Fir3zera.jpg",
  "fotos/Fnx.jpg",
  "fotos/gragolandia2.jpg",
  "fotos/Gratis150ml.jpg",
  "fotos/Hastaad.jpg",
  "fotos/Hayshii.jpg",
  "fotos/hudisonamorim.jpg",
  "fotos/IShowSpeed.jpg",
  "fotos/JeanMago.jpg",
  ];

  let intervalId = setInterval(function trocarImagem() {

    var indice = Math.floor(Math.random() * imagens.length);
    var img = document.getElementById("random-img");
    img.src = imagens[indice];
  }, 2000);


