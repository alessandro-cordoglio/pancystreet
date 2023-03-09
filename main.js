/* $(document).ready(function(){
    
    $(".ms_nav").click(function(){
        $(this).removeClass('display_none');
    });
});
 */

function toggleHam(){
    var nav= document.querySelector('.ms_nav');
    nav.classList.toggle('display_none');
    nav.classList.toggle('slide-down');
}