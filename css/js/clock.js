
myName.innerHTML = prompt`Lütfen isminizi giriniz`


let zaman = document.getElementById("myClock"); // id seçmiş olduk
let suankizaman = Intl.DateTimeFormat().resolvedOptions().timeZone;

function yenileme() {
  let tarihdizesi = new Date().toLocaleString("en",{timeZone: suankizaman });
  let bicimlendirme = tarihdizesi.replace(", ", " - ");
  zaman.innerHTML = bicimlendirme;
}

setInterval(yenileme, 1000);



