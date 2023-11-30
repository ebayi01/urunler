function sepeteEkle() {
    // Ürün bilgilerini al
    var urunAdi = "Bilgisayar";
    var fiyat = 999.99;

    // Sepet listesine ekle
    var sepetListesi = document.getElementById("sepetListesi");
    var yeniUrun = document.createElement("li");
    yeniUrun.textContent = urunAdi + " - $" + fiyat.toFixed(2);
    sepetListesi.appendChild(yeniUrun);
}
