/* $(document).ready(function(){
    
    $(".ms_nav").click(function(){
        $(this).removeClass('display_none');
    });
});
 */

/* VARIABILI */

const mapImg = document.querySelector(".map_image_container img");
const mapText = document.querySelector(".map_text");
const buttonImgFirst = document.querySelector(".button_img_one")

/* FUNZIONI */
/* funzione al click del primo bottone sull'immagine */
buttonImgFirst.addEventListener("click", () => {
    const img = document.querySelector('.opere_first img')
    const circle = document.querySelectorAll('.circle')
    img.src = "assets/Senza_titolo-2_Tavola_disegno_1.jpg";
    circle.forEach(circle => {
        circle.classList.add('active');
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