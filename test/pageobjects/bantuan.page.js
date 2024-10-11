class BantuanPage {
    get pusatBantuan() {
        return $("~Pusat Bantuan");
    }

    get tutupTab() {
        return $("~Tutup tab");
    }

    get kembaliButton() {
        return $("~Kembali");
    }

    get formulirAduan() {
        return $("~Formulir Aduan\nKirimkan kendala Anda melalui Formulir Aduan ke INApas Support.");
    }

    get formulirAduanScreen() {
        return $('//android.widget.TextView[@text="Formulir Pelaporan Masalah INApas"]');
    }

    get FAQ() {
        return $("~FAQ\nTemukan jawaban dari berbagai pertanyaan Anda seputar INApas.");
    }

    get FAQScreen() {
        return $('//android.widget.TextView[@text="Pertanyaan yang Sering Diajukan (FAQ)"]');
    }

    get hapusAkun() {
        return $("~Hapus Akun INApas\nDengan menghapus akun, Anda akan kehilangan akses ke seluruh layanan INApas.");
    }

    get linkedin() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[4]');
    }

    get UrlLink() {
        return $('//android.widget.TextView[@resource-id="com.android.chrome:id/url_bar"]');
    }

    get linkedinINAdigital() {
        return $('//android.webkit.WebView[@text="INA DIGITAL | LinkedIn"]');
    }

    get facebook() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[5]');
    }

    get facebookScreen() {
        return $('//android.view.View[@text="Lihat lebih banyak dari INA DIGITAL"]');
    }

    get youtube() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[6]');
    }

    get youtubeScreen() {
        return $('//android.view.ViewGroup[@resource-id="com.google.android.youtube:id/navigation_bar_divider_frame"]');
    }

    get youtubeINAdigital() {
        return $('~Subscribe ke INA Digital.');
    }

    get twitter() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[7]');
    }

    get twitterScreen() {
        return $('//android.webkit.WebView[@text="Masuk ke X / X"]');
    }

    get browser() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[8]');
    }

    get browserScreen() {
        return $('//android.webkit.WebView[@text="INA DIGITAL"]');
    }
}
  
module.exports = new BantuanPage();