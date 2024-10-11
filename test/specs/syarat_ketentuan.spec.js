const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const syaratKetentuanPage = require('../pageobjects/syarat_ketentuan.page');
const VerifikasiEmailPage = require('../pageobjects/verifikasi_email.page');

export const syaratKetentuanTests = () => {
    describe('Syarat Ketentuan Testing', () => {

        it('1 - should navigate to Kebijakan privasi dan perjanjian pengguna', async () => {
            const isKebijakanPrivasiLink = await browser.waitUntil(async () => {
                return await syaratKetentuanPage.kebijakanPrivasi.isDisplayed();
            }, {
                timeout: 20000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Tombol Kebijakan Privasi tidak muncul dalam batas waktu yang ditentukan'
            });

            expect(isKebijakanPrivasiLink).toBe(true);

            await syaratKetentuanPage.kebijakanPrivasi.click();

            const isKebijakanPrivasiScreen = await browser.waitUntil(async () => {
                return await syaratKetentuanPage.kebijakanPrivasiScreen.isDisplayed();
            }, {
                timeout: 20000, // Timeout maksimal, misalnya 10 detik
                timeoutMsg: 'Tombol Kebijakan Privasi tidak muncul dalam batas waktu yang ditentukan'
            });

            expect(isKebijakanPrivasiScreen).toBe(true);

            await driver.back();
        });

        // Test Case Navigasi Kehalaman Verifikasi Email
        it('2 - should navigate back to Verifikasi Wajah page from Syarat Ketentuan page', async () => {
            // try {
                await syaratKetentuanPage.syaratKetentuan.waitForDisplayed({
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Halaman Syarat dan Ketentuan tidak muncul dalam batas waktu yang ditentukan'
                });
                // Langkah 1: Klik Button Back ke Screen Verifikasi Wajah
                await syaratKetentuanPage.clickKembali();
    
                // Langkah 2: Verifikasi apakah elemen halaman Verifikasi Wajah Berhasil muncul setelah klik Kembali
                const verifikasiWajahDisplayed = await browser.waitUntil(async () => {
                    return await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                }, {
                    timeout: 10000, // Timeout maksimal, misalnya 5 detik
                    timeoutMsg: 'Halaman Verifikasi Wajah tidak muncul dalam batas waktu yang ditentukan'
                });
    
                expect(verifikasiWajahDisplayed).toBe(true);  // Pastikan halaman Foto Wajah terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            //     console.error('Gagal mengklik tombol Kembali atau halaman verifikasi wajah tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman verifikasi wajah tidak muncul.');
            // }
        });
    
        // Test Case 2: Tidak membaca Syarat dan Ketentuan hingga selesai
        it('2 - should keep Lanjut button disabled when S&K checkbox is not displayed after incomplete scrolling', async () => {
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
    
            expect(verifikasiWajahBerhasilDisplayed).toBe(true);  // Pastikan verifikasi wajah berhasil ditampilkan
    
            // Langkah 4: Menunggu hingga halaman Syarat dan Ketentuan muncul
            const isSyaratKetentuanVisible = await browser.waitUntil(async () => {
                return await syaratKetentuanPage.syaratKetentuan.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman Syarat dan Ketentuan tidak muncul dalam batas waktu yang ditentukan'
            });
    
            expect(isSyaratKetentuanVisible).toBe(true); // Verifikasi bahwa halaman Syarat dan Ketentuan terlihat
    
            // try {
                // Langkah 5: Scroll Syarat Ketentuan tidak sampai selesai
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward(2)');
    
                await driver.pause(1000); // Tunggu sebentar setelah scroll
    
                // Langkah 6: Cek apakah checkbox S&K muncul
                const isCheckboxDisplayed = await syaratKetentuanPage.checkbox1.getAttribute('checked'); 
                // Verifikasi bahwa checkbox tidak muncul
                expect((isCheckboxDisplayed === "false") ? false : (isCheckboxDisplayed === "true") ? true : isCheckboxDisplayed).toBe(false);

                // Langkah 6: Cek apakah checkbox S&K muncul
                const isCheckbox2Displayed = await syaratKetentuanPage.checkbox2.getAttribute('checked');  
                // Verifikasi bahwa checkbox tidak muncul
                expect((isCheckbox2Displayed === "false") ? false : (isCheckbox2Displayed === "true") ? true : isCheckbox2Displayed).toBe(false);
    
                // Langkah 7: Verifikasi bahwa tombol 'Lanjut' dalam keadaan disabled
                const isLanjutButtonEnabled = await syaratKetentuanPage.lanjutkan.isEnabled(); 
                
                // Verifikasi bahwa tombol 'Lanjut' disabled
                expect(isLanjutButtonEnabled).toBe(false);
    
                await driver.pause(2000); // Tunggu sebentar sebelum melanjutkan
    
            // } catch (error) {
            //     // Log error dan gagal uji jika terjadi kesalahan
            //     console.error('Gagal memverifikasi checkbox dan button Lanjutkan:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi checkbox dan button Lanjutkan');
            // }
        });
    
        // Test Case 3: Membaca Syarat Ketentuan hingga selesai tetapi tidak selected checkbox
        it('3 - should keep the Lanjut button disabled when the S&K checkbox is not checked', async () => {
    
            // try {
                // Langkah 1: Scroll Syarat Ketentuan hingga akhir
                await syaratKetentuanPage.syaratKetentuanScroll();
    
                // Langkah 2: Cek apakah checkbox S&K muncul
                const isCheckboxChecked = await syaratKetentuanPage.checkbox1.getAttribute('checked');
    
                // Verifikasi bahwa checkbox tidak aktif (unchecked)
                expect((isCheckboxChecked === "false") ? false : (isCheckboxChecked === "true") ? true : isCheckboxChecked).toBe(false);

                const isCheckbox2Checked = await syaratKetentuanPage.checkbox2.getAttribute('checked');
    
                // Verifikasi bahwa checkbox tidak aktif (unchecked)
                expect((isCheckbox2Checked === "false") ? false : (isCheckbox2Checked === "true") ? true : isCheckbox2Checked).toBe(false);
    
                // Langkah 3: Verifikasi bahwa tombol 'Lanjut' dalam keadaan disabled
                const isLanjutButtonEnabled = await syaratKetentuanPage.lanjutkan.isEnabled(); // Ganti dengan selector yang sesuai
            
                // Verifikasi bahwa tombol 'Lanjut' disabled
                expect(isLanjutButtonEnabled).toBe(false);
    
                await driver.pause(2000);
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            //     console.error('Gagal memverifikasi checkbox dan button Lanjutkan:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi checkbox dan button Lanjutkan');
            // }
        });

        // Test Case 4: Membaca Syarat Ketentuan hingga selesai tetapi tidak selected checkbox
        it('4 - should keep the Lanjut button disabled and S&K checkbox is not displayed when S&K not Scroll to end', async () => {

                // Langkah 1: centang Check Box
                const isCheckBoxVisible = await syaratKetentuanPage.checkbox1.waitForDisplayed({
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Tombol Checkbox tidak muncul dalam batas waktu yang ditentukan'
                });
                
                if (isCheckBoxVisible) {
                    await syaratKetentuanPage.clickCheckBox1();
                    const isCheckboxChecked = await syaratKetentuanPage.checkbox1.getAttribute('checked');
                    // Verifikasi bahwa checkbox aktif (checked)
                    expect((isCheckboxChecked === "false") ? false : (isCheckboxChecked === "true") ? true : isCheckboxChecked).toBe(true);
                }

                const isCheckBox2Visible = await syaratKetentuanPage.checkbox2.waitForDisplayed({
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Tombol Checkbox tidak muncul dalam batas waktu yang ditentukan'
                });
                
                if (isCheckBox2Visible) {
                    await syaratKetentuanPage.clickCheckBox2();
                    const isCheckbox2Checked = await syaratKetentuanPage.checkbox2.getAttribute('checked');
                    // Verifikasi bahwa checkbox aktif (checked)
                    expect((isCheckbox2Checked === "false") ? false : (isCheckbox2Checked === "true") ? true : isCheckbox2Checked).toBe(true);
                }

                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollBackward(2)');

                // Langkah 2: Cek apakah checkbox S&K muncul
                const isCheckboxDisplayed = await syaratKetentuanPage.checkbox1.getAttribute('enabled'); 

                // Verifikasi bahwa checkbox tidak aktif (unchecked)
                expect((isCheckboxDisplayed === "false") ? false : (isCheckboxDisplayed === "true") ? true : isCheckboxDisplayed).toBe(false);

                const isCheckbox2Displayed = await syaratKetentuanPage.checkbox1.getAttribute('enabled'); 
    
                // Verifikasi bahwa checkbox tidak aktif (unchecked)
                expect((isCheckbox2Displayed === "false") ? false : (isCheckbox2Displayed === "true") ? true : isCheckbox2Displayed).toBe(false);

            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            //     console.error('Gagal memverifikasi checkbox dan button Lanjutkan:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat memverifikasi checkbox dan button Lanjutkan');
            // }
        });
    
        // Test Case 4: Navigasi Kehalaman Verifikasi Email
        it('should navigate to Verifikasi Email page from Syarat Ketentuan page', async () => {
            // try {
                await syaratKetentuanPage.syaratKetentuanScroll();

                // Langkah 1: centang Check Box
                const isCheckBoxChecked = await syaratKetentuanPage.checkbox1.getAttribute('checked');
                const isChecked = isCheckBoxChecked == "true"
                
                if (!isChecked) {
                    await syaratKetentuanPage.clickCheckBox1();
                    const isCheckboxChecked = await syaratKetentuanPage.checkbox1.getAttribute('checked');
                    // Verifikasi bahwa checkbox aktif (checked)
                    expect((isCheckboxChecked === "false") ? false : (isCheckboxChecked === "true") ? true : isCheckboxChecked).toBe(true);
                }

                const isCheckBox2Checked = await syaratKetentuanPage.checkbox2.getAttribute('checked');
                const isChecked2 = isCheckBox2Checked == "true"
                
                if (!isChecked2) {
                    await syaratKetentuanPage.clickCheckBox2();
                    const isCheckbox2Checked = await syaratKetentuanPage.checkbox2.getAttribute('checked');
                    // Verifikasi bahwa checkbox aktif (checked)
                    expect((isCheckbox2Checked === "false") ? false : (isCheckbox2Checked === "true") ? true : isCheckbox2Checked).toBe(true);
                }
    
                // Langkah 2: Click Lanjutkan
                await syaratKetentuanPage.lanjutkan.waitForDisplayed({
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Tombol Lanjutkan tidak muncul dalam batas waktu yang ditentukan'
                });

                const isLanjutButtonEnabled = await syaratKetentuanPage.lanjutkan.isEnabled(); 

                // Verifikasi bahwa tombol 'Lanjut' enabled
                expect(isLanjutButtonEnabled).toBe(true);

                if (isLanjutButtonEnabled) {
                    await syaratKetentuanPage.clickLanjutkan();
                }
    
                // Langkah 3: Verifikasi apakah elemen halaman Verifikasi Email muncul setelah klik Lanjutkan
                const isVerifikasiEmailVisible = await browser.waitUntil(async () => {
                    return await VerifikasiEmailPage.verifikasiEmail.isDisplayed();
                }, {
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Elemen Verifikasi Email tidak muncul dalam batas waktu yang ditentukan'
                });

                expect(isVerifikasiEmailVisible).toBe(true);  // Pastikan halaman Verifikasi Email terlihat
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengklik tombol Lanjutkan atau memverifikasi elemen halaman Verifikasi Email gagal, log error dan gagal uji
            //     console.error('Gagal mengklik tombol Lanjutkan atau halaman selanjutnya tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Lanjutkan atau halaman tidak muncul.');
            // }
        });
    });
};