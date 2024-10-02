class DataDiriPage {
    // Mendapatkan elemen data Diri
    get dataDiri() {
        return $("~Data Diri");
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

    get buttonLanjutkan() {
      return $("~Lanjutkan");
    }
  
    get buttonBatal() {
      return $("~Batal");
    }

    // Mendapatkan elemen field NIK
    get nikField() {
      return $(`android=new UiSelector().className("android.widget.EditText").instance(0)`);
    }

    // Menggunakan `android=new UiSelector()` yang benar
    get namaField() {
      return $(`android=new UiSelector().className("android.widget.EditText").instance(1)`);
    }

    get emailField() {
      return $(`android=new UiSelector().className("android.widget.EditText").instance(2)`);
    }

    get phoneField() {
      return $(`android=new UiSelector().className("android.widget.EditText").instance(3)`);
    }

    // Mendapatkan elemen field Tanggal Lahir
    get tanggalLahirField() {
      return $("~Tanggal Lahir\n*");
    }
  
    // Mendapatkan elemen tombol untuk memilih tahun
    get pilihTahunButton() {
      return $("~Pilih tahun");
    }
  
    // Mendapatkan elemen field Tempat Lahir
    get tempatLahirField() {
      return $("//android.widget.ScrollView/android.widget.EditText[3]");
    }
  
    // Mendapatkan elemen dropdown untuk memilih jenis kelamin
    get jenisKelaminButton() {
      return $("~Pilih Jenis Kelamin");
    }
  
    // Mendapatkan elemen untuk memilih jenis kelamin "Laki-laki"
    get lakiLakiButton() {
      return $("~Laki-laki");
    }

    get perempuanButton() {
        return $("~Perempuan");
      }
  
    // Mendapatkan elemen tombol "Lanjut" untuk submit form
    get lanjutButton() {
      return $("~Lanjut");
    }
  
    // Mendapatkan elemen layar verifikasi KTP untuk memverifikasi apakah layar ini ditampilkan
    get verifikasiKTPScreen() {
      return $("~android:id/content");
    }

    // Mendapatkan elemen layar verifikasi KTP untuk memverifikasi apakah layar ini ditampilkan
    get failedScreen() {
        return $("~Terjadi kesalahan\nSorry, your details don't match. Please check and try again or contact Dukcapil for help.\nOK");
      }
    
    get validationNIK() {
      return $("~NIK must be exactly 16 characters");
    }

    get emptyErrorNIK() {
      return $("~Masukkan 16 digit NIK");
    }

    get emptyErrorNama() {
      return $("~Isi nama sesuai identitas");
    }

    get emptyErrorTanggalLahir() {
      return $("~Pilih tanggal lahir");
    }

    get error17YearsOld() {
      return $("~Anda harus berusia minimal 17 tahun");
    }

    get emptyErrorTempatLahir() {
      return $("~Place of birth is required");
    }

    get emptyErrorEmail() {
      return $("~Masukkan email valid");
    }

    get emptyErrorHp() {
      return $("~Isi nomor handphone aktif");
    }

    get emptyErrorHpMore14() {
      return $("~Nomor handphone tidak bisa lebih dari 14 digits");
    }

    get batalButton() {
      return $("~Batal");
    }

    get konfirmasiDataPopUp() {
      return $("~Konfirmasi Data");
    }

    get alreadyRegistered() {
      return $("~Terjadi kesalahan\nIdentity is already registered\nOK");
    }
  
    // Mengisi field NIK dengan nilai yang diberikan
    async fillNIK(nik) {
      await this.nikField.click();
      await this.nikField.setValue(nik);
      await driver.hideKeyboard();
    }
  
    // Mengisi field Nama dengan nilai yang diberikan dan menutup keyboard setelahnya
    async fillNama(nama) {
      await this.namaField.click();
      await this.namaField.setValue(nama);
      await driver.hideKeyboard();
    }
  
    // Mengisi field Tanggal Lahir dengan memilih tahun dan tanggal yang sesuai
    async fillTanggalLahir(tahun, tanggalDescription) {
      await this.tanggalLahirField.click();
      await this.pilihTahunButton.click();
      await $(
        `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${tahun}"))`
      ).click();
  
      let isElementFound = false;
      while (!isElementFound) {
        // Mengklik tombol untuk menggeser bulan sampai tanggal yang diinginkan ditemukan
        const element = await $(
          '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[2]'
        );
        await element.click();
  
        // Memeriksa apakah tanggal lahir yang diinginkan sudah muncul
        const TanggalLahir = $(`~${tanggalDescription}`);
        isElementFound = await TanggalLahir.isDisplayed();
  
        if (isElementFound) {
          // Mengklik tanggal lahir jika ditemukan
          await TanggalLahir.click();
        }
      }
  
      // Mengklik tombol "OKE" setelah memilih tanggal lahir
      await $("~OKE").click();
    }
  
    // Mengisi field Tempat Lahir dengan nilai yang diberikan dan menutup keyboard setelahnya
    async fillTempatLahir(tempat) {
      await this.tempatLahirField.click();
      await this.tempatLahirField.setValue(tempat);
      await driver.hideKeyboard();
    }
  
    // Memilih jenis kelamin
    async selectJenisKelamin(jenisKelamin) {
        await this.jenisKelaminButton.click();
        
        if (jenisKelamin.toLowerCase() === 'laki-laki') {
            await this.lakiLakiButton.click();
        } else if (jenisKelamin.toLowerCase() === 'perempuan') {
            await this.perempuanButton.click();
        } else {
            throw new Error(`Jenis kelamin "${jenisKelamin}" tidak valid. Harus "Laki-laki" atau "Perempuan".`);
        }
    }
    
    // Mengisi field Email dengan nilai yang diberikan dan menutup keyboard setelahnya
    async fillEmail(email) {
      await this.emailField.click();
      await this.emailField.setValue(email);
      await driver.hideKeyboard();
    }
  
    // Mengisi field Nomor Telepon dengan nilai yang diberikan dan menutup keyboard setelahnya
    async fillPhone(phone) {
      await this.phoneField.click();
      await this.phoneField.setValue(phone);
      await driver.hideKeyboard();
    }
  
    // Mengirimkan form dengan mengklik tombol "Lanjut"
    async submitForm() {
      await this.lanjutButton.click();
    }
  
    // Memverifikasi apakah layar verifikasi KTP telah ditampilkan
    async verifyKTPPageDisplayed() {
      return await this.verifikasiKTPScreen.isDisplayed();
    }

    // Memverifikasi apakah layar pesan gagal ditampilkan
    async failedPageDisplayed() {
        return await this.failedScreen.isDisplayed();
      }

    async clickKembali() {
    await this.kembaliButton.click();
    }
  }
  
  module.exports = new DataDiriPage();