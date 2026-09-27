/**
 * MomentaX Landing Page JavaScript
 * Handles Bilingual Translation (ID / EN), Interactive Mobile Drawer, FAQ Accordion, and UX Enhancements
 */

(function () {
  'use strict';

  // Translation Dictionaries
  const translations = {
    id: {
      site: {
        title: 'MomentaX - Menjaga Momen, Merawat Kenangan | Aplikasi Pengingat Keluarga & Kalender Hijriyah',
        description: 'Aplikasi pengingat momen berharga keluarga, haul, milad, hari lahir, dan ulang tahun pernikahan dengan kalender Masehi & Hijriyah. 100% offline-first & aman dengan backup Google Drive.'
      },
      nav: {
        tagline: 'Merawat Kenangan',
        features: 'Fitur Unggulan',
        whyMomenta: 'Mengapa MomentaX',
        howItWorks: 'Cara Kerja',
        faq: 'Tanya Jawab',
        getApp: 'Unduh App'
      },
      hero: {
        badge: 'Aplikasi Pengingat Momen & Kalender Hijriyah',
        titleLine1: 'Menjaga Momen Berharga,',
        titleLine2: 'Merawat Setiap Kenangan.',
        description: 'MomentaX memudahkan Anda mencatat dan mengingat tanggal haul kerabat, milad, ulang tahun pernikahan, dan hari istimewa dengan dukungan Kalender Masehi & Hijriyah. Privasi terjaga, 100% offline-first, dan aman dicadangkan ke Google Drive pribadi.',
        gpAvailable: 'TERSEDIA DI',
        gpTitle: 'Google Play',
        ctaPrimary: 'Unduh di Google Play',
        ctaSecondary: 'Pelajari Fitur',
        trustHijri: 'Kalender Hijriyah & Masehi',
        trustOffline: 'Offline-First (SQLite)',
        trustDrive: 'Cadangan Google Drive'
      },
      appMock: {
        subtitle: 'Menjaga momen, merawat kenangan',
        searchPlaceholder: 'Cari momen, haul, milad...',
        tabAll: 'Semua',
        tabPriority: '⭐ Prioritas',
        tabHaul: 'Haul',
        tabMilad: 'Milad',
        card1Days: '2 Hari Lagi',
        card1Title: 'Haul Akbar Kakek H. Sulaiman',
        card2Days: '12 Hari Lagi',
        card2Title: 'Milad Bunda Tercinta',
        card3Days: 'Bulan Depan',
        card3Title: 'Ulang Tahun Pernikahan ke-10',
        fab: 'Catat Momen'
      },
      mockBubbles: {
        remindTitle: 'Pengingat Otomatis',
        remindSub: 'H-7, H-1 & Hari H',
        driveTitle: 'Sync Google Drive',
        driveSub: 'Data Tersimpan Aman'
      },
      campaign: {
        tag: 'KAMPANYE KELUARGA & KENANGAN',
        title: 'Mengapa Anda Membutuhkan MomentaX?',
        subtitle: 'Kalender biasa sering melupakan momen yang benar-benar bermakna. MomentaX dirancang khusus untuk merawat ikatan silaturahmi dan kenangan keluarga abadi.',
        ordinaryTitle: 'Aplikasi Kalender Umum',
        ord1: '❌ Hanya mendukung kalender Masehi standar.',
        ord2: '❌ Repot menghitung tanggal Haul atau Milad Hijriyah yang bergeser tiap tahun.',
        ord3: '❌ Data keluarga sering tersimpan di cloud pihak ketiga yang tidak jelas.',
        ord4: '❌ Tidak ada ruang untuk menyimpan foto kenangan berharga dan catatan emosional.',
        momentaxTitle: 'Keunggulan Spesial MomentaX',
        mom1: '✅ Dukungan Penuh Hijriyah & Masehi: Haul dan milad dihitung otomatis berulang setiap tahun Hijriyah.',
        mom2: '✅ 100% Privasi & Offline-First: Data disimpan di database SQLite lokal di ponsel Anda.',
        mom3: '✅ Buku Kenangan Pribadi: Simpan foto kenangan, catatan wasiat, atau cerita di setiap momen penting.',
        mom4: '✅ Cadangan ke Google Drive Anda: Anda memegang kendali penuh atas data cadangan tanpa biaya server pihak ketiga.'
      },
      features: {
        tag: 'FITUR LENGKAP',
        title: 'Semua yang Anda Butuhkan untuk Merawat Kenangan',
        subtitle: 'Didesain intuitif, ringan, dan sarat fitur penting bagi keluarga muslim dan masyarakat umum.',
        f1Title: 'Kalender Ganda (Masehi & Hijriyah)',
        f1Desc: 'Pilihan konversi tanggal Masehi dan Hijriyah secara akurat. Pengingat tahunan Hijriyah akan bergeser otomatis mengikuti perhitungan kalender Islam setiap tahunnya.',
        f2Title: 'Notifikasi & Pengingat Terjadwal',
        f2Desc: 'Dapatkan peringatan tepat waktu mulai dari 7 hari sebelum, 1 hari sebelum, hingga hari H sehingga Anda memiliki waktu cukup untuk mempersiapkan doa atau tasyakuran.',
        f3Title: 'Buku Kenangan & Arsip Foto',
        f3Desc: 'Bukan sekadar alarm angka. Lampirkan foto kenangan lama dan catatan cerita menyentuh hati di setiap momen agar kisah keluarga tetap abadi antar generasi.',
        f4Title: '100% Privasi & Offline-First',
        f4Desc: 'Data Anda adalah milik Anda. Seluruh catatan tersimpan di basis data lokal SQLite di ponsel tanpa ketergantungan kuota internet. Tidak ada pelacakan data pribadi.',
        f5Title: 'Cadangan Google Drive',
        f5Desc: 'Ganti HP tanpa khawatir kehilangan kenangan. Buat cadangan terenkripsi ke akun Google Drive pribadi Anda dengan satu sentuhan dan pulihkan kapan saja.',
        f6Title: 'Pengelompokan Relasi & Kategori',
        f6Desc: 'Kelola kategori acara (Haul, Ulang Tahun, Pernikahan, Peringatan) dan hubungan kekerabatan (Keluarga Inti, Kerabat, Sahabat) dengan label warna yang rapi.'
      },
      how: {
        tag: 'MUDAH & CEPAT',
        title: '3 Langkah Menjaga Momen Anda',
        s1Title: 'Pasang MomentaX',
        s1Desc: 'Unduh gratis langsung dari Google Play Store ke smartphone Android Anda.',
        s2Title: 'Catat Momen Keluarga',
        s2Desc: 'Masukkan tanggal (Masehi / Hijriyah), tentukan kategori, lampirkan foto dan catatan kenangan.',
        s3Title: 'Dapatkan Pengingat',
        s3Desc: 'Notifikasi cerdas akan mengingatkan Anda tepat waktu. Kenangan keluarga tersimpan abadi.'
      },
      faq: {
        tag: 'TANYA JAWAB',
        title: 'Pertanyaan yang Sering Diajukan',
        q1: 'Apakah MomentaX memerlukan koneksi internet untuk digunakan?',
        a1: 'Tidak sama sekali. MomentaX mengusung arsitektur offline-first dengan database SQLite lokal. Seluruh fitur pencatatan momen, kalender, dan notifikasi berjalan lancar tanpa kuota internet. Koneksi internet hanya dibutuhkan ketika Anda ingin mencadangkan data ke Google Drive.',
        q2: 'Bagaimana cara kerja pengingat tahunan Kalender Hijriyah?',
        a2: 'MomentaX memiliki algoritma konversi penanggalan Hijriyah bawaan. Ketika Anda menandai momen dengan kalender Hijriyah (misal: 10 Muharram atau 15 Ramadhan), sistem secara otomatis mengkalkulasi tanggal Masehi yang bersesuaian pada tahun berikutnya, sehingga pengingat akan selalu berbunyi tepat waktu.',
        q3: 'Apakah data saya aman dan tidak disalahgunakan?',
        a3: 'Keamanan privasi Anda adalah prioritas utama kami. MomentaX tidak mengumpulkan, menjual, atau menyimpan data keluarga Anda di server pihak ketiga. File cadangan Anda langsung tersimpan di akun Google Drive pribadi milik Anda sendiri.',
        q4: 'Apakah aplikasi MomentaX gratis?',
        a4: 'Ya! MomentaX dapat diunduh dan digunakan secara gratis di Google Play Store untuk perangkat Android.'
      },
      downloadBanner: {
        title: 'Mulai Rawat Kenangan Berharga Keluarga Anda Hari Ini',
        subtitle: 'Jangan biarkan momen penting terlewat begitu saja. Pasang MomentaX dan nikmati kemudahan mencatat haul, milad, dan hari bahagia.'
      },
      footer: {
        tagline: 'Menjaga momen, merawat kenangan keluarga di setiap langkah kehidupan.',
        navTitle: 'Navigasi',
        home: 'Beranda',
        legalTitle: 'Legalitas & Dukungan',
        privacyPolicy: 'Kebijakan Privasi',
        deleteAccount: 'Hapus Akun & Data',
        downloadTitle: 'Unduh',
        rights: 'Hak cipta dilindungi undang-undang.'
      }
    },
    en: {
      site: {
        title: 'MomentaX - Preserving Moments, Cherishing Memories | Family Milestone & Hijri Calendar App',
        description: 'Smart milestone and anniversary reminder for family memorials (Haul), birthdays, and wedding anniversaries with dual Gregorian & Hijri calendar. 100% offline-first & secure Google Drive backup.'
      },
      nav: {
        tagline: 'Cherishing Memories',
        features: 'Key Features',
        whyMomenta: 'Why MomentaX',
        howItWorks: 'How It Works',
        faq: 'FAQ',
        getApp: 'Get App'
      },
      hero: {
        badge: 'Milestone Reminder & Hijri Calendar App',
        titleLine1: 'Preserving Precious Moments,',
        titleLine2: 'Cherishing Every Memory.',
        description: 'MomentaX makes it simple to record and remember memorial dates (Haul), birthdays, anniversaries, and heartfelt family moments with dual Gregorian & Hijri calendar support. Privacy-first, 100% offline, and securely backed up to your personal Google Drive.',
        gpAvailable: 'GET IT ON',
        gpTitle: 'Google Play',
        ctaPrimary: 'Get it on Google Play',
        ctaSecondary: 'Explore Features',
        trustHijri: 'Gregorian & Hijri Calendar',
        trustOffline: 'Offline-First (SQLite)',
        trustDrive: 'Google Drive Backup'
      },
      appMock: {
        subtitle: 'Preserving moments, cherishing memories',
        searchPlaceholder: 'Search moments, haul, birthdays...',
        tabAll: 'All',
        tabPriority: '⭐ Priority',
        tabHaul: 'Memorial',
        tabMilad: 'Birthday',
        card1Days: '2 Days Away',
        card1Title: 'Grandpa H. Sulaiman Memorial (Haul)',
        card2Days: '12 Days Away',
        card2Title: 'Beloved Mother’s Birthday',
        card3Days: 'Next Month',
        card3Title: '10th Wedding Anniversary',
        fab: 'Add Moment'
      },
      mockBubbles: {
        remindTitle: 'Smart Reminders',
        remindSub: '7-days, 1-day & Day of',
        driveTitle: 'Sync Google Drive',
        driveSub: 'Data Kept Safe & Private'
      },
      campaign: {
        tag: 'FAMILY & MEMORIES CAMPAIGN',
        title: 'Why Do You Need MomentaX?',
        subtitle: 'Standard calendars overlook what truly matters. MomentaX is purpose-built to nurture family bonds and keep generational memories alive.',
        ordinaryTitle: 'Standard Calendar Apps',
        ord1: '❌ Only support Gregorian dates.',
        ord2: '❌ Tedious manual calculation for Hijri memorials (Haul) and birthdays shifting every year.',
        ord3: '❌ Family private data often exposed to unknown third-party clouds.',
        ord4: '❌ No dedicated space for cherished photos and emotional journals.',
        momentaxTitle: 'The MomentaX Advantage',
        mom1: '✅ Full Hijri & Gregorian Support: Haul and Islamic milestones recalculate automatically every lunar year.',
        mom2: '✅ 100% Private & Offline-First: All records reside in local SQLite storage on your phone.',
        mom3: '✅ Personal Keepsake Book: Attach sentimental pictures and heartfelt stories to every special moment.',
        mom4: '✅ Backed Up to YOUR Google Drive: You maintain complete ownership of your archives without external vendor lock-in.'
      },
      features: {
        tag: 'POWERFUL FEATURES',
        title: 'Everything You Need to Nurture Your Memories',
        subtitle: 'Intuitively crafted, ultra-lightweight, and packed with essential tools for Muslim families and anyone cherishing family milestones.',
        f1Title: 'Dual Calendar (Gregorian & Hijri)',
        f1Desc: 'Accurate conversion between Gregorian and Islamic Hijri calendars. Annual Hijri reminders adjust seamlessly according to lunar calculations each year.',
        f2Title: 'Smart & Scheduled Notifications',
        f2Desc: 'Timely reminders delivered 7 days prior, 1 day before, and on the exact day, ensuring plenty of time to prepare prayers, calls, or family gatherings.',
        f3Title: 'Memory Keepsake & Photo Archive',
        f3Desc: 'Far beyond a numbers alarm. Attach treasured photos and heartfelt journal notes to each milestone so family legacies stay alive across generations.',
        f4Title: '100% Privacy & Offline-First',
        f4Desc: 'Your data belongs exclusively to you. All entries are stored in a local SQLite database on your device with zero internet quota required. No data tracking.',
        f5Title: 'Seamless Google Drive Backup',
        f5Desc: 'Switch phones worry-free without losing precious memories. Create encrypted backups to your personal Google Drive with a single tap and restore anytime.',
        f6Title: 'Custom Relations & Categories',
        f6Desc: 'Organize event types (Memorial, Birthday, Anniversary, Milestones) and kinship relations (Immediate Family, Relatives, Close Friends) with custom color tags.'
      },
      how: {
        tag: 'SIMPLE & QUICK',
        title: '3 Simple Steps to Guard Your Moments',
        s1Title: 'Install MomentaX',
        s1Desc: 'Download free directly from the Google Play Store onto your Android smartphone.',
        s2Title: 'Record Family Milestones',
        s2Desc: 'Pick a date (Gregorian / Hijri), select a category, and attach sentimental photos or notes.',
        s3Title: 'Receive Timely Alerts',
        s3Desc: 'Smart reminders will notify you on time. Your family heritage remains preserved forever.'
      },
      faq: {
        tag: 'FAQ',
        title: 'Frequently Asked Questions',
        q1: 'Does MomentaX require an active internet connection?',
        a1: 'Not at all. MomentaX is designed offline-first using a local SQLite database. All milestone tracking, calendar views, and reminders work without cellular data. Internet is only required when performing a Google Drive backup.',
        q2: 'How does the annual Hijri calendar reminder work?',
        a2: 'MomentaX includes an astronomical Hijri conversion algorithm. When you save a milestone using the Hijri calendar (e.g., 10 Muharram or 15 Ramadan), the app automatically computes the corresponding Gregorian date each year, ensuring your notification sounds right on time.',
        q3: 'Is my family data secure and private?',
        a3: 'Your privacy is our utmost priority. MomentaX does not collect, sell, or host your family data on third-party servers. Your backup file is stored directly within your own private Google Drive account.',
        q4: 'Is MomentaX free to use?',
        a4: 'Yes! MomentaX is completely free to download and use on Android via the Google Play Store.'
      },
      downloadBanner: {
        title: 'Start Cherishing Your Family’s Precious Moments Today',
        subtitle: 'Don’t let meaningful milestones slip away. Install MomentaX and enjoy the peace of mind knowing your memories are safe and celebrated.'
      },
      footer: {
        tagline: 'Preserving moments, cherishing family memories through every chapter of life.',
        navTitle: 'Navigation',
        home: 'Home',
        legalTitle: 'Legal & Support',
        privacyPolicy: 'Privacy Policy',
        deleteAccount: 'Delete Account & Data',
        downloadTitle: 'Download',
        rights: 'All rights reserved.'
      }
    }
  };

  // Helper to safely get nested translation value
  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
  }

  // Update DOM with selected language
  function setLanguage(lang) {
    if (!translations[lang]) return;

    // Update document language & title/meta
    document.documentElement.lang = lang;
    if (translations[lang].site) {
      document.title = translations[lang].site.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', translations[lang].site.description);
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = getNestedTranslation(translations[lang], key);
      if (text !== null) {
        // If element has HTML tags or bold inside, handle accordingly
        if (typeof text === 'string' && (text.includes('<strong>') || text.includes('<br>') || text.includes('✅') || text.includes('❌'))) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update active state on language switcher buttons
    const btnId = document.getElementById('lang-btn-id');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnId && btnEn) {
      btnId.classList.toggle('active', lang === 'id');
      btnEn.classList.toggle('active', lang === 'en');
    }

    // Save preference to localStorage
    try {
      localStorage.setItem('momentax_lang', lang);
    } catch (e) {
      // localStorage might be unavailable in restricted environments
    }
  }

  // Determine initial language
  function getInitialLanguage() {
    try {
      const savedLang = localStorage.getItem('momentax_lang');
      if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
        return savedLang;
      }
    } catch (e) {}

    // Check navigator language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('id')) {
      return 'id';
    }
    return 'en';
  }

  // Initialize Language Switcher
  function initLanguageSwitcher() {
    const btnId = document.getElementById('lang-btn-id');
    const btnEn = document.getElementById('lang-btn-en');

    if (btnId) {
      btnId.addEventListener('click', () => setLanguage('id'));
    }
    if (btnEn) {
      btnEn.addEventListener('click', () => setLanguage('en'));
    }

    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
  }

  // Mobile Navigation Drawer Toggle
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-nav-drawer');

    if (!menuBtn || !drawer) return;

    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open', !isOpen);
      menuBtn.setAttribute('aria-expanded', !isOpen);
    });

    // Close drawer when a link is clicked
    const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ Accordion
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items (single accordion mode for sleekness)
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', !isActive);
      });
    });
  }

  // Footer Year
  function initFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Initialize everything on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initFAQ();
    initFooterYear();
  });
})();
