import getData from './getData.mjs';
import addMovieModal from './modal.mjs'
import addMovie from './addMovieToDb.mjs'

window.addEventListener('load', getData());

document.getElementById('addMovieModal_btn').addEventListener("click", addMovieModal)

document.getElementById('submit_btn').addEventListener("click", addMovieModal)
document.getElementById('submit_btn').addEventListener("click", addMovie)

function eraseEntry(arg) {
    let URL = 'ifdbapp.azurewebsites.net/api/DeleteMovie?id=' + arg;

    fetch(URL, {
        method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
}


