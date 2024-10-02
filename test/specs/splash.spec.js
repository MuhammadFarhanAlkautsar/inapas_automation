const SplashPage = require('../pageobjects/splash.page');
const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');

export const SplashPageTests = () => {
    describe('Splash Screen Testing', () => {

        const version = 'beta';
        // Test Case 1: Mulai Verifikasi
        it('should start verification process from splash screen', async () => {
            SplashPage.activateAppByVersion(version);

            await driver.pause(3000);
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.handlePopupErrorAndRetry(SplashPage.clickMulaiVerifikasi.bind(SplashPage), 5);
            
            // Verifikasi apakah elemen di halaman verifikasi data diri muncul
            VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiDataDiriPage.verifikasiDataDiri,true);
            // const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
            // expect(isVerifikasiDataDiriVisible).toBe(true);
        });
    
        //Test Case 2: Mulai Kembali Proses Onboarding
        // it('should restart onboarding process', async () => {
    
        //     // Tutup aplikasi
        //     SplashPage.terminateAppByVersion(version);
    
        //     // Tunggu beberapa saat jika diperlukan
        //     await driver.pause(1000);
    
        //     await SplashPage.activateAppByVersion(version);
    
        //     // Klik tombol Mulai Verifikasi di halaman Splash
        //     await SplashPage.handlePopupErrorAndRetry(SplashPage.clickMulaiVerifikasi.bind(SplashPage), 5);
    
        //     // Tunggu beberapa saat jika diperlukan
        //     await driver.pause(2000);
        //     // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
        //     VerifikasiDataDiriPage.waitForElementToBeDisplayed(SplashPage.melanjutkanOnBoardingPopUp, 10000);
        //     // await SplashPage.melanjutkanOnBoardingPopUp.waitForDisplayed({
        //     //     timeout: 10000, // Waktu tunggu maksimal 10 detik
        //     //     timeoutMsg: 'Popup melanjutkan onboarding tidak muncul dalam waktu yang diharapkan'
        //     // });
        //     // Klik tombol Lanjutkan di halaman Splash
        //     await SplashPage.clickLanjutkan();
            
        //     // Verifikasi apakah elemen di halaman verifikasi data diri muncul setelah klik Mulai Kembali
        //     VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiDataDiriPage.verifikasiDataDiri, true);

        //     // const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
        //     // expect(isVerifikasiDataDiriVisible).toBe(true);
        // });
    
        // // Test Case 3: Lanjutkan Proses Onboarding
        // it('should continue onboarding process', async () => {
    
        //     // Tutup aplikasi
        //     SplashPage.terminateAppByVersion(version);
    
        //     // Tunggu beberapa saat jika diperlukan
        //     await driver.pause(1000);
    
        //     SplashPage.activateAppByVersion(version);
    
        //     // Klik tombol Mulai Verifikasi di halaman Splash
        //     await SplashPage.handlePopupErrorAndRetry(SplashPage.clickMulaiVerifikasi.bind(SplashPage), 5);
        //     // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
        //     await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed();
        //     await SplashPage.clickMulaiKembali();
    
        //     await driver.pause(1000);
        // });
    
    });
};