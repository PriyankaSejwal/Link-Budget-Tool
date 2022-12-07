function downloadExport() {
  var selected = document.getElementById("exports");
  var val = selected.options[selected.selectedIndex].innerHTML;
  console.log("val");
  if (val == "Print / Download") {
    window.print();
  } else if (val == "Export To Excel") {
    exportToExcel();
  }
  document.getElementById("exports").selectedIndex = 0;
}

function exportToExcel() {
  var elt = document.getElementById("tbl1");
  var elt2 = document.getElementById("tbl2");
  var elt3 = document.getElementById("tbl3");
  var elt4 = document.getElementById("tbl4");
  var rows = [];
  rows.push(["LINK SETTINGS"]);
  for (var i = 0; i < elt.rows.length; i++) {
    column1 = elt.rows[i].cells[0].innerText;
    column2 = elt.rows[i].cells[1].innerText;
    column3 = elt.rows[i].cells[2].innerText;
    //   column3 = elt.rows[i].cells[2].innerHTML;
    //   column4 = elt.rows[i].cells[3].innerHTML;

    rows.push([column1, column2, column3]);
  }
  rows.push([""], [""], ["LINK STATS"]);
  for (var i = 0; i < elt2.rows.length; i++) {
    column1 = elt2.rows[i].cells[0].innerText;
    column2 = String(elt2.rows[i].cells[1].innerText);
    column3 = String(elt2.rows[i].cells[2].innerText);
    // column4 = elt2.rows[i].cells[3].innerText;

    rows.push([column1, column2, column3]);
  }
  rows.push([""], [""], ["Site A"]);
  for (var i = 0; i < elt3.rows.length; i++) {
    column1 = elt3.rows[i].cells[0].innerText;
    column2 = elt3.rows[i].cells[1].innerText;

    rows.push([column1, column2]);
  }

  rows.push([""], [""], ["Site B"]);
  for (var i = 0; i < elt4.rows.length; i++) {
    column1 = elt4.rows[i].cells[0].innerText;
    column2 = elt4.rows[i].cells[1].innerText;

    rows.push([column1, column2]);
  }
  csvContent = "data:text/csv;charset=utf-8,";
  rows.forEach(function (rowArray) {
    row = rowArray.join(",");
    csvContent += row + "\r\n";
  });
  /* create a hidden <a> DOM node and set its download attribute */
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Link_Report.csv");
  document.body.appendChild(link);
  /* download the data file named "Stock_Price_Report.csv" */
  link.click();
}
