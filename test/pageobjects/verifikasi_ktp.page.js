const DataDiriPage = require('./data_diri.page');
const fotoKTPPage = require('./foto_ktp.page');

class verifikasiKTPPage {
  get fotoKTPButton() {
    return $("~Foto KTP");
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

  get verifikasiKTP() {
    return $("~Verifikasi KTP");
  }

  async clickFotoKTP() {
    await this.fotoKTPButton.click();
    return fotoKTPPage;
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return DataDiriPage;
  }
}

module.exports = new verifikasiKTPPage();
