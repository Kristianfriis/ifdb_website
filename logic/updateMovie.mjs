import getData from "./getData.mjs"
const URL = "https://ifdbapp.azurewebsites.net/api/UpdateMovie?"

function updateEntry(id) {
    let Id = document.getElementById(`id_${id}`).innerText;
    let navn = document.getElementById(`navn_inp_${id}`).value;
    let skuespiller = document.getElementById(`skuespiller_inp_${id}`).value;
    let genre = document.getElementById(`genre_inp_${id}`).value;
    let medie = document.getElementById(`medie_inp_${id}`).value;
    let rating = document.getElementById(`rating_inp_${id}`).value;
    let payload = {
        'kode': 'shhDetErHemmeligt',
        'id': Id,
        'titel' : navn,
        'genre' : genre,
        'skuespiller' : skuespiller,
        'medie' : medie,
        'rating' : rating,
    };

    let HTTP = new XMLHttpRequest();
    HTTP.open('put', URL, true);
    HTTP.setRequestHeader("Content-Type", "application/json");

    HTTP.onload = function () {
        console.log(this.responseText);
        getData();
    };

    HTTP.send(JSON.stringify(payload));
}

export default updateEntry;