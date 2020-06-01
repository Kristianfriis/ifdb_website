

function eraseEntry(arg) {
    // let URL = 'ifdbapp.azurewebsites.net/api/DeleteMovie?id=' + arg;
    let URL = 'http://localhost:7071/api/DeleteMovie?id=' + arg;

    let answer = window.confirm("Er du sikker på du vil slette denne film?");

    if(answer){
        fetch(URL, {
            method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }
}
