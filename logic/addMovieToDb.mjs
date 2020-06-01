import getData from "./getData.mjs"
const URL = 'https://ifdbapp.azurewebsites.net/api/AddMovieV2?';

function addMovie() {
    let navn = document.getElementById('addmovieform').elements.namedItem('navn').value;
    let genre = document.getElementById('addmovieform').elements.namedItem('genre').value;
    let skuespiller = document.getElementById('addmovieform').elements.namedItem('skuespiller').value;
    let medie = document.getElementById('addmovieform').elements.namedItem('medie').value;
    let rating = document.getElementById('addmovieform').elements.namedItem('rating').value;
    let payload = {
        'kode': 'shhDetErHemmeligt',
        'titel' : navn,
        'genre' : genre,
        'skuespiller' : skuespiller,
        'medie' : medie,
        'rating' : rating,
    }

    let HTTP = new XMLHttpRequest();
    HTTP.open('post', URL, true);
    HTTP.setRequestHeader("Content-Type", "application/json");

    HTTP.onload = function () {
        console.log(this.responseText);
        getData();
    };

    HTTP.send(JSON.stringify(payload));

}


export default addMovie