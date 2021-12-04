// this just allows the Tablesort function to be applied to all tables
document$.subscribe(function () {
  var tables = document.querySelectorAll("article table");
  tables.forEach(function (table) {
    new Tablesort(table);
  });
});
