const SplashPage = require('../pageobjects/splash.page');
const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const VerifikasiOnlinePage = require('../pageobjects/verifikasi_online.page');

export const verifikasiDataDiriTests = () => {
    describe('Verifikasi Data Diri Testing', () => {

        //Test Case 4: Batal Navigasi Kembali ke Halaman Splash
        it('should cancel navigate back to Splash page from Verifikasi Data Diri page', async () => {
    
            // try {
                // Klik tombol Kembali di halaman Verifikasi Data Diri
                await VerifikasiDataDiriPage.clickKembali();
    
                await VerifikasiDataDiriPage.popUpKeluar.isDisplayed();
    
                await VerifikasiDataDiriPage.buttonBatal.click();
    
                // Verifikasi apakah elemen di halaman Verifikasi Data Diri Muncul Kembali
                VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiDataDiriPage.verifikasiDataDiri,true);
            
            // } catch (error) {
            //     // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            //     console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
            // }
        });
    
        // Test Case 5: Navigasi Kembali ke Halaman Splash
        it('should navigate back to Splash page from Verifikasi Data Diri page', async () => {
    
            // try {
                // Klik tombol Kembali di halaman Verifikasi Data Diri
                await VerifikasiDataDiriPage.clickKembali();
    
                await VerifikasiDataDiriPage.popUpKeluar.isDisplayed();
    
                await VerifikasiDataDiriPage.buttonKeluar.click();
    
                // Verifikasi apakah elemen di halaman Splash muncul
                VerifikasiDataDiriPage.verifyElementVisibility(SplashPage.mulaiVerifikasiButton,true);
                // const isSplashVisible = await SplashPage.mulaiVerifikasiButton.isDisplayed();
                // expect(isSplashVisible).toBe(true);
            
            // } catch (error) {
            //     // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            //     console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
            // }
            
        });
    
        // Test Case 6: Navigasi ke Halaman Verifikasi Online
        it('should navigate to Verifikasi Online page from Verifikasi Data Diri page', async () => {
            await SplashPage.clickMulaiVerifikasi();
    
            // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Lanjutkan
            await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed();
            await SplashPage.clickLanjutkan();
    
            await driver.pause(500);
    
            // Klik tombol Verifikasi Online di halaman Verifikasi Data Diri
            await VerifikasiDataDiriPage.clickVerifikasiOnline();
            
            // Verifikasi apakah elemen di halaman Verifikasi Online muncul
            VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiOnlinePage.verifikasiOnline,true);
            // const isVerifikasiOnlineVisible = await VerifikasiOnlinePage.verifikasiOnline.isDisplayed(); // Ganti `someElement` dengan elemen yang ada di VerifikasiOnlinePage
            // expect(isVerifikasiOnlineVisible).toBe(true);
        });
    });
};