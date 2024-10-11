class akunPage {
    get qrProfile() {
      return $("//android.widget.ScrollView/android.widget.ImageView[2]");
    }

    get popupQrProfile() {
      return $("~QR Face Anda\nKembali");
    }

    get namaHide() {
      return $("~******** ****** *********");
    }

    get namaShow() {
        return $("~MUHAMMAD FARHAN ALKAUTSAR");
    }

    get eyeShowHide() {
      return $('//android.widget.ScrollView/android.widget.Button[1]');
  }

    get inapasidHide() {
      return $('~**********');
    }
  
    get inapasidShow() {
      const version = process.env.APP_VERSION;  // Misalnya, versi aplikasi diambil dari environment variable

      if (version === 'dev') {
          return $("~MFG12B1CA8");
      } else if (version === 'stg' || version === 'beta') {
          return $("~MFJRB979AU");
      } else {
          throw new Error('Version not recognized!');
      }
    }

    get nikHide() {
        return $("~*******************");
      }
  
      get nikShow() {
          return $("~1305 0123 0503 0002");
      }
  
      get emailHide() {
        return $('~*********************************');
      }
    
      get emailShow() {
        return $("~muhammadfarhanalkautsar@gmail.com");
      }

      get noHpHide() {
        return $('~*************');
      }
    
      get noHpShow() {
        return $("~6281275771360");
      }

      get ubahPIN() {
        return $("~Ubah PIN");
      }

      get lupaPIN() {
        return $("~Ubah PIN");
      }

      get batalkan() {
        return $("~Batalkan");
      }

      get keluar() {
        return $("~Keluar");
      }

      get cekSertifikat() {
        return $("~Cek Sertifikat Anda");
      }

      get popupSertifikat() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View');
      }

      get popupKeluar() {
        return $("~Keluar dari Perangkat?\nPerangkat ini akan dihapus dari akun Anda. Anda akan diminta untuk melakukan login kembali dan verifikasi saat mengakses INApas dari perangkat ini di masa mendatang.");
      }

      get kembali() {
        return $("~Kembali");
      }

      get kebijakanPrivasi() {
        return $("~Kebijakan Privasi");
      }

      get keluarPerangkat() {
        return $("~Keluar dari perangkat");
      }

      get messageKeluarPerangkat() {
        return $('//android.view.View[@content-desc="Tekan lama untuk keluar dari perangkat"]/android.view.View/android.view.View');
      }

      get riwayatTransaksi() {
        return $("~Riwayat Transaksi");
      }

      get kartuScreen() {
        return $("~Daftar Identitas");
      }

      get copyButton() {
        return $('//android.widget.ScrollView/android.widget.Button[2]');
      }

      get copySuccess() {
        return $('//android.view.View[@content-desc="INApas ID berhasil disalin."]/android.view.View/android.view.View');
      }

      get selengkapnya() {
        return $('//android.widget.TextView[@resource-id="oplus:id/resolver_item_name" and @text="Selengkapnya"]');
      }

      get chrome() {
        return $('//android.widget.TextView[@resource-id="oplus:id/resolver_item_name" and @text="Chrome"]');
      }

      get INApas() {
        return $('//android.widget.TextView[@resource-id="oplus:id/resolver_item_name" and @text="INA Pas"]');
      }

      get kebijakanPrivasiScreen() {
        return $('//android.webkit.WebView[@text="Kebijakan Privasi | INApas"]');
      }

      async handleBrowserSelection() {
        // Cek apakah elemen "Chrome" dan "INA Pas" sudah terlihat
        const isChromeVisible = await this.chrome.isDisplayed().catch(() => false);
        const isINApasVisible = await this.INApas.isDisplayed().catch(() => false);

        if (!isChromeVisible || !isINApasVisible) {
            // Jika "Chrome" atau "INA Pas" tidak terlihat, cek apakah "Selengkapnya" muncul
            const isSelengkapnyaVisible = await this.selengkapnya.isDisplayed().catch(() => false);

            if (isSelengkapnyaVisible) {
                // Klik "Selengkapnya" jika terlihat
                await this.selengkapnya.click();

                // Tunggu sebentar agar "Chrome" dan "INA Pas" muncul
                await driver.pause(1000);
            }
        }

        // Setelah "Selengkapnya" diklik atau jika "Chrome" sudah langsung terlihat, klik "Chrome"
        const isChromeVisibleAfterSelengkapnya = await this.chrome.isDisplayed().catch(() => false);

        if (isChromeVisibleAfterSelengkapnya) {
            await this.chrome.click();
        } else {
            throw new Error('Chrome tidak tersedia untuk dipilih');
        }
      }
  }
  
  module.exports = new akunPage();