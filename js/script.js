import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'

const url = `${BASE_URL}${parseInt(nextNumber(1, 500000))}?api_key=${API_KEY}&${language}`;
const img = IMG_URL;

function getContent(url) {
    axios.get(url)
        .then(response => {
            const data = response.data
            const adult = response.data.adult
            const originalLanguage = response.data.original_language
            const haveImg = response.data.poster_path

            console.log(data)

            adult
                ? nextFilm()
                : originalLanguage != "pt-br" && originalLanguage != "en" && originalLanguage != "pt"
                    ? nextFilm()
                    : !haveImg
                        ? nextFilm()
                        : getFilmInfo(data)

        })
        .catch(error =>
            nextFilm()
        )
}

function getFilmInfo(info) {
    const title = info.title
    const overview = info.overview
    const poster = info.poster_path
    const hasOverview = overview === "" ? "Não temos sinopse disponível para esse filme" : overview

    filmTitle.textContent = title
    filmOverview.textContent = hasOverview
    filmImg.setAttribute('src', img + poster)
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
    const newUrl = `${BASE_URL}${parseInt(nextNumber(1, 500000))}?api_key=${API_KEY}&${language}`;
    getContent(newUrl);
}

filmButton.addEventListener('click', nextFilm);
