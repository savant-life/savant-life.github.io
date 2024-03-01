function LogOut() {
  localStorage.clear();
  window.location.href = "../index.html";
}

let EstadoLuz = "off";
function Luz() {
  let SpanLuz = document.getElementById("EstadoLuz");
  let BotonLuz = document.getElementById("Luz");


  if(EstadoLuz == "on") {
    SpanLuz.innerHTML = "Apagada";
    BotonLuz.innerHTML = "Encender";
    SpanLuz.style.color = "#f00";
    BotonLuz.style.backgroundColor = "#0f0"
    EstadoLuz = "off";
}
  else {
    SpanLuz.innerHTML = "Encendida";
    BotonLuz.innerHTML = "Apagar";
    SpanLuz.style.color = "#0f0";
    BotonLuz.style.backgroundColor = "#f00"
    EstadoLuz = "on";
  }
}

let EstadoPers = "Baja";
function Persiana() {
  let SpanPers = document.getElementById("EstadoPers");
  let BotonPers = document.getElementById("Persiana");

  if(EstadoPers == "Alta") {
    SpanPers.innerHTML = "Baja";
    BotonPers.innerHTML = "Subir";
    SpanPers.style.color = "#f00";
    BotonPers.style.backgroundColor = "#0f0"
    EstadoPers = "Baja";
}
  else {
    SpanPers.innerHTML = "Alta";
    BotonPers.innerHTML = "Bajar";
    SpanPers.style.color = "#0f0";
    BotonPers.style.backgroundColor = "#f00"
    EstadoPers = "Alta";
  }
}


  function Temperatura() {
      let SpanTemp = document.getElementById("Temp");
      let EstadoTemp = Math.random() * (40 - (-10)) + (-10);

      SpanTemp.innerHTML = EstadoTemp.toFixed(3);

      if (EstadoTemp < 5) {
          SpanTemp.style.color = "#00f";}
      else if (EstadoTemp <= 25) {
          SpanTemp.style.color = "#0f0";}
      else {
          SpanTemp.style.color = "#f00";}

    console.log(EstadoTemp);
}
