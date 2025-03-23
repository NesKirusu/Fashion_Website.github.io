let carousel = document.getElementById('carousel')
function nextbtn(){
    carousel.append(carousel.querySelector('.item:first-child'))
}
function prevbtn(){
    carousel.prepend(carousel.querySelector('.item:last-child'))
}