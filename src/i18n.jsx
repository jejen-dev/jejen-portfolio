import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const languages = [
    { code: "id", label: "Indonesia", short: "ID", dir: "ltr" },
    { code: "en", label: "English", short: "EN", dir: "ltr" },
    { code: "ja", label: "日本語", short: "JA", dir: "ltr" },
    { code: "ko", label: "한국어", short: "KO", dir: "ltr" },
    { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
];

const translations = {
    id: {
        nav: { about: "Tentang", journey: "Perjalanan", skills: "Keahlian", projects: "Proyek", certificate: "Sertifikat", contact: "Kontak", music: "Musik", play: "Putar", pause: "Jeda", language: "Bahasa" },
        hero: {
            typingPrefix: "Saya membuat",
            typing: ["aplikasi web modern", "UI responsif", "kode bersih dan cepat", "pengalaman yang nyaman"],
            role: "Software Developer",
            developer: "DEVELOPER",
            tags: ["Siap bekerja", "Software Developer", "Berbasis di 🇮🇩"],
            description: "Saya membangun aplikasi web dari antarmuka hingga integrasi API, dengan React, Next.js, dan JavaScript sebagai alat utama.",
            viewProjects: "Lihat Proyek",
            resume: "Resume",
            stats: ["Delivery produk", "Integrasi API", "Workflow AI"],
        },
        about: {
            eyebrow: "TENTANG",
            title: "Tentang Saya",
            p1: "Saya mengembangkan aplikasi web dengan React, TypeScript, dan Next.js. Proyek saya mencakup integrasi REST API, pengelolaan database, dan antarmuka responsif.",
            p2: "Saya menerapkan pendekatan terstruktur, pengujian, dan AI untuk menyelesaikan masalah nyata. Pengalaman di bidang operasional dan logistik membantu saya memahami kebutuhan bisnis.",
            tech: "TEKNOLOGI",
        },
        experience: {
            eyebrow: "TIMELINE",
            title: "Perjalanan Saya",
            items: [
                ["Mechanic", "Magang mekanik di bengkel resmi Suzuki, menangani 5–10 kendaraan setiap hari untuk perawatan rutin dan perbaikan besar. Terampil dalam diagnostik OBD, penggantian komponen (oli, filter, kampas rem, komponen mesin), serta perbaikan sistem rem, suspensi, dan kemudi. Memastikan semua pekerjaan lolos inspeksi kualitas dan mengikuti prosedur K3 dengan ketat."],
                ["SMK Teknik Kendaraan Ringan", "Lulus dengan fokus teknik otomotif, membangun disiplin, ketelitian, dan kemampuan memecahkan masalah yang masih memengaruhi cara saya menulis kode."],
                ["Shipping Staff", "Menjaga hubungan dengan klien, memastikan kelengkapan dan kualitas unit sebelum pengiriman, menjelaskan prosedur penggunaan, dan memastikan pengiriman tepat waktu."],
                ["Waiter", "Mencatat pesanan dengan akurat, menjelaskan menu spesial, menyajikan makanan dan minuman secara efisien, serta menjaga kebersihan area meja."],
                ["Belajar Software Development", "Belajar HTML, CSS, JavaScript, dan React secara mandiri sambil membangun proyek dan membaca dokumentasi."],
                ["Membangun Aplikasi Web", "Membuat Jonkira, Task Manager berbasis Kanban, dan Weather App dengan integrasi API real-time."],
            ],
        },
        skills: { eyebrow: "KEAHLIAN", title: "Keahlian", categories: ["Bahasa Pemrograman", "Framework & Pengembangan", "Database, AI & Testing", "Tools & DevOps"] },
        projects: {
            eyebrow: "KARYA",
            title: "Proyek",
            click: "Klik untuk lihat detail",
            modalEyebrow: "PROYEK",
            screenshot: "Screenshot segera hadir",
            liveDemo: "Demo Langsung",
            sourceCode: "Kode Sumber",
            descriptions: [
                "Website restoran responsif yang menunjukkan kemampuan membangun antarmuka produk dan pengalaman mobile-first.",
                "Papan Kanban dengan drag-and-drop dan penyimpanan lokal untuk mempertahankan tugas setelah halaman dimuat ulang.",
                "Aplikasi cuaca yang mengambil data real-time dari OpenWeatherMap; fungsi serverless Vercel menjaga API key di sisi server.",
            ],
        },
        certificate: {
            eyebrow: "SERTIFIKASI",
            title: "Sertifikat Profesional",
            zoom: "Klik untuk zoom",
            subtitle: "Front-End Developer Specialization",
            date: "Juni 2026",
            verified: "Terverifikasi",
            description: "Program Meta ini membangun fondasi web melalui JavaScript, React, version control, UX/UI, capstone, dan persiapan interview. Sertifikat menunjukkan pembelajaran terstruktur; proyek di bawah menunjukkan penerapannya.",
            completed: "9 kursus selesai",
            view: "Lihat Sertifikat",
            download: "Unduh PDF",
            closeZoom: "Tutup zoom",
        },
        contact: {
            eyebrow: "HUBUNGI SAYA",
            title: "Mari Bekerja Sama",
            description: "Punya proyek atau sekadar ingin menyapa? Saya selalu terbuka untuk peluang baru.",
            fields: [
                ["name", "Nama", "Nama lengkap Anda"],
                ["email", "Email", "anda@example.com"],
                ["subject", "Subjek", "Tentang apa pesan ini?"],
            ],
            message: "Pesan",
            messagePlaceholder: "Apa yang ingin Anda sampaikan?",
            success: "Pesan terkirim! Saya akan segera menghubungi Anda.",
            error: "Gagal mengirim. Coba lagi atau kirim email langsung.",
            sending: "Mengirim...",
            send: "Kirim Pesan",
            fallbackSubject: "Pesan dari Portfolio",
        },
        footer: { built: "Dibuat dengan React, Tailwind CSS & Framer Motion", top: "KEMBALI KE ATAS ↑" },
    },
    en: {
        nav: { about: "About", journey: "Journey", skills: "Skills", projects: "Projects", certificate: "Certificate", contact: "Contact", music: "Music", play: "Play", pause: "Pause", language: "Language" },
        hero: {
            typingPrefix: "I build",
            typing: ["modern web apps", "responsive UIs", "clean, fast code", "great experiences"],
            role: "Software Developer",
            developer: "DEVELOPER",
            tags: ["Open to work", "Software Developer", "Based in 🇮🇩"],
            description: "I build web applications from interface to API integration, using React, Next.js, and JavaScript to turn product needs into working software.",
            viewProjects: "View Projects",
            resume: "Resume",
            stats: ["Product delivery", "API integration", "AI workflow"],
        },
        about: {
            eyebrow: "ABOUT",
            title: "About Me",
            p1: "I build web applications with React, TypeScript, and Next.js. My projects include REST API integration, database management, and responsive interfaces.",
            p2: "I use structured development, testing, and AI to solve real problems. My operations and logistics experience helps me understand business needs.",
            tech: "TECH I USE",
        },
        experience: {
            eyebrow: "TIMELINE",
            title: "My Journey",
            items: [
                ["Mechanic", "Mechanic intern at an authorized Suzuki workshop, handling 5–10 vehicles daily for routine maintenance and major repairs. Skilled in OBD diagnostics, component replacement (oil, filters, brake pads, engine parts), and repair of braking, suspension, and steering systems. Ensure all work passes quality inspection and strictly follow OHS procedures."],
                ["SMK Light Vehicle Engineering", "Graduated with a focus in automotive engineering, building discipline, precision, and problem-solving skills that still shape how I write code."],
                ["Shipping Staff", "Maintained client relationships, ensured unit completeness and quality before shipment, explained usage procedures, and guaranteed on-time delivery."],
                ["Waiter", "Took accurate orders, explained daily specials, delivered food and beverages efficiently, and maintained clean table areas."],
                ["Learning Software Development", "Learning HTML, CSS, JavaScript, and React independently through documentation and hands-on projects."],
                ["Building Web Applications", "Built Jonkira, a Kanban task manager, and a weather app with real-time API integration."],
            ],
        },
        skills: { eyebrow: "EXPERTISE", title: "Skills", categories: ["Programming Languages", "Frameworks & Development", "Database, AI & Testing", "Tools & DevOps"] },
        projects: {
            eyebrow: "WORK",
            title: "Projects",
            click: "Click to view details",
            modalEyebrow: "PROJECT",
            screenshot: "Screenshot coming soon",
            liveDemo: "Live Demo",
            sourceCode: "Source Code",
            descriptions: [
                "A responsive restaurant website that demonstrates product interface design and a mobile-first experience.",
                "A Kanban board with drag-and-drop and local persistence, keeping tasks after a page reload.",
                "A weather app using live OpenWeatherMap data; Vercel serverless functions keep the API key on the server.",
            ],
        },
        certificate: {
            eyebrow: "CERTIFICATION",
            title: "Professional Certificate",
            zoom: "Click to zoom",
            subtitle: "Front-End Developer Specialization",
            date: "June 2026",
            verified: "Verified",
            description: "Meta's program covers JavaScript, React, version control, UX/UI, a capstone, and coding interview preparation. The certificate shows structured study; the projects below show how I apply it.",
            completed: "9 courses completed",
            view: "View Certificate",
            download: "Download PDF",
            closeZoom: "Close zoom",
        },
        contact: {
            eyebrow: "GET IN TOUCH",
            title: "Let's Work Together",
            description: "Have a project in mind or just want to say hello? I'm always open to new opportunities.",
            fields: [["name", "Name", "Your full name"], ["email", "Email", "you@example.com"], ["subject", "Subject", "What's this about?"]],
            message: "Message",
            messagePlaceholder: "What's on your mind?",
            success: "Message sent! I'll get back to you soon.",
            error: "Failed to send. Try again or email directly.",
            sending: "Sending...",
            send: "Send Message",
            fallbackSubject: "Message from Portfolio",
        },
        footer: { built: "Built with React, Tailwind CSS & Framer Motion", top: "BACK TO TOP ↑" },
    },
};

translations.ja = {
    ...translations.en,
    nav: { about: "概要", journey: "経歴", skills: "スキル", projects: "制作", certificate: "認定", contact: "連絡", music: "音楽", play: "再生", pause: "停止", language: "言語" },
    hero: { ...translations.en.hero, typingPrefix: "作っています", typing: ["モダンなWebアプリ", "レスポンシブUI", "速くきれいなコード", "心地よい体験"], tags: ["仕事受付中", "ソフトウェア開発者", "インドネシア在住 🇮🇩"], description: "React、Next.js、JavaScriptを使い、画面から API 連携までWebアプリを作っています。", viewProjects: "制作を見る", stats: ["プロダクト開発", "API連携", "AIワークフロー"] },
    about: { eyebrow: "概要", title: "私について", p1: "React、TypeScript、Next.jsを使ってWebアプリを開発しています。プロジェクトではREST API連携、データベース管理、レスポンシブなUIを扱っています。", p2: "構造的な開発、テスト、AIを活用して実際の課題を解決します。オペレーションと物流の経験を通じて、ビジネスニーズへの理解を深めました。", tech: "使用技術" },
    experience: { ...translations.en.experience, eyebrow: "タイムライン", title: "経歴", items: [["整備士", "スズキ正規販売店でメカニックインターンとして勤務し、毎日5～10台の車両の定期メンテナンスと大修理を担当。OBD診断、コンポーネント交換（オイル、フィルター、ブレーキパッド、エンジン部品）、ブレーキ・サスペンション・ステアリングシステムの修理に熟練。すべての作業が品質検査に合格することを確認し、労働安全衛生手順を厳守。"], ["SMK 軽自動車工学", "自動車工学を学び、規律、精度、問題解決力を身につけました。"], ["出荷スタッフ", "顧客対応、出荷前の品質確認、使用手順の説明、納期管理を担当しました。"], ["ウェイター", "正確な注文対応、日替わりメニューの説明、料理提供、テーブル清掃を行いました。"], ["ソフトウェア開発の学習", "HTML、CSS、JavaScript、Reactを独学し、ドキュメントと実践プロジェクトで学んでいます。"], ["Webアプリ制作", "Jonkira、Kanban型Task Manager、リアルタイムAPI連携のWeather Appを制作しました。"]] },
    skills: { eyebrow: "専門性", title: "スキル", categories: ["プログラミング言語", "フレームワーク & 開発", "データベース・AI・テスト", "ツール & DevOps"] },
    projects: { ...translations.en.projects, eyebrow: "制作", title: "プロジェクト", click: "クリックして詳細を見る", modalEyebrow: "プロジェクト", screenshot: "スクリーンショット準備中", liveDemo: "ライブデモ", sourceCode: "ソースコード", descriptions: ["クリーンなデザイン、滑らかなアニメーション、モバイルファースト対応のレストランLPです。", "ドラッグ&ドロップ、ローカル保存、整理されたUXを備えたKanbanアプリです。", "OpenWeatherMap API と Vercel Serverless Functions を使ったリアルタイム天気アプリです。"] },
    certificate: { ...translations.en.certificate, eyebrow: "認定", title: "プロフェッショナル認定", zoom: "クリックして拡大", date: "2026年6月", verified: "確認済み", description: "Meta公式認定。HTML/CSSの基礎から高度なReact、UX/UIデザイン、コーディング面接準備までを含みます。", completed: "9コース完了", view: "認定を見る", download: "PDFをダウンロード", closeZoom: "拡大表示を閉じる" },
    contact: { ...translations.en.contact, eyebrow: "お問い合わせ", title: "一緒に作りましょう", description: "プロジェクトの相談や挨拶だけでも歓迎です。新しい機会にいつでも open です。", fields: [["name", "名前", "お名前"], ["email", "メール", "you@example.com"], ["subject", "件名", "お問い合わせ内容"]], message: "メッセージ", messagePlaceholder: "メッセージを入力してください", success: "送信しました。 soon ご連絡します。", error: "送信に失敗しました。再試行するか直接メールしてください。", sending: "送信中...", send: "送信", fallbackSubject: "Portfolioからのメッセージ" },
    footer: { built: "React、Tailwind CSS、Framer Motionで制作", top: "上へ戻る ↑" },
};

translations.ko = {
    ...translations.en,
    nav: { about: "소개", journey: "여정", skills: "기술", projects: "프로젝트", certificate: "인증서", contact: "연락", music: "음악", play: "재생", pause: "일시정지", language: "언어" },
    hero: { ...translations.en.hero, typingPrefix: "저는 만듭니다", typing: ["모던 웹 앱", "반응형 UI", "깨끗하고 빠른 코드", "좋은 사용자 경험"], tags: ["구직 가능", "소프트웨어 개발자", "인도네시아 기반 🇮🇩"], description: "React, Next.js, JavaScript를 사용해 인터페이스부터 API 연동까지 웹 애플리케이션을 만듭니다.", viewProjects: "프로젝트 보기", stats: ["제품 배포", "API 연동", "AI 워크플로"] },
    about: { eyebrow: "소개", title: "소개", p1: "React, TypeScript, Next.js를 사용해 웹 애플리케이션을 개발합니다. 프로젝트에는 REST API 연동, 데이터베이스 관리, 반응형 인터페이스 구현이 포함됩니다.", p2: "구조적인 개발 방식과 테스트, AI를 활용해 실제 문제를 해결합니다. 운영 및 물류 경험을 통해 비즈니스 요구를 이해하고 있습니다.", tech: "사용 기술" },
    experience: { ...translations.en.experience, eyebrow: "타임라인", title: "나의 여정", items: [["정비사", "공인 스즈키 워크샵에서 정비 인턴으로 근무하며 매일 5~10대의 차량 정기 점검 및 대규모 수리를 담당했습니다. OBD 진단, 부품 교체(오일, 필터, 브레이크 패드, 엔진 부품), 브레이크, 서스펜션, 조향 시스템 수리에 능숙합니다. 모든 작업이 품질 검사를 통과하도록 보장하고 산업안전보건 절차를 엄격히 준수합니다."], ["SMK 경량 차량 공학", "자동차 공학을 전공하며 규율, 정확성, 문제 해결 능력을 키웠습니다."], ["출고 직원", "고객 관계 관리, 출고 전 품질 확인, 사용 절차 안내, 정시 배송을 담당했습니다."], ["웨이터", "정확한 주문 접수, 일일 메뉴 안내, 효율적인 서빙, 테이블 정리를 담당했습니다."], ["소프트웨어 개발 학습", "HTML, CSS, JavaScript, React를 독학하며 문서와 프로젝트로 배웁니다."], ["웹 애플리케이션 제작", "Jonkira, Kanban Task Manager, 실시간 API Weather App을 제작했습니다."]] },
    skills: { eyebrow: "전문성", title: "기술", categories: ["프로그래밍 언어", "프레임워크 & 개발", "데이터베이스·AI·테스트", "도구 & DevOps"] },
    projects: { ...translations.en.projects, eyebrow: "작업", title: "프로젝트", click: "클릭하여 자세히 보기", modalEyebrow: "프로젝트", screenshot: "스크린샷 준비 중", liveDemo: "라이브 데모", sourceCode: "소스 코드", descriptions: ["깔끔한 디자인, 부드러운 애니메이션, 모바일 우선 반응형 레스토랑 랜딩 페이지입니다.", "드래그 앤 드롭, 로컬 저장, 깔끔한 UX를 갖춘 Kanban 생산성 앱입니다.", "OpenWeatherMap API와 Vercel Serverless Functions를 사용한 실시간 날씨 앱입니다."] },
    certificate: { ...translations.en.certificate, eyebrow: "인증", title: "전문 인증서", zoom: "클릭하여 확대", date: "2026년 6월", verified: "검증됨", description: "Meta 공식 인증으로 HTML/CSS 기초부터 고급 React, UX/UI 디자인, 코딩 인터뷰 준비까지 다룹니다.", completed: "9개 과정 완료", view: "인증서 보기", download: "PDF 다운로드", closeZoom: "확대 닫기" },
    contact: { ...translations.en.contact, eyebrow: "연락하기", title: "함께 만들어 봅시다", description: "프로젝트가 있거나 인사만 하고 싶어도 좋습니다. 새로운 기회에 항상 열려 있습니다.", fields: [["name", "이름", "성함"], ["email", "이메일", "you@example.com"], ["subject", "제목", "무엇에 관한 메시지인가요?"]], message: "메시지", messagePlaceholder: "무엇을 이야기하고 싶나요?", success: "메시지가 전송되었습니다. 곧 연락드리겠습니다.", error: "전송에 실패했습니다. 다시 시도하거나 직접 이메일을 보내주세요.", sending: "전송 중...", send: "메시지 보내기", fallbackSubject: "Portfolio에서 온 메시지" },
    footer: { built: "React, Tailwind CSS & Framer Motion으로 제작", top: "맨 위로 ↑" },
};

translations.ar = {
    ...translations.en,
    nav: { about: "نبذة", journey: "المسار", skills: "المهارات", projects: "المشاريع", certificate: "الشهادة", contact: "تواصل", music: "الموسيقى", play: "تشغيل", pause: "إيقاف", language: "اللغة" },
    hero: { ...translations.en.hero, typingPrefix: "أبني", typing: ["تطبيقات ويب حديثة", "واجهات متجاوبة", "كودا نظيفا وسريعا", "تجارب استخدام مميزة"], tags: ["متاح للعمل", "مطور برمجيات", "مقيم في 🇮🇩"], description: "أبني تطبيقات ويب باستخدام React و Next.js و JavaScript، من الواجهات إلى تكامل API.", viewProjects: "عرض المشاريع", stats: ["تسليم المنتج", "تكامل API", "سير عمل AI"] },
    about: { eyebrow: "نبذة", title: "من أنا", p1: "أطوّر تطبيقات ويب باستخدام React وTypeScript وNext.js. تشمل مشاريعي تكامل REST API وإدارة قواعد البيانات وبناء واجهات متجاوبة.", p2: "أستخدم أساليب تطوير منظمة والاختبارات والذكاء الاصطناعي لحل مشكلات واقعية. تساعدني خبرتي في العمليات والخدمات اللوجستية على فهم احتياجات الأعمال.", tech: "التقنيات" },
    experience: { ...translations.en.experience, eyebrow: "الخط الزمني", title: "مساري", items: [["ميكانيكي", "متدرب ميكانيكي في ورشة سوزوكي المعتمدة، أتعامل مع 5–10 مركبات يومياً للصيانة الدورية والإصلاحات الكبرى. ماهر في تشخيص OBD، واستبدال المكونات (الزيت، الفلاتر، وسادات الفرامل، أجزاء المحرك)، وإصلاح أنظمة الفرامل والتعليق والتوجيه. أضمن اجتياز جميع الأعمال لفحص الجودة، وألتزم بإجراءات الصحة والسلامة المهنية بدقة."], ["هندسة المركبات الخفيفة", "تخرجت بتركيز على هندسة السيارات، واكتسبت الانضباط والدقة ومهارات حل المشكلات."], ["موظف شحن", "حافظت على علاقات العملاء، وتحققت من جودة الوحدات قبل الشحن، وشرحت إجراءات الاستخدام، وضمنت التسليم في الوقت المحدد."], ["نادل", "سجلت الطلبات بدقة، وشرحت العروض اليومية، وقدمت الطعام والمشروبات بكفاءة، وحافظت على نظافة الطاولات."], ["تعلم تطوير البرمجيات", "أتعلم HTML و CSS و JavaScript و React ذاتيا من الوثائق والمشاريع العملية."], ["بناء تطبيقات ويب", "أنشأت Jonkira و Task Manager بنظام Kanban و Weather App بتكامل API لحظي."]] },
    skills: { eyebrow: "الخبرة", title: "المهارات", categories: ["لغات البرمجة", "أطر العمل والتطوير", "قواعد البيانات والذكاء الاصطناعي والاختبار", "الأدوات وDevOps"] },
    projects: { ...translations.en.projects, eyebrow: "الأعمال", title: "المشاريع", click: "اضغط لعرض التفاصيل", modalEyebrow: "مشروع", screenshot: "الصورة قريبا", liveDemo: "عرض مباشر", sourceCode: "الكود المصدري", descriptions: ["صفحة هبوط حديثة لمطعم بتصميم نظيف وحركات سلسة واستجابة ممتازة للجوال.", "تطبيق Kanban للإنتاجية مع السحب والإفلات والحفظ المحلي وتجربة استخدام واضحة.", "تطبيق طقس لحظي باستخدام OpenWeatherMap API و Vercel Serverless Functions لحماية المفتاح."] },
    certificate: { ...translations.en.certificate, eyebrow: "الشهادة", title: "شهادة احترافية", zoom: "اضغط للتكبير", date: "يونيو 2026", verified: "موثقة", description: "شهادة رسمية من Meta تغطي مهارات تطوير الواجهات الأمامية من أساسيات HTML و CSS إلى React المتقدم وتصميم UX/UI والتحضير لمقابلات البرمجة.", completed: "تم إكمال 9 دورات", view: "عرض الشهادة", download: "تحميل PDF", closeZoom: "إغلاق التكبير" },
    contact: { ...translations.en.contact, eyebrow: "تواصل معي", title: "لنعمل معا", description: "هل لديك مشروع أو تريد فقط إلقاء التحية؟ أنا منفتح دائما على فرص جديدة.", fields: [["name", "الاسم", "اسمك الكامل"], ["email", "البريد", "you@example.com"], ["subject", "الموضوع", "عن ماذا الرسالة؟"]], message: "الرسالة", messagePlaceholder: "ما الذي تريد قوله؟", success: "تم إرسال الرسالة! سأرد عليك قريبا.", error: "فشل الإرسال. حاول مرة أخرى أو راسلني مباشرة.", sending: "جار الإرسال...", send: "إرسال الرسالة", fallbackSubject: "رسالة من Portfolio" },
    footer: { built: "تم بناؤه باستخدام React و Tailwind CSS و Framer Motion", top: "العودة للأعلى ↑" },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "id");
    const currentLanguage = languages.find((item) => item.code === language) || languages[0];

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
        document.documentElement.dir = currentLanguage.dir;
    }, [currentLanguage.dir, language]);

    const value = useMemo(() => ({
        language,
        setLanguage,
        currentLanguage,
        languages,
        t: translations[language] || translations.id,
    }), [currentLanguage, language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}
