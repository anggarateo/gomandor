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
      "proyek.more": "more",

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
      "project.gastro.location": "Sanur, Bali",

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
      "project.gastro.location": "Sanur, Bali",

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
  });

  window.gmI18n = { setLang: setLang, getLang: getLang };
})();
