const DataDiriPage = require('../pageobjects/data_diri.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');

export const verifikasiWajahTests = () => {
    describe('Verifikasi Wajah Testing', () => {

        // Test Case 22: Membatalkan Navigasi Kembali
        it('should cancel and navigate back to Verifikasi Wajah Page again', async () => {
            // try {
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Form Data Diri
                await VerifikasiWajahPage.clickKembali();
    
                // Langkah 2: Tunggu hingga pop-up konfirmasi keluar tampil dengan timeout maksimal 5 detik
                await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Langkah 3: Klik tombol Batal pada pop-up untuk tetap berada di halaman Verifikasi KTP
                await VerifikasiWajahPage.buttonBatal.click();
    
                // Langkah 4: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
                const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen, log error dan gagal uji
            //     console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Wajah tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Wajah tidak muncul.');
            // }
        });
    
        // Test Case 23: Navigasi Kembali ke Halaman Verifikasi KTP kembali
        it('should navigate back to Verifikasi KTP Page from Verifikasi Wajah page', async () => {
            // try {
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
                await VerifikasiWajahPage.clickKembali();
    
                // Langkah 2: Tunggu hingga pop-up konfirmasi untuk keluar muncul dengan timeout maksimal 5 detik
                await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Langkah 3: Klik tombol Keluar pada pop-up untuk mengonfirmasi navigasi kembali ke halaman Splash
                await VerifikasiWajahPage.buttonKeluar.click();
    
                // Langkah 4: Verifikasi apakah halaman Validasi KTP muncul setelah navigasi berhasil dilakukan
                const isDataDiriVisible = await DataDiriPage.dataDiri.isDisplayed();
                expect(isDataDiriVisible).toBe(true);  // Pastikan halaman Splash terlihat setelah kembali dari halaman Verifikasi Wajah

            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen halaman Splash, log error dan gagal uji
            //     console.error('Gagal mengklik tombol Kembali atau halaman Splash tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Splash tidak muncul.');
            // }
        });
    
        // Test Case 24: Navigasi ke Halaman Foto Wajah dari Halaman Verifikasi Wajah
        it('should navigate to Foto Wajah page from Verifikasi Wajah page', async () => {
                await driver.hideKeyboard();

                await DataDiriPage.fillNama('Muhammad Farhan Alkautsar');
                // Langkah 9: Submit form dengan data yang telah diisi
                await DataDiriPage.submitForm();

                // Langkah 5: Verifikasi bahwa halaman menampilkan error karena data tidak cocok dengan Dukcapil
                const isKonfirmasiDataDisplayed = await DataDiriPage.konfirmasiDataPopUp.isDisplayed();
                expect(isKonfirmasiDataDisplayed).toBe(true);  // Pastikan pesan error terlihat

                await DataDiriPage.buttonLanjutkan.click();
    
                // Langkah 10: Jeda sejenak untuk memastikan halaman Verifikasi KTP dimuat
                await VerifikasiWajahPage.verifikasiWajah.waitForDisplayed({ timeout: 10000 });
    
                // Langkah 11: Verifikasi bahwa halaman Verifikasi KTP ditampilkan setelah submit
                const isDisplayed = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                expect(isDisplayed).toBe(true);
                // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
                await VerifikasiWajahPage.fotoWajahButton.click();
    
                await driver.pause(4000);
    
                // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
                const isFotoWajahDisplayed = await fotoWajahPage.hadapkanWajah.isDisplayed();
                expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto KTP terlihat
        });
    });
};