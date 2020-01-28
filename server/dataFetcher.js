const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://www.hyde.dk/hanstholm/vejrstation.asp';
/*
function returnvvalue(url){
  return rp(url)
    .then(function(html){
      return {
        stromretning2: ($('tr:nth-child(1) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavaluev', html).text())
        };
      })
      .catch(function (err) {
      console.log('Error: ', err)
    })
  }
*/
  rp(url).then(function(html) {

    let Stromretning = $('tr:nth-child(1) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavaluev', html).text();
    let Vind = $('tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let Vindretning = $('tr:nth-child(1) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td.vsdatavaluev', html).text();
    let Maxbolge = $('tr:nth-child(1) > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let Stromhastighed = $('tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let mvindhastighed = $('tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let mvindretning = $('tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td.vsdatavaluev', html).text();
    let mBolgehøjde = $('tr:nth-child(2) > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let Temperatur = $('tr:nth-child(3) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let Vindstod = $('tr:nth-child(3) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let Barometer = $('tr:nth-child(3) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();
    let Bolgeperiode = $('tr:nth-child(3) > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.vsdatavalue', html).text();

    console.log("---------- START ---------");
    console.log($("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(5) > td > p > b",html).text().trim());
    console.log("Strømretning:", Stromretning, "grader");
    console.log("Vindhastighed:", Vind, "m/s");
    console.log("Vindretning:", Vindretning, "grader");
    console.log("Max Bølgehøjde:", Maxbolge, "m");
    console.log("Strømhastighed:", Stromhastighed, "knob");
    console.log("Middel vindhastighed:", mvindhastighed, "m/s");
    console.log("Middel vindretning:", mvindretning, "grader");
    console.log("Middel Bølgehøjde:", mBolgehøjde, "m");
    console.log("Luft Temperatur:", Temperatur, "C");
    console.log("Vindstød:", Vindstod, "m/s");
    console.log("Barometer:", Barometer, "hPA");
    console.log("Bølgeperiode:", Bolgeperiode, "sek");
    console.log("---------- SLUT ----------");
  })

  .catch(function(err){
    //handle error
    console.log(err);
  });


 // module.exports = Maxbolge;