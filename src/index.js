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
}

updateTime();
setInterval(updateTime, 1000);
