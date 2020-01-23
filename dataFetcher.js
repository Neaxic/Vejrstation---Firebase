const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://www.hyde.dk/hanstholm/vejrstation.asp';

rp(url)
  .then(function(html){
    //success!

console.log();
console.log();
console.log();



    
    // console.log($("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(5) > td > p > b",html).text().trim());
    // console.log("Stromretning: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavaluev",html).text());
    // console.log("Stromhastighed: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());
    // console.log("Luft Temperatur: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());

    // console.log("Aktuel vindhastighed: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.vsdatavalue", html).text());
    // console.log("Middel vindhastighed: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());
    // console.log("Vind stød: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());

    // console.log("Aktuel vindretning: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td.vsdatavaluev",html).text());
    // console.log("Middel vindretning: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td.vsdatavaluev",html).text());
    // console.log("Barometer: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());

    // console.log("Max bølgehøjde: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());
    // console.log("Middel bølgehøjde: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());
    // console.log("Bølgeperiode: " + $("tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.vsdatavalue",html).text());


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

    console.log();
    console.log();
    console.log();

    

  })

  .catch(function(err){
    //handle error
    console.log(err);
  });