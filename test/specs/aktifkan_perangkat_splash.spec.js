const SplashPage = require('../pageobjects/splash.page');
const aktifkanPerangkatPage = require('../pageobjects/aktifkan_perangkat.page');

export const SplashTests = () => {
    describe('1 - Aktifkan Perangkat == Splash Page Testing', () => {

        const version = 'stg';
        
        // Test Case 1: 
        it('1 - should start Aktifkan Perangkat process from splash screen', async () => {
            SplashPage.activateAppByVersion(version);
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.clickAktifkanPerangkat();
            
            // Verifikasi apakah elemen di halaman verifikasi data diri muncul
            const isAktifkanPerangkatVisible = await browser.waitUntil(async () => {
                return await aktifkanPerangkatPage.aktifkanPerangkat.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isAktifkanPerangkatVisible).toBe(true);
    
            await driver.pause(1000);
        });
    
        // //Test Case 2: Mulai Kembali Proses Onboarding
        // it('should restart onboarding process', async () => {
    
        //     // Tutup aplikasi
        //     SplashPage.terminateAppByVersion(version);
    
        //     // Tunggu beberapa saat jika diperlukan
        //     await driver.pause(1000);

        //     await SplashPage.activateAppByVersion(version);
    
        //     // Klik tombol Mulai Verifikasi di halaman Splash
        //     await SplashPage.clickAktifkanPerangkat();
    
        //     // Tunggu beberapa saat jika diperlukan
        //     await driver.pause(2000);
        //     // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
        //     await SplashPage.melanjutkanOnBoardingPopUp.waitForDisplayed({
        //         timeout: 10000, // Waktu tunggu maksimal 10 detik
        //         timeoutMsg: 'Popup melanjutkan onboarding tidak muncul dalam waktu yang diharapkan'
        //     });
        //     // Klik tombol Mulai Kembali di halaman Splash
        //     await SplashPage.clickMulaiKembali();
            
        //     // Verifikasi apakah elemen di halaman verifikasi data diri muncul setelah klik Mulai Kembali
        //     const isAktifkanPerangkatVisible = await browser.waitUntil(async () => {
        //         return await aktifkanPerangkatPage.aktifkanPerangkat.isDisplayed();
        //     }, {
        //         timeout: 20000,  // Timeout maksimal, misalnya 20 detik
        //         timeoutMsg: 'Elemen Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan'
        //     });
        //     expect(isAktifkanPerangkatVisible).toBe(true);
        // });
    
        // // Test Case 3: Lanjutkan Proses Onboarding
        // it('should continue onboarding process', async () => {
    
        //     // Tutup aplikasi
        //     SplashPage.terminateAppByVersion(version);
    
        //     // Tunggu beberapa saat jika diperlukan
        //     await driver.pause(1000);
    
        //     await SplashPage.activateAppByVersion(version);
    
        //     // Klik tombol Mulai Verifikasi di halaman Splash
        //     await SplashPage.clickAktifkanPerangkat();
        //     // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Lanjutkan
        //     await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed();
        //     await SplashPage.clickLanjutkan();
        //     const isAktifkanPerangkatVisible = await browser.waitUntil(async () => {
        //         return await aktifkanPerangkatPage.aktifkanPerangkat.isDisplayed();
        //     }, {
        //         timeout: 20000,  // Timeout maksimal, misalnya 20 detik
        //         timeoutMsg: 'Elemen Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan'
        //     });
        //     expect(isAktifkanPerangkatVisible).toBe(true);
        //     await driver.pause(1000);
        // });
    });
};