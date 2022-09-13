// from data.js
var tableData = data;


// check
console.log(tableData);


// Get a reference to the html elements
var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form")


// Create table for data
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Create event handlers
button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter(){
    var filterInput = d3.select("#datetime").property("value");
    tbody.html("");
    d3.event.preventDefault();
    var filterData = tableDate.filter(x => x.datetime == filterInput);
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}