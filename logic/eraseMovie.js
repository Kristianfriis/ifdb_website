function eraseEntry(arg) {
    let URL = 'ifdbapp.azurewebsites.net/api/DeleteMovie?id=' + arg;

    fetch(URL, {
        method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
}
