function addToTable(data) {
    
    const table = document.getElementById('tablebody');
  
    data.forEach(element => {
      table.insertRow().innerHTML =
        "<tr>" +
          `<td>${element.id}</td>` +
          `<td>${element.navn}</td>` + 
          `<td>${element.skuespiller}</td>` + 
          `<td>${element.medie}</td>` + 
          `<td>${element.rating}</td>` + 
          `<td><button onclick="eraseEntry(${element.id})">Slet</button><button>Opdater</button></td>` + 
        "</tr>"
      
    });

}

export default addToTable;