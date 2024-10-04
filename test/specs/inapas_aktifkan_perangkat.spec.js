import { SplashTests } from './aktifkan_perangkat_splash.spec.js';
import { AktifkanPerangkatTests } from './aktifkan_perangkat.spec.js';
import { VerifikasiWajahTests } from './aktifkan_perangkat_verifikasi_wajah.spec.js';
import { FotoWajahTests } from './aktifkan_perangkat_foto_wajah.spec.js';
import { AktifkanPerangkat_AksesPIN, AktifkanPerangkat_AksesOTP } from './aktifkan_perangkat_verifikasi_akses.spec.js';
import { VerifikasiPinTests } from './aktifkan_perangkat_pin.spec.js';
import { VerifikasiEmailTests } from './aktifkan_perangkat_email.spec.js';

// Jalankan semua test dari berbagai file
describe('INApas Aktifkan Perangkat Test via Akses PIN ', () => {
    SplashTests(); 
    AktifkanPerangkatTests();
    VerifikasiWajahTests();
    FotoWajahTests();
    AktifkanPerangkat_AksesPIN();
    VerifikasiPinTests();
});

describe('INApas Aktifkan Perangkat Test via Akses Email OTP ', () => {
    SplashTests(); 
    AktifkanPerangkatTests();
    VerifikasiWajahTests();
    FotoWajahTests();
    AktifkanPerangkat_AksesOTP();
    VerifikasiEmailTests();
});
