const AkunPage = require("../pageobjects/akun.page");
const AktifkanPINPage = require("../pageobjects/aktifkan_pin.page");
const Navbar = require("../pageobjects/navbar.page");

//export const AkunTests = () => {
describe("Akun Page Testing", () => {
  it("should navigate to Akun", async () => {
    await driver.activateApp("id.co.peruri.inapass");
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    await Navbar.akunButton.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
    });
    await Navbar.akunButton.click();

    // Tunggu hingga screen Akun terlihat
    isAkunScreenVisible = await AkunPage.qrProfile.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
    });
  });

  it("should verifikasi icon eyes show kredensial", async () => {
    // Langkah 1: Klik eye show kredential
    await AkunPage.eyeShowHide.click();
    // Langkah 2: Verifikasi kredential ditampilkan
    const isNamaVisible = await AkunPage.namaShow.isDisplayed();
    expect(isNamaVisible).toBe(true);
    const isIDVisible = await AkunPage.inapasidShow.isDisplayed();
    expect(isIDVisible).toBe(true);
    const isNIKVisible = await AkunPage.nikShow.isDisplayed();
    expect(isNIKVisible).toBe(true);
    const isEmailVisible = await AkunPage.emailShow.isDisplayed();
    expect(isEmailVisible).toBe(true);
    const isNoHPVisible = await AkunPage.noHpShow.isDisplayed();
    expect(isNoHPVisible).toBe(true);
  });

  it("should verifikasi icon eyes Hide kredensial", async () => {
    // Langkah 1: Klik eye show kredential
    await AkunPage.eyeShowHide.click();

    // Langkah 2: Verifikasi kredential ditampilkan
    const isNamaUnVisible = await AkunPage.namaHide.isDisplayed();
    expect(isNamaUnVisible).toBe(true);
    const isIDUnVisible = await AkunPage.inapasidHide.isDisplayed();
    expect(isIDUnVisible).toBe(true);
    const isNIKUnVisible = await AkunPage.nikHide.isDisplayed();
    expect(isNIKUnVisible).toBe(true);
    const isEmailUnVisible = await AkunPage.emailHide.isDisplayed();
    expect(isEmailUnVisible).toBe(true);
    const isNoHPUnVisible = await AkunPage.noHpHide.isDisplayed();
    expect(isNoHPUnVisible).toBe(true);
  });

  it("should verifikasi icon copy inapass id", async () => {
    // Langkah 1: Klik button copy
    await AkunPage.copyButton.click();

    // Langkah 2: Verifikasi bahwa INAPas ID Akun disalin tampil
    const isCopySuccessVisible = await AkunPage.copySuccess.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Pop Up INA Pas ID berhasil disalin tidak tampil dalam waktu diharapkan",
    });
    expect(isCopySuccessVisible).toBe(true);
  });

  it("should view certificate detail", async () => {
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    let isAkunScreenVisible = await Navbar.akunButton.isSelected();

    // Jika belum berada di screen Akun, klik menu Akun di navbar
    if (!isAkunScreenVisible) {
      await Navbar.akunButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
      });
      await Navbar.akunButton.click();

      // Tunggu hingga screen Akun terlihat
      isAkunScreenVisible = await AkunPage.qrProfile.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
      });
    }

    // Verifikasi bahwa sudah berada di screen Akun
    expect(isAkunScreenVisible).toBe(true);

    // Langkah 2: Klik Cek Sertifikat Anda
    await AkunPage.cekSertifikat.click();

    // Langkah 3: Verifikasi bahwa popup sertfikat
    const isCekSertifikatVisible =
      await AkunPage.popupSertifikat.waitForDisplayed({
        timeout: 10000,
        timeoutMsg:
          "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
      });
    expect(isCekSertifikatVisible).toBe(true);
  });

  it("should back to screen Profile Akun from Certificate Detail", async () => {
    // Langkah 1: Verifikasi bahwa popup sertfikat terlihat
    const isCekSertifikatVisible =
      await AkunPage.popupSertifikat.waitForDisplayed({
        timeout: 10000,
        timeoutMsg:
          "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
      });
    expect(isCekSertifikatVisible).toBe(true);

    // Langkah 2: Klik Kembali pada Pop Up certificate
    await AkunPage.kembali.click();

    // Langkah 3: Verifikasi bahwa Screen Profile Akun tampil
    const isAkunVisible = await AkunPage.qrProfile.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
    });
    expect(isAkunVisible).toBe(true);
  });

  it("should view QR Profile", async () => {
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    let isAkunScreenVisible = await Navbar.akunButton.isSelected();

    // Jika belum berada di screen Akun, klik menu Akun di navbar
    if (!isAkunScreenVisible) {
      await Navbar.akunButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
      });
      await Navbar.akunButton.click();

      // Tunggu hingga screen Akun terlihat
      isAkunScreenVisible = await AkunPage.qrProfile.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
      });
    }

    // Verifikasi bahwa sudah berada di screen Akun
    expect(isAkunScreenVisible).toBe(true);

    // Langkah 2: Klik QR Profile Anda
    await AkunPage.qrProfile.click();

    // Langkah 3: Verifikasi bahwa popup qr code Face Aktif
    const isQRProfileVisible = await AkunPage.popupQrProfile.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
    });
    expect(isQRProfileVisible).toBe(true);
  });

  it("should back to screen Profile Akun from QR Detail", async () => {
    // Langkah 1: Verifikasi bahwa popup QR terlihat
    const isQRProfileVisible = await AkunPage.popupQrProfile.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
    });
    expect(isQRProfileVisible).toBe(true);

    // Langkah 2: Klik Kembali pada Pop Up QR
    await browser.back();

    // Langkah 3: Verifikasi bahwa Screen Profile Akun tampil
    const isAkunVisible = await AkunPage.qrProfile.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
    });
    expect(isAkunVisible).toBe(true);
  });

  it("should click Ubah PIN and navigate to Screen Input PIN Lama", async () => {
    // Langkah 1: Click Ubah PIN
    await AkunPage.ubahPIN.click();

    // Langkah 2: Verifikasi bahwa Screen Input PIN Lama terlihat
    const isUbahPINVisible = await AktifkanPINPage.pinLama.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Pop Up Sertifikat tidak muncul setelah mengklik menu Cek Sertifikat",
    });
    expect(isUbahPINVisible).toBe(true);
  });

  it("should toggle between showing and hiding PIN in PIN Lama", async () => {
    // Langkah 1: Inputkan PIN yang tidak sesuai
    await AktifkanPINPage.inputPin.click();
    await AktifkanPINPage.inputPin.setValue("12345");

    // Langkah 3: Klik tombol untuk menampilkan PIN
    await AktifkanPINPage.tampilkanPin.click();
    console.log('Tombol "Tampilkan PIN" diklik.');

    // Langkah 4: Verifikasi bahwa PIN sekarang ditampilkan sebagai teks biasa
    const pinTypeAfterShow =
      await AktifkanPINPage.digitPinDitampilkan.isDisplayed();
    expect(pinTypeAfterShow).toBe(true); // Verifikasi bahwa PIN ditampilkan sebagai teks biasa
    console.log("PIN ditampilkan sebagai teks biasa.");

    // Langkah 5: Klik tombol untuk menyembunyikan PIN
    await AktifkanPINPage.sembunyikanPin.click();
    console.log('Tombol "Sembunyikan PIN" diklik.');

    // Langkah 6: Verifikasi bahwa PIN sekarang disembunyikan kembali dalam format password
    const pinTypeAfterHide =
      await AktifkanPINPage.digitPinDisembunyikan.isDisplayed();
    expect(pinTypeAfterHide).toBe(true); // Verifikasi bahwa PIN disembunyikan kembali
    console.log("PIN kembali disembunyikan.");
  });

  it("should not navigation to PIN Baru screen with invalid PIN", async () => {
    // Langkah 1: Masukkan PIN kurang dari 6 digit
    await AktifkanPINPage.inputPin.setValue("123456");

    // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
    const isPINBaruVisible = await AktifkanPINPage.pinBaru.isDisplayed();
    expect(isPINBaruVisible).toBe(false);
  });

  it("should navigation to PIN Baru screen with valid PIN", async () => {
    // Logika untuk memeriksa apakah PINBaru terlihat
    const isPinBaruVisible = await AktifkanPINPage.pinBaru
      .isDisplayed()
      .catch(() => false);

    if (isPinBaruVisible) {
      // Jika elemen PINBaru terlihat, lakukan browser back
      await AktifkanPINPage.kembali.click();
      await AkunPage.ubahPIN.click();
      await AktifkanPINPage.inputPin.click();
      await driver.pressKeyCode(13); // Untuk mengetik "6"
      await driver.pressKeyCode(12); // Untuk mengetik "5"
      await driver.pressKeyCode(11); // Untuk mengetik "4"
      await driver.pressKeyCode(10); // Untuk mengetik "3"
      await driver.pressKeyCode(9); // Untuk mengetik "2"
      await driver.pressKeyCode(8); // Untuk mengetik "1"
    } else {
      // Jika elemen PINBaru tidak terlihat, set nilai PIN Valid
      await AktifkanPINPage.inputPin.click();
      await driver.pressKeyCode(13); // Untuk mengetik "6"
      await driver.pressKeyCode(12); // Untuk mengetik "5"
      await driver.pressKeyCode(11); // Untuk mengetik "4"
      await driver.pressKeyCode(10); // Untuk mengetik "3"
      await driver.pressKeyCode(9); // Untuk mengetik "2"
      await driver.pressKeyCode(8); // Untuk mengetik "1"
    }

    // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
    const isPINBaruVisible = await AktifkanPINPage.pinBaru.isDisplayed();
    expect(isPINBaruVisible).toBe(true);
  });

  it("should not allow navigation to screen Masukkan PIN baru Kembali with PIN less than 6 digits", async () => {
    // Langkah 1: Klik pada input PIN untuk memfokuskan
    await AktifkanPINPage.inputPin.click();

    // Langkah 2: Masukkan PIN kurang dari 6 digit
    await driver.pressKeyCode(8); // Untuk mengetik "1"
    await driver.pressKeyCode(9); // Untuk mengetik "2"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(11); // Untuk mengetik "4"
    await driver.pressKeyCode(12); // Untuk mengetik "5"

    // Langkah 3: Verifikasi bahwa screen konfirmasi PIN Baru tidak muncul
    const isKonfirmasiPINVisible =
      await AktifkanPINPage.verifPinBaru.isDisplayed();
    expect(isKonfirmasiPINVisible).toBe(false);
  });

  it("should toggle between showing and hiding PIN in Create New PIN", async () => {
    // Langkah 3: Klik tombol untuk menampilkan PIN
    await AktifkanPINPage.tampilkanPin.click();

    // Langkah 4: Verifikasi bahwa PIN sekarang ditampilkan sebagai teks biasa
    const pinTypeAfterShow =
      await AktifkanPINPage.digitPinDitampilkan.isDisplayed();
    expect(pinTypeAfterShow).toBe(true); // Verifikasi bahwa PIN ditampilkan sebagai teks biasa

    // Langkah 5: Klik tombol untuk menyembunyikan PIN
    await AktifkanPINPage.sembunyikanPin.click();

    // Langkah 6: Verifikasi bahwa PIN sekarang disembunyikan kembali dalam format password
    const pinTypeAfterHide =
      await AktifkanPINPage.digitPinDisembunyikan.isDisplayed();
    expect(pinTypeAfterHide).toBe(true); // Verifikasi bahwa PIN disembunyikan kembali
  });

  it("should navigation to verifikasi New PIN screen with PIN 6 digits", async () => {
    // Langkah 1: Masukkan PIN kurang dari 6 digit
    await AktifkanPINPage.inputPin.click();
    await AktifkanPINPage.inputPin.clearValue();

    // Langkah 2: Masukkan PIN kurang dari 6 digit
    await driver.pressKeyCode(8); // Untuk mengetik "1"
    await driver.pressKeyCode(9); // Untuk mengetik "2"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(11); // Untuk mengetik "4"
    await driver.pressKeyCode(12); // Untuk mengetik "5"
    await driver.pressKeyCode(13); // Untuk mengetik "6"

    // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
    const isVerifikasiPINBaruVisible =
      await AktifkanPINPage.verifPinBaru.isDisplayed();
    expect(isVerifikasiPINBaruVisible).toBe(true);
  });

  it("should not allow navigation to Success Ganti PIN with PIN less than 6 digits", async () => {
    // Langkah 1: Klik pada input PIN untuk memfokuskan
    await AktifkanPINPage.inputPin.click();

    // Langkah 2: Masukkan PIN kurang dari 6 digit
    await driver.pressKeyCode(8); // Untuk mengetik "1"
    await driver.pressKeyCode(9); // Untuk mengetik "2"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(11); // Untuk mengetik "4"
    await driver.pressKeyCode(12); // Untuk mengetik "5"
    await driver.hideKeyboard();

    // Langkah 3: Verifikasi bahwa screen konfirmasi PIN tidak muncul
    const isVerifikasiPINBaruVisible =
      await AktifkanPINPage.verifPinBaru.isDisplayed();
    expect(isVerifikasiPINBaruVisible).toBe(true);
  });

  it("should toggle between showing and hiding PIN in Confirm PIN", async () => {
    // Langkah 3: Klik tombol untuk menampilkan PIN
    await AktifkanPINPage.tampilkanPin.click();

    // Langkah 4: Verifikasi bahwa PIN sekarang ditampilkan sebagai teks biasa
    const pinTypeAfterShow =
      await AktifkanPINPage.digitPinDitampilkan.isDisplayed();
    expect(pinTypeAfterShow).toBe(true); // Verifikasi bahwa PIN ditampilkan sebagai teks biasa

    // Langkah 5: Klik tombol untuk menyembunyikan PIN
    await AktifkanPINPage.sembunyikanPin.click();

    // Langkah 6: Verifikasi bahwa PIN sekarang disembunyikan kembali dalam format password
    const pinTypeAfterHide =
      await AktifkanPINPage.digitPinDisembunyikan.isDisplayed();
    expect(pinTypeAfterHide).toBe(true); // Verifikasi bahwa PIN disembunyikan kembali
  });

  it("should not allow navigation to PIN Berhasil Diubah screen with PIN 6 digits not Match", async () => {
    // Langkah 1: Masukkan PIN kurang dari 6 digit
    await AktifkanPINPage.inputPin.clearValue();
    await driver.pressKeyCode(13); // Untuk mengetik "6"
    await driver.pressKeyCode(12); // Untuk mengetik "5"
    await driver.pressKeyCode(11); // Untuk mengetik "4"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(9); // Untuk mengetik "2"
    await driver.pressKeyCode(8); // Untuk mengetik "1"
    // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
    const isPINErrorVisible = await AktifkanPINPage.pinTidakMatch.isDisplayed();
    expect(isPINErrorVisible).toBe(true);
    await driver.back();
  });

  it("should navigation to Biometric screen with PIN 6 digits Match", async () => {
    await AktifkanPINPage.inputPin.click();
    await driver.pressKeyCode(13); // Untuk mengetik "6"
    await driver.pressKeyCode(12); // Untuk mengetik "5"
    await driver.pressKeyCode(11); // Untuk mengetik "4"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(9); // Untuk mengetik "2"
    await driver.pressKeyCode(8); // Untuk mengetik "1"

    await AktifkanPINPage.inputPin.click();

    // Langkah 1: Masukkan PIN kurang dari 6 digit
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(16); // Untuk mengetik "9"
    await driver.pressKeyCode(13); // Untuk mengetik "6"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(15); // Untuk mengetik "8"
    await driver.pressKeyCode(15); // Untuk mengetik "8"

    await AktifkanPINPage.verifPinBaru.isDisplayed();
    await AktifkanPINPage.inputPin.click();

    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(16); // Untuk mengetik "9"
    await driver.pressKeyCode(13); // Untuk mengetik "6"
    await driver.pressKeyCode(10); // Untuk mengetik "3"
    await driver.pressKeyCode(15); // Untuk mengetik "8"
    await driver.pressKeyCode(15); // Untuk mengetik "8"

    // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
    const isPINBerhasilDiubahVisible = await await browser.waitUntil(
      async () => {
        return await AktifkanPINPage.pinBerhasilDiubah.isDisplayed();
      },
      {
        timeout: 20000, // Timeout maksimal, misalnya 20 detik
        timeoutMsg:
          "Elemen PIN Diubah Berhasil tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    expect(isPINBerhasilDiubahVisible).toBe(true);

    await AktifkanPINPage.kembaliKeBeranda.click();
  });

  it("should navigation to kebijakan privasi", async () => {
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    let isAkunScreenSelected = await Navbar.akunButton.isSelected();

    // Jika belum berada di screen Akun, klik menu Akun di navbar
    if (!isAkunScreenSelected) {
      await Navbar.akunButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
      });
      await Navbar.akunButton.click();

      // Tunggu hingga screen Akun terlihat
      await AkunPage.qrProfile.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
      });

      // Setelah screen Akun muncul, update status 'isAkunScreenSelected'
      isAkunScreenSelected = await Navbar.akunButton.isSelected();
    }

    // Verifikasi bahwa sudah berada di screen Akun
    expect(isAkunScreenSelected).toBe(true);

    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Keluar dari perangkat"))'
    );

    await AkunPage.kebijakanPrivasi.click();

    const iskebijakanPrivasiScreenVisible =
      await AkunPage.kebijakanPrivasiScreen.waitForDisplayed({
        timeout: 10000,
        timeoutMsg:
          "Screen Kebijakan Privasi tidak muncul setelah mengklik menu Akun",
      });

    // Verifikasi bahwa sudah berada di screen Akun
    expect(iskebijakanPrivasiScreenVisible).toBe(true);

    await driver.back();
  });

  it("should navigation to Transaksi", async () => {
    await Navbar.transaksiButton.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
    });
    await Navbar.transaksiButton.click();

    // Tunggu hingga screen Akun terlihat
    await AkunPage.riwayatTransaksi.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Screen Transaksi tidak muncul setelah mengklik menu Transaksi",
    });
  });

  it("should navigation to Kartu", async () => {
    await Navbar.kartuButton.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Menu Kartu di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
    });
    await Navbar.kartuButton.click();

    // Tunggu hingga screen Akun terlihat
    await AkunPage.kartuScreen.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Screen Kartu tidak muncul setelah mengklik menu Kartu",
    });
  });

  it("should show message intruction to exit when klik Keluar perangkat", async () => {
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    let isAkunScreenSelected = await Navbar.akunButton.isSelected();

    // Jika belum berada di screen Akun, klik menu Akun di navbar
    if (!isAkunScreenSelected) {
      await Navbar.akunButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
      });
      await Navbar.akunButton.click();

      // Tunggu hingga screen Akun terlihat
      await AkunPage.qrProfile.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
      });

      // Setelah screen Akun muncul, update status 'isAkunScreenSelected'
      isAkunScreenSelected = await Navbar.akunButton.isSelected();
    }

    // Verifikasi bahwa sudah berada di screen Akun
    expect(isAkunScreenSelected).toBe(true);

    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Keluar dari perangkat"))'
    );

    await AkunPage.keluarPerangkat.click();

    const isMessageKeluarInstruction =
      await AkunPage.messageKeluarPerangkat.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Pesan Instruction Keluar tidak muncul dalam batas waktu yang ditentukan",
      });

    expect(isMessageKeluarInstruction).toBe(true);
  });

  it("should pop up to exit", async () => {
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    let isAkunScreenSelected = await Navbar.akunButton.isSelected();

    // Jika belum berada di screen Akun, klik menu Akun di navbar
    if (!isAkunScreenSelected) {
      await Navbar.akunButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
      });
      await Navbar.akunButton.click();

      // Tunggu hingga screen Akun terlihat
      await AkunPage.qrProfile.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
      });
    }

    // Verifikasi bahwa sudah berada di screen Akun
    expect(isAkunScreenSelected).toBe(true);

    const element = await $("~Keluar dari perangkat");
    await driver.executeScript("mobile: longClickGesture", [
      {
        elementId: await element.elementId,
        duration: 3000,
      },
    ]);

    const isPopUpKeluar = await AkunPage.popupKeluar.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Pop Up Keluar Keluar tidak muncul dalam batas waktu yang ditentukan",
    });

    expect(isPopUpKeluar).toBe(true);
  });

  it("should not allow keluar perangkat and navigation back to Profile Akun", async () => {
    const isPopUpKeluar = await AkunPage.popupKeluar.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Pop Up Keluar Keluar tidak muncul dalam batas waktu yang ditentukan",
    });

    expect(isPopUpKeluar).toBe(true);

    await AkunPage.batalkan.click();
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    let isAkunScreenSelected = await Navbar.akunButton.isSelected();

    // Jika belum berada di screen Akun, klik menu Akun di navbar
    if (!isAkunScreenSelected) {
      await Navbar.akunButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          "Menu Akun di Bottom Navbar tidak muncul dalam batas waktu yang ditentukan",
      });
      await Navbar.akunButton.click();

      // Tunggu hingga screen Akun terlihat
      await AkunPage.qrProfile.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Screen Akun tidak muncul setelah mengklik menu Akun",
      });
    }

    // Verifikasi bahwa sudah berada di screen Akun
    expect(isAkunScreenSelected).toBe(true);
  });

  it("should allow keluar perangkat and navigation to Biomectric", async () => {
    // Langkah 1: Klik Menu Akun di Bottom Navbar

    const element = await $("~Keluar dari perangkat");
    await driver.executeScript("mobile: longClickGesture", [
      {
        elementId: await element.elementId,
        duration: 3000,
      },
    ]);

    const isPopUpKeluar = await AkunPage.popupKeluar.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Pop Up Keluar Keluar tidak muncul dalam batas waktu yang ditentukan",
    });

    expect(isPopUpKeluar).toBe(true);

    await AkunPage.keluar.click();
    // Langkah 1: Klik Menu Akun di Bottom Navbar
    await driver.pause(10000);
  });
});
//};
