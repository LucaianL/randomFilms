import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'



const button = document.querySelector('.button');
const changeToDisplayVisible = document.querySelector('.film');
const changeToDisplayHidden = document.querySelector('.container')

button.addEventListener('click', seeFilmDescripton)

function seeFilmDescripton() {
    changeToDisplayVisible.style.display = "";
    changeToDisplayHidden.style.display = "none";
}