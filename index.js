var csv_export = require('csv-export');
var fs = require('fs');

let rawdata = fs.readFileSync('./jsonfile.json');
let documents = JSON.parse(rawdata);

csv_export.export(documents, function (buffer) {
    fs.writeFileSync('./data.zip', buffer);
});