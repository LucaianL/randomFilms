import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'

const url = BASE_URL;

const button = document.querySelector('.button');
const changeToDisplayVisible = document.querySelector('.film');
const changeToDisplayHidden = document.querySelector('.container')

button.addEventListener('click', seeFilm)

function seeFilm() {
    changeToDisplayVisible.style.display = "";
    changeToDisplayHidden.style.display = "none";
}

function getTitle() {
    axios.get(url)
        .then(response => {
            const data = response.data.title
            filmTitle.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
getTitle();

// overview
function getOverview() {
    axios.get(url)
        .then(response => {
            const data = response.data.overview
            overview.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
getOverview();