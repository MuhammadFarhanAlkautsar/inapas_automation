const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const syaratKetentuanPage = require('../pageobjects/syarat_ketentuan.page');

export const fotoWajahTests = () => {
    describe('Foto Wajah Testing', () => {

        // Test Case 25: Navigasi Kembali ke Halaman Splash
        it('should navigate back to Verifikasi Wajah page from Foto Wajah page', async () => {
            // try {
                await driver.pause(3000);
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

        // Test Case 26: Verifikasi Wajah dengan Wajah Tidak Sesuai (1-2 Kali)
        it('should show error message when face does not match (attempt 1)', async () => {
            console.log('Verifikasi Wajah dengan Wajah Tidak Sesuai (1-2 Kali) --- Attempt 1');

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

        it('should show error message when face does not match (attempt 2)', async () => {
            console.log('Verifikasi Wajah dengan Wajah Tidak Sesuai (1-2 Kali) --- Attempt 2');

            // try {
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
                const verifikasiWajahGagalDisplayed = await browser.waitUntil(async () => {
                    return await fotoWajahPage.verifikasiWajahGagal.isDisplayed();
                }, {
                    timeout: 20000, // Timeout maksimal, misalnya 10 detik
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

        // Test Case 26: Verifikasi Wajah dengan Wajah Tidak Sesuai 3 kali
        it('should show error message when face does not match (attempt 3)', async () => {
            console.log('Verifikasi Wajah dengan Wajah Tidak Sesuai --- Attempt 3');

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

        // Test Case 27: Verifikasi Wajah dengan Foto yang Digerakkan (1-2 Kali)
        it('should show error message when using a photo (attempt 1)', async () => {
            console.log('Verifikasi Wajah - Foto yang Digerakkan 1-2 Kali --- Attempt 1');

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

        it('should show error message when using a photo (attempt 2)', async () => {
            console.log('Verifikasi Wajah - Foto yang Digerakkan 1-2 Kali --- Attempt 2');

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
    
        // Test Case 26: Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
        it('should take a face photo and navigate to the Terms and Conditions page', async () => {
    
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
                const isSyaratKetentuanVisible = await browser.waitUntil(async () => {
                    return await syaratKetentuanPage.syaratKetentuan.isDisplayed();
                }, {
                    timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                    timeoutMsg: 'Validasi foto wajah gagal dalam batas waktu yang ditentukan'
                });
    
                // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
                expect(isSyaratKetentuanVisible).toBe(true);
                
            // } catch (error) {
            //     // Jika terjadi kesalahan saat mengambil foto wajah atau navigasi, log error dan gagal uji
            //     console.error('Gagal mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengambil foto wajah atau halaman Syarat dan Ketentuan tidak muncul.');
            // }
        });
    
    });
};