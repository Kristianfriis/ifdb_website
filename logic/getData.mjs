import addToTable from './addToTable.mjs';

function getData(){
  const URL = 'https://ifdbapp.azurewebsites.net/api/GetMoviesV2?';

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


export default getData;