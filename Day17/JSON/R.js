const text = '["Ford","BMW","Audi","Fiat"]';
const myar = JSON.parse(text);
document.getElementById("doc").innerHTML = myar[0];