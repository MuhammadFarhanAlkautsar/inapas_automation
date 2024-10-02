const verifikasiWajahPage = require('./verifikasi_wajah.page');

class fotoWajahPage {

  get kembaliButton() {
    return $('//android.widget.Button');
  }

  get hadapkanWajah() {
    return $('//android.widget.TextView[@text="Hadapkan wajah ke kamera"]');
  }

  get fotoWajah() {
    return $('android=new UiSelector().className("android.view.ViewGroup")');
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return verifikasiWajahPage;
  }

  get verifikasiWajahBerhasil() {
    return $("~Verifikasi Wajah Berhasil\nMohon menunggu untuk masuk ke proses selanjutnya.");
  }

  get verifikasiWajahGagal() {
    return $("~Terjadi kesalahan\nSorry, your details don't match. Please check and try again or contact Dukcapil for help.\nOK");
  }

  get livenessGagal() {
    return $("~Terjadi kesalahan\nPengecekan liveness tidak berhasil, wajah tidak terdeteksi dengan baik\nOK");
  }
  
}

module.exports = new fotoWajahPage();
