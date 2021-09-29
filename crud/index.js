const fs = require("fs");

fs.writeFile(
  "employee.json",
  `{"name":"muhammet","salary":2000}`,
  "utf-8",
  (err) => {
    if (err) return console.log(err);
  }
);

fs.readFile("employee.json", "utf-8", (err, data) => {
  if (err) return console.log(err);
  return console.log(data);
});
