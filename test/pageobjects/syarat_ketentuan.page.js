const verifikasiEmailPage = require('./verifikasi_email.page');

class SyaratKetentuanPage {
  get lanjutkan() {
    return $("~Lanjut");
  }

  get kembaliButton() {
    return $("~Kembali");
  }

  get syaratKetentuan() {
    return $("~Syarat dan Ketentuan");
  }

  get kebijakanPrivasi() {
    return $("~kebijakan privasi dan perjanjian pelanggan ");
  }

  get kebijakanPrivasiScreen() {
    return $('android=new UiSelector().text("Kebijakan Privasi").instance(1)');
  }

  get checkbox1() {
    return $('android=new UiSelector().className("android.widget.CheckBox").instance(0)');
  }

  get checkbox2() {
    return $('android=new UiSelector().className("android.widget.CheckBox").instance(1)');
  }

  async clickLanjutkan() {
    await this.lanjutkan.click();
    return verifikasiEmailPage;
  }

  async clickKembali() {
    await this.kembaliButton.click();
  }

  async clickCheckBox1() {
    await this.checkbox1.click();
  }

  async clickCheckBox2() {
    await this.checkbox2.click();
  }

  async syaratKetentuanScroll() {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
  }
  } 

module.exports = new SyaratKetentuanPage();
