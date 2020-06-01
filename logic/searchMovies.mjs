import addToTable from './addToTable.mjs';
import getData from './getData.mjs';

function searchMovies(){
  let URL = 'https://ifdbapp.azurewebsites.net/api/GetMovieWith?';
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------GET THE PARA------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
  let titel = document.getElementById("search_titel").value.toLowerCase();
  let skuespiller = document.getElementById("search_skuespiller").value.toLowerCase();
  let genre = document.getElementById("search_genre").value.toLowerCase();
  let rating = document.getElementById("search_rating").value.toLowerCase();

/*-----------------------------------------------------------------------------------------*/
/*--------------------------TURNS INTO ARRAU THEN TO URL-----------------------------------*/
/*-----------------------------------------------------------------------------------------*/
  let queryParameters = [];
  if(titel != ""){
    queryParameters.push(`titel=${titel}`);
  }
  if(skuespiller != ""){
    queryParameters.push(`skuespiller=${skuespiller}`);
  }
  if(genre != ""){
    queryParameters.push(`genre=${genre}`);
  }
  if(rating != ""){
    queryParameters.push(`rating=${rating}`);
  }

  if(queryParameters.length == 1){
      URL += queryParameters[0]
  } else {
      for (let index = 0; index < queryParameters.length; index++) {
          if(index == 0){
            URL += `${queryParameters[index]}&`
          } else if (index != 0 && index != queryParameters.length-1){
            URL += `${queryParameters[index]}&`
          } else if(index == queryParameters.length-1){
            URL += `${queryParameters[index]}`
          }
      }
  }
/*-----------------------------------------------------------------------------------------*/
/*------------------------------------SENDS THE REQUEST------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
if(queryParameters.length == 0){
    getData();
} else {
    fetch(URL)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // do something with the data
        response.json().then(function(data) {
          addToTable(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

}


export default searchMovies;