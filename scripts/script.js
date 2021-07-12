
let time = 2000
let currentImageIndex = 0
let images = document.querySelectorAll('.gallery img')
let max = images.length;

function nextImage(){
    images[currentImageIndex].classList.remove('cardImg')
    currentImageIndex++

    if(currentImageIndex>= max){
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add('cardImg')
}

function start(){
    setInterval(()=>{
        nextImage()
    },time)
}

window.addEventListener('load', start)

// 0 1 8 12 13 19