function addToTable(data) {
    
    const table = document.getElementById('tablebody');
    document.getElementById('tablebody').innerHTML = '';
  
    data.forEach(element => {
      var tr = table.insertRow();
      tr.innerHTML =
        `<tr>` +
          `<td id="id_${element.id}">${element.id}</td>` +
          `<td id="navn_${element.id}">${element.navn}</td>` + 
          `<td id="skuespiller_${element.id}">${element.skuespiller}</td>` + 
          `<td id="genre_${element.id}">${element.genre}</td>` + 
          `<td id="medie_${element.id}">${element.medie}</td>` + 
          `<td id="rating_${element.id}">${element.rating}</td>` + 
          `<td id="btns_${element.id}"><button id="erase_btn_${element.id}" onclick="eraseEntry(${element.id})">Slet</button><button id="update_btn_${element.id}" onclick="setRows(${element.id})">Opdater</button></td>` + 
        `</tr>`;
      tr.id = `tr_${element.id}`
    });

}

export default addToTable;