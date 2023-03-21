$(document).ready(function(){
   // Seleziona l'elemento che si desidera osservare
  const target = $('.bar')[0];

  // Crea una nuova istanza dell'Intersection Observer
  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  // Se l'elemento diventato visibile nella viewport, esegui una funzione
  if (entry.isIntersecting) {
  const bars= $('.bar');
  console.log(bars);
  bars.each(function(){
  $(this).css('height', '400px');
  $(this).css('transform', 'translateY(0)');
  })
  }
  });
  });

  // Osserva l'elemento target
  observer.observe(target);

  /* __________VARIABILI________ */

  const mapImg = $(".map_image_container img")[0];
  const mapText = $(".map_text");
  const mainImg = $('.arrow_main_img img');
  const previewImgs = $('.arrow_preview img');
  const sliderImgs = [
    {
      image: 'assets/20230104_114822.jpg'
    },
    {
      image: 'assets/20230104_115140.jpg'
    },
    {
      image: 'assets/20230104_115140.jpg'
    },
    {
      image: 'assets/20230104_115140.jpg'
    },
    {
      image: 'assets/20230104_115140.jpg'
    },
    {
      image: 'assets/20230104_115140.jpg'
    }
  ];
  let active = 0;

  /* __________FUNZIONI___________ */

  previewImgs.each(function(index) {
  $(this).on('click', function() {
  // otteniamo l'URL dell'immagine cliccata
  const newImgUrl = $(this).attr('src');
  // sostituiamo l'immagine principale con quella cliccata
  mainImg.attr('src', newImgUrl);
  });
  });

  /* funzione on hover x cambiare immagine e far apparire testo */
  $(mapImg).on("mouseover", () => {
  $(mapImg).attr("src", "assets/Senza_titolo-2_Tavola_disegno_1.jpg");
  $(mapText).removeClass("active");
  });

  /* funzione mouseout x riavere l'immagine precedente e far scomparire testo */
  $(mapImg).on("mouseout", () => {
  $(mapImg).attr("src", "assets/Senza_titolo-2_Tavola_disegno_1_copia.jpg");
  $(mapText).addClass("active");
  });

  window.toggleHam = function() {
    const nav = $('.ms_nav');
    nav.toggleClass('active');
    nav.toggleClass('slide-down');
  }
  
  window.startVideo = function() {
    $('#video').get(0).play();
    $('.video_button').addClass('active');
  }



  
});
