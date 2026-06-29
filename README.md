# Modern Döviz Kuru Çevirici (Currency Converter)

React ve Vite kullanılarak geliştirilmiş, anlık döviz kuru verilerini harici bir API üzerinden çekerek hesaplama yapan modern arayüzlü bir web uygulaması.

##  Özellikler

* **Anlık Veri Entegrasyonu:** Güncel döviz kurları Axios kütüphanesi kullanılarak API üzerinden çekilir.
* **Glassmorphic Tasarım:** Arka planla uyumlu, yarı şeffaf buzlu cam efekti içeren modern ve temiz UI.
* **Akıllı Kur Takası (Swap):** Ortadaki transfer ikonuna tıklandığında seçili para birimlerinin yerini birbiriyle değiştiren mini algoritma.
* **Enter ile Hesaplama:** Girdiler form yapısıyla sarmalandığı için butona tıklamanın yanı sıra miktar girip `Enter` tuşuna basıldığında da hesaplama otomatik tetiklenir.
* **Esnek Sayı Girişi:** Küsuratlı ve ondalıklı sayıların girişine izin veren doğrulama yapısı.

##  Kullanılan Teknolojiler

* **Frontend Framework:** React (Vite)
* **Veri Çekme (HTTP Client):** Axios
* **İkon Kütüphanesi:** React Icons 
* **Stil Yönetimi:** Pure CSS (Modern Flexbox & Glassmorphism)
* **API Kaynağı:** Free Currency API

##  Kurulum ve Çalıştırma

Projeyi yerelde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Projeyi bilgisayarınıza klonlayın:
git clone https://github.com/oguzhankinali/react-currency-converter.git

2. Proje klasörüne gidin:
cd react-currency-converter

3. Gerekli tüm bağımlılıkları yükleyin:
npm install

4. Uygulamayı lokal sunucuda ayağa kaldırın:
npm run dev
