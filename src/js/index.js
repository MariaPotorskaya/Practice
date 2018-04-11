let header__nav = document.getElementsByClassName("header__nav")[0];
let wrapper__global = document.getElementsByClassName("wrapper__global")[0];
let search__icon = document.getElementsByClassName("search__icon")[0];
let search__input = document.getElementsByClassName("search__input")[0];
let search__cross = document.getElementsByClassName("search__cross")[0];
let hamburger = document.getElementsByClassName("hamburger")[0];
let search_cross = document.getElementsByClassName("search_cross")[0];
let video__play1 = document.getElementsByClassName('video__play1');
let video__play2 = document.getElementsByClassName('video__play2');

function toggleNav () {
    if ( header__nav.className === "header__nav" && hamburger.className === "hamburger" ) {
        header__nav.className += " header__nav_open";
        hamburger.className += " is-active";
        wrapper__global.className += " menu-opened";
    } else {
        header__nav.className = "header__nav";
        hamburger.className = "hamburger";
        wrapper__global.className = "wrapper__global";
        search__input.value = "";
    }
}

function toggleInput () {
  if (search__input.className === "search__input") {
    search__input.className += " search__input_open";
    search__cross.className += " search__cross_open";
    search__input.focus();
  } else {
    search__input.className = "search__input";
    search__cross.className = "search__cross";
  }
}

function clearInput () {
    search_cross.focus();
    search__input.value = "";
}

function closeSearch () {
    if (search__input == document.activeElement || search_cross == document.activeElement) {
    } else {
        search__input.className = "search__input";
        search__cross.className = "search__cross";
    }
}

function openVideo (event) {
    let video = event.target;
    let img = video.parentElement.firstElementChild;
    let idImg = img.src.slice(26, 37);
    let iframe = document.createElement('iframe');
    iframe.className = 'video__iframe';
    iframe.src = 'https://www.youtube.com/embed/' + idImg + '?ecver=1';
    wrapper__global.appendChild(iframe);
    iframe.onclick = function () { wrapper__global.removeChild(iframe); };
}

hamburger.addEventListener("click", toggleNav);
search__icon.addEventListener("click", toggleInput);
search_cross.addEventListener("click", clearInput);
wrapper__global.addEventListener("click", closeSearch);

for (let i = 0; i < video__play1.length; i++) {
  video__play1[i].addEventListener("click", openVideo);
}

for (let i = 0; i < video__play2.length; i++) {
    video__play2[i].addEventListener("click", openVideo);
}