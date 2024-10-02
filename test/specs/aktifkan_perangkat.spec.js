const SplashPage = require('../pageobjects/splash.page');
const aktifkanPerangkatPage = require('../pageobjects/aktifkan_perangkat.page');
//const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const verifikasiAksesPage = require('../pageobjects/verifikasi_akses.page');
const AktifkanPinPage = require('../pageobjects/aktifkan_pin.page');

// export const AktifkanPerangkatTests = () => {
    describe('Aktifkan Perangkat Testing', () => {

        const version = 'stg';
        
        // Test Case 1: 
        // it('should start Aktifkan Perangkat process from splash screen', async () => {
        //     SplashPage.activateAppByVersion(version);
        //     // Klik tombol Mulai Verifikasi di halaman Splash
        //     await SplashPage.clickAktifkanPerangkat();
            
        //     // Verifikasi apakah elemen di halaman verifikasi data diri muncul
        //     const isAktifkanPerangkatVisible = await browser.waitUntil(async () => {
        //         return await aktifkanPerangkatPage.aktifkanPerangkat.isDisplayed();
        //     }, {
        //         timeout: 20000,  // Timeout maksimal, misalnya 20 detik
        //         timeoutMsg: 'Elemen Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan'
        //     });
        //     expect(isAktifkanPerangkatVisible).toBe(true);
    
        //     await driver.pause(1000);
        // });
    
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

        // Test Case 4
        it('Should display an error message when an empty INA PAS ID is entered', async () => {
            await aktifkanPerangkatPage.lanjutButton.click();
            const isErrorDisplayed = await aktifkanPerangkatPage.emptyErrorINAPASID.isDisplayed(); 
            expect(isErrorDisplayed).toBe(true);
            await driver.pause(1000);
        });

        // Test Case 5
        it('Should display an error message when an invalid INA PAS ID is entered', async () => {
            await aktifkanPerangkatPage.fieldINAPASID.click();
            await aktifkanPerangkatPage.fieldINAPASID.setValue('MF1IEDFAAU');
            await driver.hideKeyboard();
            await aktifkanPerangkatPage.lanjutButton.click();
            const isErrorValidationVisible = await browser.waitUntil(async () => {
                return await aktifkanPerangkatPage.errorINAPASSIDNotFound.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Validasi Error tidak muncul dalam batas waktu yang ditentukan'
            });
            
            expect(isErrorValidationVisible).toBe(true);
            await driver.pause(1000);
            await browser.back();
        });

        // Test Case 6
        it('Should display an error message when an invalid INA PAS ID is entered with NIK', async () => {
            await aktifkanPerangkatPage.fieldINAPASID.click();
            await aktifkanPerangkatPage.fieldINAPASID.setValue('1305012305030002');
            await driver.hideKeyboard();

            await aktifkanPerangkatPage.lanjutButton.click();
            const isErrorValidationVisible = await browser.waitUntil(async () => {
                return await aktifkanPerangkatPage.errorINAPASSIDNotFound.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Validasi Error tidak muncul dalam batas waktu yang ditentukan'
            });
            
            expect(isErrorValidationVisible).toBe(true);
            await driver.pause(1000);
            await browser.back();
        });

        // Test Case 7
        it('Should allow the user to input a valid INA PAS ID and navigate to Verifikasi Wajah', async () => {
            await aktifkanPerangkatPage.fieldINAPASID.click();
            aktifkanPerangkatPage.setINAPASIDByVersion(version);

            const isVerifikasiWajahVisible = await browser.waitUntil(async () => {
                return await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Validasi Error tidak muncul dalam batas waktu yang ditentukan'
            });
            
            expect(isVerifikasiWajahVisible).toBe(true);
            await driver.pause(1000);
        });

        // Test Case 8 Membatalkan Navigasi Kembali
        it('should cancel and navigate back to Verifikasi Wajah Page again', async () => {

                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Form Data Diri
                await VerifikasiWajahPage.kembaliButton.click();
    
                // Langkah 2: Tunggu hingga pop-up konfirmasi keluar tampil dengan timeout maksimal 5 detik
                await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Langkah 3: Klik tombol Batal pada pop-up untuk tetap berada di halaman Verifikasi KTP
                await VerifikasiWajahPage.buttonBatal.click();
    
                // Langkah 4: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
                const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
        });
    
        // Test Case 9: Navigasi Kembali ke Halaman Verifikasi KTP kembali
        it('should navigate back to Aktifkan Perangkat Page from Verifikasi Wajah page', async () => {
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
                await VerifikasiWajahPage.clickKembali();
    
                // Langkah 2: Tunggu hingga pop-up konfirmasi untuk keluar muncul dengan timeout maksimal 5 detik
                await VerifikasiWajahPage.popUpKeluar.waitForDisplayed({ timeout: 5000 });
    
                // Langkah 3: Klik tombol Keluar pada pop-up untuk mengonfirmasi navigasi kembali ke halaman Splash
                await VerifikasiWajahPage.buttonKeluar.click();
    
                // Langkah 4: Verifikasi apakah halaman Validasi KTP muncul setelah navigasi berhasil dilakukan
                const isAktifkanPerangkatVisible = await aktifkanPerangkatPage.aktifkanPerangkat.isDisplayed();
                expect(isAktifkanPerangkatVisible).toBe(true);  // Pastikan halaman Splash terlihat setelah kembali dari halaman Verifikasi Wajah

        });
    
        // Test Case 10: Navigasi ke Halaman Foto Wajah dari Halaman Verifikasi Wajah
        it('should navigate to Foto Wajah page from Verifikasi Wajah page', async () => {

            await aktifkanPerangkatPage.lanjutButton.click();
    
            // Langkah 10: Jeda sejenak untuk memastikan halaman Verifikasi KTP dimuat
            await VerifikasiWajahPage.verifikasiWajah.waitForDisplayed({ timeout: 10000 });

            // Langkah 11: Verifikasi bahwa halaman Verifikasi KTP ditampilkan setelah submit
            const isDisplayed = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
            expect(isDisplayed).toBe(true);
            // Langkah 1: Klik tombol Foto KTP di halaman Verifikasi KTP untuk memulai proses navigasi ke halaman Foto KTP
            await VerifikasiWajahPage.fotoWajahButton.click();

            await driver.pause(4000);

            // Langkah 2: Verifikasi bahwa halaman Foto KTP berhasil ditampilkan
            const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.hadapkanWajah.isDisplayed();
            }, {
                timeout: 20000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto KTP terlihat
        });

        // Test Case 11: Navigasi Kembali ke Halaman Splash
        it('should navigate back to Verifikasi Wajah page from Foto Wajah page', async () => {
            // try {
                await driver.pause(1000);
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
                await fotoWajahPage.clickKembali();
    
                // Langkah 2: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
                const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Kembali atau memverifikasi elemen halaman Splash, log error dan gagal uji
            //     console.error('Gagal mengklik tombol Kembali atau halaman Splash tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Splash tidak muncul.');
            // }
        });

        // Test Case 12: Verifikasi Wajah dengan Wajah Tidak Sesuai (1-2 Kali)
        it('should show error message when face does not match', async () => {
            console.log('Verifikasi Wajah dengan Wajah Tidak Sesuai');

            // try {
                // Langkah 1: Klik tombol Foto Wajah di halaman Verifikasi Wajah untuk memulai proses pengambilan foto wajah
                await VerifikasiWajahPage.clickFotoWajah();
    
                // Langkah 2: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
                const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.fotoWajah.isDisplayed();
                }, {
                    timeout: 30000, // Timeout maksimal, misalnya 10 detik
                    timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
    
                // Langkah 3: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
                const verifikasiWajahGagalDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.verifikasiWajahGagal.isDisplayed();
                }, {
                    timeout: 30000, // Timeout maksimal, misalnya 10 detik
                    timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(verifikasiWajahGagalDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat

                await browser.back();
                
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengambil foto wajah atau navigasi, log error dan gagal uji
            //     console.error('Gagal mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul.');
            // }
        });

        // Test Case 14: Verifikasi Wajah dengan Foto yang Digerakkan (1-2 Kali)
        it('should show error message when using a photo', async () => {
            console.log('Verifikasi Wajah - Foto yang Digerakkan');

            // try {
                // Langkah 1: Klik tombol Foto Wajah di halaman Verifikasi Wajah untuk memulai proses pengambilan foto wajah
                await VerifikasiWajahPage.clickFotoWajah();
    
                // Langkah 2: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
                const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.fotoWajah.isDisplayed();
                }, {
                    timeout: 30000, // Timeout maksimal, misalnya 10 detik
                    timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
    
                // Langkah 3: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
                const verifikasiWajahGagalDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.livenessGagal.isDisplayed();
                }, {
                    timeout: 30000, // Timeout maksimal, misalnya 10 detik
                    timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(verifikasiWajahGagalDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat

                await browser.back();
                
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengambil foto wajah atau navigasi, log error dan gagal uji
            //     console.error('Gagal mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul.');
            // }
        });
    
        // Test Case 17: Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
        it('should take a face photo and navigate to Verifikasi Akses page', async () => {
    
            // try {
                // Langkah 1: Klik tombol Foto Wajah di halaman Verifikasi Wajah untuk memulai proses pengambilan foto wajah
                await VerifikasiWajahPage.clickFotoWajah();
    
                // Langkah 2: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
                const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.fotoWajah.isDisplayed();
                }, {
                    timeout: 30000, // Timeout maksimal, misalnya 10 detik
                    timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
    
                // Langkah 3: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
                const verifikasiWajahBerhasilDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.verifikasiWajahBerhasil.isDisplayed();
                }, {
                    timeout: 30000, // Timeout maksimal, misalnya 10 detik
                    timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(verifikasiWajahBerhasilDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
    
                // Langkah 3: Menggunakan waitUntil untuk menunggu hingga proses validasi wajah selesai
                const isVerifikasiAksesVisible = await browser.waitUntil(async () => {
                    return await verifikasiAksesPage.verifikasiAkses.isDisplayed();
                }, {
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Validasi foto wajah gagal dalam batas waktu yang ditentukan'
                });
    
                // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
                expect(isVerifikasiAksesVisible).toBe(true);
        });

        // Test Case 18: Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
        it('should navigate back to Verifikasi Wajah page from Verifikasi Akses page', async () => {
            
            // try {
                // Klik tombol Kembali di halaman Verifikasi Online
                await verifikasiAksesPage.kembaliButton.click();
            
                // Verifikasi apakah elemen di halaman Verifikasi Wajah muncul
                const isVerifikasiWajahVisible = await browser.waitUntil(async () => {
                    return await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                }, {
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Validasi foto wajah gagal dalam batas waktu yang ditentukan'
                });
    
                // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
                expect(isVerifikasiWajahVisible).toBe(true);
                await driver.pause(500);
            
            // } catch (error) {
            //     // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            //     console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
            // }        
        });
    
        // Test Case 8: Navigasi ke Halaman Form Input
        it('should navigate to Verifikasi PIN from Verifikasi Akses page', async () => {

            // Langkah 1: Klik tombol Foto Wajah di halaman Verifikasi Wajah untuk memulai proses pengambilan foto wajah
            await VerifikasiWajahPage.clickFotoWajah();
    
            // Langkah 2: Verifikasi bahwa halaman Foto Wajah berhasil ditampilkan menggunakan waitUntil
            const isFotoWajahDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.fotoWajah.isDisplayed();
            }, {
                timeout: 20000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Halaman Foto Wajah tidak muncul dalam batas waktu yang ditentukan'
            });
    
            expect(isFotoWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
    
            // Langkah 3: Menggunakan waitUntil untuk menunggu hingga proses validasi wajah selesai
            const verifikasiWajahBerhasilDisplayed = await browser.waitUntil(async () => {
                return await fotoWajahPage.verifikasiWajahBerhasil.isDisplayed();
            }, {
                timeout: 30000, // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Popup Verifikasi Wajah tidak muncul dalam batas waktu yang ditentukan'
            });
    
            expect(verifikasiWajahBerhasilDisplayed).toBe(true);

            const isVerifikasiAksesVisible = await browser.waitUntil(async () => {
                return await verifikasiAksesPage.verifikasiAkses.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Validasi foto wajah gagal dalam batas waktu yang ditentukan'
            });

            // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
            expect(isVerifikasiAksesVisible).toBe(true);

            await verifikasiAksesPage.PINButton.click();

            const isVerifikasiPINVisible = await browser.waitUntil(async () => {
                return await AktifkanPinPage.VerifikasiPin.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Verifikasi PIN gagal tampil dalam batas waktu yang ditentukan'
            });

            // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
            expect(isVerifikasiPINVisible).toBe(true);

        });

        it('should not allow navigation to biometric screen with PIN less than 6 digits', async () => {
            // Langkah 1: Klik pada input PIN untuk memfokuskan
            await AktifkanPinPage.inputPin.click();
            console.log('Input PIN diklik.');
        
            // Langkah 2: Masukkan PIN kurang dari 6 digit
            await AktifkanPinPage.inputPin.setValue("12345");
            console.log('PIN kurang dari 6 digit diisi: 12345');
        
            // Langkah 3: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isBiometricVisible = await AktifkanPinPage.authenticationRequired.isDisplayed();
            expect(isBiometricVisible).toBe(false);
            console.log('Screen Biometric tidak muncul karena PIN kurang dari 6 digit.');
        });

        it('should toggle between showing and hiding PIN in Verifikasi PIN', async () => {
        
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

        it('should not allow navigation to Biometric screen and show error with PIN 6 digits not Match', async () => {
            // Langkah 1: Masukkan PIN kurang dari 6 digit
            await AktifkanPinPage.inputPin.click();  
            await AktifkanPinPage.inputPin.clearValue();
            await driver.pressKeyCode(8); // Untuk mengetik "1"
            await driver.pressKeyCode(9); // Untuk mengetik "2"
            await driver.pressKeyCode(10); // Untuk mengetik "3"
            await driver.pressKeyCode(11); // Untuk mengetik "4"
            await driver.pressKeyCode(12); // Untuk mengetik "5"
            await driver.pressKeyCode(13); // Untuk mengetik "6"
            
            // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isBiometricVisible = await AktifkanPinPage.authenticationRequired.isDisplayed();
            // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
            expect(isBiometricVisible).toBe(false);

            const isErrorVisible = await browser.waitUntil(async () => {
                return await AktifkanPinPage.pinSalah.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Verifikasi PIN gagal tampil dalam batas waktu yang ditentukan'
            });
            expect(isErrorVisible).toBe(true);
            await driver.back();
        });

        it('should navigation to Biometric screen with PIN 6 digits Match', async () => {
            await AktifkanPinPage.inputPin.click();
            await AktifkanPinPage.inputPin.clearValue();
            await driver.pressKeyCode(10); // Untuk mengetik "3"
            await driver.pressKeyCode(16); // Untuk mengetik "3"
            await driver.pressKeyCode(13); // Untuk mengetik "6"
            await driver.pressKeyCode(10); // Untuk mengetik "5"
            await driver.pressKeyCode(15); // Untuk mengetik "4"
            await driver.pressKeyCode(15); // Untuk mengetik "3"
    
            // Langkah 2: Verifikasi bahwa screen konfirmasi PIN tidak muncul
            const isValidasiPINVisible = await browser.waitUntil(async () => {
                return await AktifkanPinPage.authenticationRequired.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Verifikasi PIN gagal tampil dalam batas waktu yang ditentukan'
            });
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

            await driver.pause(20000);
    
        });


    });
// };