function updateTime() {
  // Boston
  let bostonElement = document.querySelector("#boston");
  if (bostonElement) {
    let bostonDateElement = bostonElement.querySelector(".date");
    let bostonTimeElement = bostonElement.querySelector(".time");
    let bostonTime = moment().tz("America/New_York");

    bostonDateElement.innerHTML = bostonTime.format("MMMM	Do YYYY");
    bostonTimeElement.innerHTML = bostonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Exeter
  let exeterElement = document.querySelector("#exeter");
  if (exeterElement) {
    let exeterDateElement = exeterElement.querySelector(".date");
    let exeterTimeElement = exeterElement.querySelector(".time");
    let exeterTime = moment().tz("GMT");

    exeterDateElement.innerHTML = exeterTime.format("MMMM	Do YYYY");
    exeterTimeElement.innerHTML = exeterTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Madrid
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM	Do YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
