import { lSeries } from './dataSeries.js';
var seriestbody = document.getElementById('serie'); // tbody con el id "serie"
renderTable(lSeries);
AverageSeassons(lSeries);
function renderTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td style=\"color: #0051ff;\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriestbody.appendChild(trElement);
    });
}
function AverageSeassons(series) {
    var totalS = 0;
    var avgss = document.getElementById("average-seasons");
    series.forEach(function (serie) { (totalS += serie.seasons); });
    avgss.innerHTML = "".concat((totalS / series.length));
}
