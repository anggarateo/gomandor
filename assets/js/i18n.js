(function () {
  "use strict";

  var STORAGE_KEY = "gm_lang";

  var translations = {
    id: {
      "nav.beranda": "BERANDA",
      "nav.proyek_kami": "PROYEK KAMI",
      "nav.proyek_jabodetabek": "Proyek JABODETABEK",
      "nav.proyek_bali": "Proyek Bali",
      "nav.layanan": "LAYANAN",
      "nav.cara_pesan": "CARA PESAN",
      "nav.testimoni": "TESTIMONI",

      "hero.title": "Kontraktor Andalan Anda",
      "hero.desc":
        "Solusi menyeluruh untuk pembangunan, renovasi, dan perawatan properti; dikerjakan secara profesional, terstruktur, dan tepat waktu.",
      "hero.cta": "Pelajari lebih lanjut",

      "proyek.heading": "PROYEK KAMI",
      "proyek.intro":
        "Kami mendokumentasikan setiap proyek dari awal hingga akhir. Mencakup proses pengerjaan dan hasil akhir di berbagai lokasi, ini sebagai bentuk profesionalisme dan integritas kami.",
      "proyek.more": "lebih banyak",

      "klien.heading": "KLIEN KAMI",
      "klien.intro":
        "Kami merasa terhormat telah dipercaya oleh keluarga, bisnis, dan pemilik properti di berbagai wilayah. Setiap klien adalah cerita, dan setiap proyek adalah kehormatan bagi kami.",
      "klien.more": "Dan masih banyak lagi",

      "project.yuki.title": "YUKI, UBUD",
      "project.yuki.short":
        "Pembangunan Restaurant: Struktur, Arsitektur, MEP...",
      "project.yuki.category": "Restoran",
      "project.yuki.desc":
        "Pembangunan Restaurant: Struktur, Arsitektur, MEP, dan Furniture",
      "project.yuki.location": "Ubud, Bali",

      "project.resto.title": "RESTO, SANUR",
      "project.resto.short":
        "Pembangunan Restaurant: Pekerjaan Struktur, Arsitektur, MEP, dan Furniture...",
      "project.resto.category": "Restoran",
      "project.resto.desc":
        "Pembangunan Restaurant: Pekerjaan Struktur, Arsitektur, MEP, dan Furniture",
      "project.resto.location": "Sanur, Bali",

      "project.gastro.title": "GASTRO, CANGGU",
      "project.gastro.short": "Pembangunan Bar & Lounge: Arsitektur, MEP...",
      "project.gastro.category": "Bar & Lounge",
      "project.gastro.desc":
        "Pembangunan Bar & Lounge: Pekerjaan Arsitektur, MEP, dan Furniture",
      "project.gastro.location": "Canggu, Bali",

      "project.osteria.title": "OSTERIA, ULUWATU",
      "project.osteria.short": "Pembangunan Restoran Baru",
      "project.osteria.category": "Restoran",
      "project.osteria.desc": "Pembangunan Restoran Baru",
      "project.osteria.location": "Uluwatu, Bali",

      "project.junsei.title": "JUNSEI, JAKARTA",
      "project.junsei.short": "Pembangunan Restoran Baru",
      "project.junsei.category": "Restoran",
      "project.junsei.desc": "Pembangunan Restoran Baru",
      "project.junsei.location": "Senopati, Jakarta",

      "project.extrupack.title": "EXTRUPACK, BEKASI",
      "project.extrupack.short": "Pembangunan Gudang dan Ruang Kantor",
      "project.extrupack.category": "Gudang & Ruang Kantor",
      "project.extrupack.desc": "Pembangunan Gudang dan Ruang Kantor",
      "project.extrupack.location": "Kota Baru, Bekasi",

      "project.grogol.title": "GROGOL, JAKARTA",
      "project.grogol.short":
        "Restaurant Renovation including Façade, Kitchen...",
      "project.grogol.category": "Restoran",
      "project.grogol.desc":
        "Renovasi Restoran Meliputi Pekerjaan Fasad, Dapur, MEP, Instalasi Gas, dan Saluran Pembuangan (Exhaust Ducting)",
      "project.grogol.location": "Grogol Petamburan, Jakarta Barat",

      "project.cibinong.title": "CIBINONG, KAB BOGOR",
      "project.cibinong.short": "Pengaspalan di Area Parkir dan Area...",
      "project.cibinong.category": "Area Komersial",
      "project.cibinong.desc":
        "Pengaspalan di Area Parkir dan Area Sekitar Gudang",
      "project.cibinong.location": "Cibinong, Kabupaten Bogor",

      "project.umalas.title": "UMALAS, BALI",
      "project.umalas.short":
        "Front Office Renovation Painting and Window Replace...",
      "project.umalas.category": "Perkantoran",
      "project.umalas.desc":
        "Front Office Renovation Painting and Window Replacement",
      "project.umalas.location": "Umalas, Bali",

      "project.colombia.short": "Proyek Konstruksi Rumah Sakit",
      "project.shopdrive_matraman.short":
        "Renovasi Kecil Bengkel (Fasad, Papan Nama, Pengecatan)...",
      "project.shopdrive_grandwisata.short":
        "Pemasangan Panel dan Tower Sign, Pengecatan Trimdeks...",
      "project.shopdrive_summarecon.short":
        "Pekerjaan Fasade, Panel Sign, Area Kasir, dan MEP...",
      "project.felixpadel.short":
        "Pekerjaan Interior, Lantai Vinyl, HPL, Kusen Pintu Geser...",
      "project.bouncestreet.short": "Proyek Konstruksi Arena Trampolin",
      "project.adhi.short":
        "Renovasi Area Lapangan, Toilet, dan Plafon Gypsum...",
      "project.jlmcibinong.short":
        "Pengaspalan di Area Parkir dan Area Sekitar Gudang",
      "project.sbi.short":
        "Renovasi Restoran Meliputi Fasad, Dapur, MEP, Gas...",
      "project.naughtyolive.short": "Proyek Pembangunan Restoran Baru",
      "project.paksyam.short":
        "Renovasi Rumah 1 Lantai: Sipil, Arsitektur, MEP...",
      "project.moreaucafe.short": "Renovasi Cafe: Pekerjaan Sipil dan MEP...",

      "project.lacielo_fo.short":
        "Renovasi Front Office (Pengecatan dan Penggantian Jendela)",
      "project.lacielo_bungalow.short":
        "Renovasi Bungalow: Pengecatan, Perbaikan Bocor, Keramik...",
      "project.lacielo_villa.short":
        "Renovasi Villa: Pengecatan, Kolam Renang, Lantai Parket...",
      "project.cafedasa.short":
        "Pembangunan Restaurant: Struktur, Arsitektur, MEP...",
      "project.dream4.short": "Proyek Renovasi dan Finishing Bangunan",
      "project.larente.short": "Proyek Finishing Bangunan",
      "project.soicowboy.short":
        "Renovasi Clubhouse dengan Lighting dan Furniture",

      "layanan.heading": "LAYANAN",
      "layanan.intro":
        "Go-Mandor adalah platform jasa konstruksi terintegrasi yang melayani proyek dari skala residensial hingga komersial dan enterprise. Baik itu pembangunan baru, renovasi menyeluruh, renovasi ringan, seluruh kebutuhan konstruksi Anda dikelola dalam satu ekosistem yang efisien, transparan, dan terpercaya.",
      "layanan.card1.title": "PERAWATAN & PERBAIKAN",
      "layanan.card1.desc":
        "Solusi perawatan dan perbaikan terpadu untuk memastikan operasional Anda tetap optimal.",
      "layanan.card2.title": "DESAIN & PEMBANGUNAN",
      "layanan.card2.desc":
        "Dari konsep hingga konstruksi, kami hadirkan solusi yang terukur dan tahan lama.",
      "layanan.card3.title": "PROJECT MANAGEMENT",
      "layanan.card3.desc":
        "Manajemen tepat waktu, pengendalian biaya, hasil sesuai target.",
      "layanan.cta": "Pelajari lebih lanjut",

      "p1.sub":
        "Solusi Pemeliharaan dan Perbaikan untuk Semua Kebutuhan Properti Anda",
      "p1.intro":
        "Go-Mandor memahami bahwa setiap properti—baik rumah tinggal, kantor, maupun fasilitas komersial—membutuhkan perawatan rutin dan perbaikan tepat waktu untuk menjaga fungsionalitas serta nilai investasinya. Kami hadir sebagai mitra terpercaya Anda dalam menangani berbagai pekerjaan perawatan dan perbaikan dengan standar kualitas tinggi.",
      "p1.list_heading": "Layanan Perawatan & Perbaikan Kami Meliputi:",
      "p1.li1_label": "Perbaikan Bangunan",
      "p1.li1_desc":
        "Atap bocor, plafon, lantai, dinding, dan struktur bangunan lainnya.",
      "p1.li2_label": "Perbaikan Kelistrikan",
      "p1.li2_desc":
        "Instalasi listrik, perbaikan saklar, stop kontak, dan panel listrik.",
      "p1.li3_label": "Perbaikan Perpipaan",
      "p1.li3_desc":
        "Instalasi dan perbaikan pipa air, saluran pembuangan, serta sanitair.",
      "p1.li4_label": "Perawatan Interior",
      "p1.li4_desc":
        "Pengecatan ulang, perbaikan furnitur, lantai kayu/parket, dan keramik.",
      "p1.li5_label": "Perbaikan Eksterior",
      "p1.li5_desc":
        "Pagar, kanopi, taman, dan fasilitas luar ruangan lainnya.",
      "p1.li6_label": "Perawatan Berkala",
      "p1.li6_desc":
        "Servis rutin untuk mencegah kerusakan lebih lanjut dan memperpanjang usia bangunan.",
      "p1.closing":
        "Percayakan perawatan dan perbaikan properti Anda kepada Go-Mandor. Kami hadir untuk menjaga properti Anda tetap prima setiap saat.",

      "p2.intro":
        "Go-Mandor menyediakan layanan desain dan pembangunan terpadu untuk berbagai jenis properti, baik residensial maupun komersial. Kami menawarkan:",
      "p2.li1_label": "Konsultasi Desain Gratis",
      "p2.li1_desc":
        "Diskusi konsep dan kebutuhan ruang Anda tanpa biaya awal.",
      "p2.li2_label": "Perencanaan Matang",
      "p2.li2_desc": "Penyusunan RAB, timeline, dan gambar kerja yang detail.",
      "p2.li3_label": "Eksekusi Konstruksi",
      "p2.li3_desc": "Pengerjaan oleh tenaga ahli dengan material berkualitas.",
      "p2.li4_label": "Pengawasan Ketat",
      "p2.li4_desc":
        "Manajemen proyek yang memastikan kualitas, waktu, dan anggaran terkendali.",
      "p2.li5_label": "Finishing Berkualitas",
      "p2.li5_desc": "Hasil akhir yang rapi, estetis, dan tahan lama.",
      "p2.closing":
        "Percayakan desain dan pembangunan properti Anda kepada Go-Mandor, mitra terpercaya untuk mewujudkan ruang yang nyaman, aman, dan bernilai tinggi.",

      "p3.p1":
        "Go-Mandor hadir sebagai mitra terpercaya dalam mengelola setiap proyek konstruksi dan renovasi Anda. Dengan pendekatan manajemen proyek yang terstruktur dan profesional, kami memastikan setiap tahapan pekerjaan berjalan sesuai rencana, tepat waktu, dan sesuai anggaran.",
      "p3.p2":
        "Tim manajemen proyek Go-Mandor bertanggung jawab penuh atas koordinasi lapangan, pengawasan mutu, pengendalian biaya, serta komunikasi yang transparan antara klien dan tim teknis. Kami percaya bahwa keberhasilan sebuah proyek tidak hanya diukur dari hasil akhir, tetapi juga dari proses yang terkelola dengan baik—mulai dari perencanaan awal, eksekusi, hingga serah terima akhir.",
      "p3.p3":
        "Dengan pengalaman menangani berbagai skala proyek—dari renovasi rumah tinggal hingga pembangunan fasilitas komersial—Go-Mandor menjamin setiap detail diperhatikan, setiap risiko diantisipasi, dan setiap keputusan diambil dengan pertimbangan matang untuk kepuasan Anda.",
      "p3.list_heading": "Layanan Manajemen Proyek Go-Mandor meliputi:",
      "p3.li1_label": "Perencanaan & Persiapan",
      "p3.li1_desc": "Survei lokasi, penyusunan RAB, dan perencanaan timeline.",
      "p3.li2_label": "Koordinasi Tim",
      "p3.li2_desc":
        "Pengelolaan tenaga kerja, subkontraktor, dan jadwal kerja.",
      "p3.li3_label": "Pengawasan Mutu",
      "p3.li3_desc":
        "Pemeriksaan material dan kualitas pengerjaan secara berkala.",
      "p3.li4_label": "Pengendalian Biaya",
      "p3.li4_desc": "Monitoring anggaran untuk mencegah pembengkakan biaya.",
      "p3.li5_label": "Komunikasi Klien",
      "p3.li5_desc": "Laporan progres rutin dan sesi konsultasi.",
      "p3.li6_label": "Serah Terima & Pemeliharaan",
      "p3.li6_desc": "Finalisasi proyek dan pendampingan pasca-pekerjaan.",
      "p3.closing":
        "Percayakan proyek Anda kepada Go-Mandor, dan nikmati proses pembangunan yang terencana, terukur, dan terpercaya.",

      "regular.title": "Go-Mandor Regular",
      "regular.desc":
        "Perbaikan dan renovasi rumah jadi mudah. Mulai dari AC bocor, lampu mati, wastafel mampet, ganti keramik, hingga cat tembok dan lain sebagainya.",
      "regular.cta": "Hubungi sekarang",

      "prioritas.title": "Go-Mandor Prioritas",
      "prioritas.desc":
        "Go-Mandor Prioritas adalah kebutuhan skalabilitas konstruksi B2B—dari proyek ringan, renovasi, hingga pembangunan skala besar.",
      "prioritas.cta": "Hubungi sekarang",

      "statistik.heading": "STATISTIK",
      "statistik.intro":
        "Go-Mandor didukung oleh tenaga ahli berpengalaman yang telah menyelesaikan berbagai proyek dengan hasil memuaskan. Kepercayaan banyak klien menjadi bukti kualitas layanan yang konsisten dan profesional.",
      "statistik.label1": "Tenaga Ahli",
      "statistik.label2": "Proyek Selesai",
      "statistik.label3": "Dipercaya Klien",

      "quote.text":
        "“Kami telah membangun dan dipercaya oleh masyarakat Indonesia sejak 2019. Dan kami akan terus berinovasi dan berkembang untuk masa depan lebih baik diindustri konstruksi.”",

      "subscribe.heading": "SUBSCRIBE",
      "subscribe.desc":
        "Berlangganan newsletter Go-Mandor. Dapatkan informasi terbaru, tips manajemen proyek, dan update layanan langsung di inbox Anda.",
      "subscribe.placeholder": "Email Anda",
      "subscribe.cta": "SUBSCRIBE",

      "footer.copyright": "© 2026 PT Niaga Makmur Berjaya.",
      "footer.col1.heading": "Go-Mandor",
      "footer.tentang": "Tentang Go-Mandor",
      "footer.hki": "Hak Kekayaan Intelektual",
      "footer.gabung": "Gabung Ahli",
      "footer.unduh_profil": "Unduh Profil Perusahaan",
      "footer.col2.heading": "Kontak Kami",
      "footer.alamat": "Alamat",
      "footer.pusat_panggilan": "Pusat Panggilan",
      "footer.whatsapp": "WhatsApp",
      "footer.col3.heading": "Legalitas",
      "footer.akta": "Akta Pendirian",
      "footer.nib": "NIB",
      "footer.npwp": "NPWP",
      "footer.col4.heading": "Bantuan dan Panduan",
      "footer.care": "Go-Mandor Care",
      "footer.syarat": "Syarat dan Ketentuan",
      "footer.kebijakan": "Kebijakan Privasi",
      "footer.download_text": "Buka aplikasi dengan scan QR atau klik tombol:",
      "footer.ikuti_kami": "Ikuti Kami",

      "alamat.title": "Pilih Lokasi",
      "alamat.desc":
        "Pilih area untuk melihat lokasi kantor Go-Mandor di peta.",
      "alamat.jabodetabek": "JABODETABEK",
      "alamat.bali": "BALI",

      "whatsapp.aria": "Hubungi kami via WhatsApp",

      "tentang.h1": "PERJALANAN KAMI",
      "tentang.sub1": "Bisnis yang skalabel dengan dampak sosial yang nyata!",
      "tentang.p1":
        "Dengan pengalaman bertahun-tahun di industri konstruksi, pendiri kami menyadari beberapa masalah mendasar yang sudah lama membutuhkan perubahan. Kesulitan besar dalam menemukan tukang yang berkualitas dan dapat diandalkan, serta pendapatan yang sangat rendah bagi para pekerja keras, menjadi dua hal utama dalam daftar tersebut.",
      "tentang.p2":
        "PT Niaga Makmur Berjaya, melalui aplikasi seluler sederhana bernama Go-Mandor, menghubungkan konsumen dengan tukang. Platform daring kami hadir untuk meningkatkan taraf hidup para tenaga kerja (tukang) sekaligus menyelesaikan masalah yang meresahkan konsumen dalam menemukan tukang yang tepat untuk setiap pekerjaan. Sejak diluncurkan pada Oktober 2019, Go-Mandor telah mengalami pertumbuhan yang pesat dan membuktikan dirinya sebagai solusi yang sangat dinantikan.",
      "tentang.p3":
        "Dengan beragam layanan yang tersedia dalam satu platform, pengguna dapat memilih layanan yang tepat untuk setiap pekerjaan yang mereka butuhkan, baik itu pekerjaan konstruksi, perbaikan, maupun perawatan. Survei lokasi untuk semua pekerjaan diberikan secara gratis dan tidak mengikat.",
      "tentang.p4":
        "Unduh aplikasi kami yang ramah pengguna dari Google Play Store dan App Store, dan serahkan kebutuhan tukang Anda kepada Go-Mandor.",
      "tentang.h2": "SKALA PROYEK",
      "tentang.sub2": "Go-Mandor Melayani Semua Skala Proyek",
      "tentang.p5":
        "Go-Mandor adalah mitra konstruksi dan properti yang komprehensif dan inklusif. Kami memahami bahwa setiap kebutuhan konstruksi atau perbaikan—baik besar maupun kecil—memiliki tingkat kepentingan dan urgensi yang sama.",
      "tentang.b2b_heading": "Untuk Segmen Bisnis (B2B)",
      "tentang.b2b_intro":
        "Kami memiliki pengalaman dalam menangani proyek skala besar dengan tingkat kompleksitas tinggi untuk korporasi, institusi, dan pengembang, seperti:",
      "tentang.b2b_li1": "Pembangunan Gedung Perkantoran & Ruko",
      "tentang.b2b_li2":
        "Pengembangan Fasilitas Komersial (hotel, restoran, bar, pusat olahraga, dll.)",
      "tentang.b2b_li3":
        "Proyek Institusional (sekolah, klinik, tempat ibadah, dll.)",
      "tentang.b2b_li4": "Renovasi Skala Besar & Desain Interior",
      "tentang.b2c_heading": "Untuk Segmen Konsumen Langsung (B2C)",
      "tentang.b2c_intro":
        "Kami juga siap membantu individu dan keluarga dalam mewujudkan atau meningkatkan ruang hunian mereka:",
      "tentang.b2c_li1": "Pembangunan & Renovasi Rumah Tinggal",
      "tentang.b2c_li2":
        "Perbaikan Terfokus: atap bocor, plafon, lantai, pagar, dll.",
      "tentang.b2c_li3": "Instalasi & Perbaikan Kelistrikan dan Perpipaan",
      "tentang.b2c_li4": "Desain Interior & Renovasi Kecil",
      "tentang.kecil_heading": "Untuk Proyek Kecil & Perbaikan Ringan",
      "tentang.kecil_intro":
        "Kami tidak mengabaikan apa yang terlihat “kecil,” karena kami percaya bahwa pelayanan terbaik dibuktikan melalui perhatian terhadap detail dan komitmen pada proyek dengan skala apa pun. Contoh:",
      "tentang.kecil_li1": "Pengecatan Ulang Ruangan",
      "tentang.kecil_li2": "Perbaikan Keramik atau Sanitair",
      "tentang.kecil_li3": "Pemasangan Kanopi atau Teralis",
      "tentang.kecil_li4": "Servis dan Perawatan Berkala",

      "jabodetabek.heading":
        "Temukan Proyek-Proyek Kami yang Telah Selesai di Area JABODETABEK",
      "bali.heading":
        "Temukan Proyek-Proyek Kami yang Telah Selesai di Area Bali",
      "filter.semua": "Semua",
      "filter.gedung": "Gedung",
      "filter.villa": "Villa",
      "filter.resort": "Resort",
      "filter.rumah": "Rumah",
      "filter.restoran": "Restoran",
      "filter.lainnya": "lainnya...",
      "pagination.sebelumnya": "Sebelumnya",
      "pagination.selanjutnya": "Selanjutnya",

      "testimoni.heading": "Testimoni Klien",
      "review.andi.role": "Renovasi Rumah",
      "review.andi.quote":
        "Go-Mandor benar-benar membantu saya dari awal sampai akhir. Timnya profesional, komunikasinya lancar, dan hasil renovasi rumah saya melebihi ekspektasi. Saya pasti pakai jasa mereka lagi.",
      "review.siti.role": "Pembangunan Ruko",
      "review.siti.quote":
        "Proyek ruko saya selesai tepat waktu dan sesuai anggaran. Go-Mandor punya tim yang bertanggung jawab dan materialnya berkualitas. Sangat puas!",
      "review.budi.role": "Renovasi Kantor",
      "review.budi.quote":
        "Saya sudah beberapa kali pakai jasa kontraktor, tapi Go-Mandor yang paling oke. Pengerjaan rapi, cepat, dan mereka selalu kasih solusi kalau ada kendala di lapangan.",
      "review.dian.role": "Pembangunan Rumah",
      "review.dian.quote":
        "Proses pembangunan rumah impian saya jadi lebih tenang karena Go-Mandor mengurus semuanya. Dari perizinan sampai finishing, semua terkelola dengan baik. Terima kasih Go-Mandor!",
      "review.rudi.role": "Renovasi Restoran",
      "review.rudi.quote":
        "Restoran saya harus cepat selesai karena mau buka. Go-Mandor berhasil menyelesaikan renovasi tepat waktu tanpa mengurangi kualitas. Pelanggan saya juga puas dengan tampilan barunya.",
      "review.maya.role": "Pembangunan Gudang",
      "review.maya.quote":
        "Go-Mandor memberikan rekomendasi desain yang efisien untuk gudang saya. Pengerjaan kokoh, hemat biaya, dan koordinasi dengan tim sangat mudah. Rekomendasi banget!",
      "review.james.role": "Villa Renovation",
      "review.james.quote":
        "Go-Mandor transformed our outdated villa into a modern tropical masterpiece. Their team was punctual, detail-oriented, and handled everything from design to construction. Highly recommended!",
      "review.laura.role": "Hotel Construction",
      "review.laura.quote":
        "We entrusted Go-Mandor with our boutique hotel project in Ubud, and they exceeded our expectations. Excellent project management, quality materials, and they truly understand the local building culture. Absolutely satisfied.",
      "review.david.role": "Club Development",
      "review.david.quote":
        "Go-Mandor delivered our beach club project on time and on budget. Their professionalism and problem-solving skills were outstanding. We're already planning our next project with them.",

      "hki.title": "HAK KEKAYAAN INTELEKTUAL",
      "hki.subtitle": "GO-MANDOR – PT NIAGA MAKMUR BERJAYA",
      "hki.s1.h": "1. Kepemilikan Hak Kekayaan Intelektual",
      "hki.s1.p1": "Seluruh Hak Kekayaan Intelektual yang terdapat, digunakan, ditampilkan, dikembangkan, atau tersedia melalui aplikasi GO-MANDOR, situs web, sistem, platform, dan seluruh layanan yang disediakan oleh PT NIAGA MAKMUR BERJAYA (“NMB”), baik yang telah maupun yang akan didaftarkan, merupakan milik NMB dan/atau pihak yang memberikan lisensi kepada NMB, kecuali dinyatakan lain secara tegas.",
      "hki.s1.p2": "Hak Kekayaan Intelektual tersebut meliputi namun tidak terbatas pada:",
      "hki.s1.ul1_li1": "nama “GO-MANDOR” dan variasinya;",
      "hki.s1.ul1_li2": "logo, simbol, desain, ikon, slogan, tagline dan identitas visual GO-MANDOR;",
      "hki.s1.ul1_li3": "merek dagang dan/atau merek jasa;",
      "hki.s1.ul1_li4": "hak cipta atas aplikasi, situs web, desain antarmuka, tata letak, konten, tulisan, foto, ilustrasi, video, audio, grafis dan materi lainnya;",
      "hki.s1.ul1_li5": "perangkat lunak, source code, object code, algoritma, database, struktur sistem, API dan teknologi pendukung;",
      "hki.s1.ul1_li6": "desain dan tampilan aplikasi (user interface/user experience);",
      "hki.s1.ul1_li7": "nama domain, subdomain dan akun resmi GO-MANDOR;",
      "hki.s1.ul1_li8": "database pengguna, informasi bisnis dan struktur database sepanjang dilindungi berdasarkan peraturan perundang-undangan;",
      "hki.s1.ul1_li9": "rahasia dagang, metode bisnis, formula, proses, sistem operasional dan informasi teknis; dan",
      "hki.s1.ul1_li10": "Hak Kekayaan Intelektual lainnya yang berkaitan dengan GO-MANDOR.",
      "hki.s1.p3": "Pelindungan terhadap hak cipta dan merek tersebut antara lain tunduk pada UU No. 28 Tahun 2014 tentang Hak Cipta dan UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis sebagaimana berlaku.",
      "hki.s2.h": "2. Penggunaan Merek GO-MANDOR",
      "hki.s2.p1": "Pengguna dilarang menggunakan nama, merek, logo, simbol, slogan, atau identitas GO-MANDOR tanpa persetujuan tertulis terlebih dahulu dari NMB.",
      "hki.s2.p2": "Tanpa membatasi ketentuan tersebut, pengguna dilarang:",
      "hki.s2.ul1_li1": "menyalin atau menggunakan logo GO-MANDOR;",
      "hki.s2.ul1_li2": "mendaftarkan nama atau merek yang identik atau memiliki kemiripan dengan GO-MANDOR;",
      "hki.s2.ul1_li3": "menggunakan GO-MANDOR sebagai bagian dari nama perusahaan, usaha, produk, aplikasi, akun media sosial atau domain;",
      "hki.s2.ul1_li4": "menggunakan merek GO-MANDOR untuk memberikan kesan seolah-olah pengguna memiliki hubungan, afiliasi, kemitraan, sponsor atau endorsement dari NMB; atau",
      "hki.s2.ul1_li5": "melakukan tindakan lain yang dapat menimbulkan kebingungan mengenai hubungan antara pengguna dengan NMB.",
      "hki.s3.h": "3. Hak Cipta atas Aplikasi",
      "hki.s3.p1": "Aplikasi GO-MANDOR beserta seluruh elemen yang terdapat di dalamnya merupakan karya yang dilindungi berdasarkan ketentuan Hak Cipta.",
      "hki.s3.p2": "Kecuali diperbolehkan berdasarkan hukum atau secara tertulis oleh NMB, pengguna dilarang:",
      "hki.s3.ul1_li1": "menyalin aplikasi;",
      "hki.s3.ul1_li2": "menggandakan, memodifikasi atau membuat karya turunan;",
      "hki.s3.ul1_li3": "melakukan reverse engineering, decompile, disassemble atau mencoba memperoleh source code;",
      "hki.s3.ul1_li4": "menjual, menyewakan, melisensikan, mendistribusikan atau mengeksploitasi aplikasi;",
      "hki.s3.ul1_li5": "menggunakan aplikasi untuk membangun aplikasi atau layanan yang bersaing secara langsung; atau",
      "hki.s3.ul1_li6": "menghilangkan pemberitahuan mengenai hak cipta dan/atau kepemilikan.",
      "hki.s4.h": "4. Konten Pengguna",
      "hki.s4.p1": "Dalam hal pengguna mengunggah foto, video, tulisan, ulasan, komentar atau materi lainnya melalui GO-MANDOR (“Konten Pengguna”), pengguna tetap memiliki hak atas Konten Pengguna tersebut sepanjang hak tersebut memang dimiliki oleh pengguna.",
      "hki.s4.p2": "Namun, pengguna memberikan kepada NMB lisensi non-eksklusif, bebas royalti, berlaku di seluruh dunia, dapat dialihkan dan dapat disublisensikan, sepanjang diperlukan untuk:",
      "hki.s4.ul1_li1": "menyediakan layanan GO-MANDOR;",
      "hki.s4.ul1_li2": "menampilkan Konten Pengguna kepada pihak yang berkepentingan dengan transaksi;",
      "hki.s4.ul1_li3": "melakukan promosi dan pemasaran GO-MANDOR;",
      "hki.s4.ul1_li4": "meningkatkan kualitas layanan;",
      "hki.s4.ul1_li5": "melakukan analisis dan pengembangan produk; dan",
      "hki.s4.ul1_li6": "memenuhi kewajiban hukum.",
      "hki.s4.p3": "Pengguna menjamin bahwa Konten Pengguna tidak melanggar hak pihak ketiga.",
      "hki.s5.h": "5. Pelanggaran HKI",
      "hki.s5.p1": "NMB berhak mengambil tindakan terhadap setiap pihak yang diduga melakukan pelanggaran Hak Kekayaan Intelektual, termasuk:",
      "hki.s5.ul1_li1": "menghapus konten;",
      "hki.s5.ul1_li2": "menonaktifkan akun;",
      "hki.s5.ul1_li3": "membatasi akses terhadap layanan;",
      "hki.s5.ul1_li4": "mengirimkan teguran;",
      "hki.s5.ul1_li5": "menuntut ganti rugi; dan/atau",
      "hki.s5.ul1_li6": "mengambil tindakan hukum perdata maupun pidana sesuai ketentuan hukum yang berlaku.",
      "privacy.title": "KEBIJAKAN PRIVASI GO-MANDOR – PT NIAGA MAKMUR BERJAYA",
      "privacy.s1.h": "1. UMUM",
      "privacy.s1.p1": "PT Niaga Makmur Berjaya (“NMB”, “Kami”) berkomitmen untuk melindungi Data Pribadi Pengguna GO-MANDOR (“Platform”). Kebijakan Privasi ini menjelaskan pengumpulan, penggunaan, penyimpanan, pengungkapan, perlindungan, dan penghapusan Data Pribadi sesuai dengan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi dan peraturan perundang-undangan yang berlaku.",
      "privacy.s1.p2": "Dengan menggunakan Platform, Pengguna dianggap telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.",
      "privacy.s2.h": "2. PENGENDALI DATA",
      "privacy.s2.p1": "PT. NIAGA MAKMUR BERJAYA<br />Alamat: Mitra Gading Villa, Jl. Kelapa Hibrida I No. G1/3m, RT 7/RW 11, Kelapa Gading Barat, Kec. Kelapa Gading, Jakarta Utara, 14250<br />Email: info@gomandor.id",
      "privacy.s2.p2": "NMB bertindak sebagai Pengendali Data Pribadi dalam pemrosesan Data Pribadi melalui Platform sesuai dengan fungsi dan layanan yang diberikan.",
      "privacy.s3.h": "3. DATA YANG DIKUMPULKAN",
      "privacy.s3.p1": "NMB dapat mengumpulkan Data Pribadi yang diperlukan untuk penyediaan layanan, antara lain:",
      "privacy.s3.ul1_li1": "nama, nomor telepon, dan alamat email;",
      "privacy.s3.ul1_li2": "alamat dan/atau lokasi pekerjaan;",
      "privacy.s3.ul1_li3": "rincian Pesanan dan jenis layanan;",
      "privacy.s3.ul1_li4": "foto atau informasi mengenai lokasi/pekerjaan;",
      "privacy.s3.ul1_li5": "riwayat transaksi dan komunikasi; dan",
      "privacy.s3.ul1_li6": "data teknis, perangkat, log, serta lokasi apabila diperlukan untuk fungsi Platform.",
      "privacy.s3.p2": "NMB hanya mengumpulkan Data Pribadi yang relevan dan diperlukan sesuai tujuan pemrosesan.",
      "privacy.s4.h": "4. TUJUAN PEMROSESAN",
      "privacy.s4.p1": "Data Pribadi digunakan untuk:",
      "privacy.s4.ul1_li1": "membuat dan mengelola akun;",
      "privacy.s4.ul1_li2": "memproses dan memenuhi Pesanan;",
      "privacy.s4.ul1_li3": "menghubungkan Pengguna dengan Mitra/Ahli;",
      "privacy.s4.ul1_li4": "melakukan komunikasi, survei, dan penjadwalan;",
      "privacy.s4.ul1_li5": "memproses pembayaran apabila berlaku;",
      "privacy.s4.ul1_li6": "memberikan dukungan pelanggan;",
      "privacy.s4.ul1_li7": "meningkatkan keamanan dan kualitas Platform;",
      "privacy.s4.ul1_li8": "mencegah penipuan dan penyalahgunaan; dan",
      "privacy.s4.ul1_li9": "memenuhi kewajiban hukum.",
      "privacy.s5.h": "5. DASAR PEMROSESAN",
      "privacy.s5.p1": "Pemrosesan Data Pribadi dilakukan berdasarkan dasar yang diperbolehkan oleh peraturan perundang-undangan, termasuk persetujuan Pengguna, pelaksanaan perjanjian, pemenuhan kewajiban hukum, kepentingan vital, dan/atau dasar hukum lainnya yang berlaku.",
      "privacy.s6.h": "6. PENGUNGKAPAN DATA",
      "privacy.s6.p1": "NMB tidak menjual Data Pribadi Pengguna.",
      "privacy.s6.p2": "Data dapat diungkapkan secara terbatas kepada Mitra/Ahli, penyedia teknologi dan pembayaran, penyedia layanan pendukung, penasihat profesional, auditor, serta instansi pemerintah atau aparat penegak hukum apabila diwajibkan atau diperbolehkan berdasarkan hukum.",
      "privacy.s6.p3": "Pengungkapan dilakukan hanya sejauh diperlukan untuk tujuan yang sah dan sesuai ketentuan peraturan perundang-undangan.",
      "privacy.s7.h": "7. PENYIMPANAN DAN KEAMANAN DATA",
      "privacy.s7.p1": "NMB menyimpan Data Pribadi selama diperlukan untuk penyediaan layanan, pemenuhan kewajiban hukum, penyelesaian sengketa, dan kepentingan keamanan.",
      "privacy.s7.p2": "NMB menerapkan langkah teknis dan organisatoris yang wajar untuk melindungi Data Pribadi dari akses, penggunaan, perubahan, kehilangan, atau pengungkapan yang tidak sah.",
      "privacy.s7.p3": "Setelah tidak diperlukan, Data Pribadi akan dihapus, dimusnahkan, atau dianonimkan sesuai ketentuan hukum.",
      "privacy.s8.h": "8. HAK PENGGUNA",
      "privacy.s8.p1": "Sesuai dengan peraturan perundang-undangan, Pengguna berhak memperoleh informasi mengenai pemrosesan Data Pribadi, mengakses dan memperbaiki Data Pribadi, meminta penghapusan atau pembatasan pemrosesan dalam kondisi tertentu, menarik persetujuan, serta menggunakan hak lainnya yang diberikan oleh hukum.",
      "privacy.s8.p2": "Permintaan terkait Data Pribadi dapat disampaikan kepada:<br />Email: info@gomandor.id",
      "privacy.s9.h": "9. COOKIES DAN TEKNOLOGI SERUPA",
      "privacy.s9.p1": "GO-MANDOR dapat menggunakan cookies, SDK, device identifiers, log files, dan teknologi serupa untuk menjalankan fungsi Platform, menjaga keamanan, melakukan analisis, dan meningkatkan layanan.",
      "privacy.s10.h": "10. DATA ANAK",
      "privacy.s10.p1": "GO-MANDOR tidak ditujukan untuk memperoleh Data Pribadi anak tanpa dasar dan persetujuan yang dipersyaratkan oleh hukum. Apabila NMB mengetahui bahwa Data Pribadi anak telah dikumpulkan secara tidak semestinya, NMB dapat mengambil langkah yang diperlukan sesuai ketentuan hukum.",
      "privacy.s11.h": "11. TRANSFER DAN PEMROSESAN DATA",
      "privacy.s11.p1": "Data Pribadi dapat diproses atau disimpan di Indonesia dan/atau di luar Indonesia melalui penyedia layanan yang digunakan NMB, dengan tetap memperhatikan persyaratan pelindungan Data Pribadi berdasarkan hukum yang berlaku.",
      "privacy.s12.h": "12. KEGAGALAN PELINDUNGAN DATA",
      "privacy.s12.p1": "Dalam hal terjadi kegagalan pelindungan Data Pribadi, NMB akan melakukan penanganan dan pemberitahuan kepada pihak yang relevan sesuai dengan kewajiban berdasarkan peraturan perundang-undangan.",
      "privacy.s13.h": "13. PERUBAHAN KEBIJAKAN PRIVASI",
      "privacy.s13.p1": "NMB dapat mengubah Kebijakan Privasi ini dari waktu ke waktu. Perubahan material akan diberitahukan melalui Platform dan/atau sarana komunikasi lainnya.",
      "privacy.s14.h": "14. HUBUNGAN DENGAN SYARAT DAN KETENTUAN",
      "privacy.s14.p1": "Kebijakan Privasi ini merupakan bagian yang tidak terpisahkan dari Syarat dan Ketentuan GO-MANDOR.",
      "privacy.s14.p2": "Dengan mengakses atau menggunakan GO-MANDOR, Pengguna menyatakan telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.",
      "terms.title": "SYARAT DAN KETENTUAN GO-MANDOR - PT NIAGA MAKMUR BERJAYA",
      "terms.s1.h": "1. Ketentuan Umum",
      "terms.s1.p1": "Syarat dan Ketentuan ini (“Syarat dan Ketentuan”) mengatur penggunaan aplikasi, situs web, dan/atau platform GO-MANDOR (“Platform”) yang dikelola oleh PT Niaga Makmur Berjaya (“NMB”).",
      "terms.s1.p2": "Dengan mengakses, mendaftar, atau menggunakan Platform, Pengguna menyatakan telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan ini serta Kebijakan Privasi GO-MANDOR.",
      "terms.s1.p3": "Apabila Pengguna tidak menyetujui Syarat dan Ketentuan ini, Pengguna wajib menghentikan penggunaan Platform.",
      "terms.s2.h": "2. Layanan GO-MANDOR",
      "terms.s2.p1": "GO-MANDOR merupakan platform yang mempertemukan Pengguna dengan tukang, teknisi, tenaga ahli, kontraktor, dan/atau penyedia jasa lainnya (“Mitra”) untuk memperoleh berbagai layanan sesuai kategori yang tersedia pada Platform.",
      "terms.s2.p2": "NMB dapat membantu proses pemesanan, komunikasi, penjadwalan, pembayaran, dan/atau penyampaian informasi terkait layanan sesuai fitur yang tersedia.",
      "terms.s3.h": "3. Pemesanan dan Pelaksanaan Layanan",
      "terms.s3.p1": "Pengguna wajib memberikan informasi yang benar, lengkap, dan akurat mengenai kebutuhan pekerjaan, lokasi, waktu pelaksanaan, serta informasi lain yang diperlukan.",
      "terms.s3.p2": "Untuk pekerjaan tertentu, Mitra dapat melakukan survei terlebih dahulu sebelum memberikan penawaran harga dan/atau ruang lingkup pekerjaan.",
      "terms.s3.p3": "Pekerjaan hanya dapat dilaksanakan setelah Pengguna dan Mitra menyepakati sekurang-kurangnya mengenai jenis pekerjaan, ruang lingkup, harga, material, waktu pelaksanaan, dan ketentuan garansi, apabila berlaku.",
      "terms.s4.h": "4. Harga dan Pembayaran",
      "terms.s4.p1": "Harga layanan ditentukan berdasarkan jenis, volume, tingkat kesulitan, lokasi, material, dan faktor lain yang relevan.",
      "terms.s4.p2": "Setiap biaya tambahan di luar kesepakatan awal wajib diinformasikan kepada Pengguna dan memperoleh persetujuan Pengguna terlebih dahulu.",
      "terms.s4.p3": "Pengguna wajib melakukan pembayaran sesuai harga dan metode pembayaran yang tercantum pada Platform dan/atau yang telah disepakati dengan Mitra.",
      "terms.s5.h": "5. Pembatalan dan Perubahan Jadwal",
      "terms.s5.p1": "Pengguna dapat melakukan pembatalan dan/atau perubahan jadwal sesuai ketentuan yang berlaku pada Platform.",
      "terms.s5.p2": "Dalam hal pembatalan dilakukan setelah Mitra melakukan perjalanan, survei, pembelian material, atau pekerjaan telah dimulai, Pengguna dapat dikenakan biaya sesuai kondisi dan kebijakan yang berlaku.",
      "terms.s6.h": "6. Tanggung Jawab Mitra",
      "terms.s6.p1": "Mitra bertanggung jawab atas pelaksanaan pekerjaan sesuai ruang lingkup dan kesepakatan dengan Pengguna.",
      "terms.s6.p2": "Mitra wajib memberikan informasi yang benar mengenai identitas, kompetensi, harga, serta layanan yang ditawarkan dan melaksanakan pekerjaan secara profesional.",
      "terms.s6.p3": "NMB dapat melakukan verifikasi, evaluasi, pembatasan, penangguhan, atau penghentian akses Mitra apabila ditemukan pelanggaran terhadap ketentuan Platform.",
      "terms.s7.h": "7. Tanggung Jawab Pengguna",
      "terms.s7.p1": "Pengguna wajib:",
      "terms.s7.ul1_li1": "memberikan informasi yang benar dan dapat dipertanggungjawabkan;",
      "terms.s7.ul1_li2": "memastikan lokasi pekerjaan dapat diakses dan berada dalam kondisi yang aman;",
      "terms.s7.ul1_li3": "memberikan informasi mengenai kondisi khusus lokasi yang dapat memengaruhi pekerjaan;",
      "terms.s7.ul1_li4": "memenuhi kewajiban pembayaran; dan",
      "terms.s7.ul1_li5": "menggunakan Platform secara wajar dan sesuai hukum.",
      "terms.s8.h": "8. Garansi dan Komplain",
      "terms.s8.p1": "Garansi pekerjaan, apabila tersedia, mengikuti ketentuan yang disepakati antara Pengguna dan Mitra untuk masing-masing pekerjaan.",
      "terms.s8.p2": "Pengguna dapat menyampaikan keluhan melalui kanal pengaduan GO-MANDOR sesuai prosedur yang ditetapkan NMB.",
      "terms.s8.p3": "NMB dapat membantu memfasilitasi penyelesaian keluhan antara Pengguna dan Mitra sesuai kewenangan dan kebijakan yang berlaku.",
      "terms.s9.h": "9. Akun dan Keamanan",
      "terms.s9.p1": "Pengguna bertanggung jawab menjaga kerahasiaan akun, kata sandi, OTP, dan informasi keamanan lainnya.",
      "terms.s9.p2": "Segala aktivitas yang dilakukan melalui akun Pengguna menjadi tanggung jawab Pengguna sepanjang tidak terbukti dilakukan tanpa kewenangan.",
      "terms.s9.p3": "NMB berhak menangguhkan atau menutup akun yang digunakan untuk penipuan, penyalahgunaan, pelanggaran hukum, atau pelanggaran Syarat dan Ketentuan.",
      "terms.s10.h": "10. Hak Kekayaan Intelektual",
      "terms.s10.p1": "Seluruh nama, merek, logo, desain, sistem, perangkat lunak, konten, database, tampilan, dan elemen lain yang terdapat pada Platform merupakan milik NMB dan/atau pihak yang memberikan hak kepada NMB dan dilindungi berdasarkan peraturan perundang-undangan.",
      "terms.s10.p2": "Pengguna dilarang menyalin, mengubah, mendistribusikan, mengeksploitasi, melakukan reverse engineering, atau menggunakan Hak Kekayaan Intelektual tersebut tanpa persetujuan tertulis dari NMB.",
      "terms.s11.h": "11. Larangan",
      "terms.s11.p1": "Pengguna dilarang:",
      "terms.s11.ul1_li1": "menggunakan Platform untuk tujuan melawan hukum;",
      "terms.s11.ul1_li2": "memberikan informasi palsu atau menyesatkan;",
      "terms.s11.ul1_li3": "melakukan penipuan atau manipulasi transaksi;",
      "terms.s11.ul1_li4": "mengganggu keamanan atau operasional Platform;",
      "terms.s11.ul1_li5": "mengunggah konten yang melanggar hukum atau hak pihak lain;",
      "terms.s11.ul1_li6": "menyalahgunakan data Pengguna atau Mitra; dan/atau",
      "terms.s11.ul1_li7": "melakukan tindakan lain yang dapat merugikan NMB, Mitra, atau Pengguna lainnya.",
      "terms.s12.h": "12. Pembatasan Tanggung Jawab",
      "terms.s12.p1": "NMB berupaya menyediakan Platform secara aman dan berkesinambungan, namun NMB tidak menjamin bahwa Platform akan selalu tersedia, bebas dari gangguan, kesalahan, atau kegagalan teknis.",
      "terms.s12.p2": "Sejauh diperbolehkan berdasarkan hukum, NMB tidak bertanggung jawab atas kerugian yang timbul akibat tindakan, kelalaian, kualitas, hasil, atau pelaksanaan pekerjaan oleh Mitra, kecuali apabila kerugian tersebut secara langsung disebabkan oleh kesalahan atau kelalaian NMB.",
      "terms.s12.p3": "Ketentuan ini tidak dimaksudkan untuk mengesampingkan tanggung jawab NMB yang menurut hukum tidak dapat dikecualikan atau dibatasi.",
      "terms.s13.h": "13. Data Pribadi",
      "terms.s13.p1": "NMB dapat mengumpulkan dan memproses Data Pribadi Pengguna untuk menyediakan, mengembangkan, mengamankan, dan meningkatkan layanan GO-MANDOR sesuai dengan Kebijakan Privasi GO-MANDOR dan peraturan perundang-undangan yang berlaku.",
      "terms.s13.p2": "Dengan menggunakan Platform, Pengguna menyatakan telah membaca dan memahami Kebijakan Privasi tersebut.",
      "terms.s14.h": "14. Perubahan Syarat dan Ketentuan",
      "terms.s14.p1": "NMB berhak mengubah, menambah, atau memperbarui Syarat dan Ketentuan ini dari waktu ke waktu.",
      "terms.s14.p2": "Perubahan akan berlaku sejak tanggal yang ditentukan oleh NMB dan, apabila diperlukan, akan diberitahukan melalui Platform atau sarana komunikasi lainnya.",
      "terms.s14.p3": "Penggunaan Platform setelah perubahan berlaku merupakan persetujuan Pengguna terhadap perubahan tersebut.",
      "terms.s15.h": "15. Hukum dan Penyelesaian Sengketa",
      "terms.s15.p1": "Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia.",
      "terms.s15.p2": "Setiap perselisihan yang timbul akan terlebih dahulu diselesaikan secara musyawarah untuk mufakat.",
      "terms.s15.p3": "Apabila penyelesaian secara musyawarah tidak tercapai, perselisihan akan diselesaikan melalui mekanisme hukum yang berlaku di Republik Indonesia.",
      "terms.s16.h": "16. Kontak",
      "terms.s16.p1": "Pertanyaan, keluhan, atau permintaan terkait Syarat dan Ketentuan dapat disampaikan melalui:<br />PT NIAGA MAKMUR BERJAYA<br />Pengelola GO-MANDOR<br />Email: info@gomandor.id",
      "terms.s16.p2": "Dengan menekan tombol “Saya Setuju”, melakukan pendaftaran, atau menggunakan Platform GO-MANDOR, Pengguna menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.",

      "cara_order.image": "assets/images/Cara-Order-ID.jpg",
    },

    en: {
      "nav.beranda": "HOME",
      "nav.proyek_kami": "OUR PROJECTS",
      "nav.proyek_jabodetabek": "JABODETABEK Projects",
      "nav.proyek_bali": "Bali Projects",
      "nav.layanan": "SERVICES",
      "nav.cara_pesan": "HOW TO ORDER",
      "nav.testimoni": "TESTIMONIALS",

      "hero.title": "Your Realiable Contractor",
      "hero.desc":
        "A complete solution for construction, renovation, and property maintenance; carried out professionally, systematically, and on time.",
      "hero.cta": "Learn More",

      "proyek.heading": "OUR PROJECTS",
      "proyek.intro":
        "We document every project from start to finish. Covering the work process and final results across various locations, as a form of our professionalism and integrity.",
      "proyek.more": "more",

      "klien.heading": "OUR CLIENTS",
      "klien.intro":
        "We are honored to be trusted by families, businesses, and property owners across many regions. Every client is a story, and every project is an honor for us.",
      "klien.more": "And many more",

      "project.yuki.title": "YUKI, UBUD",
      "project.yuki.short":
        "Restaurant Construction: Structure, Architecture, MEP...",
      "project.yuki.category": "Restaurant",
      "project.yuki.desc":
        "Restaurant Construction: Structure, Architecture, MEP, and Furniture",
      "project.yuki.location": "Ubud, Bali",

      "project.resto.title": "RESTO, SANUR",
      "project.resto.short":
        "Restaurant Construction: Structural, Architecture, MEP, and Furniture Works...",
      "project.resto.category": "Restaurant",
      "project.resto.desc":
        "Restaurant Construction: Structural, Architecture, MEP, and Furniture Works",
      "project.resto.location": "Sanur, Bali",

      "project.gastro.title": "GASTRO, CANGGU",
      "project.gastro.short": "Bar & Lounge Construction: Architecture, MEP...",
      "project.gastro.category": "Bar & Lounge",
      "project.gastro.desc":
        "Bar & Lounge Construction: Architecture, MEP, and Furniture Works",
      "project.gastro.location": "Canggu, Bali",

      "project.osteria.title": "OSTERIA, ULUWATU",
      "project.osteria.short": "New Restaurant Construction",
      "project.osteria.category": "Restaurant",
      "project.osteria.desc": "New Restaurant Construction",
      "project.osteria.location": "Uluwatu, Bali",

      "project.junsei.title": "JUNSEI, JAKARTA",
      "project.junsei.short": "New Restaurant Construction",
      "project.junsei.category": "Restaurant",
      "project.junsei.desc": "New Restaurant Construction",
      "project.junsei.location": "Senopati, Jakarta",

      "project.extrupack.title": "EXTRUPACK, BEKASI",
      "project.extrupack.short": "Warehouse and Office Space Construction",
      "project.extrupack.category": "Warehouse & Office Space",
      "project.extrupack.desc": "Warehouse and Office Space Construction",
      "project.extrupack.location": "Kota Baru, Bekasi",

      "project.grogol.title": "GROGOL, JAKARTA",
      "project.grogol.short":
        "Restaurant Renovation including Façade, Kitchen...",
      "project.grogol.category": "Restaurant",
      "project.grogol.desc":
        "Restaurant Renovation including Façade, Kitchen, MEP, Gas Installation, and Exhaust Ducting",
      "project.grogol.location": "Grogol Petamburan, West Jakarta",

      "project.cibinong.title": "CIBINONG, BOGOR REGENCY",
      "project.cibinong.short": "Paving of Parking Area and Surrounding...",
      "project.cibinong.category": "Commercial Area",
      "project.cibinong.desc":
        "Paving of Parking Area and Surrounding Warehouse Area",
      "project.cibinong.location": "Cibinong, Bogor Regency",

      "project.umalas.title": "UMALAS, BALI",
      "project.umalas.short":
        "Front Office Renovation Painting and Window Replace...",
      "project.umalas.category": "Office",
      "project.umalas.desc":
        "Front Office Renovation Painting and Window Replacement",
      "project.umalas.location": "Umalas, Bali",

      "project.colombia.short": "Hospital Construction Project",
      "project.shopdrive_matraman.short":
        "Minor Workshop Renovation (Façade, Signage, Painting)...",
      "project.shopdrive_grandwisata.short":
        "Panel and Tower Sign Installation, Trimdek Painting...",
      "project.shopdrive_summarecon.short":
        "Façade Work, Signage Panel, Cashier Area, and MEP...",
      "project.felixpadel.short":
        "Interior Work, Vinyl Flooring, HPL, Sliding Door Frame...",
      "project.bouncestreet.short": "Trampoline Arena Construction Project",
      "project.adhi.short":
        "Field Area, Toilet, and Gypsum Ceiling Renovation...",
      "project.jlmcibinong.short":
        "Paving of Parking Area and Surrounding Warehouse Area",
      "project.sbi.short":
        "Restaurant Renovation including Façade, Kitchen, MEP, Gas...",
      "project.naughtyolive.short": "New Restaurant Construction Project",
      "project.paksyam.short":
        "1-Floor House Renovation: Civil, Architecture, MEP...",
      "project.moreaucafe.short": "Cafe Renovation: Civil Work and MEP...",

      "project.lacielo_fo.short":
        "Front Office Renovation (Painting and Window Replacement)",
      "project.lacielo_bungalow.short":
        "Bungalow Renovation: Painting, Leak Repair, Tiling...",
      "project.lacielo_villa.short":
        "Villa Renovation: Painting, Pool Tiles, Parquet Flooring...",
      "project.cafedasa.short":
        "Restaurant Construction: Structural, Architecture, MEP...",
      "project.dream4.short": "Building Renovation and Finishing Project",
      "project.larente.short": "Building Finishing Project",
      "project.soicowboy.short":
        "Clubhouse Renovation with Lighting and Furniture",

      "layanan.heading": "SERVICES",
      "layanan.intro":
        "Go-Mandor is an integrated construction service platform serving projects from residential to commercial and enterprise scale. Whether it's new construction, full renovation, or light renovation, all your construction needs are managed within one efficient, transparent, and trusted ecosystem.",
      "layanan.card1.title": "MAINTENANCE & REPAIR",
      "layanan.card1.desc":
        "Integrated maintenance and repair solutions to keep your operations running smoothly.",
      "layanan.card2.title": "DESIGN & CONSTRUCTION",
      "layanan.card2.desc":
        "From concept to construction, we deliver solutions that are well-measured and built to last.",
      "layanan.card3.title": "PROJECT MANAGEMENT",
      "layanan.card3.desc":
        "On-time management, cost control, and results that meet your targets.",
      "layanan.cta": "Learn More",

      "p1.sub": "Maintenance and Repair Solutions for All Your Property Needs",
      "p1.intro":
        "Go-Mandor understands that every property—whether a home, office, or commercial facility—needs routine maintenance and timely repairs to preserve its functionality and investment value. We're your trusted partner for handling maintenance and repair work to a high standard of quality.",
      "p1.list_heading": "Our Maintenance & Repair Services Include:",
      "p1.li1_label": "Building Repairs",
      "p1.li1_desc":
        "Roof leaks, ceilings, flooring, walls, and other structural elements.",
      "p1.li2_label": "Electrical Repairs",
      "p1.li2_desc":
        "Wiring installation, switch and outlet repair, and electrical panels.",
      "p1.li3_label": "Plumbing Repairs",
      "p1.li3_desc":
        "Installation and repair of water pipes, drainage, and sanitary fixtures.",
      "p1.li4_label": "Interior Maintenance",
      "p1.li4_desc":
        "Repainting, furniture repair, wood/parquet flooring, and tiling.",
      "p1.li5_label": "Exterior Repairs",
      "p1.li5_desc": "Fences, canopies, gardens, and other outdoor facilities.",
      "p1.li6_label": "Routine Maintenance",
      "p1.li6_desc":
        "Regular servicing to prevent further damage and extend the building's lifespan.",
      "p1.closing":
        "Trust Go-Mandor with your property's maintenance and repairs. We're here to keep your property in top condition, every time.",

      "p2.intro":
        "Go-Mandor provides integrated design and construction services for all types of properties, both residential and commercial. We offer:",
      "p2.li1_label": "Free Design Consultation",
      "p2.li1_desc": "Discuss your concept and space needs at no upfront cost.",
      "p2.li2_label": "Thorough Planning",
      "p2.li2_desc":
        "Detailed budgeting (RAB), timeline, and working drawings.",
      "p2.li3_label": "Construction Execution",
      "p2.li3_desc":
        "Work carried out by skilled professionals using quality materials.",
      "p2.li4_label": "Strict Supervision",
      "p2.li4_desc":
        "Project management that keeps quality, time, and budget under control.",
      "p2.li5_label": "Quality Finishing",
      "p2.li5_desc": "A tidy, aesthetic, and long-lasting final result.",
      "p2.closing":
        "Trust Go-Mandor with your property's design and construction—a reliable partner for creating spaces that are comfortable, safe, and high in value.",

      "p3.p1":
        "Go-Mandor is your trusted partner in managing every construction and renovation project. With a structured, professional project management approach, we ensure every stage of work runs on plan, on time, and within budget.",
      "p3.p2":
        "Go-Mandor's project management team takes full responsibility for on-site coordination, quality supervision, cost control, and transparent communication between clients and the technical team. We believe a project's success is measured not only by its final result, but also by a well-managed process—from initial planning and execution through to final handover.",
      "p3.p3":
        "With experience handling projects of every scale—from home renovations to commercial facility construction—Go-Mandor ensures every detail is attended to, every risk is anticipated, and every decision is carefully considered for your satisfaction.",
      "p3.list_heading": "Go-Mandor's Project Management Services Include:",
      "p3.li1_label": "Planning & Preparation",
      "p3.li1_desc": "Site survey, budgeting (RAB), and timeline planning.",
      "p3.li2_label": "Team Coordination",
      "p3.li2_desc": "Management of labor, subcontractors, and work schedules.",
      "p3.li3_label": "Quality Supervision",
      "p3.li3_desc": "Regular inspection of materials and workmanship.",
      "p3.li4_label": "Cost Control",
      "p3.li4_desc": "Budget monitoring to prevent cost overruns.",
      "p3.li5_label": "Client Communication",
      "p3.li5_desc": "Regular progress reports and consultation sessions.",
      "p3.li6_label": "Handover & Maintenance",
      "p3.li6_desc": "Project finalization and post-work support.",
      "p3.closing":
        "Trust your project to Go-Mandor, and enjoy a construction process that's well-planned, measurable, and reliable.",

      "regular.title": "Go-Mandor Regular",
      "regular.desc":
        "Home repairs and renovations made easy. From leaking AC units, power outages, clogged sinks, tile replacement, to wall painting and more.",
      "regular.cta": "Contact Us Now",

      "prioritas.title": "Go-Mandor Prioritas",
      "prioritas.desc":
        "Go-Mandor Prioritas is built for B2B construction scalability—from light projects and renovations to large-scale construction.",
      "prioritas.cta": "Contact Us Now",

      "statistik.heading": "STATISTICS",
      "statistik.intro":
        "Go-Mandor is backed by experienced professionals who have completed numerous projects with satisfying results. The trust of our many clients is proof of our consistent and professional service quality.",
      "statistik.label1": "Skilled Workers",
      "statistik.label2": "Completed Projects",
      "statistik.label3": "Trusted Clients",

      "quote.text":
        "“We have built and earned the trust of the Indonesian people since 2019. And we will keep innovating and growing for a better future in the construction industry.”",

      "subscribe.heading": "SUBSCRIBE",
      "subscribe.desc":
        "Subscribe to the Go-Mandor newsletter. Get the latest updates, project management tips, and service updates straight to your inbox.",
      "subscribe.placeholder": "Your Email",
      "subscribe.cta": "SUBSCRIBE",

      "footer.copyright": "© 2026 PT Niaga Makmur Berjaya.",
      "footer.col1.heading": "Go-Mandor",
      "footer.tentang": "About Go-Mandor",
      "footer.hki": "Intellectual Property Rights",
      "footer.gabung": "Join as a Professional",
      "footer.unduh_profil": "Download Company Profile",
      "footer.col2.heading": "Contact Us",
      "footer.alamat": "Address",
      "footer.pusat_panggilan": "Call Center",
      "footer.whatsapp": "WhatsApp",
      "footer.col3.heading": "Legal",
      "footer.akta": "Deed of Establishment",
      "footer.nib": "Business ID Number",
      "footer.npwp": "Tax ID Number",
      "footer.col4.heading": "Help & Guides",
      "footer.care": "Go-Mandor Care",
      "footer.syarat": "Terms and Conditions",
      "footer.kebijakan": "Privacy Policy",
      "footer.download_text":
        "Open the app by scanning the QR code or tapping a button:",
      "footer.ikuti_kami": "Follow Us",

      "alamat.title": "Choose a Location",
      "alamat.desc":
        "Choose an area to see the Go-Mandor office location on the map.",
      "alamat.jabodetabek": "JABODETABEK",
      "alamat.bali": "BALI",

      "whatsapp.aria": "Contact us via WhatsApp",

      "tentang.h1": "OUR JOURNEY",
      "tentang.sub1": "A scalable business with real social impact!",
      "tentang.p1":
        "With years of experience in the construction industry, our founders recognized a few fundamental problems that had long needed change. The great difficulty in finding qualified, reliable workers, and the very low income earned by hardworking laborers, topped that list.",
      "tentang.p2":
        "PT Niaga Makmur Berjaya, through a simple mobile app called Go-Mandor, connects consumers with skilled workers. Our online platform exists to improve the livelihoods of workers while solving the problem consumers face in finding the right worker for every job. Since launching in October 2019, Go-Mandor has grown rapidly and proven itself to be a long-awaited solution.",
      "tentang.p3":
        "With a wide range of services available on one platform, users can choose the right service for whatever job they need, whether it's construction, repair, or maintenance work. Site surveys for all jobs are provided free of charge and with no obligation.",
      "tentang.p4":
        "Download our user-friendly app from the Google Play Store and App Store, and leave your worker needs to Go-Mandor.",
      "tentang.h2": "PROJECT SCALE",
      "tentang.sub2": "Go-Mandor Serves Projects of Every Scale",
      "tentang.p5":
        "Go-Mandor is a comprehensive and inclusive construction and property partner. We understand that every construction or repair need—big or small—carries the same level of importance and urgency.",
      "tentang.b2b_heading": "For Business Segments (B2B)",
      "tentang.b2b_intro":
        "We are experienced in handling large-scale, highly complex projects for corporations, institutions, and developers, such as:",
      "tentang.b2b_li1": "Office Building & Shophouse Construction",
      "tentang.b2b_li2":
        "Commercial Facility Development (hotels, restaurants, bars, sports centers, etc.)",
      "tentang.b2b_li3":
        "Institutional Projects (schools, clinics, places of worship, etc.)",
      "tentang.b2b_li4": "Large-Scale Renovation & Interior Design",
      "tentang.b2c_heading": "For Direct Consumer Segments (B2C)",
      "tentang.b2c_intro":
        "We're also ready to help individuals and families build or upgrade their living spaces:",
      "tentang.b2c_li1": "Residential Construction & Renovation",
      "tentang.b2c_li2":
        "Focused Repairs: roof leaks, ceilings, flooring, fences, etc.",
      "tentang.b2c_li3": "Electrical and Plumbing Installation & Repair",
      "tentang.b2c_li4": "Interior Design & Minor Renovation",
      "tentang.kecil_heading": "For Small Projects & Light Repairs",
      "tentang.kecil_intro":
        "We don't overlook what may seem “small,” because we believe great service is proven through attention to detail and commitment, no matter the scale of the project. Examples:",
      "tentang.kecil_li1": "Room Repainting",
      "tentang.kecil_li2": "Tile or Sanitary Ware Repair",
      "tentang.kecil_li3": "Canopy or Grille Installation",
      "tentang.kecil_li4": "Routine Service and Maintenance",

      "jabodetabek.heading":
        "Discover Our Completed Projects in the JABODETABEK Area",
      "bali.heading": "Discover Our Completed Projects in the Bali Area",
      "filter.semua": "All",
      "filter.gedung": "Building",
      "filter.villa": "Villa",
      "filter.resort": "Resort",
      "filter.rumah": "House",
      "filter.restoran": "Restaurant",
      "filter.lainnya": "more...",
      "pagination.sebelumnya": "Previous",
      "pagination.selanjutnya": "Next",

      "testimoni.heading": "Client Testimonials",
      "review.andi.role": "Home Renovation",
      "review.andi.quote":
        "Go-Mandor really helped me from start to finish. Their team was professional, communication was smooth, and the result of my home renovation exceeded expectations. I'll definitely use their service again.",
      "review.siti.role": "Shophouse Construction",
      "review.siti.quote":
        "My shophouse project was completed on time and within budget. Go-Mandor has a responsible team and quality materials. Very satisfied!",
      "review.budi.role": "Office Renovation",
      "review.budi.quote":
        "I've used several contractors before, but Go-Mandor is the best. The work was tidy, fast, and they always offered solutions whenever issues came up on site.",
      "review.dian.role": "House Construction",
      "review.dian.quote":
        "Building my dream house felt much less stressful because Go-Mandor handled everything. From permits to finishing, everything was well managed. Thank you, Go-Mandor!",
      "review.rudi.role": "Restaurant Renovation",
      "review.rudi.quote":
        "My restaurant needed to open quickly, so the renovation had to be fast. Go-Mandor finished it on time without compromising quality. My customers love the new look too.",
      "review.maya.role": "Warehouse Construction",
      "review.maya.quote":
        "Go-Mandor gave us an efficient design recommendation for our warehouse. The build is solid, cost-effective, and coordinating with their team was very easy. Highly recommended!",
      "review.james.role": "Villa Renovation",
      "review.james.quote":
        "Go-Mandor transformed our outdated villa into a modern tropical masterpiece. Their team was punctual, detail-oriented, and handled everything from design to construction. Highly recommended!",
      "review.laura.role": "Hotel Construction",
      "review.laura.quote":
        "We entrusted Go-Mandor with our boutique hotel project in Ubud, and they exceeded our expectations. Excellent project management, quality materials, and they truly understand the local building culture. Absolutely satisfied.",
      "review.david.role": "Club Development",
      "review.david.quote":
        "Go-Mandor delivered our beach club project on time and on budget. Their professionalism and problem-solving skills were outstanding. We're already planning our next project with them.",

      "hki.title": "INTELLECTUAL PROPERTY RIGHTS",
      "hki.subtitle": "GO-MANDOR – PT NIAGA MAKMUR BERJAYA",
      "hki.s1.h": "1. Ownership of Intellectual Property Rights",
      "hki.s1.p1": "All Intellectual Property Rights contained in, used, displayed, developed, or made available through the GO-MANDOR application, website, systems, platform, and all services provided by PT NIAGA MAKMUR BERJAYA (“NMB”), whether already registered or to be registered, are owned by NMB and/or parties that have licensed such rights to NMB, unless expressly stated otherwise.",
      "hki.s1.p2": "Such Intellectual Property Rights include, but are not limited to:",
      "hki.s1.ul1_li1": "the name “GO-MANDOR” and its variations;",
      "hki.s1.ul1_li2": "the logo, symbols, designs, icons, slogans, taglines, and visual identity of GO-MANDOR;",
      "hki.s1.ul1_li3": "trademarks and/or service marks;",
      "hki.s1.ul1_li4": "copyright in the application, website, interface design, layout, content, writing, photographs, illustrations, videos, audio, graphics, and other materials;",
      "hki.s1.ul1_li5": "software, source code, object code, algorithms, databases, system architecture, APIs, and supporting technology;",
      "hki.s1.ul1_li6": "the design and appearance of the application (user interface/user experience);",
      "hki.s1.ul1_li7": "domain names, subdomains, and official GO-MANDOR accounts;",
      "hki.s1.ul1_li8": "user databases, business information, and database structures to the extent protected under applicable law;",
      "hki.s1.ul1_li9": "trade secrets, business methods, formulas, processes, operational systems, and technical information; and",
      "hki.s1.ul1_li10": "other Intellectual Property Rights relating to GO-MANDOR.",
      "hki.s1.p3": "Protection of such copyright and trademarks is subject to, among others, Law No. 28 of 2014 on Copyright and Law No. 20 of 2016 on Trademarks and Geographical Indications, as applicable.",
      "hki.s2.h": "2. Use of the GO-MANDOR Mark",
      "hki.s2.p1": "Users are prohibited from using the GO-MANDOR name, mark, logo, symbol, slogan, or identity without NMB's prior written consent.",
      "hki.s2.p2": "Without limiting the foregoing, Users are prohibited from:",
      "hki.s2.ul1_li1": "copying or using the GO-MANDOR logo;",
      "hki.s2.ul1_li2": "registering a name or mark that is identical or confusingly similar to GO-MANDOR;",
      "hki.s2.ul1_li3": "using GO-MANDOR as part of a company name, business, product, application, social media account, or domain name;",
      "hki.s2.ul1_li4": "using the GO-MANDOR mark to create the impression that the User has a relationship, affiliation, partnership, sponsorship, or endorsement from NMB; or",
      "hki.s2.ul1_li5": "engaging in any other act that may cause confusion regarding the relationship between the User and NMB.",
      "hki.s3.h": "3. Copyright in the Application",
      "hki.s3.p1": "The GO-MANDOR application and all elements contained therein constitute a work protected under Copyright law.",
      "hki.s3.p2": "Except as permitted by law or in writing by NMB, Users are prohibited from:",
      "hki.s3.ul1_li1": "copying the application;",
      "hki.s3.ul1_li2": "reproducing, modifying, or creating derivative works;",
      "hki.s3.ul1_li3": "reverse engineering, decompiling, disassembling, or attempting to obtain the source code;",
      "hki.s3.ul1_li4": "selling, leasing, licensing, distributing, or exploiting the application;",
      "hki.s3.ul1_li5": "using the application to build a directly competing application or service; or",
      "hki.s3.ul1_li6": "removing any copyright and/or ownership notices.",
      "hki.s4.h": "4. User Content",
      "hki.s4.p1": "Where a User uploads photographs, videos, writing, reviews, comments, or other materials through GO-MANDOR (“User Content”), the User retains ownership of such User Content to the extent such rights are indeed held by the User.",
      "hki.s4.p2": "However, the User grants NMB a non-exclusive, royalty-free, worldwide, transferable, and sublicensable license, to the extent necessary to:",
      "hki.s4.ul1_li1": "provide GO-MANDOR's services;",
      "hki.s4.ul1_li2": "display User Content to parties with an interest in the transaction;",
      "hki.s4.ul1_li3": "promote and market GO-MANDOR;",
      "hki.s4.ul1_li4": "improve service quality;",
      "hki.s4.ul1_li5": "conduct analysis and product development; and",
      "hki.s4.ul1_li6": "fulfil legal obligations.",
      "hki.s4.p3": "The User warrants that the User Content does not infringe the rights of any third party.",
      "hki.s5.h": "5. Infringement of Intellectual Property Rights",
      "hki.s5.p1": "NMB reserves the right to take action against any party suspected of infringing Intellectual Property Rights, including:",
      "hki.s5.ul1_li1": "removing content;",
      "hki.s5.ul1_li2": "deactivating accounts;",
      "hki.s5.ul1_li3": "restricting access to the service;",
      "hki.s5.ul1_li4": "issuing warnings;",
      "hki.s5.ul1_li5": "claiming damages; and/or",
      "hki.s5.ul1_li6": "taking civil or criminal legal action in accordance with applicable law.",
      "privacy.title": "GO-MANDOR PRIVACY POLICY – PT NIAGA MAKMUR BERJAYA",
      "privacy.s1.h": "1. GENERAL",
      "privacy.s1.p1": "PT Niaga Makmur Berjaya (“NMB”, “We”) is committed to protecting the Personal Data of GO-MANDOR (“Platform”) Users. This Privacy Policy explains the collection, use, storage, disclosure, protection, and deletion of Personal Data in accordance with Law No. 27 of 2022 on Personal Data Protection and applicable laws and regulations.",
      "privacy.s1.p2": "By using the Platform, the User is deemed to have read, understood, and agreed to this Privacy Policy.",
      "privacy.s2.h": "2. DATA CONTROLLER",
      "privacy.s2.p1": "PT. NIAGA MAKMUR BERJAYA<br />Address: Mitra Gading Villa, Jl. Kelapa Hibrida I No. G1/3m, RT 7/RW 11, Kelapa Gading Barat, Kec. Kelapa Gading, North Jakarta, 14250<br />Email: info@gomandor.id",
      "privacy.s2.p2": "NMB acts as the Personal Data Controller in the processing of Personal Data through the Platform in accordance with the functions and services provided.",
      "privacy.s3.h": "3. DATA COLLECTED",
      "privacy.s3.p1": "NMB may collect Personal Data necessary for the provision of its services, including:",
      "privacy.s3.ul1_li1": "name, phone number, and email address;",
      "privacy.s3.ul1_li2": "address and/or job location;",
      "privacy.s3.ul1_li3": "Order details and type of service;",
      "privacy.s3.ul1_li4": "photographs or information regarding the location/job;",
      "privacy.s3.ul1_li5": "transaction and communication history; and",
      "privacy.s3.ul1_li6": "technical data, device information, logs, and location where necessary for the Platform's functions.",
      "privacy.s3.p2": "NMB only collects Personal Data that is relevant and necessary for the purpose of processing.",
      "privacy.s4.h": "4. PURPOSE OF PROCESSING",
      "privacy.s4.p1": "Personal Data is used to:",
      "privacy.s4.ul1_li1": "create and manage accounts;",
      "privacy.s4.ul1_li2": "process and fulfil Orders;",
      "privacy.s4.ul1_li3": "connect Users with Partners/Professionals;",
      "privacy.s4.ul1_li4": "carry out communication, surveys, and scheduling;",
      "privacy.s4.ul1_li5": "process payments where applicable;",
      "privacy.s4.ul1_li6": "provide customer support;",
      "privacy.s4.ul1_li7": "improve the security and quality of the Platform;",
      "privacy.s4.ul1_li8": "prevent fraud and misuse; and",
      "privacy.s4.ul1_li9": "fulfil legal obligations.",
      "privacy.s5.h": "5. BASIS OF PROCESSING",
      "privacy.s5.p1": "Personal Data is processed on grounds permitted under applicable laws and regulations, including the User's consent, performance of an agreement, fulfilment of legal obligations, vital interests, and/or other applicable legal bases.",
      "privacy.s6.h": "6. DISCLOSURE OF DATA",
      "privacy.s6.p1": "NMB does not sell Users' Personal Data.",
      "privacy.s6.p2": "Data may be disclosed on a limited basis to Partners/Professionals, technology and payment service providers, supporting service providers, professional advisors, auditors, and government agencies or law enforcement authorities where required or permitted by law.",
      "privacy.s6.p3": "Disclosure is made only to the extent necessary for lawful purposes and in accordance with applicable laws and regulations.",
      "privacy.s7.h": "7. DATA STORAGE AND SECURITY",
      "privacy.s7.p1": "NMB retains Personal Data for as long as necessary for the provision of services, fulfilment of legal obligations, dispute resolution, and security purposes.",
      "privacy.s7.p2": "NMB implements reasonable technical and organisational measures to protect Personal Data from unauthorised access, use, alteration, loss, or disclosure.",
      "privacy.s7.p3": "Once no longer needed, Personal Data will be deleted, destroyed, or anonymised in accordance with applicable law.",
      "privacy.s8.h": "8. USER RIGHTS",
      "privacy.s8.p1": "In accordance with applicable laws and regulations, Users have the right to obtain information regarding the processing of Personal Data, access and correct Personal Data, request deletion or restriction of processing under certain conditions, withdraw consent, and exercise other rights granted by law.",
      "privacy.s8.p2": "Requests relating to Personal Data may be submitted to:<br />Email: info@gomandor.id",
      "privacy.s9.h": "9. COOKIES AND SIMILAR TECHNOLOGIES",
      "privacy.s9.p1": "GO-MANDOR may use cookies, SDKs, device identifiers, log files, and similar technologies to operate the Platform's functions, maintain security, conduct analysis, and improve services.",
      "privacy.s10.h": "10. CHILDREN'S DATA",
      "privacy.s10.p1": "GO-MANDOR is not intended to obtain children's Personal Data without the basis and consent required by law. Should NMB become aware that a child's Personal Data has been improperly collected, NMB may take the necessary steps in accordance with applicable law.",
      "privacy.s11.h": "11. DATA TRANSFER AND PROCESSING",
      "privacy.s11.p1": "Personal Data may be processed or stored in Indonesia and/or outside Indonesia through service providers used by NMB, while continuing to observe the Personal Data protection requirements under applicable law.",
      "privacy.s12.h": "12. PERSONAL DATA PROTECTION FAILURE",
      "privacy.s12.p1": "In the event of a Personal Data protection failure, NMB will carry out handling and notification to relevant parties in accordance with its obligations under applicable laws and regulations.",
      "privacy.s13.h": "13. CHANGES TO THIS PRIVACY POLICY",
      "privacy.s13.p1": "NMB may amend this Privacy Policy from time to time. Material changes will be notified through the Platform and/or other communication channels.",
      "privacy.s14.h": "14. RELATIONSHIP WITH THE TERMS AND CONDITIONS",
      "privacy.s14.p1": "This Privacy Policy forms an integral part of the GO-MANDOR Terms and Conditions.",
      "privacy.s14.p2": "By accessing or using GO-MANDOR, the User represents that they have read, understood, and agreed to this Privacy Policy.",
      "terms.title": "GO-MANDOR TERMS AND CONDITIONS - PT NIAGA MAKMUR BERJAYA",
      "terms.s1.h": "1. General Provisions",
      "terms.s1.p1": "These Terms and Conditions (“Terms and Conditions”) govern the use of the GO-MANDOR application, website, and/or platform (“Platform”) operated by PT Niaga Makmur Berjaya (“NMB”).",
      "terms.s1.p2": "By accessing, registering for, or using the Platform, the User represents that they have read, understood, and agreed to these Terms and Conditions and the GO-MANDOR Privacy Policy in their entirety.",
      "terms.s1.p3": "If the User does not agree to these Terms and Conditions, the User must stop using the Platform.",
      "terms.s2.h": "2. GO-MANDOR Services",
      "terms.s2.p1": "GO-MANDOR is a platform that connects Users with handymen, technicians, skilled professionals, contractors, and/or other service providers (“Partners”) to obtain various services according to the categories available on the Platform.",
      "terms.s2.p2": "NMB may assist with the ordering process, communication, scheduling, payment, and/or delivery of information relating to services in accordance with the features available.",
      "terms.s3.h": "3. Ordering and Performance of Services",
      "terms.s3.p1": "The User must provide true, complete, and accurate information regarding the job required, location, timing of performance, and other necessary information.",
      "terms.s3.p2": "For certain jobs, the Partner may conduct a survey before providing a price quotation and/or scope of work.",
      "terms.s3.p3": "Work may only be carried out after the User and the Partner have agreed on, at a minimum, the type of work, scope, price, materials, timing of performance, and warranty terms, where applicable.",
      "terms.s4.h": "4. Price and Payment",
      "terms.s4.p1": "Service prices are determined based on type, volume, level of difficulty, location, materials, and other relevant factors.",
      "terms.s4.p2": "Any additional costs outside the initial agreement must be communicated to the User and require the User's prior consent.",
      "terms.s4.p3": "The User must make payment in accordance with the price and payment method stated on the Platform and/or as agreed with the Partner.",
      "terms.s5.h": "5. Cancellation and Rescheduling",
      "terms.s5.p1": "The User may cancel and/or reschedule in accordance with the provisions applicable on the Platform.",
      "terms.s5.p2": "Where cancellation occurs after the Partner has travelled, conducted a survey, purchased materials, or work has commenced, the User may be charged a fee in accordance with the applicable conditions and policy.",
      "terms.s6.h": "6. Partner's Responsibilities",
      "terms.s6.p1": "The Partner is responsible for carrying out work in accordance with the scope and agreement with the User.",
      "terms.s6.p2": "The Partner must provide accurate information regarding their identity, competence, price, and services offered, and must carry out work in a professional manner.",
      "terms.s6.p3": "NMB may verify, evaluate, restrict, suspend, or terminate a Partner's access should any violation of the Platform's provisions be found.",
      "terms.s7.h": "7. User's Responsibilities",
      "terms.s7.p1": "The User must:",
      "terms.s7.ul1_li1": "provide true and accountable information;",
      "terms.s7.ul1_li2": "ensure the job location is accessible and in a safe condition;",
      "terms.s7.ul1_li3": "provide information regarding any special conditions of the location that may affect the work;",
      "terms.s7.ul1_li4": "fulfil payment obligations; and",
      "terms.s7.ul1_li5": "use the Platform reasonably and in accordance with the law.",
      "terms.s8.h": "8. Warranty and Complaints",
      "terms.s8.p1": "Work warranties, where available, are subject to the terms agreed between the User and the Partner for each job.",
      "terms.s8.p2": "The User may submit complaints through GO-MANDOR's complaint channel in accordance with the procedure established by NMB.",
      "terms.s8.p3": "NMB may assist in facilitating the resolution of complaints between the User and the Partner in accordance with its authority and applicable policy.",
      "terms.s9.h": "9. Account and Security",
      "terms.s9.p1": "The User is responsible for maintaining the confidentiality of their account, password, OTP, and other security information.",
      "terms.s9.p2": "All activities carried out through the User's account are the User's responsibility, provided they are not proven to have been carried out without authorisation.",
      "terms.s9.p3": "NMB has the right to suspend or close any account used for fraud, misuse, violation of law, or violation of these Terms and Conditions.",
      "terms.s10.h": "10. Intellectual Property Rights",
      "terms.s10.p1": "All names, marks, logos, designs, systems, software, content, databases, appearance, and other elements contained on the Platform are owned by NMB and/or parties that have granted rights to NMB and are protected under applicable laws and regulations.",
      "terms.s10.p2": "The User is prohibited from copying, modifying, distributing, exploiting, reverse engineering, or using such Intellectual Property Rights without NMB's prior written consent.",
      "terms.s11.h": "11. Prohibitions",
      "terms.s11.p1": "The User is prohibited from:",
      "terms.s11.ul1_li1": "using the Platform for unlawful purposes;",
      "terms.s11.ul1_li2": "providing false or misleading information;",
      "terms.s11.ul1_li3": "committing fraud or manipulating transactions;",
      "terms.s11.ul1_li4": "disrupting the security or operation of the Platform;",
      "terms.s11.ul1_li5": "uploading content that violates the law or the rights of others;",
      "terms.s11.ul1_li6": "misusing the data of Users or Partners; and/or",
      "terms.s11.ul1_li7": "engaging in any other act that may harm NMB, Partners, or other Users.",
      "terms.s12.h": "12. Limitation of Liability",
      "terms.s12.p1": "NMB endeavours to provide the Platform in a safe and continuous manner; however, NMB does not guarantee that the Platform will always be available, free from disruption, errors, or technical failures.",
      "terms.s12.p2": "To the extent permitted by law, NMB is not liable for losses arising from the acts, negligence, quality, results, or performance of work by the Partner, unless such loss is directly caused by NMB's fault or negligence.",
      "terms.s12.p3": "This provision is not intended to exclude any liability of NMB that cannot be excluded or limited under law.",
      "terms.s13.h": "13. Personal Data",
      "terms.s13.p1": "NMB may collect and process Users' Personal Data to provide, develop, secure, and improve GO-MANDOR's services in accordance with the GO-MANDOR Privacy Policy and applicable laws and regulations.",
      "terms.s13.p2": "By using the Platform, the User represents that they have read and understood the Privacy Policy.",
      "terms.s14.h": "14. Changes to the Terms and Conditions",
      "terms.s14.p1": "NMB has the right to amend, add to, or update these Terms and Conditions from time to time.",
      "terms.s14.p2": "Changes shall take effect from the date determined by NMB and, where necessary, will be notified through the Platform or other communication channels.",
      "terms.s14.p3": "Continued use of the Platform after such changes take effect constitutes the User's agreement to such changes.",
      "terms.s15.h": "15. Governing Law and Dispute Resolution",
      "terms.s15.p1": "These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Indonesia.",
      "terms.s15.p2": "Any dispute arising shall first be resolved amicably through deliberation for consensus.",
      "terms.s15.p3": "If an amicable resolution cannot be reached, the dispute shall be resolved through the legal mechanisms applicable in the Republic of Indonesia.",
      "terms.s16.h": "16. Contact",
      "terms.s16.p1": "Questions, complaints, or requests relating to these Terms and Conditions may be submitted through:<br />PT NIAGA MAKMUR BERJAYA<br />GO-MANDOR Operator<br />Email: info@gomandor.id",
      "terms.s16.p2": "By pressing the “I Agree” button, registering, or using the GO-MANDOR Platform, the User represents that they have read, understood, and agreed to these Terms and Conditions.",

      "cara_order.image": "assets/images/Cara-Order-EN.jpg",
    },
  };

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) {}
    return "id";
  }

  function applyLang(lang) {
    if (!translations[lang]) lang = "id";
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = translations[lang][key];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var value = translations[lang][key];
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      var value = translations[lang][key];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = translations[lang][key];
      if (value !== undefined) el.innerHTML = value;
    });

    var caraOrderSrc = translations[lang]["cara_order.image"];
    if (caraOrderSrc) {
      document
        .querySelectorAll("[data-i18n-src='cara_order']")
        .forEach(function (el) {
          el.setAttribute("src", caraOrderSrc);
        });
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("ring-2", isActive);
      btn.classList.toggle("ring-white", isActive);
      btn.classList.toggle("opacity-100", isActive);
      btn.classList.toggle("opacity-60", !isActive);
    });

    document.querySelectorAll(".project-more").forEach(function (btn) {
      var enTitle = btn.getAttribute("data-title-en");
      var enCategory = btn.getAttribute("data-category-en");
      var enDescription = btn.getAttribute("data-description-en");
      var enLocation = btn.getAttribute("data-location-en");
      if (!btn.getAttribute("data-title-id")) {
        btn.setAttribute("data-title-id", btn.getAttribute("data-title") || "");
        btn.setAttribute(
          "data-category-id",
          btn.getAttribute("data-category") || "",
        );
        btn.setAttribute(
          "data-description-id",
          btn.getAttribute("data-description") || "",
        );
        btn.setAttribute(
          "data-location-id",
          btn.getAttribute("data-location") || "",
        );
      }
      if (lang === "en" && enTitle) {
        btn.setAttribute("data-title", enTitle);
        btn.setAttribute("data-category", enCategory || "");
        btn.setAttribute("data-description", enDescription || "");
        btn.setAttribute("data-location", enLocation || "");
      } else {
        btn.setAttribute("data-title", btn.getAttribute("data-title-id") || "");
        btn.setAttribute(
          "data-category",
          btn.getAttribute("data-category-id") || "",
        );
        btn.setAttribute(
          "data-description",
          btn.getAttribute("data-description-id") || "",
        );
        btn.setAttribute(
          "data-location",
          btn.getAttribute("data-location-id") || "",
        );
      }

      var span = btn.previousElementSibling;
      if (span && span.classList.contains("project-short-text")) {
        span.textContent = btn.getAttribute("data-description") || "";
      }

      var card = btn.closest(".project-card");
      var heading = card ? card.querySelector("h3") : null;
      if (heading) {
        heading.textContent = btn.getAttribute("data-title") || "";
      }
      var img = card ? card.querySelector("img") : null;
      if (img) {
        img.setAttribute("alt", btn.getAttribute("data-title") || "");
      }
    });

    updateMoreButtonsVisibility();
  }

  function updateMoreButtonsVisibility() {
    document.querySelectorAll(".project-short-text").forEach(function (span) {
      var btn = span.nextElementSibling;
      if (!btn || !btn.classList.contains("project-more")) return;
      if (!span.classList.contains("line-clamp-2")) {
        btn.classList.add("hidden");
        return;
      }
      var isOverflowing = span.scrollHeight - span.clientHeight > 1;
      btn.classList.toggle("hidden", !isOverflowing);
    });
  }

  function setLang(lang) {
    if (!translations[lang]) lang = "id";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateMoreButtonsVisibility, 150);
    });
  });

  window.gmI18n = { setLang: setLang, getLang: getLang };
})();
