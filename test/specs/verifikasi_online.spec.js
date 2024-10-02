const VerifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const VerifikasiOnlinePage = require('../pageobjects/verifikasi_online.page');
const DataDiriPage = require('../pageobjects/data_diri.page');

export const verifikasiOnlineTests = () => {
    describe('Verifikasi Online Testing', () => {

        // Test Case 7: Navigasi Kembali ke Halaman Verifikasi Data Diri
        it('should navigate back to Verifikasi Data Diri page from Verifikasi Online page', async () => {
    
            // try {
                // Klik tombol Kembali di halaman Verifikasi Online
                await VerifikasiOnlinePage.clickKembali();
            
                // Verifikasi apakah elemen di halaman Verifikasi Data Diri muncul
                VerifikasiDataDiriPage.verifyElementVisibility(VerifikasiDataDiriPage.verifikasiDataDiri,true);
                // const isVerifikasiDataDiriVisible = await VerifikasiDataDiriPage.verifikasiDataDiri.isDisplayed();
                // expect(isVerifikasiDataDiriVisible).toBe(true);
                await driver.pause(500);
            
            // } catch (error) {
            //     // Jika terjadi kesalahan, tangkap error dan tampilkan pesan khusus
            //     console.error('Gagal mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul:', error);
            //     throw new Error('Pengujian gagal karena tidak dapat mengklik tombol Kembali atau halaman Verifikasi Data Diri tidak muncul.');
            // }        
        });
    
        // Test Case 8: Navigasi ke Halaman Form Input
        it('should navigate to Form Input page from Verifikasi Online page', async () => {
    
            // Klik tombol Verifikasi Online di halaman Verifikasi Data Diri
            await VerifikasiDataDiriPage.clickVerifikasiOnline();
    
            // Klik tombol Form Input di halaman Verifikasi Online
            await VerifikasiOnlinePage.clickFormInputButton();
            
            // Verifikasi apakah elemen di halaman Data Diri muncul
            VerifikasiDataDiriPage.verifyElementVisibility(DataDiriPage.dataDiri,true);
            // const isDataDiriVisible = await DataDiriPage.dataDiri.isDisplayed();
            // expect(isDataDiriVisible).toBe(true);
        });
    
    });
};