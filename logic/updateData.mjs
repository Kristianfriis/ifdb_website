
function tester(id){
    let Id = document.getElementById(`id_${id}`).innerText;
    let navn = document.getElementById(`navn_${id}`).innerText;
    let skuespiller = document.getElementById(`skuespiller_${id}`).innerText;
    let genre = document.getElementById(`genre_${id}`).innerText;
    let medie = document.getElementById(`medie_${id}`).innerText;
    let rating = document.getElementById(`rating_${id}`).innerText;
    console.log(Id + ", " + navn + ", " + skuespiller + ", " + genre + ", " + medie + ", " + rating);

    setToInput(Id, 'navn', navn);
    setToInput(Id, 'skuespiller', skuespiller);
    setToInput(Id, 'genre', genre);
    setToSelectMedie(Id, 'medie', medie);
    setToSelectRating(Id, 'rating', rating);
    document.getElementById(`tr_${id}`).style.backgroundColor = "#BB3F25";
    
}

function setToInput(ID, field, data) {
    document.getElementById(`${field}_${ID}`).innerHTML = "<td></td>";
    document.getElementById(`${field}_${ID}`).innerHTML = `<input id="${field}_inp_${ID}"></input>`
    document.getElementById(`${field}_inp_${ID}`).value = data;
}
function setToSelectMedie(ID, field, data) {
    document.getElementById(`${field}_${ID}`).innerHTML = "<td></td>";
    document.getElementById(`${field}_${ID}`).innerHTML = `<select id="${field}_inp_${ID}" style="background-color: white"> 
                                                            <option value="blu-ray">Blu-Ray</option>
                                                            <option value="dvd">DVD</option>
                                                            <option value="vhs">VHS</option>
                                                            <option value="streaming tjeneste">Streaming tjeneste</option>   
                                                           </select>`;
    document.getElementById(`${field}_inp_${ID}`).value = data.toLowerCase();
}
function setToSelectRating(ID, field, data) {
    document.getElementById(`${field}_${ID}`).innerHTML = "<td></td>";
    document.getElementById(`${field}_${ID}`).innerHTML = `<select id="${field}_inp_${ID}" style="background-color: white"> 
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                          </select>`;
    document.getElementById(`${field}_inp_${ID}`).value = parseInt(data);
}

export default tester;