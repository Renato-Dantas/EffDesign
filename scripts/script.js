let image = document.querySelectorAll('.cardImg')
let time = 2000
let idx = 0
let numImgs = 6


function nextImage(){
    image[0].setAttribute('src', `../images/img${idx}.jpeg`)
    idx++
    if(idx > numImgs){
        idx = 0
    }
}

function start(){
    setInterval(()=>{
        nextImage()
    }, time)
}

window.addEventListener('load', start)