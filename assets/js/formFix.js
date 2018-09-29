var form = document.querySelector('.form');

window.onscroll = function fixForm(){
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if(scrollPosY > 50) {
        form.className = ('form -fixed');
    } else if(scrollPosY <= 50) {
        form.className =  ('form');
    }
}