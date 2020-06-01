import getData from "./getData.mjs"
// const URL = 'ifdbapp.azurewebsites.net/api/AddMovieV2?';

const URL = 'http://localhost:7071/api/AddMovieV2';

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
    //console.log(JSON.stringify(payload))

    //     // POST request using fetch() 
    //     fetch(URL, { 
    //     method: "POST", 
    //     body: JSON.stringify(payload), 
    //     headers:{ 
    //         "Content-type": "application/json"
    //     }
    // }) 
    
    // // Converting to JSON 
    // .then(response => response.json()) 
    
    // // Displaying results to console 
    // .then(json => console.log(json)); 

    let HTTP = new XMLHttpRequest();
    HTTP.open('post', URL, true);
    HTTP.setRequestHeader("Content-Type", "application/json");

    HTTP.onload = function () {
        console.log(this.responseText);
        document.getElementById('tablebody').innerHTML = '';
        getData();
    };

    HTTP.send(JSON.stringify(payload));

}


export default addMovie