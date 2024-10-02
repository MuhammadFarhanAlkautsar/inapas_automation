const DataDiriPage = require('./data_diri.page');
const verifikasiDataDiriPage = require('./verifikasi_data_diri.page');

class verifikasiOnlinePage {
  get formInputButton() {
    return $(
      "~Form Input\nLakukan pengisian data secara manual untuk diverifikasi."
    );
  }

  get kembaliButton() {
    return $("~Kembali");
  }

  get verifikasiOnline() {
    return $("~Verifikasi Online");
  }

  async clickFormInputButton() {
    await this.formInputButton.click();
    return DataDiriPage;
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return verifikasiDataDiriPage;
  }
}

module.exports = new verifikasiOnlinePage();
