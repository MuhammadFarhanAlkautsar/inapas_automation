const SplashPage = require('../pageobjects/splash.page');
const VerifikasiKTPPage = require('../pageobjects/verifikasi_ktp.page');
const fotoKTPPage = require('../pageobjects/foto_ktp.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');

export const fotoKTPTests = () => {
    describe('Ambil Foto KTP Testing', () => {
        // Test Case 25: Batal Navigasi Kembali ke Halaman Verifikasi KTP
        it('should cancel and navigate back to Verifikasi Data Diri from Ambil Foto KTP page', async () => {
    
            try {
                // Klik tombol Kembali di halaman Verifikasi KTP
                await fotoKTPPage.clickKembali();
    
                // Verifikasi bahwa popup untuk keluar muncul
                await fotoKTPPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Klik tombol Batal untuk tetap di halaman Foto KTP
                await fotoKTPPage.buttonBatal.click();
    
                // Verifikasi apakah elemen di halaman Foto KTP muncul kembali
                const isFotoKTPVisibleAfterCancel = await fotoKTPPage.fotoKTP.isDisplayed();
                expect(isFotoKTPVisibleAfterCancel).toBe(true);
            
            } catch (error) {
                console.error('Gagal mengklik tombol Batal atau halaman Foto KTP tidak muncul kembali:', error);
                throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Batal atau halaman Foto KTP tidak muncul kembali.');
            }
        });
    
        // Test Case 26: Navigasi Kembali ke Halaman Splash
        it('should navigate back to Splash page from ambil foto KTP page', async () => {
    
            try {
                // Klik tombol Kembali di halaman Verifikasi KTP
                await fotoKTPPage.clickKembali();
    
                // Verifikasi bahwa popup untuk keluar muncul
                await fotoKTPPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Klik tombol Keluar untuk kembali ke halaman Splash
                await fotoKTPPage.buttonKeluar.click();
    
                // Verifikasi apakah elemen di halaman Splash muncul
                const isSplashVisible = await SplashPage.mulaiVerifikasiButton.isDisplayed();
                expect(isSplashVisible).toBe(true);
            
            } catch (error) {
                console.error('Gagal mengklik tombol Kembali atau halaman Splash tidak muncul:', error);
                throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Splash tidak muncul.');
            }
        });
    
        // Test Case 27: Navigasi ke Halaman Foto KTP dan Mengambil Gambar KTP
        it('should navigate to Foto KTP page and take a picture of KTP', async () => {
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.clickMulaiVerifikasi();
        
            // Verifikasi bahwa popup onboarding muncul
            await SplashPage.melanjutkanOnBoardingPopUp.waitForDisplayed({ timeout: 5000 });
        
            // Lanjutkan onboarding
            await SplashPage.clickLanjutkan();
        
            // Klik tombol Foto KTP di halaman Verifikasi KTP
            await VerifikasiKTPPage.clickFotoKTP();
        
            // Verifikasi bahwa sudah masuk ke Halaman Foto KTP
            const isFotoKTPDisplayed = await fotoKTPPage.fotoKTP.isDisplayed();
            expect(isFotoKTPDisplayed).toBe(true);
            
            // Tunggu hingga kamera terbuka
            await driver.pause(3000);  // Beri waktu untuk pengguna mengarahkan KTP ke kamera
        
            try {
                // Klik tombol untuk mengambil foto KTP
                await fotoKTPPage.ambilFotoKTP();  // Pastikan ada metode untuk mengklik tombol ambil foto KTP
        
                // Menggunakan waitUntil untuk menunggu proses validasi selesai
                const isWajahVisible = await browser.waitUntil(async () => {
                    return await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                }, {
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Validasi KTP gagal dalam batas waktu yang ditentukan'
                });
        
                // Verifikasi bahwa elemen di halaman Verifikasi Wajah muncul
                expect(isWajahVisible).toBe(true);
            
            } catch (error) {
                console.error('Gagal mengklik tombol ambil Foto KTP atau halaman Verifikasi Wajah tidak muncul:', error);
                throw new Error('Pengujian gagal karena tidak dapat ambil Foto KTP atau halaman Verifikasi Wajah tidak muncul.');
            }
        });
    
    });
};