const SplashPage = require('../pageobjects/splash.page');
const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const VerifikasiOnlinePage = require('../pageobjects/verifikasi_online.page');
const DataDiriPage = require('../pageobjects/data_diri.page');
// const VerifikasiKTPPage = require('../pageobjects/verifikasi_ktp.page');
// const fotoKTPPage = require('../pageobjects/foto_ktp.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const syaratKetentuanPage = require('../pageobjects/syarat_ketentuan.page');
const VerifikasiEmailPage = require('../pageobjects/verifikasi_email.page');
const AktifkanPinPage = require('../pageobjects/aktifkan_pin.page');

describe('Positif Testing', () => {
    
    // Test Case 1: Mulai Verifikasi
    it('should start verification process from splash screen', async () => {
        // Klik tombol Mulai Verifikasi di halaman Splash
        await SplashPage.clickMulaiVerifikasi();
        
        // Verifikasi apakah elemen di halaman verifikasi data diri muncul
        const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
        expect(isVerifikasiDataDiriVisible).toBe(true);

        await driver.pause(1000);
    });

    // Test Case 2: Navigasi ke Halaman Verifikasi Online
    it('should navigate to Verifikasi Online page from Verifikasi Data Diri page', async () => {

        // Klik tombol Verifikasi Online di halaman Verifikasi Data Diri
        await VerifikasiDataDiriPage.clickVerifikasiOnline();
        
        // Verifikasi apakah elemen di halaman Verifikasi Online muncul
        const isVerifikasiOnlineVisible = await VerifikasiOnlinePage.verifikasiOnline.isDisplayed(); // Ganti `someElement` dengan elemen yang ada di VerifikasiOnlinePage
        expect(isVerifikasiOnlineVisible).toBe(true);
    });

    // Test Case 3: Navigasi ke Halaman Form Input
    it('should navigate to Form Input page from Verifikasi Online page', async () => {

        // Klik tombol Form Input di halaman Verifikasi Online
        await VerifikasiOnlinePage.clickFormInputButton();
        
        // Verifikasi apakah elemen di halaman Data Diri muncul
        const isDataDiriVisible = await DataDiriPage.dataDiri.isDisplayed();
        expect(isDataDiriVisible).toBe(true);
    });

    // Test Case 4: Berhasil mengirim data valid dan navigasi ke halaman Verifikasi KTP
    it('should successfully submit valid data and navigate to Verifikasi KTP page', async () => {
        try {
            // Langkah 1: Scroll ke elemen yang menjelaskan pengisian data valid
            // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Lengkapi data di bawah ini dengan data yang valid untuk keperluan verifikasi akun INA PASS."))');

            // Langkah 2: Isi field NIK dengan data yang valid
            await DataDiriPage.fillNIK('1305012305030002');

            // Langkah 3: Isi field Nama dengan data yang valid
            await DataDiriPage.fillNama('Muhammad Farhan Alkautsar');

            // Langkah 4: Pilih tanggal lahir yang sesuai dengan data pengguna
            await DataDiriPage.fillTanggalLahir('2003', '23, Jumat, 23 Mei 2003');
            await driver.hideKeyboard(); // Sembunyikan keyboard setelah pengisian

            // Langkah 8: Isi field Email dan No HP dengan data yang valid
            await DataDiriPage.fillEmail('muhammadfarhanalkautsar@gmail.com'); 
            await DataDiriPage.fillPhone('081275771360');

            // Langkah 9: Submit form dengan data yang telah diisi
            await DataDiriPage.submitForm();

            // Langkah 5: Verifikasi bahwa halaman menampilkan error karena data tidak cocok dengan Dukcapil
            const isKonfirmasiDataDisplayed = await DataDiriPage.konfirmasiDataPopUp.isDisplayed();
            expect(isKonfirmasiDataDisplayed).toBe(true);  // Pastikan pesan error terlihat

            await DataDiriPage.buttonLanjutkan.click();

            // Langkah 10: Jeda sejenak untuk memastikan halaman Verifikasi KTP dimuat
            await driver.pause(500);

            // Langkah 11: Verifikasi bahwa halaman Verifikasi KTP ditampilkan setelah submit
            const isDisplayed = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan halaman Verifikasi KTP terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat mengisi data atau navigasi, log error dan gagal uji
            console.error('Terjadi kesalahan saat mengisi data atau navigasi ke halaman Verifikasi KTP:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengisi data atau navigasi ke halaman Verifikasi KTP.');
        }
    });

    // // Test Case 5: Navigasi ke Halaman Foto KTP dari Halaman Verifikasi KTP
    // it('should navigate to Foto KTP page from Verifikasi KTP page', async () => {

    //     try {
    //         // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
    //         await VerifikasiKTPPage.clickFotoKTP();

    //         // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
    //         const isFotoKTPDisplayed = await fotoKTPPage.fotoKTP.isDisplayed();
    //         expect(isFotoKTPDisplayed).toBe(true);  // Pastikan halaman Foto KTP terlihat
    //     } catch (error) {
    //         // Jika terjadi kesalahan saat navigasi atau verifikasi halaman Foto KTP, log error dan gagal uji
    //         console.error('Gagal melakukan navigasi ke halaman Foto KTP atau halaman Foto KTP tidak muncul:', error);
    //         throw new Error('Pengujian gagal karena tidak dapat melakukan navigasi ke halaman Foto KTP atau halaman Foto KTP tidak muncul.');
    //     }
    // });

    // // Test Case 6: Navigasi ke Halaman Foto KTP dan Mengambil Gambar KTP
    // it('should navigate to Foto KTP page and take a picture of KTP', async () => {
        
    //     // Tunggu hingga kamera terbuka
    //     await driver.pause(3000);  // Beri waktu untuk pengguna mengarahkan KTP ke kamera
    
    //     try {
    //         // Klik tombol untuk mengambil foto KTP
    //         await fotoKTPPage.ambilFotoKTP();  // Pastikan ada metode untuk mengklik tombol ambil foto KTP
    
    //         // Menggunakan waitUntil untuk menunggu proses validasi selesai
    //         const isWajahVisible = await browser.waitUntil(async () => {
    //             return await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
    //         }, {
    //             timeout: 20000,  // Timeout maksimal, misalnya 20 detik
    //             timeoutMsg: 'Validasi KTP gagal dalam batas waktu yang ditentukan'
    //         });
    
    //         // Verifikasi bahwa elemen di halaman Verifikasi Wajah muncul
    //         expect(isWajahVisible).toBe(true);
        
    //     } catch (error) {
    //         console.error('Gagal mengklik tombol ambil Foto KTP atau halaman Verifikasi Wajah tidak muncul:', error);
    //         throw new Error('Pengujian gagal karena tidak dapat ambil Foto KTP atau halaman Verifikasi Wajah tidak muncul.');
    //     }
    // });

    // Test Case 7: Navigasi ke Halaman Foto Wajah dari Halaman Verifikasi Wajah
    it('should navigate to Foto Wajah page from Verifikasi Wajah page', async () => {

        try {
            // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
            await VerifikasiWajahPage.fotoWajahButton.click();

            await driver.pause(2000);

            // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
            const isFotoWajahDisplayed = await fotoWajahPage.hadapkanWajah.isDisplayed();
            expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat navigasi atau verifikasi halaman Foto KTP, log error dan gagal uji
            console.error('Gagal melakukan navigasi ke halaman Face Liveness atau halaman Face Liveness tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat melakukan navigasi ke halaman Face Liveness atau halaman Face Liveness tidak muncul.');
        }
    });

    // Test Case 8: Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
    it('should take a face photo and navigate to the Terms and Conditions page', async () => {

        try {

            // Langkah 2: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
            const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.fotoWajah.isDisplayed();
            }, {
                timeout: 10000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
            });

            expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat

            // Langkah 3: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
            const verifikasiWajahBerhasilDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.verifikasiWajahBerhasil.isDisplayed();
            }, {
                timeout: 20000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
            });

            expect(verifikasiWajahBerhasilDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat

            // Langkah 3: Menggunakan waitUntil untuk menunggu hingga proses validasi wajah selesai
            const isSyaratKetentuanVisible = await browser.waitUntil(async () => {
                return await syaratKetentuanPage.syaratKetentuan.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Validasi foto wajah gagal dalam batas waktu yang ditentukan'
            });

            // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
            expect(isSyaratKetentuanVisible).toBe(true);
            
        } catch (error) {
            // Jika terjadi kesalahan saat mengambil foto wajah atau navigasi, log error dan gagal uji
            console.error('Gagal mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul.');
        }
    });

    // Test Case 9: Navigasi Kehalaman Verifikasi Email
    it('should navigate to Verifikasi Email page from Syarat Ketentuan page', async () => {
        try {
            // Langkah 1: Scroll Syarat Ketentuan hingga akhir
            await syaratKetentuanPage.syaratKetentuanScroll();

            // Langkah 1: centang Check Box
            await syaratKetentuanPage.clickCheckBox();

            // Langkah 2: Click Lanjutkan
            await syaratKetentuanPage.clickLanjutkan();

            // Langkah 3: Verifikasi apakah elemen halaman Verifikasi Email muncul setelah klik Lanjutkan
            const isVerifikasiEmailVisible = await VerifikasiEmailPage.verifikasiEmail.isDisplayed();
            expect(isVerifikasiEmailVisible).toBe(true);  // Pastikan halaman Verifikasi Email terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            console.error('Gagal mengklik tombol Lanjutkan atau halaman selanjutnya tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Lanjutkan atau halaman tidak muncul.');
        }
    });

    it('should retrieve OTP from notification and input it in the app', async () => {
        await driver.pause(10000);

        // Mencoba menemukan notifikasi yang mengandung OTP
        // try {
        // // Langkah 1: Buka notification panel untuk memeriksa notifikasi OTP baru
        // await driver.openNotifications(); // Membuka panel notifikasi

        // // Langkah 2: Tunggu hingga notifikasi yang berisi "OTP" muncul
        // const notificationTextElement = await $('//android.widget.TextView[@resource-id="android:id/big_text"]');
        // await notificationTextElement.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Notifikasi tidak muncul dalam waktu yang diharapkan' });
        // console.log('Elemen notifikasi ditemukan.');

        // // Langkah 3: Ambil teks dari notifikasi
        // const otpText = await notificationTextElement.getText();
        // console.log('Teks Notifikasi:', otpText); // Debugging untuk melihat teks notifikasi

        // // Langkah 4: Hapus semua karakter non-angka menggunakan replace dan ambil OTP
        // const otp = otpText.replace(/[^0-9]/g, ''); // Menghapus semua karakter selain angka
        // console.log('OTP yang ditemukan:', otp);

        // // Langkah 5: Gunakan driver.back() untuk kembali ke aplikasi
        // await driver.back(); // Tekan tombol back untuk menutup notification panel
        // console.log('Kembali ke aplikasi.');

        // } catch (error) {
        console.log("OTP tidak ditemukan di notifikasi, mencoba mencari di Gmail...");

        // Buka aplikasi Gmail
        await driver.startActivity('com.google.android.gm', 'com.google.android.gm.ConversationListActivityGmail');
        console.log("Aplikasi Gmail dibuka.");

        // Tunggu hingga halaman utama Gmail muncul
        const gmailSearchElement = await $('android=new UiSelector().resourceId("com.google.android.gm:id/open_search_bar_text_view")');
        await gmailSearchElement.waitForDisplayed({
            timeout: 20000,
            timeoutMsg: "Halaman Gmail tidak muncul dalam waktu yang diharapkan",
        });
  
        // Cari email dengan kata kunci "OTP"
        await gmailSearchElement.click();
        await gmailSearchElement.setValue('Kode OTP Verifikasi Email INA PAS');
        console.log("Mencari email dengan kata kunci OTP.");

        // Tunggu hasil pencarian muncul
        const otpEmailElement = await $('(//android.widget.TextView[@resource-id="com.google.android.gm:id/subject"])[1]');
        await otpEmailElement.waitForDisplayed({
            timeout: 30000,
            timeoutMsg: "Email OTP tidak ditemukan",
        });
        await otpEmailElement.click();
        console.log("Email yang berisi OTP ditemukan dan dibuka.");

        // Ambil teks OTP dari email
        
        const otpTextInEmail = await $('//android.widget.TextView[matches(@text, "\\d{6}")]').getText();
        const otpFromEmail = otpTextInEmail.replace(/[^0-9]/g, "");
        console.log("OTP yang ditemukan di Gmail:", otpFromEmail);

        // Kembali ke aplikasi
        await driver.activateApp('id.co.peruri.inapass.stg');
        console.log("Kembali ke aplikasi dari Gmail.");

        // Langkah 6: Tunggu input OTP tersedia dan masukkan OTP
        await VerifikasiEmailPage.inputOTP.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Input OTP tidak ditemukan.' });
        console.log('Input OTP ditemukan.');
        
        await VerifikasiEmailPage.inputOTP.click(); // Klik pada input field OTP
        await VerifikasiEmailPage.inputOTP.setValue(otp);
        console.log('OTP berhasil diisi:', otp);

        // Langkah 7: Klik tombol 'Lanjutkan' untuk verifikasi OTP
        await VerifikasiEmailPage.lanjutkanButton.waitForEnabled({ timeout: 10000, timeoutMsg: 'Tombol Lanjutkan tidak aktif.' });
        console.log('Tombol Lanjutkan aktif.');

        await VerifikasiEmailPage.lanjutkanButton.click();
        console.log('Tombol Lanjutkan diklik.');
        await driver.pause(2000);

        // Langkah 8: Verifikasi apakah elemen halaman Verifikasi Email muncul setelah klik Lanjutkan
        const isAktifkanPinVisible = await AktifkanPinPage.aktifkanPin.isDisplayed();
        expect(isAktifkanPinVisible).toBe(true);
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
        console.log('Simulasi fingerprint yang tidak sesuai.');
        await driver.pause(3000); // Angka 2 mengacu pada sidik jari yang tidak sesuai. Sesuaikan jika menggunakan sidik jari virtual.
        
        // Langkah 3: Verifikasi bahwa pesan error muncul
        const isErrorVisible = await AktifkanPinPage.authenticationRequired.isDisplayed();
        expect(isErrorVisible).toBe(true);
        console.log('Pesan error "Fingerprint tidak sesuai" ditampilkan.');
        
        // Langkah 3: Verifikasi bahwa akses diberikan dan layar selanjutnya muncul
        const isVerifikasiBerhasilVisible = await AktifkanPinPage.verifikasiBerhasil.isDisplayed();
        expect(isVerifikasiBerhasilVisible).toBe(true);

        console.log('Layar selanjutnya ditampilkan setelah autentikasi fingerprint berhasil.');
        await AktifkanPinPage.masukKeBeranda.click();

        const isBerandaVisible = await AktifkanPinPage.Beranda.isDisplayed();
        expect(isBerandaVisible).toBe(true);

    });
});