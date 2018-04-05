let header__nav = document.getElementsByClassName("header__nav")[0];
let body_visible = document.getElementsByClassName("body_visible")[0];
let search__icon = document.getElementsByClassName("search__icon")[0];
let search__input = document.getElementsByClassName("search__input")[0];
let search__cross = document.getElementsByClassName("search__cross")[0];
let hamburger = document.getElementsByClassName("hamburger")[0];
let search_cross = document.getElementsByClassName("search_cross")[0];

function toggleNav() {
    if ( header__nav.className === "header__nav" && hamburger.className === "hamburger" ) {
        header__nav.className += " header__nav_open";
        hamburger.className += " is-active";
        body_visible.className = "body_hidden";
    } else {
        header__nav.className = "header__nav";
        hamburger.className = "hamburger";
        body_visible.className = "body_visible";
        search__input.value = "";
    }
}

function toggleInput() {
  if (search__input.className === "search__input") {
    search__input.className += " search__input_open";
    search__cross.className += " search__cross_open";
  } else {
    search__input.className = "search__input";
    search__cross.className = " search__cross";
  }
}

function clearInput() {
    search__input.value = "";
}

hamburger.addEventListener("click", toggleNav);
search__icon.addEventListener("click", toggleInput);
search_cross.addEventListener("click", clearInput);