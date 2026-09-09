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

      "cara_order.image": "assets/images/Cara-Order-ID.jpg",
    },

    en: {
      "nav.beranda": "HOME",
      "nav.proyek_kami": "OUR PROJECTS",
      "nav.proyek_jabodetabek": "Jabodetabek Projects",
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
        "Discover Our Completed Projects in the Jabodetabek Area",
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
