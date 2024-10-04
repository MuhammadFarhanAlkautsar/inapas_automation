const SplashPage = require('../pageobjects/splash.page');
const aktifkanPerangkatPage = require('..//pageobjects/aktifkan_perangkat.page');

export const AktifkanPerangkatTests = () => {
    describe('2 - Aktifkan Perangkat == Aktifkan Perangkat Page Testing', (version) => {

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
    });
};