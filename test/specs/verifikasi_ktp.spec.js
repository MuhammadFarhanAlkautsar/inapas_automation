// const DataDiriPage = require('../pageobjects/data_diri.page');
const SplashPage = require('../pageobjects/splash.page');
const VerifikasiKTPPage = require('../pageobjects/verifikasi_ktp.page');
const fotoKTPPage = require('../pageobjects/foto_ktp.page');

export const verifikasiKTPTests = () => {
    describe('Verifikasi KTP Testing', () => {

        // Test Case 22: Membatalkan Navigasi Kembali 
        it('should cancel and navigate back to Form Data Diri from Verifikasi KTP page', async () => {
            try {
                // Tutup aplikasi
                driver.terminateApp('id.co.peruri.inapass.dev');
    
                // Tunggu beberapa saat jika diperlukan
                await driver.pause(1000);
    
                await driver.activateApp('id.co.peruri.inapass.dev');
    
                // Klik tombol Mulai Verifikasi di halaman Splash
                await SplashPage.clickMulaiVerifikasi();
    
                // Tunggu beberapa saat jika diperlukan
                await driver.pause(500);
                // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
                await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed()
                // Klik tombol Mulai Kembali di halaman Splash
                await SplashPage.clickLanjutkan();
    
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Form Data Diri
                await VerifikasiKTPPage.clickKembali();
    
                // Langkah 2: Tunggu hingga pop-up konfirmasi keluar tampil dengan timeout maksimal 5 detik
                await VerifikasiKTPPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Langkah 3: Klik tombol Batal pada pop-up untuk tetap berada di halaman Verifikasi KTP
                await VerifikasiKTPPage.buttonBatal.click();
    
                // Langkah 4: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
                const isVerifikasiKTPVisible = await VerifikasiKTPPage.verifikasiKTP.isDisplayed();
                expect(isVerifikasiKTPVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
            } catch (error) {
                // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen, log error dan gagal uji
                console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi KTP tidak muncul:', error);
                throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi KTP tidak muncul.');
            }
        });
    
        // Test Case 23: Navigasi Kembali ke Halaman Splash
        it('should navigate back to Splash page from Verifikasi KTP page', async () => {
    
            try {
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
                await VerifikasiKTPPage.clickKembali();
    
                // Langkah 2: Tunggu hingga pop-up konfirmasi untuk keluar muncul dengan timeout maksimal 5 detik
                await VerifikasiKTPPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Langkah 3: Klik tombol Keluar pada pop-up untuk mengonfirmasi navigasi kembali ke halaman Splash
                await VerifikasiKTPPage.buttonKeluar.click();
    
                // Langkah 4: Verifikasi apakah halaman Splash muncul setelah navigasi berhasil dilakukan
                const isSplashVisible = await SplashPage.mulaiVerifikasiButton.isDisplayed();
                expect(isSplashVisible).toBe(true);  // Pastikan halaman Splash terlihat setelah kembali dari halaman Verifikasi KTP
            } catch (error) {
                // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen halaman Splash, log error dan gagal uji
                console.error('Gagal mengklik tombol Kembali atau halaman Splash tidak muncul:', error);
                throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Splash tidak muncul.');
            }
        });
    
        // Test Case 24: Navigasi ke Halaman Foto KTP dari Halaman Verifikasi KTP
        it('should navigate to Foto KTP page from Verifikasi KTP page', async () => {
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.clickMulaiVerifikasi();
    
            // Verifikasi bahwa popup onboarding muncul
            await SplashPage.melanjutkanOnBoardingPopUp.waitForDisplayed({ timeout: 5000 });
    
            // Lanjutkan onboarding
            await SplashPage.clickLanjutkan();
    
            try {
                // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
                await VerifikasiKTPPage.clickFotoKTP();
    
                // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
                const isFotoKTPDisplayed = await fotoKTPPage.fotoKTP.isDisplayed();
                expect(isFotoKTPDisplayed).toBe(true);  // Pastikan halaman Foto KTP terlihat
            } catch (error) {
                // Jika terjadi kesalahan saat navigasi atau verifikasi halaman Foto KTP, log error dan gagal uji
                console.error('Gagal melakukan navigasi ke halaman Foto KTP atau halaman Foto KTP tidak muncul:', error);
                throw new Error('Pengujian gagal karena tidak dapat melakukan navigasi ke halaman Foto KTP atau halaman Foto KTP tidak muncul.');
            }
        });
    
    });
};