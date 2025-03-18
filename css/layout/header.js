fetch("../../img/logo.svg")
  .then(response => response.text())
  .then(data => {
    document.getElementById("logo").innerHTML = data;
    const svg = document.querySelector("#logo svg");
    svg.setAttribute("viewBox", "0 0 250 250");
    svg.style.width = "100%";
    svg.style.height = "8vh";
  })
function hamburger(){
    document.getElementById('hamburger').classList.toggle('hidden');
}