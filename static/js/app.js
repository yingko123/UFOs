// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object (dictionary).
var filters = {}

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let chgItem = d3.select(this);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = chgItem.attr("id");
    console.log(filterId);

    // 4b. Save the value that was changed as a variable.
    let chgValue = chgItem.property("value");
    console.log(chgValue);

    // 5. If a filter value was entered (chgValue's boolean value = True) then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object (for in case user delete value)
    if (chgValue){
      filters[filterId] = chgValue;
    }
    else{
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    filteredData = tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (const key in filters){
      console.log(`${key}`)
      console.log(`${filters[key]}`)
      
      filteredData = filteredData.filter(row => row[key] === filters[key]);
    };

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  };
  
  // 2. Attach an event to listen for changes to each filter  
  d3.selectAll("input").on("change",updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
