const SplashPage = require('../pageobjects/splash.page');
const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const VerifikasiOnlinePage = require('../pageobjects/verifikasi_online.page');
const DataDiriPage = require('../pageobjects/data_diri.page');
const VerifikasiKTPPage = require('../pageobjects/verifikasi_ktp.page');
const fotoKTPPage = require('../pageobjects/foto_ktp.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const syaratKetentuanPage = require('../pageobjects/syarat_ketentuan.page');
const VerifikasiEmailPage = require('../pageobjects/verifikasi_email.page');

describe('Splash Screen Testing', () => {
    
    // Test Case 1: Mulai Verifikasi
    it('should start verification process from splash screen', async () => {
        // Klik tombol Mulai Verifikasi di halaman Splash
        await SplashPage.clickMulaiVerifikasi();
        
        // Verifikasi apakah elemen di halaman verifikasi data diri muncul
        const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
        expect(isVerifikasiDataDiriVisible).toBe(true);

        await driver.pause(1000);
    });

    //Test Case 2: Mulai Kembali Proses Onboarding
    it('should restart onboarding process', async () => {

        // Tutup aplikasi
        driver.terminateApp('id.co.peruri.inapass.dev');

        // Tunggu beberapa saat jika diperlukan
        await driver.pause(1000);

        await driver.activateApp('id.co.peruri.inapass.dev');

        // Klik tombol Mulai Verifikasi di halaman Splash
        await SplashPage.clickMulaiVerifikasi();

        // Tunggu beberapa saat jika diperlukan
        await driver.pause(2000);
        // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Mulai Kembali
        await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed()
        // Klik tombol Mulai Kembali di halaman Splash
        await SplashPage.clickMulaiKembali();
        
        // Verifikasi apakah elemen di halaman verifikasi data diri muncul setelah klik Mulai Kembali
        const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
        expect(isVerifikasiDataDiriVisible).toBe(true);
    });

    // Test Case 3: Lanjutkan Proses Onboarding
    it('should continue onboarding process', async () => {

        // Tutup aplikasi
        driver.terminateApp('id.co.peruri.inapass.dev');

        // Tunggu beberapa saat jika diperlukan
        await driver.pause(1000);

        await driver.activateApp('id.co.peruri.inapass.dev');

        // Klik tombol Mulai Verifikasi di halaman Splash
        await SplashPage.clickMulaiVerifikasi();
        // Jika ada pop-up untuk melanjutkan onboarding, klik tombol Lanjutkan
        await SplashPage.melanjutkanOnBoardingPopUp.isDisplayed();
        await SplashPage.clickLanjutkan();

        await driver.pause(1000);
    });

});

describe('Verifikasi Data Diri Testing', () => {

    // Test Case 4: Batal Navigasi Kembali ke Halaman Splash
    it('should cancel navigate back to Splash page from Verifikasi Data Diri page', async () => {

        try {
            // Klik tombol Kembali di halaman Verifikasi Data Diri
            await VerifikasiDataDiriPage.clickKembali();

            await VerifikasiDataDiriPage.popUpKeluar.isDisplayed();

            await VerifikasiDataDiriPage.buttonBatal.click();

            // Verifikasi apakah elemen di halaman Splash muncul
            const isSplashVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
            expect(isSplashVisible).toBe(true);
        
        } catch (error) {
            // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
        }
    });

    // Test Case 5: Navigasi Kembali ke Halaman Splash
    it('should navigate back to Splash page from Verifikasi Data Diri page', async () => {

        try {
            // Klik tombol Kembali di halaman Verifikasi Data Diri
            await VerifikasiDataDiriPage.clickKembali();

            await VerifikasiDataDiriPage.popUpKeluar.isDisplayed();

            await VerifikasiDataDiriPage.buttonKeluar.click();

            // Verifikasi apakah elemen di halaman Splash muncul
            const isSplashVisible = await SplashPage.mulaiVerifikasiButton.isDisplayed();
            expect(isSplashVisible).toBe(true);
        
        } catch (error) {
            // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
        }
        
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
        const isVerifikasiOnlineVisible = await VerifikasiOnlinePage.verifikasiOnline.isDisplayed(); // Ganti `someElement` dengan elemen yang ada di VerifikasiOnlinePage
        expect(isVerifikasiOnlineVisible).toBe(true);
    });

});

describe('Verifikasi Online Testing', () => {

    // Test Case 7: Navigasi Kembali ke Halaman Verifikasi Data Diri
    it('should navigate back to Verifikasi Data Diri page from Verifikasi Online page', async () => {

        try {
            // Klik tombol Kembali di halaman Verifikasi Online
            await VerifikasiOnlinePage.clickKembali();
        
            // Verifikasi apakah elemen di halaman Verifikasi Data Diri muncul
            const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
            expect(isVerifikasiDataDiriVisible).toBe(true);
            await driver.pause(500);
        
        } catch (error) {
            // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
        }        
    });

    // Test Case 8: Navigasi ke Halaman Form Input
    it('should navigate to Form Input page from Verifikasi Online page', async () => {

        // Klik tombol Verifikasi Online di halaman Verifikasi Data Diri
        await VerifikasiDataDiriPage.clickVerifikasiOnline();

        // Klik tombol Form Input di halaman Verifikasi Online
        await VerifikasiOnlinePage.clickFormInputButton();
        
        // Verifikasi apakah elemen di halaman Data Diri muncul
        const isDataDiriVisible = await DataDiriPage.dataDiri.isDisplayed();
        expect(isDataDiriVisible).toBe(true);
    });

});

describe('Form Data Diri Testing', () => {
    // Test Case 9: Membatalkan navigasi dan tetap di halaman Data Diri saat mengklik tombol "Batal"
    it('should cancel and stay on Data Diri page when clicking "Batal"', async () => {

        try {
            // Langkah 1: Klik tombol "Kembali" di halaman Data Diri untuk memicu pop-up konfirmasi keluar
            await DataDiriPage.clickKembali();

            // Langkah 2: Verifikasi bahwa pop-up konfirmasi keluar muncul
            const isPopUpDisplayed = await DataDiriPage.popUpKeluar.isDisplayed();
            expect(isPopUpDisplayed).toBe(true);  // Pastikan pop-up terlihat

            // Langkah 3: Klik tombol "Batal" di pop-up untuk membatalkan navigasi
            await DataDiriPage.buttonBatal.click();

            // Langkah 4: Verifikasi bahwa halaman tetap berada di Data Diri setelah mengklik "Batal"
            const isDataDiriVisible = await DataDiriPage.dataDiri.isDisplayed();
            expect(isDataDiriVisible).toBe(true);  // Pastikan halaman Data Diri tetap terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat menangani pop-up atau navigasi kembali, log error dan gagal uji
            console.error('Terjadi kesalahan saat menangani pop-up atau navigasi kembali:', error);
            throw new Error('Pengujian gagal karena tidak dapat menangani pop-up atau navigasi kembali.');

        }
    });

    // Test Case 10: Kembali ke halaman Verifikasi Online setelah mengonfirmasi keluar dari halaman Data Diri
    it('should navigate back to Verifikasi Online page when confirming exit', async () => {
        try {
            // Langkah 1: Klik tombol "Kembali" di halaman Data Diri untuk memicu pop-up konfirmasi keluar
            await DataDiriPage.clickKembali();

            // Langkah 2: Verifikasi bahwa pop-up konfirmasi keluar muncul
            const isPopUpDisplayed = await DataDiriPage.popUpKeluar.isDisplayed();
            expect(isPopUpDisplayed).toBe(true);  // Pastikan pop-up terlihat

            // Langkah 3: Klik tombol "Keluar" di pop-up untuk mengonfirmasi keluar dari halaman Data Diri
            await DataDiriPage.buttonKeluar.click();

            // Langkah 4: Verifikasi bahwa halaman berubah ke Verifikasi Online setelah mengonfirmasi keluar
            const isVerifikasiOnlineVisible = await VerifikasiOnlinePage.verifikasiOnline.isDisplayed();
            expect(isVerifikasiOnlineVisible).toBe(true);  // Pastikan halaman Verifikasi Online terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat menangani pop-up atau navigasi ke halaman Verifikasi Online, log error dan gagal uji
            console.error('Terjadi kesalahan saat menangani tombol keluar atau navigasi ke halaman Verifikasi Online:', error);
            throw new Error('Pengujian gagal karena tidak dapat menangani pop-up atau navigasi ke halaman Verifikasi Online.');
        }
    });


    // Test Case 11: Menampilkan error ketika field NIK dikosongkan
    it('should display error when NIK field is left empty', async () => {
        try {
            // Langkah 1: Klik tombol Form Input di halaman Verifikasi Online untuk membuka halaman Data Diri
            await VerifikasiOnlinePage.clickFormInputButton();

            // Langkah 2: Isi field NIK dengan nilai sementara '123' untuk kemudian dikosongkan
            await DataDiriPage.fillNIK('123');

            // Langkah 3: Kosongkan field NIK dengan menggunakan metode clearValue
            await DataDiriPage.nikField.clearValue();

            // Langkah 4: Verifikasi bahwa pesan error tampil ketika field NIK dikosongkan
            const isDisplayed = await DataDiriPage.emptyErrorNIK.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field NIK yang kosong:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field NIK yang kosong.');
        }
    });

    // Test Case 12: Menampilkan error ketika NIK melebihi 16 digit
    it('should display error when NIK exceeds 16 digits', async () => {
        try {
            // Langkah 1: Isi field NIK dengan nilai yang melebihi 16 digit
            await DataDiriPage.fillNIK('123456789011121314'); // 18 digit

            // Langkah 2: Verifikasi bahwa pesan error tampil karena NIK melebihi 16 digit
            const isDisplayed = await DataDiriPage.validationNIK.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk NIK yang melebihi 16 digit:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk NIK yang melebihi 16 digit.');
        }
    });

    // Test Case 13: Menampilkan error ketika NIK kurang dari 16 digit
    it('should display error when NIK is less than 16 digits', async () => {
        try {
            // Langkah 1: Isi field NIK dengan nilai yang kurang dari 16 digit
            await DataDiriPage.fillNIK('12345678901112'); // NIK ini hanya memiliki 14 digit

            // Langkah 2: Verifikasi bahwa pesan error tampil karena NIK kurang dari 16 digit
            const isDisplayed = await DataDiriPage.validationNIK.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk NIK yang kurang dari 16 digit:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk NIK yang kurang dari 16 digit.');
        }
    });

    // Test Case 14: Menampilkan error ketika field Nama dikosongkan
    it('should display error when Nama field is left empty', async () => {
        try {
            // Langkah 1: Isi field NIK dengan jumlah digit sesuai
            await DataDiriPage.fillNIK('1234567890111213');

            // Langkah 2: Kosongkan field Nama
            await DataDiriPage.fillNama(''); // Mengosongkan field Nama

            // Langkah 3: Verifikasi bahwa pesan error tampil karena field Nama dikosongkan
            const isDisplayed = await DataDiriPage.emptyErrorNama.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Nama yang kosong:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Nama yang kosong.');
        }
    });

    // Test Case 15: Menampilkan error ketika field Tanggal Lahir dikosongkan
    it('should display error when Tanggal lahir field is left empty', async () => {
        try {
            // Langkah 1: Isi field Nama dengan nilai valid
            await DataDiriPage.fillNama('Cristiano Ronaldo');

            // Langkah 2: Klik field Tanggal Lahir untuk membuka pilihan tanggal
            await DataDiriPage.tanggalLahirField.click();

            // Langkah 3: Klik tombol Batal untuk tidak memilih tanggal dan membatalkan pengisian
            await DataDiriPage.batalButton.click();

            // Langkah 4: Verifikasi bahwa pesan error tampil karena field Tanggal Lahir dikosongkan
            const isDisplayed = await DataDiriPage.emptyErrorTanggalLahir.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Tanggal Lahir yang kosong:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Tanggal Lahir yang kosong.');
        }
    });

    // Test Case 16: Menampilkan error ketika field Email dikosongkan
    it('should display error when email field is left empty', async () => {
        try {
            // Langkah 1: Isi field Tanggal Lahir dengan nilai valid
            await DataDiriPage.fillTanggalLahir('1985', '5, Selasa, 5 Februari 1985');

            // Langkah 2: Sembunyikan keyboard setelah pengisian tanggal lahir untuk memastikan ruang input berikutnya terlihat
            await driver.hideKeyboard();

            // Langkah 3: Kosongkan field Email dengan mengisi string kosong atau spasi
            await DataDiriPage.fillEmail(' '); // Mengosongkan field Email

            // Langkah 4: Verifikasi bahwa pesan error tampil karena field Email dikosongkan
            const isDisplayed = await DataDiriPage.emptyErrorEmail.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Email yang kosong:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Email yang kosong.');
        }
    });

    // Test Case 17: Menampilkan error ketika field No HP dikosongkan
    it('should display error when No HP field is left empty', async () => {
        try {
            // Langkah 1: Isi field Email dengan nilai 
            await DataDiriPage.fillEmail('cristianoronaldoreal@gmail.com');

            // Langkah 2: Kosongkan field No HP dengan mengisi string kosong
            await DataDiriPage.fillPhone(''); // Mengosongkan field No HP

            // Langkah 3: Sembunyikan keyboard setelah pengisian untuk memastikan pesan error dapat terlihat
            await driver.hideKeyboard();

            // Langkah 4: Verifikasi bahwa pesan error tampil karena field No HP dikosongkan
            const isDisplayed = await DataDiriPage.emptyErrorHp.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field No HP yang kosong:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field No HP yang kosong.');
        }
    });

    // Test Case 18: Menampilkan error ketika field No HP tidak sesuai jumlah digit (Kurang dari 9 digit)
    it('should display error when No HP has less than 9 digits', async () => {
        try {
            // Langkah 1: Isi field No HP dengan nilai yang kurang dari 9 digit
            await DataDiriPage.fillPhone('0812345'); // Mengisi field No HP dengan kurang dari 9 digit

            // Langkah 2: Sembunyikan keyboard setelah pengisian untuk memastikan pesan error dapat terlihat
            await driver.hideKeyboard();

            // Langkah 3: Verifikasi bahwa pesan error tampil karena jumlah digit No HP kurang dari 9
            const isDisplayed = await DataDiriPage.emptyErrorHp.isDisplayed(); 
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field No HP yang kurang dari 9 digit:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field No HP yang kurang dari 9 digit.');
        }
    });

    // Test Case 19: Menampilkan error ketika field No HP tidak sesuai jumlah digit (lebih dari 13 digit)
    it('should display error when No HP has more than 13 digits', async () => {
        try {
            // Langkah 1: Isi field No HP dengan nilai yang lebih dari 13 digit
            await DataDiriPage.fillPhone('081234567890123'); // Mengisi field No HP dengan lebih dari 13 digit

            // Langkah 2: Sembunyikan keyboard setelah pengisian untuk memastikan pesan error dapat terlihat
            await driver.hideKeyboard();

            // Langkah 3: Verifikasi bahwa pesan error tampil karena jumlah digit No HP lebih dari 13
            const isDisplayed = await DataDiriPage.emptyErrorHpMore13.isDisplayed(); 
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field No HP yang lebih dari 13 digit:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field No HP yang lebih dari 13 digit.');
        }
    });


    // Test Case 20: Menampilkan error ketika data yang dimasukkan tidak cocok dengan data di Dukcapil
    it('should display error when data entered does not match with Dukcapil', async () => {
        try {
            // Langkah 1: Isi field No HP dengan nilai yang valid tetapi mungkin tidak cocok dengan data Dukcapil
            await DataDiriPage.fillPhone('081234567890');

            // Langkah 2: Sembunyikan keyboard setelah pengisian untuk memastikan tidak ada elemen yang terhalang
            await driver.hideKeyboard();

            // Langkah 3: Submit form untuk memulai proses verifikasi data
            await DataDiriPage.submitForm();

            // Langkah 4: Jeda sejenak untuk memastikan halaman hasil verifikasi muncul
            await driver.pause(1000);

            // Langkah 5: Verifikasi bahwa halaman menampilkan error karena data tidak cocok dengan Dukcapil
            const isDisplayed = await DataDiriPage.failedPageDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat

            // Langkah 6: Kembali ke halaman sebelumnya setelah verifikasi
            await driver.back();
        } catch (error) {
            // Jika terjadi kesalahan saat memverifikasi hasil atau kembali ke halaman sebelumnya, log error dan gagal uji
            console.error('Terjadi kesalahan saat memverifikasi hasil atau kembali ke halaman sebelumnya:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi hasil atau kembali ke halaman sebelumnya.');
        }
    });

    // Test Case 21: Berhasil mengirim data valid dan navigasi ke halaman Verifikasi KTP
    it('should successfully submit valid data and navigate to Verifikasi KTP page', async () => {
        try {
            // Langkah 1: Scroll ke elemen yang menjelaskan pengisian data valid
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Lengkapi data di bawah ini dengan data yang valid untuk keperluan verifikasi akun INA PASS."))');

            // Langkah 2: Isi field NIK dengan data yang valid
            await DataDiriPage.fillNIK('1305012305030002');

            // Langkah 3: Isi field Nama dengan data yang valid
            await DataDiriPage.fillNama('Muhammad Farhan Alkautsar');

            // Langkah 4: Pilih tanggal lahir yang sesuai dengan data pengguna
            await $('android=new UiSelector().text("05/02/1985")').click(); // Klik pada elemen yang sesuai dengan tanggal lahir yang ditampilkan
            await DataDiriPage.pilihTahunButton.click(); // Klik untuk memilih tahun

            // Langkah 5: Scroll ke tahun 2003 dalam pilihan tahun
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("2003"))');
            await $('~2003').click(); // Pilih tahun 2003

            // Langkah 6: Pilih tanggal lahir yang tepat setelah memilih tahun
            let isElementFound = false;
            while (!isElementFound) {   
                const element = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[3]');
                await element.click();
                
                const TanggalLahir = $('~23, Jumat, 23 Mei 2003'); // Deskripsi lengkap dari tanggal lahir yang diinginkan
                isElementFound = await TanggalLahir.isDisplayed(); // Periksa apakah elemen ditemukan
                
                if (isElementFound) {
                    await TanggalLahir.click(); // Klik tanggal lahir jika ditemukan
                }
            }

            // Langkah 7: Klik tombol "OKE" setelah memilih tanggal lahir
            await $('~OKE').click();
            await driver.hideKeyboard(); // Sembunyikan keyboard setelah pengisian

            // Langkah 8: Isi field Email dan No HP dengan data yang valid
            await DataDiriPage.fillEmail('muhammadfarhanalkautsar@gmail.com'); 
            await DataDiriPage.fillPhone('081275771360');

            // Langkah 9: Submit form dengan data yang telah diisi
            await DataDiriPage.submitForm();

            // Langkah 10: Jeda sejenak untuk memastikan halaman Verifikasi KTP dimuat
            await driver.pause(1000);

            // Langkah 11: Verifikasi bahwa halaman Verifikasi KTP ditampilkan setelah submit
            const isDisplayed = await VerifikasiKTPPage.verifikasiKTP.isDisplayed();
            expect(isDisplayed).toBe(true);  // Pastikan halaman Verifikasi KTP terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat mengisi data atau navigasi, log error dan gagal uji
            console.error('Terjadi kesalahan saat mengisi data atau navigasi ke halaman Verifikasi KTP:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengisi data atau navigasi ke halaman Verifikasi KTP.');
        }
    });
});

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

describe('Verifikasi Wajah Testing', () => {

    // Test Case 22: Membatalkan Navigasi Kembali
    it('should cancel and navigate back to Verifikasi Wajah Page again', async () => {
        try {
            // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Form Data Diri
            await VerifikasiWajahPage.clickKembali();

            // Langkah 2: Tunggu hingga pop-up konfirmasi keluar tampil dengan timeout maksimal 5 detik
            await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });

            // Langkah 3: Klik tombol Batal pada pop-up untuk tetap berada di halaman Verifikasi KTP
            await VerifikasiWajahPage.buttonBatal.click();

            // Langkah 4: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
            const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen, log error dan gagal uji
            console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Wajah tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Wajah tidak muncul.');
        }
    });

    // // Test Case 23: Navigasi Kembali ke Halaman Verifikasi KTP kembali
    // it('should navigate back to Verifikasi KTP Page from Verifikasi Wajah page', async () => {
    //     try {
    //         // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
    //         await VerifikasiWajahPage.clickKembali();

    //         // Langkah 2: Tunggu hingga pop-up konfirmasi untuk keluar muncul dengan timeout maksimal 5 detik
    //         await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });

    //         // Langkah 3: Klik tombol Keluar pada pop-up untuk mengonfirmasi navigasi kembali ke halaman Splash
    //         await VerifikasiWajahPage.buttonKeluar.click();

    //         // Langkah 4: Verifikasi apakah halaman Validasi KTP muncul setelah navigasi berhasil dilakukan
    //         const isSplashVisible = await fotoKTPPage.validasifotoKTP.isDisplayed();
    //         expect(isSplashVisible).toBe(true);  // Pastikan halaman Splash terlihat setelah kembali dari halaman Verifikasi Wajah

    //         // Langkah 3: Klik Tombol Back untuk menutup Pop Up Validasi Wajah
    //         await browser.back();
    //     } catch (error) {
    //         // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen halaman Splash, log error dan gagal uji
    //         console.error('Gagal mengklik tombol Kembali atau halaman Splash tidak muncul:', error);
    //         throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Splash tidak muncul.');
    //     }
    // });

    // Test Case 24: Navigasi ke Halaman Foto Wajah dari Halaman Verifikasi Wajah
    it('should navigate to Foto Wajah page from Verifikasi Wajah page', async () => {

        try {
            // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
            await VerifikasiWajahPage.fotoWajahButton.click();

            await driver.pause(2000);

            // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
            const isFotoWajahDisplayed = await fotoWajahPage.hadapkanWajah.isDisplayed();
            expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto KTP terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat navigasi atau verifikasi halaman Foto KTP, log error dan gagal uji
            console.error('Gagal melakukan navigasi ke halaman Face Liveness atau halaman Face Liveness tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat melakukan navigasi ke halaman Face Liveness atau halaman Face Liveness tidak muncul.');
        }
    });
});

describe('Foto Wajah Testing', () => {

    // Test Case 25: Navigasi Kembali ke Halaman Splash
    it('should navigate back to Verifikasi Wajah page from Foto Wajah page', async () => {
        try {
            await driver.pause(1000);
            // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
            await fotoWajahPage.clickKembali();

            // Langkah 2: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
            const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen halaman Splash, log error dan gagal uji
            console.error('Gagal mengklik tombol Kembali atau halaman Splash tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Splash tidak muncul.');
        }
    });

    // Test Case 26: Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
    it('should take a face photo and navigate to the Terms and Conditions page', async () => {

        try {
            // Langkah 1: Klik tombol Foto Wajah di halaman Verifikasi Wajah untuk memulai proses pengambilan foto wajah
            await VerifikasiWajahPage.clickFotoWajah();

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

});

describe('Syarat Ketentuan Testing', () => {

    // Test Case 1: Navigasi Kehalaman Verifikasi Email
    it('should navigate back to Verifikasi Wajah page from Syarat Ketentuan page', async () => {
        try {
            await driver.pause(1000);
            // Langkah 1: Klik Button Back ke Screen Verifikasi Wajah
            await syaratKetentuanPage.clickKembali();

            // Langkah 2: Verifikasi apakah elemen halaman Verifikasi Wajah Berhasil muncul setelah klik Kembali
            const verifikasiWajahBerhasilDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.verifikasiWajahBerhasil.isDisplayed();
            }, {
                timeout: 5000, // Timeout maksimal, misalnya 5 detik
                timeoutMsg: 'Halaman Verifikasi Wajah tidak muncul dalam batas waktu yang ditentukan'
            });

            // Langkah 3: Klik Tombol Back untuk menutup Pop Up Verifikasi Wajah berhasil
            await browser.back();

            expect(verifikasiWajahBerhasilDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
            // Langkah 4: Verifikasi apakah elemen halaman Verifikasi Wajah muncul setelah klik Kembali
            const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
        } catch (error) {
            // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            console.error('Gagal mengklik tombol Kembali atau halaman verifikasi wajah tidak muncul:', error);
            throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman verifikasi wajah tidak muncul.');
        }
    });

    // Test Case 2: Tidak membaca Syarat dan Ketentuan hingga selesai
    it('should keep Lanjut button disabled when S&K checkbox is not displayed after incomplete scrolling', async () => {
        // Langkah 1: Klik tombol Foto Wajah di halaman Verifikasi Wajah untuk memulai proses pengambilan foto wajah
        await VerifikasiWajahPage.clickFotoWajah();

        // Langkah 2: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
        const isFotoWajahDisplayed = await browser.waitUntil(async () => {
            return await fotoWajahPage.fotoWajah.isDisplayed();
        }, {
            timeout: 10000, // Timeout maksimal, misalnya 10 detik
            timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
        });

        expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat

        // Langkah 3: Menggunakan waitUntil untuk menunggu hingga proses validasi wajah selesai
        const verifikasiWajahBerhasilDisplayed = await browser.waitUntil(async () => {
            return await fotoWajahPage.verifikasiWajahBerhasil.isDisplayed();
        }, {
            timeout: 20000, // Timeout maksimal, misalnya 20 detik
            timeoutMsg: 'Halaman Verifikasi Wajah tidak muncul dalam batas waktu yang ditentukan'
        });

        expect(verifikasiWajahBerhasilDisplayed).toBe(true);  // Pastikan verifikasi wajah berhasil ditampilkan

        // Langkah 4: Menunggu hingga halaman Syarat dan Ketentuan muncul
        const isSyaratKetentuanVisible = await browser.waitUntil(async () => {
            return await syaratKetentuanPage.syaratKetentuan.isDisplayed();
        }, {
            timeout: 20000,  // Timeout maksimal, misalnya 20 detik
            timeoutMsg: 'Halaman Syarat dan Ketentuan tidak muncul dalam batas waktu yang ditentukan'
        });

        expect(isSyaratKetentuanVisible).toBe(true); // Verifikasi bahwa halaman Syarat dan Ketentuan terlihat

        try {
            // Langkah 5: Scroll Syarat Ketentuan tidak sampai selesai
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward(2)');

            await driver.pause(1000); // Tunggu sebentar setelah scroll

            // Langkah 6: Cek apakah checkbox S&K muncul
            const isCheckboxDisplayed = await syaratKetentuanPage.checkbox.isDisplayed(); 
            
            // Verifikasi bahwa checkbox tidak muncul
            expect(isCheckboxDisplayed).toBe(false);

            // Langkah 7: Verifikasi bahwa tombol 'Lanjut' dalam keadaan disabled
            const isLanjutButtonEnabled = await syaratKetentuanPage.lanjutkan.isEnabled(); 
            
            // Verifikasi bahwa tombol 'Lanjut' disabled
            expect(isLanjutButtonEnabled).toBe(false);

            await driver.pause(2000); // Tunggu sebentar sebelum melanjutkan

        } catch (error) {
            // Log error dan gagal uji jika terjadi kesalahan
            console.error('Gagal memverifikasi checkbox dan button Lanjutkan:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi checkbox dan button Lanjutkan');
        }
    });

    // Test Case 3: Membaca Syarat Ketentuan hingga selesai tetapi tidak selected checkbox
    it('should keep the Lanjut button disabled when the S&K checkbox is not checked', async () => {

        try {
            // Langkah 1: Scroll Syarat Ketentuan hingga akhir
            await syaratKetentuanPage.syaratKetentuanScroll();

            // Langkah 2: Cek apakah checkbox S&K muncul
            const isCheckboxChecked = await syaratKetentuanPage.checkbox.isSelected(); 

            // Verifikasi bahwa checkbox tidak aktif (unchecked)
            expect(isCheckboxChecked).toBe(false);

            // Langkah 3: Verifikasi bahwa tombol 'Lanjut' dalam keadaan disabled
            const isLanjutButtonEnabled = await syaratKetentuanPage.lanjutkan.isEnabled(); // Ganti dengan selector yang sesuai
        
            // Verifikasi bahwa tombol 'Lanjut' disabled
            expect(isLanjutButtonEnabled).toBe(false);

            await driver.pause(2000);
        } catch (error) {
            // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            console.error('Gagal memverifikasi checkbox dan button Lanjutkan:', error);
            throw new Error('Pengujian gagal karena tidak dapat memverifikasi checkbox dan button Lanjutkan');
        }
    });

    // Test Case 4: Navigasi Kehalaman Verifikasi Email
    it('should navigate to Verifikasi Email page from Syarat Ketentuan page', async () => {
        try {

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


});

// describe('Verifikasi Email Testing', () => {

//     // Test Case 25: Minta Kirim Ulang Kode OTP
//     it('should resend OTP after timer ends', async () => {
//         try {
//         // Langkah 1: Tunggu hingga timer selesai atau reset
//         await VerifikasiEmailPage.waitForTimerToReset();

//         // Langkah 2: Verifikasi bahwa tombol "Kirim Ulang Kode OTP" aktif
//         const isButtonEnabled = await VerifikasiEmailPage.isResendButtonEnabled();
//         expect(isButtonEnabled).toBe(true);

//         // Langkah 3: Klik tombol "Kirim Ulang Kode OTP"
//         await VerifikasiEmailPage.kirimUlangOTP();

//         // Langkah 4: Verifikasi tindakan yang terjadi setelah OTP dikirim ulang
//         // Contoh: Anda dapat memverifikasi bahwa timer di-reset atau ada pesan notifikasi yang muncul
//         const isTimerReset = await VerifikasiEmailPage.timerElement.getText();
//         expect(isTimerReset).toBe('01:00');

//         } catch (error) {
//             // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Wajah, log error dan gagal uji
//             console.error('Gagal meminta Ulang OTP:', error);
//             throw new Error('Pengujian gagal karena tidak dapat melakukan kirim Ulang OTP.');
//         }
//     });

//     // Test Case 26: Minta Kirim Ulang Kode OTP
//     it('should display an error when using an expired OTP', async () => {
//         try {
//         // Langkah 1: Tunggu hingga timer selesai atau reset
//         await VerifikasiEmailPage.waitForTimerToReset();

//         // Langkah 2: Verifikasi bahwa tombol "Kirim Ulang Kode OTP" aktif
//         const isButtonEnabled = await VerifikasiEmailPage.isResendButtonEnabled();
//         expect(isButtonEnabled).toBe(true);

//         // Langkah 3: Klik tombol "Kirim Ulang Kode OTP"
//         await VerifikasiEmailPage.kirimUlangOTP();

//         // Langkah 4: Verifikasi tindakan yang terjadi setelah OTP dikirim ulang
//         // Contoh: Anda dapat memverifikasi bahwa timer di-reset atau ada pesan notifikasi yang muncul
//         const isTimerReset = await VerifikasiEmailPage.timerElement.getText();
//         expect(isTimerReset).toBe('00:00');

//         } catch (error) {
//             // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Wajah, log error dan gagal uji
//             console.error('Gagal meminta Ulang OTP:', error);
//             throw new Error('Pengujian gagal karena tidak dapat melakukan kirim Ulang OTP.');
//         }
//     });
// });