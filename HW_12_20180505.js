var tbody = document.querySelector("tbody");
var stateInput = document.querySelector("#datetime");
var searchButton = document.querySelector("#search");

searchButton.addEventListener('click', handleSearchButtonClick);

var filteredData = dataSet;

function renderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
        // Get the current address object and its fields
        var datetime = filteredData[i];
        var fields = Object.keys(datetime);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var row = tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = datetime[field];
        }
    }
}

function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterdate = stateInput.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredAddresses = dataSet.filter(function(datetime) {
      var addressdate = datetime.datetime.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return addressdate === filterdate;
    });
    renderTable();
  }

renderTable();
