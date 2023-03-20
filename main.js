/* $(document).ready(function(){
    
    $(".ms_nav").click(function(){
        $(this).removeClass('display_none');
    });
});
 */


// Seleziona l'elemento che si desidera osservare
const target = document.querySelector('.bar');

// Crea una nuova istanza dell'Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Se l'elemento diventato visibile nella viewport, esegui una funzione
    if (entry.isIntersecting) {
      const bars= document.querySelectorAll('.bar');
      console.log(bars);
      bars.forEach(bars =>{
          bars.style.height = '400px';
          bars.style.transform = 'translateY(0)';
      })
    }
  });
});

// Osserva l'elemento target
observer.observe(target);


/* VARIABILI */

const mapImg = document.querySelector(".map_image_container img");
const mapText = document.querySelector(".map_text");
const mainImg = document.querySelector('.arrow_main_img img');
const previewImgs = document.querySelectorAll('.arrow_preview img');

let active = 0



/* FUNZIONI */

previewImgs.forEach((previewImg, index) => {
  previewImg.addEventListener('click', () => {
    // otteniamo l'URL dell'immagine cliccata
    const newImgUrl = previewImg.src;
    // sostituiamo l'immagine principale con quella cliccata
    mainImg.src = newImgUrl;
  });
});



/* funzione on hover x cambiare immagine e far apparire testo */
mapImg.addEventListener("mouseover", () => {
    mapImg.src = "assets/Senza_titolo-2_Tavola_disegno_1.jpg";
    mapText.classList.remove("active");
  });

/* funzione mouseout x riavere l'immagine precedente e far scomparire testo */
mapImg.addEventListener("mouseout", () => {
    mapImg.src = "assets/Senza_titolo-2_Tavola_disegno_1_copia.jpg";
    mapText.classList.add("active");
  });


  /* function per  far comparire e scomparire menù a tendina */
function toggleHam(){
    const nav= document.querySelector('.ms_nav');
    nav.classList.toggle('active');
    nav.classList.toggle('slide-down');
}

/* function onclick x far partire video */
function startVideo() {
    document.getElementById('video').play();
    document.querySelector('.video_button').classList.add('active')
};