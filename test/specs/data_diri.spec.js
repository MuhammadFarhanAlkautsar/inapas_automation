const VerifikasiOnlinePage = require('../pageobjects/verifikasi_online.page');
const DataDiriPage = require('../pageobjects/data_diri.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');

export const formDataDiriTests = () => {
    describe('Form Data Diri Testing', () => {
        // Test Case 1: Membatalkan navigasi dan tetap di halaman Data Diri saat mengklik tombol "Batal"
        it('should cancel and stay on Data Diri page when clicking "Batal"', async () => {
    
            // try {
                // Langkah 1: Klik tombol "Kembali" di halaman Data Diri untuk memicu pop-up konfirmasi keluar
                await DataDiriPage.clickKembali();
    
                // Langkah 2: Verifikasi bahwa pop-up konfirmasi keluar muncul
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.popUpKeluar,true);
                // const isPopUpDisplayed = await DataDiriPage.popUpKeluar.isDisplayed();
                // expect(isPopUpDisplayed).toBe(true);  // Pastikan pop-up terlihat
    
                // Langkah 3: Klik tombol "Batal" di pop-up untuk membatalkan navigasi
                await DataDiriPage.buttonBatal.click();
    
                // Langkah 4: Verifikasi bahwa halaman tetap berada di Data Diri setelah mengklik "Batal"
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.dataDiri,true);
                // const isDataDiriVisible = await DataDiriPage.dataDiri.isDisplayed();
                // expect(isDataDiriVisible).toBe(true);  // Pastikan halaman Data Diri tetap terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat menangani pop-up atau navigasi kembali, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat menangani pop-up atau navigasi kembali:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat menangani pop-up atau navigasi kembali.');
    
            // }
        });
    
        // Test Case 2: Kembali ke halaman Verifikasi Online setelah mengonfirmasi keluar dari halaman Data Diri
        it('should navigate back to Verifikasi Online page when confirming exit', async () => {
            // try {
                // Langkah 1: Klik tombol "Kembali" di halaman Data Diri untuk memicu pop-up konfirmasi keluar
                await DataDiriPage.clickKembali();
    
                // Langkah 2: Verifikasi bahwa pop-up konfirmasi keluar muncul
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.popUpKeluar,true);
                // const isPopUpDisplayed = await DataDiriPage.popUpKeluar.isDisplayed();
                // expect(isPopUpDisplayed).toBe(true);  // Pastikan pop-up terlihat
    
                // Langkah 3: Klik tombol "Keluar" di pop-up untuk mengonfirmasi keluar dari halaman Data Diri
                await DataDiriPage.buttonKeluar.click();
    
                // Langkah 4: Verifikasi bahwa halaman berubah ke Verifikasi Online setelah mengonfirmasi keluar
                VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiOnlinePage.verifikasiOnline,true);
                // const isVerifikasiOnlineVisible = await VerifikasiOnlinePage.verifikasiOnline.isDisplayed();
                // expect(isVerifikasiOnlineVisible).toBe(true);  // Pastikan halaman Verifikasi Online terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat menangani pop-up atau navigasi ke halaman Verifikasi Online, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat menangani tombol keluar atau navigasi ke halaman Verifikasi Online:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat menangani pop-up atau navigasi ke halaman Verifikasi Online.');
            // }
        });
    
    
        // Test Case 3: Menampilkan error ketika field NIK dikosongkan
        it('should display error when NIK field is left empty', async () => {
            // try {
                // Langkah 1: Klik tombol Form Input di halaman Verifikasi Online untuk membuka halaman Data Diri
                await VerifikasiOnlinePage.clickFormInputButton();
    
                // Langkah 2: Isi field NIK dengan nilai sementara '123' untuk kemudian dikosongkan
                await DataDiriPage.fillNIK('123');
    
                // Langkah 3: Kosongkan field NIK dengan menggunakan metode clearValue
                await DataDiriPage.nikField.clearValue();
    
                // Langkah 4: Verifikasi bahwa pesan error tampil ketika field NIK dikosongkan
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorNIK,true);
                // const isDisplayed = await DataDiriPage.emptyErrorNIK.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field NIK yang kosong:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field NIK yang kosong.');
            // }
        });
    
        // Test Case 4: Menampilkan error ketika NIK melebihi 16 digit
        it('should display error when NIK exceeds 16 digits', async () => {
            // try {
                // Langkah 1: Isi field NIK dengan nilai yang melebihi 16 digit
                await DataDiriPage.fillNIK('123456789011121314'); // 18 digit
    
                // Langkah 2: Verifikasi bahwa pesan error tampil karena NIK melebihi 16 digit
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorNIK,true);
                // const isDisplayed = await DataDiriPage.emptyErrorNIK.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk NIK yang melebihi 16 digit:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk NIK yang melebihi 16 digit.');
            // }
        });
    
        // Test Case 5: Menampilkan error ketika NIK kurang dari 16 digit
        it('should display error when NIK is less than 16 digits', async () => {
            // try {
                // Langkah 1: Isi field NIK dengan nilai yang kurang dari 16 digit
                await DataDiriPage.fillNIK('12345678901112'); // NIK ini hanya memiliki 14 digit
    
                // Langkah 2: Verifikasi bahwa pesan error tampil karena NIK kurang dari 16 digit
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorNIK,true);
                // const isDisplayed = await DataDiriPage.emptyErrorNIK.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk NIK yang kurang dari 16 digit:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk NIK yang kurang dari 16 digit.');
            // }
        });
    
        // Test Case 6: Menampilkan error ketika field Nama dikosongkan
        it('should display error when Nama field is left empty', async () => {
            // try {
                // Langkah 1: Isi field NIK dengan jumlah digit sesuai
                await DataDiriPage.fillNIK('1234567890111213');
    
                // Langkah 2: Kosongkan field Nama
                await DataDiriPage.fillNama(''); // Mengosongkan field Nama
    
                // Langkah 3: Verifikasi bahwa pesan error tampil karena field Nama dikosongkan
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorNama,true);
                // const isDisplayed = await DataDiriPage.emptyErrorNama.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Nama yang kosong:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Nama yang kosong.');
            // }
        });
    
        // Test Case 7: Menampilkan error ketika field Tanggal Lahir dikosongkan
        it('should display error when Tanggal lahir field is left empty', async () => {
            // try {
                // Langkah 1: Isi field Nama dengan nilai valid
                await DataDiriPage.fillNama('Cristiano Ronaldo');
    
                // Langkah 2: Klik field Tanggal Lahir untuk membuka pilihan tanggal
                await $(`android=new UiSelector().className("android.view.View").instance(13)`).click();
    
                // Langkah 3: Klik tombol Batal untuk tidak memilih tanggal dan membatalkan pengisian
                await DataDiriPage.batalButton.click();

                await driver.back();
    
                // Langkah 4: Verifikasi bahwa pesan error tampil karena field Tanggal Lahir dikosongkan
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorTanggalLahir,true);
                // const isDisplayed = await DataDiriPage.emptyErrorTanggalLahir.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Tanggal Lahir yang kosong:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Tanggal Lahir yang kosong.');
            // }
        });

        it('should display an error when user is under 17 years old', async () => {
    
                // Langkah 2: Klik field Tanggal Lahir untuk membuka pilihan tanggal
                await DataDiriPage.fillTanggalLahir('2024', '12, Minggu, 12 Mei 2024');

                await driver.hideKeyboard();
    
                // Langkah 4: Verifikasi bahwa pesan error tampil karena field Tanggal Lahir dikosongkan
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.error17YearsOld,true);
                // const isDisplayed = await DataDiriPage.error17YearsOld.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Tanggal Lahir yang kosong:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Tanggal Lahir yang kosong.');
            // }
        });
    
        // Test Case 8: Menampilkan error ketika field Email dikosongkan
        it('should display error when email field is left empty', async () => {
            // try {
                // Langkah 1: Isi field Tanggal Lahir dengan nilai valid
                await $('android=new UiSelector().text("12/05/2024")').click(); // Klik pada elemen yang sesuai dengan tanggal lahir yang ditampilkan
                await DataDiriPage.pilihTahunButton.click(); // Klik untuk memilih tahun
    
                // Langkah 5: Scroll ke tahun 2003 dalam pilihan tahun
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("1985"))');
                await $('~1985').click(); // Pilih tahun 2003
    
                // Langkah 6: Pilih tanggal lahir yang tepat setelah memilih tahun
                let isElementFound = false;
                while (!isElementFound) {   
                    const element = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[2]');
                    await element.click();
                    
                    const TanggalLahir = $('~5, Selasa, 5 Februari 1985'); // Deskripsi lengkap dari tanggal lahir yang diinginkan
                    isElementFound = await TanggalLahir.isDisplayed(); // Periksa apakah elemen ditemukan
                    
                    if (isElementFound) {
                        await TanggalLahir.click(); // Klik tanggal lahir jika ditemukan
                    }
                }
    
                // Langkah 7: Klik tombol "OKE" setelah memilih tanggal lahir
                await $('~OKE').click();
    
                // Langkah 2: Sembunyikan keyboard setelah pengisian tanggal lahir untuk memastikan ruang input berikutnya terlihat
                await driver.hideKeyboard();
    
                // Langkah 3: Kosongkan field Email dengan mengisi string kosong atau spasi
                await DataDiriPage.fillEmail(' '); // Mengosongkan field Email
    
                // Langkah 4: Verifikasi bahwa pesan error tampil karena field Email dikosongkan
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorEmail,true);
                // const isDisplayed = await DataDiriPage.emptyErrorEmail.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field Email yang kosong:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field Email yang kosong.');
            // }
        });
    
        // Test Case 17: Menampilkan error ketika field No HP dikosongkan
        it('should display error when No HP field is left empty', async () => {
            // try {
                // Langkah 1: Isi field Email dengan nilai 
                await DataDiriPage.fillEmail('cristianoronaldoreal@gmail.com');
    
                // Langkah 2: Kosongkan field No HP dengan mengisi string kosong
                await DataDiriPage.fillPhone(''); // Mengosongkan field No HP
    
                // Langkah 3: Sembunyikan keyboard setelah pengisian untuk memastikan pesan error dapat terlihat
                await driver.hideKeyboard();
    
                // Langkah 4: Verifikasi bahwa pesan error tampil karena field No HP dikosongkan
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorHp,true);
                // const isDisplayed = await DataDiriPage.emptyErrorHp.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field No HP yang kosong:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field No HP yang kosong.');
            // }
        });
    
        // Test Case 18: Menampilkan error ketika field No HP tidak sesuai jumlah digit (Kurang dari 9 digit)
        it('should display error when No HP has less than 9 digits', async () => {
            // try {
                // Langkah 1: Isi field No HP dengan nilai yang kurang dari 9 digit
                await DataDiriPage.fillPhone('0812345'); // Mengisi field No HP dengan kurang dari 9 digit
    
                // Langkah 2: Sembunyikan keyboard setelah pengisian untuk memastikan pesan error dapat terlihat
                await driver.hideKeyboard();
    
                // Langkah 3: Verifikasi bahwa pesan error tampil karena jumlah digit No HP kurang dari 9
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorHp,true);
                // const isDisplayed = await DataDiriPage.emptyErrorHp.isDisplayed(); 
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field No HP yang kurang dari 9 digit:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field No HP yang kurang dari 9 digit.');
            // }
        });
    
        // Test Case 19: Menampilkan error ketika field No HP tidak sesuai jumlah digit (lebih dari 13 digit)
        it('should display error when No HP has more than 13 digits', async () => {
            // try {
                // Langkah 1: Isi field No HP dengan nilai yang lebih dari 13 digit
                await DataDiriPage.fillPhone('081234567890123'); // Mengisi field No HP dengan lebih dari 13 digit
    
                // Langkah 2: Sembunyikan keyboard setelah pengisian untuk memastikan pesan error dapat terlihat
                await driver.hideKeyboard();
    
                // Langkah 3: Verifikasi bahwa pesan error tampil karena jumlah digit No HP lebih dari 13
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.emptyErrorHpMore14,true);
                // const isDisplayed = await DataDiriPage.emptyErrorHpMore14.isDisplayed(); 
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi pesan error, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi pesan error untuk field No HP yang lebih dari 13 digit:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi pesan error untuk field No HP yang lebih dari 13 digit.');
            // }
        });
    
    
        // Test Case 20: Menampilkan error ketika data yang dimasukkan tidak cocok dengan data di Dukcapil
        it('should display error when data entered does not match with Dukcapil', async () => {
            // try {
                // Langkah 1: Isi field No HP dengan nilai yang valid tetapi mungkin tidak cocok dengan data Dukcapil
                await DataDiriPage.fillPhone('081234567890');
    
                // Langkah 2: Sembunyikan keyboard setelah pengisian untuk memastikan tidak ada elemen yang terhalang
                await driver.hideKeyboard();
    
                // Langkah 3: Submit form untuk memulai proses verifikasi data
                await DataDiriPage.submitForm();

                // Langkah 5: Verifikasi bahwa halaman menampilkan error karena data tidak cocok dengan Dukcapil
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.konfirmasiDataPopUp,true);
                // const isKonfirmasiDataDisplayed = await DataDiriPage.konfirmasiDataPopUp.isDisplayed();
                // expect(isKonfirmasiDataDisplayed).toBe(true);  // Pastikan pesan error terlihat

                await DataDiriPage.buttonLanjutkan.click();
    
                // Langkah 4: Jeda sejenak untuk memastikan halaman hasil verifikasi muncul
                await driver.pause(500);
    
                // Langkah 5: Verifikasi bahwa halaman menampilkan error karena data tidak cocok dengan Dukcapil
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.failedScreen,true);
                // const isDisplayed = await DataDiriPage.failedPageDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan pesan error terlihat
    
                // Langkah 6: Kembali ke halaman sebelumnya setelah verifikasi
                await driver.back();
            // } catch (error) {
            //     // Jika terjadi kesalahan saat memverifikasi hasil atau kembali ke halaman sebelumnya, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat memverifikasi hasil atau kembali ke halaman sebelumnya:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi hasil atau kembali ke halaman sebelumnya.');
            // }
        });
    
        // Test Case 21: Berhasil mengirim data valid dan navigasi ke halaman Verifikasi KTP
        it('should successfully submit valid data and navigate to Verifikasi KTP page', async () => {
            await driver.hideKeyboard();
            // try {
                // Langkah 1: Scroll ke elemen yang menjelaskan pengisian data valid
                // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Lengkapi data di bawah ini dengan data yang valid untuk keperluan verifikasi akun INA PASS."))');
    
                // Langkah 2: Isi field NIK dengan data yang valid
                await DataDiriPage.fillNIK('1305012305030002');
    
                // Langkah 3: Isi field Nama dengan data yang valid
                await DataDiriPage.fillNama('Muhammad Farhan');
    
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

                // Langkah 5: Verifikasi bahwa halaman menampilkan error karena data tidak cocok dengan Dukcapil
                VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.konfirmasiDataPopUp,true);
                // const isKonfirmasiDataDisplayed = await DataDiriPage.konfirmasiDataPopUp.isDisplayed();
                // expect(isKonfirmasiDataDisplayed).toBe(true);  // Pastikan pesan error terlihat

                await DataDiriPage.buttonLanjutkan.click();
    
                // Langkah 10: Jeda sejenak untuk memastikan halaman Verifikasi KTP dimuat
                await driver.pause(500);

                VerifikasiDataDiriPage.waitForElementToBeDisplayed(VerifikasiWajahPage.verifikasiWajah, 10000);
                // await VerifikasiWajahPage.verifikasiWajah.waitForDisplayed({ timeout: 10000 });
    
                // Langkah 11: Verifikasi bahwa halaman Verifikasi KTP ditampilkan setelah submit
                VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiWajahPage.verifikasiWajah,false);
                // const isDisplayed = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                // expect(isDisplayed).toBe(true);  // Pastikan halaman Verifikasi KTP terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengisi data atau navigasi, log error dan gagal uji
            //     console.error('Terjadi kesalahan saat mengisi data atau navigasi ke halaman Verifikasi KTP:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengisi data atau navigasi ke halaman Verifikasi KTP.');
            // }
        });
    });
};