let carousel = document.getElementById('carousel')
function nextbtn(){
    carousel.append(carousel.querySelector('.container:first-child'))
}
function prevbtn(){
    carousel.prepend(carousel.querySelector('.container:last-child'))
}