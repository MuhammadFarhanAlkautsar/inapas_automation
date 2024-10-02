// const verifikasiDataDiriPage = require('./verifikasi_data_diri.page');

  class SplashPage {
    get mulaiVerifikasiButton() {
      return $("~Mulai Verifikasi");
    }

    get aktifkanPerangkatButton() {
      return $("~Aktifkan Perangkat");
    }

    get bantuanIcon() {
      return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]');
    }
  
    get melanjutkanOnBoardingPopUp() {
      return $(
        "~Melanjutkan Onboarding\nApakah Anda ingin melanjutkan proses penyiapan INApas??"
      );
    }

    get menggantiOnBoardingPopUp() {
      return $(
        "~Mengganti Onboarding?\nApakah Anda ingin mengganti jenis onboarding INApas Anda?"
      );
    }
  
    get lanjutkanButton() {
      return $("~Lanjutkan");
    }

    get kembaliButton() {
      return $("~Kembali");
    }
  
    get mulaiKembaliButton() {
      return $("~Mulai Kembali");
    }

    get splash() {
      return $("~Ikuti langkah-langkah untuk verifikasi data diri Anda di INApas.");
    }

    get popupError() {
      return $("~Terjadi kesalahan\nMohon coba lagi\nOK");
    }


  
    async clickMulaiVerifikasi() {
      await this.mulaiVerifikasiButton.click();
      // return verifikasiDataDiriPage;
    }

    // Fungsi untuk mengecek apakah popup error muncul, lalu handle back dan retry
    async handlePopupErrorAndRetry(action, maxRetries = 5) {
      let retries = 0;
      let isPopupErrorVisible = false;

      // Lakukan proses verifikasi dengan loop untuk retries
      do {
          // Coba klik tombol yang diberikan dalam parameter (misalnya clickMulaiVerifikasi)
          await action();

          // Cek apakah popup error muncul
          isPopupErrorVisible = await this.popupError.isDisplayed().catch(() => false);

          if (isPopupErrorVisible) {
              // Jika popup error muncul, klik browser back dan retry
              await browser.back();

              retries++;
          }

      } while (isPopupErrorVisible && retries < maxRetries);

      if (retries === maxRetries && isPopupErrorVisible) {
          throw new Error(`Max retries (${maxRetries}) reached. Popup error still visible.`);
      }
  }

    async clickAktifkanPerangkat() {
      await this.aktifkanPerangkatButton.click();
    }

    async clickBantuan() {
      await this.bantuanIcon.click();
    }
  
    async clickLanjutkan() {
      await this.lanjutkanButton.click();
    }
  
    async clickMulaiKembali() {
      await this.mulaiKembaliButton.click();
      // return verifikasiDataDiriPage;
    }

    async activateAppByVersion(version) {
      let appPackage;
  
      // Menentukan package name berdasarkan versi yang diberikan
      switch (version) {
          case 'dev':
              appPackage = 'id.co.peruri.inapass.dev';  // Package untuk dev
              break;
          case 'stg':
              appPackage = 'id.co.peruri.inapass.stg';  // Package untuk staging
              break;
          case 'beta':
              appPackage = 'id.co.peruri.inapass'; // Package untuk beta
              break;
          default:
              throw new Error(`Versi aplikasi "${version}" tidak valid!`);
      }
  
      // Mengaktifkan aplikasi dengan package name yang dipilih
      await driver.activateApp(appPackage);
    }

    async terminateAppByVersion(version) {
      let appPackage;
  
      // Menentukan package name berdasarkan versi yang diberikan
      switch (version) {
          case 'dev':
              appPackage = 'id.co.peruri.inapass.dev';  // Package untuk dev
              break;
          case 'stg':
              appPackage = 'id.co.peruri.inapass.stg';  // Package untuk staging
              break;
          case 'beta':
              appPackage = 'id.co.peruri.inapass'; // Package untuk beta
              break;
          default:
              throw new Error(`Versi aplikasi "${version}" tidak valid!`);
      }
  
      // Menghentikan aplikasi dengan package name yang dipilih
      await driver.terminateApp(appPackage);
  }
  
  
  }
  
  module.exports = new SplashPage();
  
  