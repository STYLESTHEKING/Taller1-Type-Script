import { serie } from './serie.js';
import { lSeries } from './dataSeries.js';

const seriestbody: HTMLElement = document.getElementById('serie')!; // tbody que tiene el id "serie"
renderTable(lSeries);
AverageSeasons(lSeries);
function renderTable(series: serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td style="color: #0051ff;">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriestbody.appendChild(trElement);
  });
}
function AverageSeasons(series: serie[]): void {
  let totalS: number = 0;
  let avgss: HTMLElement = document.getElementById("average-seasons")!;
  series.forEach((serie) => {(totalS += serie.seasons)});
  avgss.innerHTML = `${(totalS / series.length)}`;
}