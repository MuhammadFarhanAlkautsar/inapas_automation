const aktifkanPerangkatPage = require('../pageobjects/aktifkan_perangkat.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');

export const VerifikasiWajahTests = () => {
    describe('3 - Aktifkan Perangkat == Verifikasi Wajah Page Testing', () => {

        // Test Case Membatalkan Navigasi Kembali
        it('1 - should cancel and navigate back to Verifikasi Wajah Page again', async () => {
            // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Form Data Diri
            await VerifikasiWajahPage.kembaliButton.click();

            // Langkah 2: Tunggu hingga pop-up konfirmasi keluar tampil dengan timeout maksimal 5 detik
            await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });

            // Langkah 3: Klik tombol Batal pada pop-up untuk tetap berada di halaman Verifikasi KTP
            await VerifikasiWajahPage.buttonBatal.click();

            // Langkah 4: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
            const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
        });
    
        // Test Case Navigasi Kembali ke Halaman Verifikasi KTP kembali
        it('2 - should navigate back to Aktifkan Perangkat Page from Verifikasi Wajah page', async () => {
            // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
            await VerifikasiWajahPage.clickKembali();

            // Langkah 2: Tunggu hingga pop-up konfirmasi untuk keluar muncul dengan timeout maksimal 5 detik
            await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });

            // Langkah 3: Klik tombol Keluar pada pop-up untuk mengonfirmasi navigasi kembali ke halaman Splash
            await VerifikasiWajahPage.buttonKeluar.click();

            // Langkah 4: Verifikasi apakah halaman Validasi Wajah muncul setelah navigasi berhasil dilakukan
            const isAktifkanPerangkatVisible = await aktifkanPerangkatPage.aktifkanPerangkat.isDisplayed();
            expect(isAktifkanPerangkatVisible).toBe(true);  // Pastikan halaman Splash terlihat setelah kembali dari halaman Verifikasi Wajah
        });
    
        // Test Case Navigasi ke Halaman Foto Wajah dari Halaman Verifikasi Wajah
        it('3 - should navigate to Foto Wajah page from Verifikasi Wajah page', async () => {
            await aktifkanPerangkatPage.lanjutButton.click();
    
            // Langkah 10: Jeda sejenak untuk memastikan halaman Verifikasi KTP dimuat
            await VerifikasiWajahPage.verifikasiWajah.waitForDisplayed({ timeout: 10000 });

            // Langkah 11: Verifikasi bahwa halaman Verifikasi KTP ditampilkan setelah submit
            const isDisplayed = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isDisplayed).toBe(true);
            // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
            await VerifikasiWajahPage.fotoWajahButton.click();

            await driver.pause(4000);

            // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
            const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.hadapkanWajah.isDisplayed();
            }, {
                timeout: 20000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto KTP terlihat
        });
    });
};