const fotoWajahPage = require('./foto_wajah.page');
const splashPage = require('./splash.page');

class verifikasiWajahPage {
  get fotoWajahButton() {
    return $("~Foto Wajah");
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

  get verifikasiWajah() {
    return $("~Verifikasi Wajah");
  }

  async clickFotoWajah() {
    await this.fotoWajahButton.click();
    return fotoWajahPage;
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return splashPage;
  }
}

module.exports = new verifikasiWajahPage();
