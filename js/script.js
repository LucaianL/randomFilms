import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'

const url = `${BASE_URL}${parseInt(nextNumber(1, 80000))}?api_key=${API_KEY}&${language}`;
const img = IMG_URL;

function getContent(url) {
    axios.get(url)
        .then(response => {
            const title = response.data.title
            const overview = response.data.overview
            const poster = response.data.poster_path

            filmTitle.textContent = title
            filmOverview.textContent = overview
            filmImg.setAttribute('src', img + poster)
        })
        .catch(error =>
            nextFilm()
        )
}

const button = document.querySelector('.button');
const changeToDisplayVisible = document.querySelector('.film');
const changeToDisplayHidden = document.querySelector('.container');


button.addEventListener('click', seeFilm);

function seeFilm() {
    changeToDisplayVisible.style.display = "";
    changeToDisplayHidden.style.display = "none";
    getContent(url);
}


function nextNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const filmButton = document.querySelector('#filmButton');


function nextFilm() {
    const newUrl = `${BASE_URL}${parseInt(nextNumber(1, 800000))}?api_key=${API_KEY}&${language}`;
    getContent(newUrl);
}

filmButton.addEventListener('click', nextFilm);
