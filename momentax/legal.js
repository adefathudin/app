/**
 * MomentaX Legal Pages JavaScript (Privacy Policy & Account Deletion)
 * Handles Bilingual Translation (ID / EN) and smooth UI interactions
 */

(function () {
  'use strict';

  const legalTranslations = {
    id: {
      nav: {
        tagline: 'Merawat Kenangan',
        faq: 'Tanya Jawab'
      },
      legal: {
        backHome: 'Kembali ke Beranda'
      },
      privacy: {
        tag: 'KEBIJAKAN PRIVASI',
        title: 'Kebijakan Privasi MomentaX',
        lastUpdated: 'Terakhir diperbarui: 23 September 2026',
        highlightTitle: 'Komitmen Privasi Utama Kami:',
        highlightDesc: 'MomentaX dirancang dengan filosofi <strong>Offline-First & Data Privasi Mutlak</strong>. Seluruh data kenangan, catatan keluarga, dan foto Anda disimpan di perangkat lokal (SQLite) Anda sendiri. Kami tidak menjual data Anda kepada pihak ketiga mana pun.',
        s1Title: '1. Pendahuluan',
        s1Text: 'Kebijakan Privasi ini menjelaskan bagaimana aplikasi <strong>MomentaX</strong> (dikembangkan oleh Ade Fathudin, selanjutnya disebut "Pengembang", "kami", atau "aplikasi") mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan aplikasi mobile MomentaX di platform Android.',
        s2Title: '2. Informasi yang Kami Kumpulkan',
        s2P1: 'MomentaX membatasi pengumpulan data hanya pada hal-hal yang benar-benar esensial untuk fungsi pengingat momen keluarga:',
        s2Item1Title: 'Data Momen & Kenangan:',
        s2Item1Desc: 'Judul momen (haul, milad, ulang tahun), tanggal penanggalan (Masehi atau Hijriyah), kategori, relasi keluarga, dan catatan teks kenangan. Data ini disimpan secara lokal di basis data SQLite pada perangkat Anda.',
        s2Item2Title: 'Informasi Akun (Opsional):',
        s2Item2Desc: 'Jika Anda masuk menggunakan Akun Google (Google Sign-In), kami menerima ID Pengguna (UID), nama tampilan, dan alamat email Anda dari Firebase Authentication untuk autentikasi dan sinkronisasi antar perangkat. Anda juga dapat menggunakan aplikasi secara anonim (Mode Tamu) tanpa akun.',
        s2Item3Title: 'Cadangan Cloud (Google Drive):',
        s2Item3Desc: 'Jika Anda mengaktifkan pencadangan Google Drive, file cadangan disimpan secara eksklusif di folder aplikasi khusus (appDataFolder) milik akun Google Drive Anda sendiri. Kami tidak memiliki akses ke berkas Google Drive lain milik Anda.',
        s2Item4Title: 'Data Pembelian (RevenueCat):',
        s2Item4Desc: 'Jika Anda berlangganan fitur Pro/Premium, data status langganan dikelola melalui Google Play Billing dan RevenueCat tanpa menyimpan data kartu kredit atau rincian finansial di server kami.',
        s3Title: '3. Izin Akses Perangkat (Device Permissions)',
        s3Intro: 'Untuk menjalankan fitur-fitur penting, MomentaX meminta izin perangkat berikut:',
        s3Perm1Title: 'Akses Galeri & Foto (READ_MEDIA_IMAGES):',
        s3Perm1Desc: 'Digunakan hanya saat Anda memilih untuk menyematkan foto kenangan pada sebuah momen. Foto tetap berada di perangkat lokal Anda.',
        s3Perm2Title: 'Kamera (CAMERA):',
        s3Perm2Desc: 'Digunakan ketika Anda mengambil foto kenangan baru secara langsung melalui aplikasi.',
        s3Perm3Title: 'Notifikasi (POST_NOTIFICATIONS):',
        s3Perm3Desc: 'Digunakan untuk mengirimkan pengingat jadwal haul, milad, atau ulang tahun tepat waktu (H-7, H-1, Hari H).',
        s4Title: '4. Layanan Pihak Ketiga (Third-Party Services)',
        s4Intro: 'Aplikasi kami menggunakan beberapa layanan pihak ketiga terpercaya yang tunduk pada kebijakan privasi masing-masing:',
        s5Title: '5. Keamanan & Retensi Data',
        s5Text: 'Kami menerapkan standar keamanan terbaik untuk melindungi data Anda. Data lokal terlindungi oleh sistem sandbox Android. Komunikasi data yang melibatkan autentikasi dan pencadangan menggunakan protokol enkripsi standar industri (HTTPS/TLS).',
        s6Title: '6. Hak Pengguna & Penghapusan Akun',
        s6Text: 'Anda berhak penuh untuk melihat, mengubah, mencadangkan, atau menghapus seluruh data Anda kapan saja. Anda dapat menghapus akun dan seluruh data terkait secara instan langsung di dalam aplikasi melalui menu <em>Pengaturan > Akun > Hapus Akun</em>, atau melalui panduan di halaman <a href="delete-account.html">Penghapusan Akun MomentaX</a>.',
        s7Title: '7. Privasi Anak-Anak',
        s7Text: 'MomentaX tidak ditujukan secara langsung untuk anak-anak di bawah usia 13 tahun, dan kami tidak secara sadar mengumpulkan data pribadi yang dapat mengidentifikasi anak-anak. Jika orang tua atau wali mengetahui adanya data yang dikumpulkan tanpa persetujuan, silakan hubungi kami untuk segera dihapus.',
        s8Title: '8. Hubungi Kami',
        s8Text: 'Jika Anda memiliki pertanyaan, saran, atau permintaan terkait Kebijakan Privasi ini, silakan hubungi pengembang melalui:'
      },
      delete: {
        tag: 'PANDUAN PENGHAPUSAN DATA',
        title: 'Permohonan Penghapusan Akun & Data MomentaX',
        warningTitle: 'Pemberitahuan Penting:',
        warningDesc: 'Penghapusan akun bersifat permanen dan tidak dapat dibatalkan. Seluruh data momen, tanggal haul, milad, catatan kenangan, serta arsip foto yang tersinkronisasi akan dihapus dari server kami.',
        opt1Title: 'Cara 1: Hapus Akun Langsung dari Aplikasi (Instan & Mandiri)',
        opt1Desc: 'Cara tercepat dan termudah untuk menghapus akun adalah langsung dari menu pengaturan di dalam aplikasi MomentaX pada smartphone Anda:',
        s1Title: 'Buka MomentaX',
        s1Desc: 'Buka aplikasi MomentaX di perangkat Android Anda.',
        s2Title: 'Masuk ke Menu Profil',
        s2Desc: 'Ketuk ikon menu di pojok kanan atas, lalu pilih <strong>Akun / Profil</strong>.',
        s3Title: 'Pilih "Hapus Akun"',
        s3Desc: 'Gulir ke bagian bawah halaman dan ketuk tombol berwarna merah <strong>"Hapus Akun & Data"</strong>.',
        s4Title: 'Konfirmasi Penghapusan',
        s4Desc: 'Aplikasi akan meminta konfirmasi akhir. Setelah dikonfirmasi, profil Firebase Auth, data cloud Firestore, dan basis data SQLite lokal Anda akan langsung dihapus saat itu juga.',
        opt2Title: 'Cara 2: Menghapus Cadangan dari Google Drive Pribadi',
        opt2Desc: 'Jika Anda pernah menggunakan fitur Cadangan Google Drive, file cadangan disimpan di ruang tersembunyi (AppData) milik akun Google Anda sendiri. Anda dapat menghapusnya kapan saja:',
        driveStep1: 'Buka <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Google Drive</a> di komputer atau browser Anda.',
        driveStep2: 'Klik ikon <strong>Setelan (Roda Gigi)</strong> di pojok kanan atas > pilih <strong>Setelan</strong>.',
        driveStep3: 'Pilih tab <strong>Kelola Aplikasi</strong> di panel sebelah kiri.',
        driveStep4: 'Cari aplikasi <strong>MomentaX</strong>, klik tombol <strong>Opsi</strong> di sebelahnya, lalu pilih <strong>"Hapus data aplikasi tersembunyi"</strong> atau <strong>"Putuskan sambungan dari Drive"</strong>.',
        opt3Title: 'Cara 3: Permohonan Penghapusan melalui Web / Email',
        opt3Desc: 'Jika Anda sudah menghapus aplikasi dari ponsel atau kehilangan akses ke perangkat, Anda dapat mengajukan permohonan penghapusan akun tertulis kepada kami. Kami akan memproses penghapusan akun Anda maksimal dalam <strong>7 hari kerja</strong>.',
        emailReqTitle: 'Format Permohonan Penghapusan via Email:',
        emailSubjectLabel: 'Subjek:',
        emailSubjectValue: 'Permohonan Penghapusan Akun & Data MomentaX',
        emailContentLabel: 'Isi Email:',
        templateLine1: 'Halo Tim Pengembang MomentaX,',
        templateLine2: 'Saya meminta agar seluruh data akun dan rekaman saya di aplikasi MomentaX dihapus secara permanen.',
        templateLine3: '- Alamat Email Akun Google Terdaftar: [tuliskan email Anda]',
        templateLine4: '- Nama Tampilan: [nama akun Anda]',
        templateLine5: 'Terima kasih.',
        btnSendEmail: 'Kirim Email Permohonan',
        dataPolicyTitle: 'Rincian Data yang Dihapus dan Disimpan',
        thType: 'Tipe Data',
        thStatus: 'Status Setelah Penghapusan',
        thRetention: 'Masa Retensi',
        td1Type: 'Data Momen & Kenangan (Firestore & SQLite)',
        td1Status: 'Dihapus Permanen',
        td1Ret: '0 hari (Seketika)',
        td2Type: 'Profil Akun & Kredensial Firebase',
        td2Status: 'Dihapus Permanen',
        td2Ret: '0 hari (Seketika)',
        td3Type: 'Cadangan Google Drive AppData',
        td3Status: 'Dikelola Pengguna / Terhapus atas Permintaan',
        td3Ret: 'Tergantung Pengguna',
        td4Type: 'Catatan Transaksi Google Play',
        td4Status: 'Disimpan Google Play (Kepatuhan Pajak & Hukum)',
        td4Ret: 'Sesuai Kebijakan Google Play'
      },
      terms: {
        tag: 'PERSYARATAN LAYANAN & STATUS PEDAGANG',
        title: 'Persyaratan Layanan MomentaX',
        lastUpdated: 'Terakhir diperbarui: 6 November 2026',
        highlightTitle: 'Deklarasi Status Pedagang (Trader Status Declaration):',
        highlightDesc: 'Halaman ini memuat Persyaratan Layanan resmi sekaligus pemenuhan kewajiban transparansi <strong>Status Pedagang (Trader)</strong> di Google Play Store sesuai ketentuan <em>EU Digital Services Act (DSA)</em> dan regulasi perlindungan konsumen. Penyedia bertindak sebagai pedagang perorangan terdaftar.',
        s1Title: '1. Identitas Penyedia Layanan & Deklarasi Pedagang (Trader Information)',
        s1P1: 'Aplikasi mobile <strong>MomentaX</strong> (Package ID: <code>com.adefathudin.momentax</code>) dikembangkan, dioperasikan, dan didistribusikan oleh:',
        s1P2: 'Sesuai dengan Pasal 24 ayat (2) dan Pasal 30 Peraturan Layanan Digital Uni Eropa (EU Digital Services Act - DSA), pengembang mengonfirmasi bahwa ia berstatus sebagai <strong>Pedagang (Trader)</strong> dalam menawarkan aplikasi, konten digital, dan fitur opsional kepada konsumen di Google Play Store.',
        s2Title: '2. Penerimaan Persyaratan (Acceptance of Terms)',
        s2Text: 'Dengan mengunduh, memasang, mengakses, atau menggunakan aplikasi MomentaX, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Persyaratan Layanan ini serta <a href="privacy-policy.html">Kebijakan Privasi</a> kami. Jika Anda tidak menyetujui ketentuan ini, Anda dipersilakan untuk tidak menggunakan atau menghapus aplikasi MomentaX dari perangkat Anda.',
        s3Title: '3. Ruang Lingkup & Deskripsi Layanan',
        s3Intro: 'MomentaX adalah aplikasi produktivitas dan pengingat momen keluarga berbasis Android yang menyediakan fungsionalitas:',
        s3Item1Title: 'Pencatatan Momen & Peringatan:',
        s3Item1Desc: 'Mencatat tanggal penting (haul, milad, hari lahir, ulang tahun, hari peringatan keluarga) dalam kalender Masehi maupun Hijriyah.',
        s3Item2Title: 'Penyimpanan Lokal (Offline-First):',
        s3Item2Desc: 'Seluruh basis data kenangan dan foto disimpan secara primer di perangkat lokal pengguna (SQLite lokal) untuk privasi maksimal.',
        s3Item3Title: 'Sinkronisasi & Cadangan Opsional:',
        s3Item3Desc: 'Dukungan masuk dengan Akun Google (Google Sign-In) dan pencadangan terenkripsi ke Google Drive AppData milik pengguna sendiri.',
        s3Item4Title: 'Fitur Berbayar / Pro (Opsional):',
        s3Item4Desc: 'Fitur tambahan tanpa iklan, tema eksklusif, atau opsi lanjutan yang disediakan melalui pembelian dalam aplikasi (In-App Purchase).',
        s4Title: '4. Lisensi Penggunaan & Hak Kekayaan Intelektual',
        s4P1: 'Pengembang memberikan kepada Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat dibatalkan untuk mengunduh dan menggunakan aplikasi MomentaX semata-mata untuk keperluan pribadi dan non-komersial Anda sesuai dengan ketentuan ini.',
        s4P2: '<strong>Kepemilikan Aplikasi:</strong> Seluruh kode sumber, desain antarmuka grafis, ikon, logo, teks, dan merek dagang MomentaX adalah hak milik intelektual eksklusif Ade Fathudin dan dilindungi oleh undang-undang hak cipta yang berlaku.',
        s4P3: '<strong>Hak atas Konten Pengguna:</strong> Anda memegang kepemilikan penuh dan hak cipta atas seluruh foto, nama, catatan kenangan, dan data keluarga yang Anda masukkan ke dalam MomentaX. Kami tidak mengklaim kepemilikan dan tidak menjual konten Anda.',
        s5Title: '5. Pembelian Dalam Aplikasi & Langganan (In-App Purchases)',
        s5P1: 'MomentaX dapat diunduh secara gratis. Beberapa fitur premium ("MomentaX Pro") dapat ditawarkan melalui pembelian satu kali atau langganan berkala:',
        s5Item1Title: 'Pemrosesan Pembayaran Resmi:',
        s5Item1Desc: 'Semua transaksi keuangan diproses langsung oleh sistem penagihan resmi Google Play (Google Play Billing). Kami tidak pernah mengumpulkan atau menyimpan nomor kartu kredit atau detail pembayaran Anda.',
        s5Item2Title: 'Transparansi Harga:',
        s5Item2Desc: 'Harga, mata uang, dan periode penagihan langganan ditampilkan dengan jelas di Google Play Store sebelum Anda mengonfirmasi pembelian. Harga sudah mencakup pajak yang berlaku sesuai yurisdiksi Anda.',
        s5Item3Title: 'Pembatalan Langganan:',
        s5Item3Desc: 'Anda dapat membatalkan langganan kapan saja melalui menu <em>Google Play Store > Pembayaran & Langganan > Langganan</em>. Pembatalan berlaku pada akhir periode penagihan yang sedang berjalan.',
        s6Title: '6. Hak Penarikan Konsumen EEA & Kebijakan Pengembalian Dana (Refund Policy)',
        s6P1: 'Sebagai pedagang (trader) yang mematuhi hukum konsumen internasional dan Wilayah Ekonomi Eropa (EEA/Uni Eropa):',
        s6Item1Title: 'Hak Penarikan 14 Hari (Statutory Right of Withdrawal):',
        s6Item1Desc: 'Konsumen di Uni Eropa/EEA memiliki hak hukum untuk membatalkan pembelian konten atau layanan digital dalam kurun waktu 14 hari kalender sejak tanggal transaksi tanpa perlu memberikan alasan, sesuai peraturan perundang-undangan perlindungan konsumen Uni Eropa.',
        s6Item2Title: 'Mekanisme Pengembalian Dana Google Play:',
        s6Item2Desc: 'Karena transaksi ditangani oleh Google Play Billing, permohonan pengembalian dana (refund) dapat diajukan secara langsung dan cepat melalui <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer">Riwayat Pesanan Google Play</a> atau melalui <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Pusat Bantuan Pengembalian Dana Google Play</a>.',
        s6Item3Title: 'Bantuan Pengembang:',
        s6Item3Desc: 'Jika Anda mengalami kendala saat mengajukan pengembalian dana melalui Google Play, Anda dapat menghubungi kami via email di <a href="mailto:aftissoftware@gmail.com" class="cyan">aftissoftware@gmail.com</a> dengan menyertakan Nomor Pesanan Google Play (GPA.xxxx-xxxx-xxxx-xxxxx) agar kami dapat membantu memverifikasinya.',
        s7Title: '7. Batasan Penggunaan yang Dilarang (Prohibited Uses)',
        s7Intro: 'Saat menggunakan aplikasi MomentaX, Anda dilarang keras untuk:',
        s8Title: '8. Penafian Jaminan & Batasan Tanggung Jawab (Disclaimer & Limitation of Liability)',
        s8P1: 'Aplikasi MomentaX disediakan atas dasar <strong>"SEBAGAIMANA ADANYA" (AS IS)</strong> dan <strong>"SEBAGAIMANA TERSEDIA" (AS AVAILABLE)</strong>. Sejauh diizinkan oleh hukum yang berlaku, pengembang menafikan semua bentuk jaminan, baik tersirat maupun tersurat, termasuk jaminan kelayakan jual beli atau kesesuaian untuk tujuan tertentu.',
        s8P2: 'Pengembang tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau hilangnya data yang timbul akibat kegagalan perangkat keras pengguna, penghapusan data secara mandiri tanpa cadangan, atau gangguan layanan pihak ketiga. Namun, ketentuan ini tidak akan membatasi atau mengabaikan hak-hak konsumen yang secara hukum tidak dapat dikesampingkan berdasarkan peraturan perlindungan konsumen di negara tempat tinggal Anda.',
        s9Title: '9. Penghentian Layanan & Penghapusan Akun',
        s9Text: 'Anda berhak menghentikan penggunaan aplikasi kapan saja dengan mencopot pemasangan (uninstall) aplikasi dari perangkat Anda atau meminta penghapusan akun serta data terkait melalui menu pengaturan aplikasi atau panduan di <a href="delete-account.html">Halaman Penghapusan Akun & Data MomentaX</a>.',
        s10Title: '10. Hukum yang Berlaku & Penyelesaian Sengketa (Governing Law & Disputes)',
        s10P1: 'Persyaratan Layanan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Tanpa mengurangi perlindungan konsumen wajib di negara tempat tinggal Anda, setiap perselisihan akan diselesaikan secara musyawarah dan itikad baik terlebih dahulu.',
        s10P2: '<strong>Penyelesaian Sengketa Online Konsumen Uni Eropa (ODR):</strong> Untuk konsumen di Wilayah Ekonomi Eropa (EEA), Komisi Eropa menyediakan platform penyelesaian sengketa secara daring yang dapat diakses di <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.',
        s11Title: '11. Kontak Resmi Pengembang & Pedagang',
        s11Text: 'Jika Anda memiliki pertanyaan mengenai Persyaratan Layanan ini, klarifikasi hak konsumen, atau kebutuhan dukungan teknis, silakan hubungi kami secara langsung:'
      },
      footer: {
        tagline: 'Menjaga momen, merawat kenangan keluarga di setiap langkah kehidupan.',
        legalTitle: 'Legalitas & Dukungan',
        termsOfService: 'Persyaratan Layanan',
        privacyPolicy: 'Kebijakan Privasi',
        deleteAccount: 'Hapus Akun & Data',
        downloadTitle: 'Unduh',
        rights: 'Hak cipta dilindungi undang-undang.'
      }
    },
    en: {
      nav: {
        tagline: 'Cherishing Memories',
        faq: 'FAQ'
      },
      legal: {
        backHome: 'Back to Home'
      },
      privacy: {
        tag: 'PRIVACY POLICY',
        title: 'MomentaX Privacy Policy',
        lastUpdated: 'Last updated: September 23, 2026',
        highlightTitle: 'Our Core Privacy Commitment:',
        highlightDesc: 'MomentaX is architected around <strong>Offline-First & Total Data Privacy</strong>. All your family moments, memories, notes, and photos are stored strictly on your local device (SQLite). We never sell your data to any third party.',
        s1Title: '1. Introduction',
        s1Text: 'This Privacy Policy explains how <strong>MomentaX</strong> (developed by Ade Fathudin, hereinafter referred to as "Developer", "we", or "app") collects, uses, stores, and protects your personal information when using the MomentaX mobile application on the Android platform.',
        s2Title: '2. Information We Collect',
        s2P1: 'MomentaX strictly limits data collection to what is essential for family milestone reminders:',
        s2Item1Title: 'Moments & Memories Data:',
        s2Item1Desc: 'Milestone titles (memorials, birthdays, anniversaries), calendar dates (Gregorian or Hijri), categories, family relations, and journal notes. This information resides locally within the SQLite database on your device.',
        s2Item2Title: 'Account Information (Optional):',
        s2Item2Desc: 'If you choose to sign in with your Google Account, we receive your User ID (UID), display name, and email address via Firebase Authentication to authenticate you and sync your data across devices. You can also use the app anonymously (Guest Mode) without an account.',
        s2Item3Title: 'Cloud Backups (Google Drive):',
        s2Item3Desc: 'If you enable Google Drive backup, backup archives are stored exclusively inside your personal Google Drive dedicated application folder (appDataFolder). We do not have access to any of your other Google Drive files.',
        s2Item4Title: 'Purchase Information (RevenueCat):',
        s2Item4Desc: 'If you subscribe to Pro features, subscription entitlements are validated via Google Play Billing and RevenueCat without storing any credit card or financial credentials on our servers.',
        s3Title: '3. Device Permissions',
        s3Intro: 'To deliver core functionalities, MomentaX may request the following device permissions:',
        s3Perm1Title: 'Gallery & Photo Access (READ_MEDIA_IMAGES):',
        s3Perm1Desc: 'Used solely when you attach memory photos to a milestone. Photos remain stored locally on your device.',
        s3Perm2Title: 'Camera (CAMERA):',
        s3Perm2Desc: 'Used when taking a new picture directly from within the app.',
        s3Perm3Title: 'Notifications (POST_NOTIFICATIONS):',
        s3Perm3Desc: 'Used to schedule and deliver milestone alerts on time (7 days before, 1 day before, day of event).',
        s4Title: '4. Third-Party Services',
        s4Intro: 'Our application integrates trusted third-party services subject to their respective privacy terms:',
        s5Title: '5. Data Security & Retention',
        s5Text: 'We apply industry-standard security safeguards to protect your records. Local records are protected by Android OS app sandboxing. Network communications involving authentication and sync use TLS/HTTPS encryption.',
        s6Title: '6. User Rights & Account Deletion',
        s6Text: 'You hold full rights to view, export, modify, or erase all your data at any time. You can delete your account and associated records immediately inside the app via <em>Settings > Account > Delete Account</em>, or following our <a href="delete-account.html">Account Deletion Guide</a>.',
        s7Title: '7. Children’s Privacy',
        s7Text: 'MomentaX is not directed at children under the age of 13, and we do not knowingly collect personal identifiable information from children. If you become aware that a child has provided us with personal data without consent, please reach out to us for immediate deletion.',
        s8Title: '8. Contact Us',
        s8Text: 'If you have any questions, feedback, or requests regarding this Privacy Policy, please contact the developer via:'
      },
      delete: {
        tag: 'DATA DELETION GUIDE',
        title: 'MomentaX Account & Data Deletion Request',
        warningTitle: 'Important Notice:',
        warningDesc: 'Account deletion is permanent and cannot be undone. All your recorded milestones, memorial dates, notes, and cloud-synced photo archives will be irrevocably deleted.',
        opt1Title: 'Option 1: Delete Directly from the App (Instant & Self-Service)',
        opt1Desc: 'The quickest way to delete your account and records is directly from the settings menu inside the MomentaX mobile app:',
        s1Title: 'Open MomentaX',
        s1Desc: 'Launch the MomentaX app on your Android smartphone.',
        s2Title: 'Go to Profile Menu',
        s2Desc: 'Tap the menu icon in the top right corner and choose <strong>Account / Profile</strong>.',
        s3Title: 'Select "Delete Account"',
        s3Desc: 'Scroll down to the bottom of the page and tap the red button <strong>"Delete Account & Data"</strong>.',
        s4Title: 'Confirm Deletion',
        s4Desc: 'A confirmation dialog will appear. Once confirmed, your Firebase Auth record, Firestore cloud data, and local SQLite database will be erased immediately.',
        opt2Title: 'Option 2: Delete Google Drive Cloud Backups',
        opt2Desc: 'If you have created Google Drive backups, they are stored in the private AppData space of your Google Drive. You can delete them anytime:',
        driveStep1: 'Open <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Google Drive</a> in your web browser.',
        driveStep2: 'Click the <strong>Settings (Gear) icon</strong> in the top right > select <strong>Settings</strong>.',
        driveStep3: 'Select the <strong>Manage Apps</strong> tab in the left sidebar.',
        driveStep4: 'Locate <strong>MomentaX</strong>, click the <strong>Options</strong> button next to it, and select <strong>"Delete hidden app data"</strong> or <strong>"Disconnect from Drive"</strong>.',
        opt3Title: 'Option 3: Written Deletion Request via Web / Email',
        opt3Desc: 'If you have uninstalled the app or lost access to your device, you can submit a written deletion request. We will process your account deletion within <strong>7 business days</strong>.',
        emailReqTitle: 'Email Deletion Request Template:',
        emailSubjectLabel: 'Subject:',
        emailSubjectValue: 'MomentaX Account & Data Deletion Request',
        emailContentLabel: 'Email Body:',
        templateLine1: 'Hello MomentaX Developer Team,',
        templateLine2: 'I request the permanent deletion of my account and all associated records in the MomentaX app.',
        templateLine3: '- Registered Google Account Email: [your registered email address]',
        templateLine4: '- Display Name: [your account display name]',
        templateLine5: 'Thank you.',
        btnSendEmail: 'Send Email Request',
        dataPolicyTitle: 'Data Types Deleted vs Retained',
        thType: 'Data Type',
        thStatus: 'Status After Deletion',
        thRetention: 'Retention Period',
        td1Type: 'Moments & Memories Data (Firestore & SQLite)',
        td1Status: 'Permanently Erased',
        td1Ret: '0 days (Immediate)',
        td2Type: 'Account Profile & Firebase Credentials',
        td2Status: 'Permanently Erased',
        td2Ret: '0 days (Immediate)',
        td3Type: 'Google Drive AppData Backups',
        td3Status: 'Managed by User / Removed upon request',
        td3Ret: 'Depends on User',
        td4Type: 'Google Play Transaction Records',
        td4Status: 'Retained by Google Play (Tax & Legal compliance)',
        td4Ret: 'Per Google Play Policies'
      },
      terms: {
        tag: 'TERMS OF SERVICE & TRADER STATUS',
        title: 'MomentaX Terms of Service',
        lastUpdated: 'Last updated: November 6, 2026',
        highlightTitle: 'Trader Status Declaration:',
        highlightDesc: 'This page sets forth the official Terms of Service and satisfies the transparency obligations regarding <strong>Trader Status</strong> on Google Play under the <em>EU Digital Services Act (DSA)</em> and consumer protection regulations. The developer operates as a registered individual trader.',
        s1Title: '1. Service Provider Identification & Trader Declaration',
        s1P1: 'The mobile application <strong>MomentaX</strong> (Package ID: <code>com.adefathudin.momentax</code>) is developed, operated, and distributed by:',
        s1P2: 'In accordance with Article 24(2) and Article 30 of the EU Digital Services Act (DSA), the developer confirms that he acts as a <strong>Trader</strong> in commercial distribution of apps, digital content, and optional in-app features to consumers on the Google Play Store.',
        s2Title: '2. Acceptance of Terms',
        s2Text: 'By downloading, installing, accessing, or using MomentaX, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our <a href="privacy-policy.html">Privacy Policy</a>. If you do not agree to these terms, you must refrain from using and uninstall MomentaX from your devices.',
        s3Title: '3. Scope & Nature of Services',
        s3Intro: 'MomentaX is an Android productivity and family milestone remembrance application providing:',
        s3Item1Title: 'Milestone & Memorial Logging:',
        s3Item1Desc: 'Recording significant family dates (memorials, milad, birthdays, anniversaries) in Gregorian and Hijri calendars.',
        s3Item2Title: 'Local-First Storage:',
        s3Item2Desc: 'All journal entries and attached memory photos reside primarily on your local device SQLite database for maximum privacy.',
        s3Item3Title: 'Optional Cloud Sync & Backup:',
        s3Item3Desc: 'Sign-in with Google Account (Firebase Auth) and encrypted backup into your private Google Drive AppData folder.',
        s3Item4Title: 'Optional Pro / Paid Features:',
        s3Item4Desc: 'Ad-free experience, premium themes, and advanced customization options provided via Google Play In-App Purchase.',
        s4Title: '4. License Grant & Intellectual Property',
        s4P1: 'The developer grants you a personal, revocable, non-exclusive, non-transferable, limited license to use MomentaX strictly for personal, non-commercial purposes in accordance with these Terms.',
        s4P2: '<strong>App Ownership:</strong> All source code, visual designs, icons, brand marks, and software assets are the exclusive intellectual property of Ade Fathudin and are protected by applicable copyright laws.',
        s4P3: '<strong>User Content Ownership:</strong> You retain complete ownership and all rights to any photos, milestone names, journal text, and family data stored in MomentaX. We do not claim ownership of or sell your personal content.',
        s5Title: '5. In-App Purchases & Subscriptions',
        s5P1: 'MomentaX is free to download. Optional premium features ("MomentaX Pro") may be made available via one-time purchases or auto-renewing subscriptions:',
        s5Item1Title: 'Official Billing Processor:',
        s5Item1Desc: 'All financial transactions are processed securely through Google Play Billing. We never collect or retain your credit card or financial details on our servers.',
        s5Item2Title: 'Pricing Transparency:',
        s5Item2Desc: 'Pricing, currency, and renewal periods are clearly stated within Google Play before you confirm a purchase. Applicable taxes are included in accordance with local regulations.',
        s5Item3Title: 'Subscription Management & Cancellation:',
        s5Item3Desc: 'You may cancel any active subscription anytime via <em>Google Play Store > Payments & subscriptions > Subscriptions</em>. Cancellation takes effect at the end of the current billing cycle.',
        s6Title: '6. EEA Consumer Right of Withdrawal & Refund Policy',
        s6P1: 'As a trader complying with international and European Economic Area (EEA/EU) consumer protection regulations:',
        s6Item1Title: 'Statutory 14-Day Right of Withdrawal:',
        s6Item1Desc: 'Consumers residing in the EU/EEA possess a statutory legal right to withdraw from a purchase of digital content or services within 14 calendar days from the date of purchase without providing a reason.',
        s6Item2Title: 'Google Play Refund Channels:',
        s6Item2Desc: 'Because payments are processed via Google Play, refund requests can be submitted easily via <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer">Google Play Order History</a> or the <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play Refund Support Portal</a>.',
        s6Item3Title: 'Developer Assistance:',
        s6Item3Desc: 'Should you encounter difficulty requesting a refund through Google Play, email us directly at <a href="mailto:aftissoftware@gmail.com" class="cyan">aftissoftware@gmail.com</a> with your Google Play Order Number (GPA.xxxx-xxxx-xxxx-xxxxx) so we can assist.',
        s7Title: '7. Prohibited Uses',
        s7Intro: 'When using MomentaX, you agree not to:',
        s8Title: '8. Warranty Disclaimers & Limitation of Liability',
        s8P1: 'MomentaX is provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by applicable law, the developer disclaims all warranties, express or implied, including fitness for a particular purpose and non-infringement.',
        s8P2: 'The developer shall not be liable for any indirect, incidental, or consequential damages resulting from device hardware failure, loss of unbacked-up data, or third-party outages. Nothing in these terms limits statutory consumer rights that cannot be waived under mandatory local laws.',
        s9Title: '9. Termination & Account Deletion',
        s9Text: 'You may terminate your relationship with us at any time by uninstalling the application or requesting complete account deletion via our <a href="delete-account.html">Account & Data Deletion Page</a>.',
        s10Title: '10. Governing Law & Dispute Resolution',
        s10P1: 'These Terms of Service are governed by the laws of the Republic of Indonesia, without limiting mandatory consumer protections applicable in your country of residence.',
        s10P2: '<strong>EU Online Dispute Resolution (ODR):</strong> For consumers residing in the EEA, the European Commission provides an online dispute resolution platform available at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.',
        s11Title: '11. Trader & Developer Contact',
        s11Text: 'For any questions or notices regarding these Terms or consumer rights, contact the developer directly:'
      },
      footer: {
        tagline: 'Preserving moments, cherishing family memories through every chapter of life.',
        legalTitle: 'Legal & Support',
        termsOfService: 'Terms of Service',
        privacyPolicy: 'Privacy Policy',
        deleteAccount: 'Delete Account & Data',
        downloadTitle: 'Download',
        rights: 'All rights reserved.'
      }
    }
  };

  function getNested(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
  }

  function setLegalLanguage(lang) {
    if (!legalTranslations[lang]) return;

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = getNested(legalTranslations[lang], key);
      if (text !== null) {
        if (typeof text === 'string' && (text.includes('<strong>') || text.includes('<em>') || text.includes('<a '))) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    const btnId = document.getElementById('lang-btn-id');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnId && btnEn) {
      btnId.classList.toggle('active', lang === 'id');
      btnEn.classList.toggle('active', lang === 'en');
    }

    try {
      localStorage.setItem('momentax_lang', lang);
    } catch (e) {}
  }

  function getInitialLanguage() {
    try {
      const savedLang = localStorage.getItem('momentax_lang');
      if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
        return savedLang;
      }
    } catch (e) {}

    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('id')) {
      return 'id';
    }
    return 'en';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btnId = document.getElementById('lang-btn-id');
    const btnEn = document.getElementById('lang-btn-en');

    if (btnId) btnId.addEventListener('click', () => setLegalLanguage('id'));
    if (btnEn) btnEn.addEventListener('click', () => setLegalLanguage('en'));

    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const initialLang = getInitialLanguage();
    setLegalLanguage(initialLang);
  });
})();
