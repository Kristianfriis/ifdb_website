import getData from './getData.mjs';
import addMovieModal from './modal.mjs';
import addMovie from './addMovieToDb.mjs';
import searchMovies from "./searchMovies.mjs";
import showSearchbar from './showSearch.mjs';
import eraseEntry from './eraseMovie.mjs';
import setRows from './setUpdateTableRow.mjs';
import revokeUpdate from './abandonUpdate.mjs';
import updateEntry from './updateMovie.mjs';

window.addEventListener('load', getData());

document.getElementById('addMovieModal_btn').addEventListener("click", addMovieModal)
document.getElementById('closeModal_btn').addEventListener("click", addMovieModal)

document.getElementById('submit_btn').addEventListener("click", addMovieModal)
document.getElementById('submit_btn').addEventListener("click", addMovie)

document.getElementById('search_btn').addEventListener("click", searchMovies)
document.getElementById('showsearch_btn').addEventListener("click", showSearchbar)

window.eraseEntry = eraseEntry;
window.setRows = setRows;
window.revokeUpdate = revokeUpdate;
window.updateEntry = updateEntry;

