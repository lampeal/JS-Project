// Lisää tapahtumakuuntelijat
document.getElementById("Helsinki").addEventListener("click", loadJSONDoc);
document.getElementById("Turku").addEventListener("click", loadJSONDoc);
document.getElementById("Tampere").addEventListener("click", loadJSONDoc);

getDate();

//Hae säätiedot valittuun kaupunkiin REST API:n kautta
function loadJSONDoc() {
    document.getElementsByTagName("button");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + this.id + ",FI&units=metric&appid=9281b4084a8757b10d17c6484a22f8a2", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("app").innerHTML = xmlhttp.responseText;
        json = JSON.parse(xmlhttp.responseText);
        console.log(json);
        printJSONTable(json);
        }
    }
}

//Tulosta valitut tiedot taulukkoon
function printJSONTable() {
    var data = json;
    var out = `
    <table>
        <tbody>
            <tr>
                <td><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"</td>
                <td>${data.main.temp.toFixed(0)}°C\n</td>
                <td>Tuntuu kuin ${data.main.feels_like.toFixed(0)}°C\n</td>
                <td>Suht. kosteus ${data.main.humidity.toFixed(0)}%\n</td>
                <td>Tuulen nopeus ${data.wind.speed.toFixed(0)}m/s\n</td>
            </tr>
        </tbody>
    </table> 
    `;
    document.getElementById("app").innerHTML = out;
}

//Hae päivä sekä kellonaika ja tulosta ne näytölle
function getDate() {
    var currentD = new Date();
    var weekDay = new Array(7);
    weekDay[0] = "Sunnuntai";
    weekDay[1] = "Maanantai";
    weekDay[2] = "Tiistai";
    weekDay[3] = "Keskiviikko";
    weekDay[4] = "Torstai";
    weekDay[5] = "Perjantai";
    weekDay[6] = "Lauantai";
    var day = weekDay[currentD.getDay()];
    var hours = currentD.getHours();
    var minutes = (currentD.getMinutes() < 10 ? '0' : '') + currentD.getMinutes();
    document.getElementById("date").innerHTML = day + " " + hours + ":" + minutes;
}