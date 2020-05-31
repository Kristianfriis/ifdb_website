function addMovieModal() {
    let main = document.getElementById('main');
    if(main.className == 'supreme-container') {
        main.classList.remove('supreme-container');
    } else {
        main.classList.add('supreme-container')
    }

    let modal = document.getElementById('addMovieModal');
    if(modal.className == "medium-container hideModal") {
        modal.classList.remove('hideModal')
    } else if (modal.className != "hideModal") {
        modal.classList.add('hideModal');        
    }
}

export default addMovieModal;