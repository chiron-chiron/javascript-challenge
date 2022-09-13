// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach(ufoSighting) {
    console.log(ufoSighting):
    var row = tbody.append("tr");
});