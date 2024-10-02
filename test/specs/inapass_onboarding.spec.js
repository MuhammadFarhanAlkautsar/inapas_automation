import { SplashPageTests } from '../specs/splash.spec.js';
import { verifikasiDataDiriTests } from '../specs/verifikasi_data_diri.spec.js';
import { verifikasiOnlineTests } from '../specs/verifikasi_online.spec.js';
import { formDataDiriTests } from '../specs/data_diri.spec.js';
import { verifikasiWajahTests } from '../specs/verifikasi_wajah.spec.js';
import { fotoWajahTests } from '../specs/foto_wajah.spec.js';
import { syaratKetentuanTests } from '../specs/syarat_ketentuan.spec.js';
import { verifikasiEmailTests } from '../specs/verifikasi_email.spec.js';
import { AktifkanPINTests } from '../specs/aktifkan_pin.spec.js';

// Jalankan semua test dari berbagai file
describe('INAPAS Onboarding Test', () => {
    SplashPageTests();
    verifikasiDataDiriTests();
    verifikasiOnlineTests();
    formDataDiriTests();
    verifikasiWajahTests();
    fotoWajahTests();
    syaratKetentuanTests();
    verifikasiEmailTests();
    AktifkanPINTests();
});
