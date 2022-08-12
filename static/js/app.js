// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function that build a table with data in variable "data"
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// show data in a table based on user selected date range
function handleClick () {
    let date = d3.select("#datatime").property("value");
    let filterData = tableData;
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    };
    buildTable(filterData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
