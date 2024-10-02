const verifikasiWajahPage = require('./verifikasi_wajah.page');

class fotoKTPPage {
  get ambilFotoKTPButton() {
    return $("~Ambil Foto KTP");
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

  get fotoKTP() {
    return $("~Foto KTP");
  }

  async ambilFotoKTP() {
    await this.ambilFotoKTPButton.click();
    return verifikasiWajahPage;
  }

  async clickKembali() {
    await this.kembaliButton.click();
  }

  get validasifotoKTP() {
    return $("~Melakukan validasi KTP");
  }

  get verifikasiKTPBerhasil() {
    return $("~Verifikasi KTP Berhasil");
  }
  
}

module.exports = new fotoKTPPage();
