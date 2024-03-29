$(document).ready(function(){


/* PRIMA FILA DI BARS */


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

/* SECONDA FILA DI BARS */

  // Seleziona gli elementi delle bar
const bars = document.querySelectorAll('.freeart_bar');

// Ottieni l'altezza della finestra di visualizzazione
const windowHeight = window.innerHeight;

// Aggiungi un listener per l'evento scroll
window.addEventListener('scroll', () => {
  // Ottieni la posizione della prima bar rispetto alla finestra di visualizzazione
  const firstBarRect = bars[0].getBoundingClientRect();
  const firstBarTop = firstBarRect.top;
  const firstBarBottom = firstBarRect.bottom;

  // Verifica se la prima bar è visibile nella viewport
  if (firstBarTop < windowHeight && firstBarBottom > 0) {
    // Imposta l'altezza delle altre bar in modo che siano uguali all'altezza della prima
    const firstBarHeight = firstBarRect.height;
    bars.forEach((bar) => {
      bar.style.height = `${firstBarHeight}px`;
    });
  }
});


// Seleziona gli elementi delle barre
const bars3 = document.querySelectorAll('.ed_bar');

// Aggiungi un listener per l'evento scroll
window.addEventListener('scroll', () => {
  // Ottieni le dimensioni della seconda barra rispetto alla finestra di visualizzazione
  const secondBarRect = bars3[1].getBoundingClientRect();
  const secondBarHeight = secondBarRect.height;
  const secondBarTop = secondBarRect.top;
  const secondBarBottom = secondBarRect.bottom;

  // Verifica se la seconda barra è visibile nella viewport
  if (secondBarTop < windowHeight && secondBarBottom > 0) {
    // Imposta l'altezza delle altre barre in modo che siano uguali all'altezza della seconda barra
    bars3.forEach((bar) => {
      bar.style.height = `${secondBarHeight}px`;
    });
  }
});

  // Osserva l'elemento target
  observer.observe(target);

  /* __________VARIABILI________ */

  const mapImg = $(".map_image_container img")[0];
  const mapText = $(".map_text");
  const mainImg = $('.arrow_main_img img');
  const previewImgs = $('.arrow_preview img');
  const mainGarageImg= $('.garage_container img');
  const circleBtn1= $('.button_img_one'); 
  const circleBtn2= $('.button_img_two'); 
  const circleBtn3= $('.button_img_three'); 

  /* const sliderImgs = [
    {
      image: 'assets/20230104_114822.jpg'
    },
    {
      image: 'assets/20230104_115140.jpg'
    },
    {
      image: 'assets/20230104_115451.jpg'
    },
    {
      image: 'assets/20230104_115559.jpg'
    },
    {
      image: 'assets/20230104_115620.jpg'
    },
    {
      image: 'assets/20230104_115813.jpg'
    }
  ]; */

  var slideIndex = 0;
  let active = 0;
  
  showSlides(slideIndex);

  /* __________FUNZIONI___________ */

  
  previewImgs.each(function(index) {
    $(this).on('click', function() {
      active=index;
      // otteniamo l'URL dell'immagine cliccata
      const newImgUrl = $(this).attr('src');
      // sostituiamo l'immagine principale con quella cliccata
      mainImg.attr('src', newImgUrl);
      if (active===index) {
        previewImgs.removeClass('pr_border');
        $(this).addClass('pr_border');
      }
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
  };
  
  window.startVideo = function() {
    $('#video').get(0).play();
    $('.video_button').addClass('active');
  };

  
  /* funzione x zoommare img */
  window.zoomIn = function(img){
    $(img).toggleClass("zoom_In");

  };

/* fake zoom sui cerchi */
  $(circleBtn1).on('click', function(){
    const garage1Img = 'assets/garage_web1.jpg';
      $(mainGarageImg).attr('src', garage1Img)
  })

  $(circleBtn2).on('click', function(){
    const garage2Img = 'assets/garage_web3.jpg';
      $(mainGarageImg).attr('src', garage2Img)
  })

  $(circleBtn3).on('click', function(){
    const garage3Img = 'assets/garage_web2.jpg';
      $(mainGarageImg).attr('src', garage3Img);
  })


/* funzione x bimbo text */
  $('.bimbo').mouseover(function () { 
    $('.bimbo_text').text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates rerum velit consequatur nihil voluptatem sit alias error doloribus, odio minima voluptatibus, dolorum quos nemo magni expedita. Pariatur, id quo? ')
  });
  $('.bimbo').mouseout(function () { 
    $('.bimbo_text').text('')
  });  

/* funzione x sculture section */

  $('.first_row').mouseover(function () { 
    $('.fourth_text').text('MASCHERE')
  });
  $('.second_row').mouseover(function () { 
    $('.fourth_text').text('SCULTURA')
  });
  $('.third_row').mouseover(function () { 
    $('.fourth_text').text('DETTAGLIO')
  });



  /* ____________SLIDER____________ */

  function showSlides(n) {
    var slides = $(".slider-img");
    var dots = $(".mini_circle");

    // resetto le classi d-none per le immagini
    slides.addClass("d-none");

    // rimuovo la classe "now" dai cerchi e il background-color trasparente
    dots.removeClass("now").css("background-color", "white");

    // controllo l'indice corrente della slide
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = n;
    }

    // visualizzo la slide corrente e imposto la classe "now" sul mini cerchio corrispondente
    $(slides[slideIndex]).removeClass("d-none");
    $(dots[slideIndex]).addClass("now").css("background-color", "transparent");
  }

  // gestione dei click sui pulsanti di scorrimento
  $(".btn_slider").click(function() {
    if ($(this).hasClass("btn_prev")) {
      showSlides(slideIndex - 1);
    } else if ($(this).hasClass("btn_next")) {
      showSlides(slideIndex + 1);
    }
  });

  // gestione dei click sui mini cerchi
  $(".mini_circle").click(function() {
    var dotIndex = $(this).data("index");
    showSlides(dotIndex);
  });
 
});
