let button = document.getElementById('resultado');
button.addEventListener('click', calculo);

function calculo(){
  let distancia = document.getElementById("d");
  let fija = document.getElementById("f");
  let movil = document.getElementById("m");
  let resultado = document.getElementById('fuerza');
  let fuerza = null;
  let dis = distancia.value;
  let mov = movil.value*(10**(-4));
  let fij = fija.value*(10**(-4));
  let arriba = mov*fij;
  let r = dis**2;
  let k = 8.99*(10**9);
  let todiv = arriba/r;
  fuerza = (k*todiv).toFixed(2);
  resultado.innerHTML = fuerza;
};