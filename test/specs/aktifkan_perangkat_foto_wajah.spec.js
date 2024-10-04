const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const verifikasiAksesPage = require('../pageobjects/verifikasi_akses.page');

export const FotoWajahTests = () => {
    describe('4 - Aktifkan Perangkat == Foto Wajah Testing', () => {

        // Test Case 11: Navigasi Kembali ke Halaman Splash
        it('1 - should navigate back to Verifikasi Wajah page from Foto Wajah page', async () => {
                await driver.pause(1000);
                // Langkah 1: Klik tombol Kembali di halaman Verifikasi KTP untuk memulai proses kembali ke halaman Splash
                await fotoWajahPage.clickKembali();
    
                // Langkah 2: Verifikasi apakah elemen halaman Verifikasi KTP muncul kembali setelah membatalkan navigasi
                const isVerifikasiWajahVisible = await VerifikasiWajahPage.verifikasiWajah.isDisplayed();
                expect(isVerifikasiWajahVisible).toBe(true);  // Pastikan halaman Verifikasi KTP tetap terlihat
        });

        // Test Case 12: Verifikasi Wajah dengan Wajah Tidak Sesuai (1-2 Kali)
        it('2 - should show error message when face does not match', async () => {
            console.log('Verifikasi Wajah dengan Wajah Tidak Sesuai');

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
        });

        // Test Case 14: Verifikasi Wajah dengan Foto yang Digerakkan (1-2 Kali)
        it('3 - should show error message when using a photo', async () => {
            console.log('Verifikasi Wajah - Foto yang Digerakkan');

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
        });
    
        // Test Case 17: Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
        it('4 - should take a face photo and navigate to Verifikasi Akses page', async () => {
    
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
    });
};