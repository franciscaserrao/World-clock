function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngetesDateElement = losAngelesElement.querySelector(".date");
  let losAngetesTimeElement = losAngelesElement.querySelector(".time");
  losAngetesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngetesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
