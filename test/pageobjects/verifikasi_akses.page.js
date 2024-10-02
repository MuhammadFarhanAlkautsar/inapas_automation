class verifikasiAksesPage {
  get PINButton() {
    return $(
      "~PIN\nMasukkan 6 digit PIN INApas anda untuk verifikasi"
    );
  }

  get EmailButton() {
    return $(
      "~Email\nKode OTP akan dikirimkan ke alamat email"
    );
  }

  get kembaliButton() {
    return $("~Kembali");
  }

  get verifikasiAkses() {
    return $("~Verifikasi Akses Anda");
  }
}

module.exports = new verifikasiAksesPage();
