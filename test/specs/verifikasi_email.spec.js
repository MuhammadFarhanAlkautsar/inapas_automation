const VerifikasiEmailPage = require("../pageobjects/verifikasi_email.page");
const AktifkanPinPage = require('../pageobjects/aktifkan_pin.page');

export const verifikasiEmailTests = () => {
  describe("Verifikasi Email Testing", () => {
    // TEST CASE 1
    it("should show verification error when invalid OTP is entered and verification button is clicked", async () => {
      // Langkah 1: Tunggu input OTP tersedia
      await VerifikasiEmailPage.inputOTP.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Input OTP tidak ditemukan.",
      });

      // Langkah 2: Masukkan OTP yang tidak valid
      const invalidOTP = "123456"; // Contoh OTP tidak valid
      await VerifikasiEmailPage.inputOTP.click();
      await VerifikasiEmailPage.inputOTP.setValue(invalidOTP);
      await driver.hideKeyboard();

      // Langkah 3: Klik tombol Lanjutkan
      await VerifikasiEmailPage.lanjutkanButton.waitForEnabled({
        timeout: 10000,
        timeoutMsg: "Tombol Verifikasi tidak aktif.",
      });
      await VerifikasiEmailPage.lanjutkanButton.click();

      // Langkah 4: Verifikasi bahwa pesan error muncul
      const isVerifikasiEmailGagalVisible = await VerifikasiEmailPage.gagalVerifikasi.isDisplayed();
      expect(isVerifikasiEmailGagalVisible).toBe(true); // Pastikan halaman Verifikasi Email terlihat
      await driver.back();
    });

    // TEST CASE 2
    it("should verify OTP after waiting 2 minutes and input OTP will show error message", async () => {
      await driver.pause(10000);
      // Langkah 1: Buka notification panel
      await driver.openNotifications(); // Membuka panel notifikasi
      console.log("Notifikasi dibuka.");

      // Langkah 2: Tunggu hingga notifikasi yang berisi "OTP" muncul
      const notificationTextElement = await $(
        '//android.widget.TextView[@resource-id="android:id/big_text"]'
      );
      await notificationTextElement.waitForDisplayed({
        timeout: 30000,
        timeoutMsg: "Notifikasi tidak muncul dalam waktu yang diharapkan",
      });
      console.log("Elemen notifikasi ditemukan.");

      // Langkah 3: Ambil teks dari notifikasi
      const otpText = await notificationTextElement.getText();
      console.log("Teks Notifikasi:", otpText); // Debugging untuk melihat teks notifikasi

      // Langkah 4: Hapus semua karakter non-angka menggunakan replace dan ambil OTP
      const otp = otpText.replace(/[^0-9]/g, ""); // Menghapus semua karakter selain angka
      console.log("OTP yang ditemukan:", otp);

      // Langkah 5: Gunakan driver.back() untuk kembali ke aplikasi
      await driver.back(); // Tekan tombol back untuk menutup notification panel
      console.log("Kembali ke aplikasi.");

      // Langkah 6: Tunggu input OTP tersedia dan masukkan OTP
      await VerifikasiEmailPage.inputOTP.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Input OTP tidak ditemukan.",
      });
      console.log("Input OTP ditemukan.");

      // Langkah 7: Tunggu 2 menit (120 detik)
      const waitTime = 150000; // 2,5 menit dalam milidetik
      console.log("Menunggu selama 2 menit lebih sebelum memasukkan OTP.");

      await new Promise((resolve) => setTimeout(resolve, waitTime));

      await VerifikasiEmailPage.inputOTP.click(); // Klik pada input field OTP
      await VerifikasiEmailPage.inputOTP.setValue(otp);
      console.log("OTP berhasil diisi:", otp);

      // Langkah 8: Klik tombol 'Lanjutkan' untuk verifikasi OTP
      await VerifikasiEmailPage.lanjutkanButton.waitForEnabled({
        timeout: 10000,
        timeoutMsg: "Tombol Lanjutkan tidak aktif.",
      });
      console.log("Tombol Lanjutkan aktif.");

      await VerifikasiEmailPage.lanjutkanButton.click();
      console.log("Tombol Lanjutkan diklik.");

      // Langkah 9: Verifikasi bahwa pesan error muncul
      const isVerifikasiEmailGagalVisible = await browser.waitUntil(async () => {
        return await VerifikasiEmailPage.gagalVerifikasi.isDisplayed();
    }, {
        timeout: 20000,  // Timeout maksimal, misalnya 20 detik
        timeoutMsg: 'Elemen Gagal Verifikasi tidak muncul dalam batas waktu yang ditentukan'
    });
      expect(isVerifikasiEmailGagalVisible).toBe(true); // Pastikan halaman Verifikasi Email terlihat
      await driver.pause(1000);
      await driver.back();
    });

    // TEST CASE 3
    it("should verify that resend OTP is successful and a new OTP appears in the notification", async () => {
      // Langkah 1: Tunggu 1 detik untuk memberikan jeda sebelum tindakan berikutnya
      await driver.pause(1000);

      // Langkah 3: Tunggu hingga tombol "Kirim Ulang OTP" menjadi enabled setelah timer selesai
      const resetTimer =  $("~Belum menerima kode? Kirim ulang dalam 00:00")
      await resetTimer.waitForDisplayed({
        timeout: 180000,
        timeoutMsg:
          "Tombol Kirim Ulang OTP tidak aktif dalam waktu yang diharapkan.",
      });

      // Langkah 4: Klik tombol "Kirim Ulang OTP" untuk meminta kode OTP baru
      await VerifikasiEmailPage.kirimUlangOTP();

      await $("~Belum menerima kode? Kirim ulang dalam 01:55").waitForDisplayed(
        { timeout: 10000, timeoutMsg: "Kirim Ulang OTP Gagal." }
      );

      await driver.pause(10000);

      // Langkah 5: Buka notification panel untuk memeriksa notifikasi OTP baru
      await driver.openNotifications(); // Membuka panel notifikasi

      // Langkah 6: Tunggu hingga notifikasi baru dengan OTP muncul
      const notificationTextElement = await $(
        '//android.widget.TextView[@resource-id="android:id/time" and @text="sekarang"]'
      );
      await notificationTextElement.waitForDisplayed({
        timeout: 30000,
        timeoutMsg:
          "Notifikasi OTP baru tidak muncul dalam waktu yang diharapkan.",
      });
    });

    // TEST CASE 4
    it("should retrieve OTP from notification and input it in the app", async () => {
      // Langkah 2: Tunggu hingga notifikasi yang berisi "OTP" muncul
      const notificationTextElement = await $(
        '//android.widget.TextView[@resource-id="android:id/big_text"]'
      );
      await notificationTextElement.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Notifikasi tidak muncul dalam waktu yang diharapkan",
      });
      console.log("Elemen notifikasi ditemukan.");

      // Langkah 3: Ambil teks dari notifikasi
      const otpText = await notificationTextElement.getText();
      console.log("Teks Notifikasi:", otpText); // Debugging untuk melihat teks notifikasi

      // Langkah 4: Hapus semua karakter non-angka menggunakan replace dan ambil OTP
      const otp = otpText.replace(/[^0-9]/g, ""); // Menghapus semua karakter selain angka
      console.log("OTP yang ditemukan:", otp);

      // Langkah 5: Gunakan driver.back() untuk kembali ke aplikasi
      await driver.back(); // Tekan tombol back untuk menutup notification panel
      console.log("Kembali ke aplikasi.");

      // Langkah 6: Tunggu input OTP tersedia dan masukkan OTP
      await VerifikasiEmailPage.inputOTP.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Input OTP tidak ditemukan.",
      });
      console.log("Input OTP ditemukan.");

      await VerifikasiEmailPage.inputOTP.click(); // Klik pada input field OTP
      await VerifikasiEmailPage.inputOTP.setValue(otp);
      await driver.hideKeyboard();
      console.log("OTP berhasil diisi:", otp);

      // Langkah 7: Klik tombol 'Lanjutkan' untuk verifikasi OTP
      await VerifikasiEmailPage.lanjutkanButton.waitForEnabled({
        timeout: 10000,
        timeoutMsg: "Tombol Lanjutkan tidak aktif.",
      });
      console.log("Tombol Lanjutkan aktif.");

      await VerifikasiEmailPage.lanjutkanButton.click();
      console.log("Tombol Lanjutkan diklik.");

      await driver.pause(2000);

      // Langkah 8: Verifikasi apakah elemen halaman Verifikasi Email muncul setelah klik Lanjutkan
      const isAktifkanPinVisible = await browser.waitUntil(async () => {
            return await AktifkanPinPage.aktifkanPin.isDisplayed();
        }, {
            timeout: 20000,  // Timeout maksimal, misalnya 20 detik
            timeoutMsg: 'Elemen Aktifkan Pin tidak muncul dalam batas waktu yang ditentukan'
        });
      expect(isAktifkanPinVisible).toBe(true);
    });
  });
};
