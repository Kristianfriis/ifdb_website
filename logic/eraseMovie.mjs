import getData from "./getData.mjs"

function eraseEntry(arg) {
    let URL = 'https://ifdbapp.azurewebsites.net/api/DeleteMovie?id=' + arg;

    let answer = window.confirm("Er du sikker på du vil slette denne film?");

    if(answer){
        fetch(URL, {
            method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => feedback(res))
    }
}

function feedback(res){
    console.log(res);
    getData()
}
export default eraseEntry;