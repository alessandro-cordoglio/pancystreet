/* $(document).ready(function(){
    
    $(".ms_nav").click(function(){
        $(this).removeClass('display_none');
    });
});
 */

/* function per  far comparire e scomparire menù a tendina */
function toggleHam(){
    var nav= document.querySelector('.ms_nav');
    nav.classList.toggle('active');
    nav.classList.toggle('slide-down');
}

/* function onclick x far partire video */
function startVideo() {
    document.getElementById('video').play();
    document.querySelector('.video_button').classList.add('active')
};