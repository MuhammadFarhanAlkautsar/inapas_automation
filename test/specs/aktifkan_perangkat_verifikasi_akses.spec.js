const VerifikasiWajahPage = require('../pageobjects/verifikasi_wajah.page');
const fotoWajahPage = require('../pageobjects/foto_wajah.page');
const verifikasiAksesPage = require('../pageobjects/verifikasi_akses.page');
const verifikasiEmailPage = require('../pageobjects/verifikasi_email.page');
const AktifkanPinPage = require('../pageobjects/aktifkan_pin.page');

export const AktifkanPerangkat_AksesPIN = () => {
    describe('5 - Aktifkan Perangkat == Akses via PIN Testing', () => {

        // Test Case Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
        it('should navigate back to Verifikasi Wajah page from Verifikasi Akses page', async () => {
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
        });
    
        // Test Case Navigasi ke Halaman Verifikasi OTP
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

    });
};

export const AktifkanPerangkat_AksesOTP = () => {
    describe('5 - Aktifkan Perangkat == Akses via OTP Testing', () => {

        // Test Case Ambil Foto Wajah dan Masuk Halaman Syarat Ketentuan
        it('should navigate back to Verifikasi Wajah page from Verifikasi Akses page', async () => {
            
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
               
        });
    
        // Test Case Navigasi ke Halaman 
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

            await verifikasiAksesPage.EmailButton.click();

            const isVerifikasiEmailVisible = await browser.waitUntil(async () => {
                return await verifikasiEmailPage.verifikasiEmail.isDisplayed();
            }, {
                timeout: 20000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Verifikasi Email gagal tampil dalam batas waktu yang ditentukan'
            });

            // Langkah 4: Verifikasi bahwa halaman syarat dan ketentuan muncul
            expect(isVerifikasiEmailVisible).toBe(true);
        });

    });
};