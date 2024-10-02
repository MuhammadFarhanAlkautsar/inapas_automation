class aktifkanPerangkat {
  get lanjutButton() {
    return $(
      "~Lanjut"
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

  get aktifkanPerangkat() {
    return $("~Aktifkan Perangkat");
  }

  get fieldINAPASID() {
    return $("//android.widget.EditText");
  }

  get emptyErrorINAPASID() {
    return $("~INApas ID harus diisi");
  }

  get errorINAPASSIDNotFound() {
    return $("~Terjadi kesalahan\nAkun INApas Anda tidak ditemukan\nOK");
  }

  async setINAPASIDByVersion(version) {
    let value;

    // Menentukan nilai berdasarkan versi yang diberikan
    switch (version) {
        case 'dev':
            value = 'MF9AE5D7A0';  // Value untuk dev
            break;
        case 'stg':
            value = 'MF1IEDFAAE';  // Value untuk staging
            break;
        case 'beta':
            value = 'MF1IEDFAAE';  // Value untuk beta
            break;
        default:
            throw new Error(`Versi "${version}" tidak valid!`);
    }

    // Set nilai ke field INAPASID
    await this.fieldINAPASID.setValue(value);
    await driver.hideKeyboard();
    await this.lanjutButton.click();
}
}

module.exports = new aktifkanPerangkat();
