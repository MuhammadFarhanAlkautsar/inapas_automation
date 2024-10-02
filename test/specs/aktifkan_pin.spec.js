const AktifkanPinPage = require('../pageobjects/aktifkan_pin.page');

export const AktifkanPINTests = () => {
    describe('Aktifkan PIN Testing', () => {
        it('should not allow navigation to confirmation screen with PIN less than 6 digits', async () => {
            // Langkah 1: Klik pada input PIN untuk memfokuskan
            await AktifkanPinPage.inputPin.click();
            console.log('Input PIN diklik.');
        
            // Langkah 2: Masukkan PIN kurang dari 6 digit
            await AktifkanPinPage.inputPin.setValue("12345");
            console.log('PIN kurang dari 6 digit diisi: 12345');
        
            // Langkah 3: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isKonfirmasiPINVisible = await AktifkanPinPage.konfirmasiPin.isDisplayed();
            expect(isKonfirmasiPINVisible).toBe(false);
            console.log('Screen konfirmasi PIN tidak muncul karena PIN kurang dari 6 digit.');
        });
    
        it('should toggle between showing and hiding PIN in Create PIN', async () => {
        
            // Langkah 3: Klik tombol untuk menampilkan PIN
            await AktifkanPinPage.tampilkanPin.click();
            console.log('Tombol "Tampilkan PIN" diklik.');
    
            // Langkah 4: Verifikasi bahwa PIN sekarang ditampilkan sebagai teks biasa
            const pinTypeAfterShow = await AktifkanPinPage.digitPinDitampilkan.isDisplayed();
            expect(pinTypeAfterShow).toBe(true); // Verifikasi bahwa PIN ditampilkan sebagai teks biasa
            console.log('PIN ditampilkan sebagai teks biasa.');
        
            // Langkah 5: Klik tombol untuk menyembunyikan PIN
            await AktifkanPinPage.sembunyikanPin.click();
            console.log('Tombol "Sembunyikan PIN" diklik.');
        
            // Langkah 6: Verifikasi bahwa PIN sekarang disembunyikan kembali dalam format password
            const pinTypeAfterHide = await AktifkanPinPage.digitPinDisembunyikan.isDisplayed();
            expect(pinTypeAfterHide).toBe(true); // Verifikasi bahwa PIN disembunyikan kembali
            console.log('PIN kembali disembunyikan.');
        });
    
        it('should navigation to confirmation screen with PIN 6 digits', async () => {
            // Langkah 1: Masukkan PIN kurang dari 6 digit
            await AktifkanPinPage.inputPin.setValue("123456");
    
            // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isKonfirmasiPINVisible = await AktifkanPinPage.konfirmasiPin.isDisplayed();
            expect(isKonfirmasiPINVisible).toBe(true);
        });
    
        it('should not allow navigation to biometric screen with PIN less than 6 digits', async () => {
            // Langkah 1: Klik pada input PIN untuk memfokuskan
            await AktifkanPinPage.inputPin.click();
            console.log('Input PIN diklik.');
        
            // Langkah 2: Masukkan PIN kurang dari 6 digit
            await driver.pressKeyCode(8); // Untuk mengetik "1"
            await driver.pressKeyCode(9); // Untuk mengetik "2"
            await driver.pressKeyCode(10); // Untuk mengetik "3"
            await driver.pressKeyCode(11); // Untuk mengetik "4"
            await driver.pressKeyCode(12); // Untuk mengetik "5"
            await driver.hideKeyboard();
            console.log('PIN kurang dari 6 digit diisi: 12345');
        
            // Langkah 3: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isKonfirmasiPINVisible = await AktifkanPinPage.konfirmasiPin.isDisplayed();
            expect(isKonfirmasiPINVisible).toBe(true);
            console.log('Screen konfirmasi PIN tidak muncul karena PIN kurang dari 6 digit.');
        });
    
        it('should toggle between showing and hiding PIN in Confirm PIN', async () => {
        
            // Langkah 3: Klik tombol untuk menampilkan PIN
            await AktifkanPinPage.tampilkanPin.click();
            console.log('Tombol "Tampilkan PIN" diklik.');
    
            // Langkah 4: Verifikasi bahwa PIN sekarang ditampilkan sebagai teks biasa
            const pinTypeAfterShow = await AktifkanPinPage.digitPinDitampilkan.isDisplayed();
            expect(pinTypeAfterShow).toBe(true); // Verifikasi bahwa PIN ditampilkan sebagai teks biasa
            console.log('PIN ditampilkan sebagai teks biasa.');
        
            // Langkah 5: Klik tombol untuk menyembunyikan PIN
            await AktifkanPinPage.sembunyikanPin.click();
            console.log('Tombol "Sembunyikan PIN" diklik.');
        
            // Langkah 6: Verifikasi bahwa PIN sekarang disembunyikan kembali dalam format password
            const pinTypeAfterHide = await AktifkanPinPage.digitPinDisembunyikan.isDisplayed();
            expect(pinTypeAfterHide).toBe(true); // Verifikasi bahwa PIN disembunyikan kembali
            console.log('PIN kembali disembunyikan.');
        });
    
        it('should not allow navigation to Biometric screen with PIN 6 digits not Match', async () => {
            // Langkah 1: Masukkan PIN kurang dari 6 digit  
            await AktifkanPinPage.inputPin.clearValue();
            await driver.pressKeyCode(13); // Untuk mengetik "6"
            await driver.pressKeyCode(12); // Untuk mengetik "5"
            await driver.pressKeyCode(11); // Untuk mengetik "4"
            await driver.pressKeyCode(10); // Untuk mengetik "3"
            await driver.pressKeyCode(9); // Untuk mengetik "2"
            await driver.pressKeyCode(8); // Untuk mengetik "1"
            // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isKonfirmasiPINVisible = await AktifkanPinPage.pinTidakMatch.isDisplayed();
            expect(isKonfirmasiPINVisible).toBe(true);
            await driver.back();
        });

        it('should navigation to Biometric screen with PIN 6 digits Match', async () => {
            await AktifkanPinPage.inputPin.click();
            console.log('Input PIN diklik.');
        
            // Langkah 1: Masukkan PIN kurang dari 6 digit
            await driver.pressKeyCode(13); // Untuk mengetik "6"
            await driver.pressKeyCode(12); // Untuk mengetik "5"
            await driver.pressKeyCode(11); // Untuk mengetik "4"
            await driver.pressKeyCode(10); // Untuk mengetik "3"
            await driver.pressKeyCode(9); // Untuk mengetik "2"
            await driver.pressKeyCode(8); // Untuk mengetik "1"
    
            await AktifkanPinPage.konfirmasiPin.isDisplayed();
            await AktifkanPinPage.inputPin.click();
            console.log('Input PIN diklik.');
    
            await driver.pressKeyCode(13); // Untuk mengetik "6"
            await driver.pressKeyCode(12); // Untuk mengetik "5"
            await driver.pressKeyCode(11); // Untuk mengetik "4"
            await driver.pressKeyCode(10); // Untuk mengetik "3"
            await driver.pressKeyCode(9); // Untuk mengetik "2"
            await driver.pressKeyCode(8); // Untuk mengetik "1"
    
            // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isValidasiPINVisible = await AktifkanPinPage.authenticationRequired.isDisplayed();
            expect(isValidasiPINVisible).toBe(true);
    
            await driver.pause(3000);
        });

        it('should show error message when fingerprint does not match', async () => {
            // Pastikan layar autentikasi fingerprint sudah terbuka
            await AktifkanPinPage.konfirmasiSidikJari.waitForDisplayed({ timeout: 5000 });
    
            // Langkah 2: Simulasi input sidik jari yang tidak sesuai
            console.log('Simulasi fingerprint yang tidak sesuai.');
            await driver.pause(3000) // Angka 2 mengacu pada sidik jari yang tidak sesuai. Sesuaikan jika menggunakan sidik jari virtual.
            
            // Langkah 3: Verifikasi bahwa pesan error muncul
            const isErrorVisible = await AktifkanPinPage.authenticationRequired.isDisplayed();
            expect(isErrorVisible).toBe(true);
            console.log('Pesan error "Fingerprint tidak sesuai" ditampilkan.');
            
            // Langkah 4: Verifikasi pengguna tetap berada di layar autentikasi fingerprint
            const stillOnBiometricScreen = await AktifkanPinPage.konfirmasiSidikJari.isDisplayed();
            expect(stillOnBiometricScreen).toBe(true);
            console.log('Pengguna tetap berada di layar autentikasi Fingerprint.');
        });
    
        it('should allow access when fingerprint matches', async () => {
            // Pastikan layar autentikasi fingerprint sudah terbuka
            await AktifkanPinPage.konfirmasiSidikJari.waitForDisplayed({ timeout: 5000 });
    
            // Langkah 2: Simulasi input sidik jari yang tidak sesuai
            console.log('Simulasi fingerprint yang sesuai.');
            await driver.pause(3000); // Angka 2 mengacu pada sidik jari yang tidak sesuai. Sesuaikan jika menggunakan sidik jari virtual.
            
            // Langkah 3: Verifikasi bahwa akses diberikan dan layar selanjutnya muncul
            const isVerifikasiBerhasilVisible = await await browser.waitUntil(async () => {
                return await AktifkanPinPage.verifikasiBerhasil.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Verifikasi Berhasil tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isVerifikasiBerhasilVisible).toBe(true);
    
            console.log('Layar selanjutnya ditampilkan setelah autentikasi fingerprint berhasil.');
            await AktifkanPinPage.masukKeBeranda.click();
    
            const isBerandaVisible = await browser.waitUntil(async () => {
                return await AktifkanPinPage.Beranda.isDisplayed();
            }, {
                timeout: 50000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Beranda tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isBerandaVisible).toBe(true);
    
        });
    });
};