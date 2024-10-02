class AktifkanPinPage {

    get kembali() {
        return $("~Kembali");
    }

    get aktifkanPin() {
        return $("~Aktifkan PIN INApas");
    }

    get buatPin() {
        return $("~Buat PIN INApas");
    }

    get pinLama() {
        return $("~Masukkan PIN lama anda");
    }

    get pinBaru() {
        return $("~Masukkan PIN baru anda");
    }

    get verifPinBaru() {
        return $("~Masukkan kembali PIN baru anda");
    }

    get konfirmasiPin() {
        return $("~Konfirmasi PIN INApas");
    }

    get VerifikasiPin() {
        return $("~Verifikasi PIN INApas");
    }

    get tampilkanPin() {
        return $("~Tampilkan PIN");
    }

    get sembunyikanPin() {
        return $("~Sembunyikan PIN");
    }

    get authenticationRequired() {
        return $('//android.widget.TextView[@resource-id="com.android.systemui:id/title"]');
    }

    get konfirmasiSidikJari() {
        return $('//android.widget.TextView[@resource-id="com.android.systemui:id/description"]');
    }

    get verifikasiBerhasil() {
        return $('~Proses Verifikasi Berhasil');
    }

    get pinBerhasilDiubah() {
        return $('~PIN Berhasil Diubah');
    }

    get Beranda() {
        return $('~Halo, MUHAMMAD FARHAN ALKAUTSAR!');
    }

    get masukKeBeranda() {
        return $('~Masuk ke Beranda');
    }

    get kembaliKeBeranda() {
        return $('~Kembali ke Beranda');
    }

    get inputPin() {
        return $("//android.widget.EditText");
    }

    get digitPinDisembunyikan() {
        return $('//android.widget.EditText[@text="•••••"]');
    }

    get digitPinDitampilkan() {
        return $('//android.widget.EditText[@text="12345"]');
    }

    get pinTidakMatch() {
        return $('~Terjadi kesalahan\nPIN yang dimasukkan harus cocok.\nOK');
    }

    get pinSalah() {
        return $('~Terjadi kesalahan\nStatus: 012\nMessage: Data not found\nOK');
    }
}

module.exports = new AktifkanPinPage();
