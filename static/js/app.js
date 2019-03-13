// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
function renderTable() {
  tbody.html("");
tableData.forEach(function(d) {
  console.log(d);
  var row = tbody.append("tr");
  Object.entries(d).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});
};

var submit = d3.select("#filter-btn");

submit.on("click", function(){              
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.node().value;
    tableData = data.filter(function(d){
      var searchDate = d.datetime;
      return searchDate === inputValue;    
    });
    renderTable();
});
renderTable();