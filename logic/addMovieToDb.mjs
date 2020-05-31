import getData from "./getData.mjs"
const URL = 'ifdbapp.azurewebsites.net/api/AddMovieV2?';

//const URL = 'http://localhost:7071/api/AddMovieV2';

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

        // POST request using fetch() 
        fetch(URL, { 
        method: "POST", 
        body: JSON.stringify(payload), 
        headers:{ 
            // "Content-type": "application/json; charset=UTF-8"
            "content-type:" : "application/x-www-form-urlencoded"
        }
    }) 
    
    // Converting to JSON 
    .then(response => response.json()) 
    
    // Displaying results to console 
    .then(json => console.log(json)); 


}


export default addMovie