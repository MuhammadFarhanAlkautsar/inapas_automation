class Navbar {
    get berandaButton() {
      return $("~Beranda\nTab 1 dari 5");
    }

    get kartuButton() {
      return $("~Kartu\nTab 2 dari 5");
    }

    get transaksiButton() {
      return $('~Transaksi\nTab 4 dari 5');
    }
  
    get akunButton() {
      return $("~Akun\nTab 5 dari 5");
    }

    get qrButton() {
      return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[5]');
    }
  
    async clickBeranda() {
      await this.berandaButton.click();
      // return verifikasiDataDiriPage;
    }

    async clickKartu() {
      await this.kartuButton.click();
    }

    async clickTransaksi() {
      await this.transaksiButton.click();
    }
  
    async clickAkun() {
      await this.akunButton.click();
    }
  
    async clickQR() {
      await this.qrButton.click();
      // return verifikasiDataDiriPage;
    }
  }
  
  module.exports = new Navbar();