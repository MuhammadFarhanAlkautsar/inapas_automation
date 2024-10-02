const verifikasiOnlinePage = require('./verifikasi_online.page');
const SplashPage = require('./splash.page');

class verifikasiDataDiriPage {
  get verifikasiOnlineButton() {
    return $(
      "~Verifikasi Online\nDilakukan secara online menggunakan foto biometrik wajah."
    );
  }

  get kembaliButton() {
    return $("~Kembali");
  }

  get popUpKeluar() {
    return $("~Keluar dari halaman ?\nApakah Anda yakin untuk keluar dari halaman ini?");
  }

  get buttonKeluar() {
    return $("~Keluar");
  }

  get buttonBatal() {
    return $("~Batal");
  }

  get verifikasiDataDiri() {
    return $("~Verifikasi Data Diri");
  }

  async clickVerifikasiOnline() {
    await this.verifikasiOnlineButton.click();
    return verifikasiOnlinePage;
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return SplashPage;
  }

  async waitForElementToBeDisplayed(element, timeout) {
    await element.waitForDisplayed({
        timeout: timeout,
        timeoutMsg: `${element.selector} not displayed in the expected time`
    });
  }

  async verifyElementVisibility(element, expectedVisibility = true) {
    const isElementVisible = await element.isDisplayed();
    expect(isElementVisible).toBe(expectedVisibility);
  }
}

module.exports = new verifikasiDataDiriPage();
