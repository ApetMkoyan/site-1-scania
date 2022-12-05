let slider = document.querySelector('.mtcr_left')
let next = document.querySelector('.next_top')
let prev = document.querySelector('.prev_bottom')



///////////////////////////////////////////////////SLIDER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let slider_arr = ['img/truck1.png', 'img/truck2.png', 'img/truck3.png', 'img/truck4.png']
let x = 0;
slider.style.background = `url(${slider_arr[0]})`
slider.style.backgroundSize = "contain"
slider.style.backgroundPosition = "center"
slider.style.backgroundRepeat = "no-repeat"
next.onclick = function () {
    x++;
    if (x == 4) {
        x = 0
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
    else {
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
}

prev.onclick = function () {
    x--;
    if (x < 0) {
        x = 3
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
    else {
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
}