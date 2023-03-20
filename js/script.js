import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'

const url = `${BASE_URL}550?api_key=${API_KEY}&${language}`;
const img = IMG_URL;

function movieCard() {
    axios.get(url)
        .then(response => {
            const data = response.data.poster_path
            filmImg.setAttribute('src', img + data)
        })
        .catch(error => console.log(error))
}

movieCard();

function getTitle() {
    axios.get(url)
        .then(response => {
            const data = response.data.title
            filmTitle.textContent = data
        })
        .catch(error => console.log(error))
}
getTitle();

// overview
function getOverview() {
    axios.get(url)
        .then(response => {
            const data = response.data.overview
            overview.textContent = data
        })
        .catch(error => console.log(error))
}
getOverview();

const button = document.querySelector('.button');
const changeToDisplayVisible = document.querySelector('.film');
const changeToDisplayHidden = document.querySelector('.container')

button.addEventListener('click', seeFilm)

function seeFilm() {
    changeToDisplayVisible.style.display = "";
    changeToDisplayHidden.style.display = "none";
}


function jsonFilm() {
    axios.get(url)
        .then(response => {
            const data = response.data
            console.log(data)
        })
        .catch(error => console.log(error))
}
jsonFilm();
