const SplashPage = require('../pageobjects/splash.page');
const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const AktifkanPinPage = require('../pageobjects/aktifkan_pin.page');

export const SplashPageTests = () => {
    describe('Splash Screen Testing', () => {

        const version = 'dev';
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
        it('should restart onboarding process', async () => {
    
            // Tutup aplikasi
            SplashPage.terminateAppByVersion(version);
    
            // Tunggu beberapa saat jika diperlukan
            await driver.pause(1000);
    
            await SplashPage.activateAppByVersion(version);
    
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.handlePopupErrorAndRetry(SplashPage.clickMulaiVerifikasi.bind(SplashPage), 5);
    
            // Tunggu beberapa saat jika diperlukan
            await driver.pause(2000);
            // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
            VerifikasiDataDiriPage.waitForElementToBeDisplayed(SplashPage.melanjutkanOnBoardingPopUp, 10000);
            // await SplashPage.melanjutkanOnBoardingPopUp.waitForDisplayed({
            //     timeout: 10000, // Waktu tunggu maksimal 10 detik
            //     timeoutMsg: 'Popup melanjutkan onboarding tidak muncul dalam waktu yang diharapkan'
            // });
            // Klik tombol Lanjutkan di halaman Splash
            await SplashPage.clickLanjutkan();
            
            // Verifikasi apakah elemen di halaman verifikasi data diri muncul setelah klik Mulai Kembali
            VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiDataDiriPage.verifikasiDataDiri, true);

            // const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
            // expect(isVerifikasiDataDiriVisible).toBe(true);
        });
    
        // Test Case 3: Lanjutkan Proses Onboarding
        it('should continue onboarding process', async () => {
    
            // Tutup aplikasi
            SplashPage.terminateAppByVersion(version);
    
            // Tunggu beberapa saat jika diperlukan
            await driver.pause(1000);
    
            SplashPage.activateAppByVersion(version);
    
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.handlePopupErrorAndRetry(SplashPage.clickMulaiVerifikasi.bind(SplashPage), 5);
            // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
            await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed();
            await SplashPage.clickMulaiKembali();
    
            await driver.pause(1000);
        });
    
    });
};

export const LoginTests = () => {
    describe('3 - Splash Screen == Login Testing', () => {

        const version = 'dev';
        // Test Case 1: Mulai Verifikasi
        it('should start login process from splash screen', async () => {
            SplashPage.activateAppByVersion(version);

            await driver.pause(3000);
            // Klik tombol Mulai Verifikasi di halaman Splash
            await SplashPage.handlePopupErrorAndRetry(SplashPage.clickLogin.bind(SplashPage), 5);

            const isBiometricVisible = await browser.waitUntil(async () => {
                const elemen = await SplashPage.authenticationRequired.getText();
                return elemen === 'Authentication required';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen tidak muncul dalam batas waktu yang ditentukan'
            });
            
            // Verifikasi apakah elemen di halaman verifikasi data diri muncul
            VerifikasiDataDiriPage.verifyElementVisibility(isBiometricVisible,true);
            // const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
            // expect(isVerifikasiDataDiriVisible).toBe(true);
        });

        it('should show error message when fingerprint does not match', async () => {
            // Pastikan layar autentikasi fingerprint sudah terbuka
            const isBiometricVisible = await browser.waitUntil(async () => {
                const elemen = await AktifkanPinPage.konfirmasiSidikJari.getText();
                return elemen === 'Konfirmasi dengan Sidik Jari';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen tidak muncul dalam batas waktu yang ditentukan'
            });
            
            // Verifikasi apakah elemen di halaman verifikasi data diri muncul
            VerifikasiDataDiriPage.verifyElementVisibility(isBiometricVisible,true);
    
            // Langkah 2: Simulasi input sidik jari yang tidak sesuai
            console.log('Simulasi fingerprint yang tidak sesuai.');
            await driver.pause(3000)
            const GagalVerifikasi = await browser.waitUntil(async () => {
                const elemen = await SplashPage.authenticationRequired.getText();
                return elemen === 'Coba Lagi';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen tidak muncul dalam batas waktu yang ditentukan'
            });
            
            // Verifikasi apakah elemen di halaman verifikasi data diri muncul
            VerifikasiDataDiriPage.verifyElementVisibility(GagalVerifikasi,true);
            
            // Langkah 4: Verifikasi pengguna tetap berada di layar autentikasi fingerprint
            const stillOnBiometricScreen = await browser.waitUntil(async () => {
                const elemen = await AktifkanPinPage.konfirmasiSidikJari.getText();
                return elemen === 'Konfirmasi dengan Sidik Jari';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen tidak muncul dalam batas waktu yang ditentukan'
            });
            VerifikasiDataDiriPage.verifyElementVisibility(stillOnBiometricScreen,true);
            console.log('Pengguna tetap berada di layar autentikasi Fingerprint.');
        });
    
        it('should allow access when fingerprint matches', async () => {
    
            // Langkah 2: Simulasi input sidik jari yang tidak sesuai
            console.log('Simulasi fingerprint yang sesuai.');
            await driver.pause(3000); // Angka 2 mengacu pada sidik jari yang tidak sesuai. Sesuaikan jika menggunakan sidik jari virtual.
            
            // Langkah 3: Verifikasi bahwa akses diberikan dan layar selanjutnya muncul
            const LoginBerhasil = await await browser.waitUntil(async () => {
                return await AktifkanPinPage.Beranda.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Verifikasi Berhasil tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(LoginBerhasil).toBe(true);
        });
    
    });
};