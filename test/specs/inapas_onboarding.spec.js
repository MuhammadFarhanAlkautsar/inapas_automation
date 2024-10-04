import { SplashPageTests } from './splash.spec.js';
import { verifikasiDataDiriTests } from './verifikasi_data_diri.spec.js';
import { verifikasiOnlineTests } from './verifikasi_online.spec.js';
import { formDataDiriTests } from './data_diri.spec.js';
import { verifikasiWajahTests } from './verifikasi_wajah.spec.js';
import { fotoWajahTests } from './foto_wajah.spec.js';
import { syaratKetentuanTests } from './syarat_ketentuan.spec.js';
import { verifikasiEmailTests } from './verifikasi_email.spec.js';
import { AktifkanPINTests } from './aktifkan_pin.spec.js';

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
