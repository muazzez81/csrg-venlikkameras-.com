// Ürün listesi
const urunler = [
  {id:1, isim:"IP Kamera", fiyat:1500, img:"images/ipkamera.jpg"},
  {id:2, isim:"DVR", fiyat:2500, img:"images/dvr.jpg"},
  {id:3, isim:"WiFi Kamera", fiyat:1800, img:"images/wifi.jpg"}
];

const urunlerDiv = document.getElementById("urunlerDiv");

// Ürünleri göster
function gosterUrunler(liste) {
  urunlerDiv.innerHTML = "";
  liste.forEach(u => {
    const div = document.createElement("div");
    div.className = "urun-card";
    div.innerHTML = `<img src="${u.img}" alt="${u.isim}">
                     <h3>${u.isim}</h3>
                     <p>Fiyat: ${u.fiyat} TL</p>
                     <button onclick="sepeteEkle(${u.id})">Sepete Ekle</button>`;
    urunlerDiv.appendChild(div);
  });
}

// Sepete ekle
function sepeteEkle(id) {
  let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
  const urun = urunler.find(u => u.id === id);
  sepet.push(urun);
  localStorage.setItem("sepet", JSON.stringify(sepet));
  alert(`${urun.isim} sepete eklendi!`);
}

// Arama fonksiyonu
function urunAra() {
  const ara = document.getElementById("arama").value.toLowerCase();
  const filtrelenmis = urunler.filter(u => u.isim.toLowerCase().includes(ara));
  gosterUrunler(filtrelenmis);
}

// Sayfa yüklendiğinde tüm ürünleri göster
gosterUrunler(urunler);