class VerifikasiEmailPage {

    get lanjutkanButton() {
        return $("~Lanjutkan");
    }

    get verifikasiEmail() {
        return $("~Verifikasi Alamat Email");
    }

    get kirimOTP() {
        return $("~Kirim Ulang Kode OTP");
    }

    get timerElement() {
        return $('~Belum menerima kode? Kirim ulang dalam 00:00');
    }

    get inputOTP() {
        return $('//android.widget.EditText');
    }

    get gagalVerifikasi() {
        return $('~Terjadi kesalahan\nMohon coba lagi\nOK');
    }

    // Fungsi untuk klik tombol Lanjutkan
    async clickLanjutkan() {
        await this.lanjutkanButton.click();
    }

    async kirimUlangOTP() {
        await this.kirimOTP.click();
    }

    async isResendButtonEnabled() {
        return await this.kirimOTP.isEnabled();
    }
}

module.exports = new VerifikasiEmailPage();
