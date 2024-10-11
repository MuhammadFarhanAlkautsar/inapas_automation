const SplashPage = require('../pageobjects/splash.page');
const BantuanPage = require('../pageobjects/bantuan.page');

//export const BantuanPageTests = () => {
    describe('Bantuan Screen Testing', () => {

        // Test Case 1: Navigasi ke Pusat Bantuan
        it('1 - should navigate to Bantuan from splash screen', async () => {
            SplashPage.bantuanIcon.click();

            const isPusatBantuanVisible = await browser.waitUntil(async () => {
                return await BantuanPage.pusatBantuan.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Pusat Bantuan tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isPusatBantuanVisible).toBe(true);
        });
    
        // Test Case 3: Lanjutkan Proses Onboarding
        it('2 - should Navigate to Formuir Aduan', async () => {

            await BantuanPage.formulirAduan.click();

            await BantuanPage.formulirAduanScreen.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: `${BantuanPage.formulirAduanScreen.selector} not displayed in the expected time`
            });

            const isAduanVisible = await BantuanPage.formulirAduanScreen.isDisplayed();
            expect(isAduanVisible).toBe(true);

            await BantuanPage.tutupTab.click();
        });

        // Test Case 3: Lanjutkan Proses Onboarding
        it('3 - should Navigate to FAQ', async () => {
            
            await BantuanPage.FAQ.click();

            await BantuanPage.FAQScreen.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: `${BantuanPage.FAQScreen.selector} not displayed in the expected time`
            });

            const isFAQVisible = await BantuanPage.FAQScreen.isDisplayed();
            expect(isFAQVisible).toBe(true);

            await BantuanPage.tutupTab.click();
        });

        it('4 - should Navigate to Profile Linkedin INApas', async () => {
            
            await BantuanPage.linkedin.click();

            const linkedinScreen =  BantuanPage.UrlLink;

            const isLinkedinVisible = await browser.waitUntil(async () => {
                const link = await linkedinScreen.getText();
                return link === 'linkedin.com';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Link Linkedin tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isLinkedinVisible).toBe(true);

            const isINAdigitalLinkedin = await browser.waitUntil(async () => {
                return await BantuanPage.linkedinINAdigital.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman Linkedin INA Digital tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isINAdigitalLinkedin).toBe(true);

            await BantuanPage.tutupTab.click();
        });

        it('5 - should Navigate to Profile Facebook INApas', async () => {
            
            await BantuanPage.facebook.click();

            const isFacebookVisible = await browser.waitUntil(async () => {
                const link = await BantuanPage.UrlLink.getText();
                return link === 'm.facebook.com';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Link Facebook tidak muncul dalam batas waktu yang ditentukan'
            });
            
            expect(isFacebookVisible).toBe(true);

            const isFacebookINAdigital = await browser.waitUntil(async () => {
                return await BantuanPage.facebookScreen.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman facebook INA Digital tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isFacebookINAdigital).toBe(true);

            await BantuanPage.tutupTab.click();
        });

        it('6 - should Navigate to Profile Youtube INApas', async () => {
            
            await BantuanPage.youtube.click();

            const isYoutubeVisible = await browser.waitUntil(async () => {
                return await BantuanPage.youtubeScreen.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman Youtube tidak muncul dalam batas waktu yang ditentukan'
            });
            
            expect(isYoutubeVisible).toBe(true);

            const isYoutubeINAdigital = await browser.waitUntil(async () => {
                return await BantuanPage.youtubeINAdigital.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman facebook INA Digital tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isYoutubeINAdigital).toBe(true);

            await driver.back();
            await driver.pause(500); // Menunggu 500 ms (0.5 detik)
            await driver.back();
        });

        it('7 - should Navigate to Profile Twitter INApas', async () => {
            
            await BantuanPage.twitter.click();

            const twitterScreen =  BantuanPage.UrlLink;

            const istwitterVisible = await browser.waitUntil(async () => {
                const link = await twitterScreen.getText();
                return link === 'x.com';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Link Twitter tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(istwitterVisible).toBe(true);

            const isINAdigitalTwitter = await browser.waitUntil(async () => {
                return await BantuanPage.twitterScreen.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman Twitter tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isINAdigitalTwitter).toBe(true);

            await BantuanPage.tutupTab.click();
        });

        it('8 - should Navigate to Profile Browser INApas', async () => {
            
            await BantuanPage.browser.click();

            const BrowserScreen =  BantuanPage.UrlLink;

            const isBrowseVisible = await browser.waitUntil(async () => {
                const link = await BrowserScreen.getText();
                return link === 'inadigital.co.id';
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Elemen Link Browser tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isBrowseVisible).toBe(true);

            const isINAdigitalBrowser = await browser.waitUntil(async () => {
                return await BantuanPage.browserScreen.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman Browser INA Digital tidak muncul dalam batas waktu yang ditentukan'
            });
            expect(isINAdigitalBrowser).toBe(true);

            await BantuanPage.tutupTab.click();
        });

        it('9 - should navigation back to splash Screen from Pusat Bantuan Page', async () => {
            BantuanPage.kembaliButton.click();

            const isSplashVisible = await browser.waitUntil(async () => {
                return await SplashPage.bantuanIcon.isDisplayed();
            }, {
                timeout: 5000,  // Timeout maksimal, misalnya 20 detik
                timeoutMsg: 'Halaman Splash Screen tidak muncul dalam batas waktu yang ditentukan'
            });

            expect(isSplashVisible).toBe(true);

        });
    
    });
//};