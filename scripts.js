let btn = document.querySelector(".button-container"); // Tüm butonları içeren container'ı seç
let features = document.querySelector("#features-container"); // Özelliklerin gösterileceği container'ı seç

// Buton tıklama olayını dinler
btn.addEventListener("click", (e) => {
    features.classList.remove("features-container"); // Class'ı kaldırarak güncellemeyi zorlar
    void features.offsetWidth; // Layout yenileme işlemini tetikler
    features.classList.add("features-container"); // Class'ı tekrar ekleyerek animasyonu başlatır

    // Tıklanan butonun id'sine göre ilgili fonksiyonu çağırır
    switch(e.target.id) {
        case "yoga":
            yoga(); // Yoga özelliklerini günceller
            break;
        case "group":
            group(); // Grup özelliklerini günceller
            break;
        case "solo":
            solo(); // Solo özelliklerini günceller
            break;
        case "stretch":
            stretch(); // Esneme özelliklerini günceller
            break;
        default:
            return; // Eğer tanımlanmamış bir buton tıklanmışsa hiçbir şey yapmaz
    }
});

// Yoga bilgilerini güncelleyen fonksiyon
function yoga() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Yoga?"; // İlk başlığı günceller
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`; // İlk paragrafı günceller
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Yoga Your Time?"; // İkinci başlığı günceller
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelector("#features-container img").src = "images/yoga.jpg"; // Yoga resmi değiştirilir
}

// Grup bilgilerini güncelleyen fonksiyon
function group() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Group?"; // İlk başlığı günceller
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`; // İlk paragrafı günceller
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Group Your Time?"; // İkinci başlığı günceller
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelector("#features-container img").src = "images/group.webp"; // Grup resmi değiştirilir
}

// Solo bilgilerini güncelleyen fonksiyon
function solo() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Solo?"; // İlk başlığı günceller
    document.querySelectorAll("#features-container p")[0].innerHTML = `In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`; // İlk paragrafı günceller
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Solo Your Time?"; // İkinci başlığı günceller
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelector("#features-container img").src = "images/solo.jpg"; // Solo resmi değiştirilir
}

// Esneme bilgilerini güncelleyen fonksiyon
function stretch() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Stretch?"; // İlk başlığı günceller
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`; // İlk paragrafı günceller
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Stretch Your Time?"; // İkinci başlığı günceller
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`; // Saat bilgisi güncellenir
    document.querySelector("#features-container img").src = "images/stret.webp"; // Esneme resmi değiştirilir
}

// Vücut kitle indeksi hesaplamasını gerçekleştiren kısım
let tri = document.querySelector(".triangle"); // Üçgen göstergeyi seçer
let height = document.querySelector("#height"); // Boy input alanını seçer
let weight = document.querySelector("#weight"); // Kilo input alanını seçer

// Kilo input alanına değer girildiğinde çalışacak olay dinleyici
weight.addEventListener("input",() => {
    let bmi = weight.value / ((height.value / 100) ** 2); // BMI hesaplama formülü
    let percentage;
    
    // BMI değerine göre üçgen göstergenin pozisyonunu belirler
    if(bmi > 13.5 && bmi < 18.5) {
        percentage = 7 + (bmi - 13.5) * 16 / 5;
    } else if(bmi > 25 && bmi < 30 ||  bmi >= 30 && bmi < 35 || bmi >= 35 && bmi < 40) {
        percentage = 40 + (bmi - 24.5) * 16 / 5;
    } else if (bmi >= 18.5 && bmi < 25 ) {
        percentage = 23 + (bmi - 18.5) * 16 / 7;
    }

    // Üçgen göstergenin pozisyonunu günceller
    if(percentage > 6 && percentage < 88) {
        tri.style.left = `${percentage}%`;
    }
});

// Sayfada kaydırma yapıldığında arka plan rengini değiştiren fonksiyon
function changeBg() {
    let navbar = document.querySelector(".navbar-container"); // Navbar'ı seçer
    let scrollValue = window.scrollY; // Sayfa kaydırma değerini alır
    if(scrollValue > 100) {
        navbar.classList.add('bgColor'); // Kaydırma 100'ü geçince arka plan rengini değiştirir
    } else {
        navbar.classList.remove('bgColor'); // Kaydırma geri çekildiğinde rengi eski haline döndürür
    }
}
window.addEventListener('scroll',changeBg); // Sayfada kaydırma olayını dinler

// Butonların tıklanma durumunu yönetir
document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function() {
        // Tüm butonlardan 'active' sınıfını kaldırır
        document.querySelectorAll('.button-container button').forEach(btn => {
            btn.classList.remove('active');
        });
  
        // Tıklanan butona 'active' sınıfını ekler
        this.classList.add('active');
    });
});
