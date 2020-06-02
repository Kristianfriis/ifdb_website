function revokeUpdate(id){
    let Id = document.getElementById(`id_${id}`).innerText;
    let navn = document.getElementById(`navn_inp_${id}`).value;
    let skuespiller = document.getElementById(`skuespiller_inp_${id}`).value;
    let genre = document.getElementById(`genre_inp_${id}`).value;
    let medie = document.getElementById(`medie_inp_${id}`).value;
    let rating = document.getElementById(`rating_inp_${id}`).value;
    console.log(Id)
    document.getElementById(`tr_${id}`).style.backgroundColor = "";
    document.getElementById(`tr_${id}`).innerHTML = "<tr></tr>";
    document.getElementById(`tr_${id}`).innerHTML = `<td id="id_${Id}">${Id}</td>` +
                                                    `<td id="navn_${Id}">${navn}</td>` + 
                                                    `<td id="skuespiller_${Id}">${skuespiller}</td>` + 
                                                    `<td id="genre_${Id}">${genre}</td>` + 
                                                    `<td id="medie_${Id}">${medie}</td>` + 
                                                    `<td id="rating_${Id}">${rating}</td>` + 
                                                    `<td id="btns_${Id}"><button id="erase_btn_${Id}" onclick="eraseEntry(${Id})">Slet</button><button id="update_btn_${Id}" onclick="setRows(${Id})">Opdater</button></td>`;
   
}

export default revokeUpdate