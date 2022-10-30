let index = 0

showSlide(index)

function showSlide(i) {
    index += i

    let images = document.getElementsByClassName('image')
    let dots = document.getElementsByClassName('dot')

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'        
    }

    for (let i = 0; i < images.length; i++) {
        dots[i].style.backgroundColor = 'lightgrey'        
    }


    if(index > images.length - 1) {
        index = 0
    }

    if(index < 0) {
        index = images.length - 1
        
    }

    console.log(dots.length);
    images[index].style.display = 'block';
    dots[index].style.backgroundColor = 'grey';

}

