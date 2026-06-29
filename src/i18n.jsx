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
            role: "Front-End Developer",
            developer: "DEVELOPER",
            tags: ["Siap bekerja", "Front-End Developer", "Berbasis di 🇮🇩"],
            description: "Front-End Developer dengan latar belakang Teknik Kendaraan Ringan, bersemangat membangun web app responsif, modern, dan ramah pengguna dengan React dan Tailwind CSS.",
            viewProjects: "Lihat Proyek",
            resume: "Resume",
            stats: ["Proyek", "Ekosistem", "Fokus UI"],
        },
        about: {
            eyebrow: "TENTANG",
            title: "Tentang Saya",
            p1: "Saya adalah Front-End Developer otodidak dengan latar belakang yang tidak biasa. Saya lulus dari SMK Teknik Kendaraan Ringan, lalu beralih ke software development karena rasa ingin tahu dan passion. Sejak 2025, saya membangun aplikasi web dengan React dan Tailwind CSS, berfokus pada kode yang rapi, interaksi halus, dan antarmuka yang nyaman digunakan.",
            p2: "Saat tidak coding, saya mengeksplorasi tools baru, membaca dokumentasi, dan mencari cara membuat web terasa lebih indah.",
            tech: "TEKNOLOGI",
        },
        experience: {
            eyebrow: "TIMELINE",
            title: "Perjalanan Saya",
            items: [
                ["Mechanic", "Melakukan inspeksi kualitas produksi, perawatan rutin mesin, serta menyusun laporan harian, mingguan, dan bulanan terkait produksi, kualitas, dan kendala."],
                ["SMK Teknik Kendaraan Ringan", "Lulus dengan fokus teknik otomotif, membangun disiplin, ketelitian, dan kemampuan memecahkan masalah yang masih memengaruhi cara saya menulis kode."],
                ["Shipping Staff", "Menjaga hubungan dengan klien, memastikan kelengkapan dan kualitas unit sebelum pengiriman, menjelaskan prosedur penggunaan, dan memastikan pengiriman tepat waktu."],
                ["Waiter", "Mencatat pesanan dengan akurat, menjelaskan menu spesial, menyajikan makanan dan minuman secara efisien, serta menjaga kebersihan area meja."],
                ["Front-End Developer (Otodidak)", "Belajar HTML, CSS, JavaScript, dan React dari nol. Mulai membangun proyek kecil, rajin membaca dokumentasi, dan terus berkembang."],
                ["Membangun Proyek React Siap Produksi", "Membuat aplikasi nyata termasuk Jonkira, Task Manager berbasis Kanban, dan Weather App dengan integrasi API real-time."],
            ],
        },
        skills: { eyebrow: "KEAHLIAN", title: "Keahlian", categories: ["Frontend", "Tools & Version Control", "Design & Motion", "Deployment & API"] },
        projects: {
            eyebrow: "KARYA",
            title: "Proyek",
            click: "Klik untuk lihat detail",
            modalEyebrow: "PROYEK",
            screenshot: "Screenshot segera hadir",
            liveDemo: "Demo Langsung",
            sourceCode: "Kode Sumber",
            descriptions: [
                "Landing page restoran modern dengan desain bersih, animasi halus, dan responsivitas mobile-first.",
                "Aplikasi Kanban untuk produktivitas dengan drag-and-drop, penyimpanan lokal, dan UX yang rapi.",
                "Aplikasi cuaca real-time berbasis OpenWeatherMap API, memakai Vercel Serverless Functions untuk menjaga API key.",
            ],
        },
        certificate: {
            eyebrow: "SERTIFIKASI",
            title: "Sertifikat Profesional",
            zoom: "Klik untuk zoom",
            subtitle: "Front-End Developer Specialization",
            date: "Juni 2026",
            verified: "Terverifikasi",
            description: "Sertifikasi resmi dari Meta yang mencakup keterampilan front-end lengkap, dari dasar HTML dan CSS hingga React lanjutan, desain UX/UI, dan persiapan coding interview.",
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
            role: "Front-End Developer",
            developer: "DEVELOPER",
            tags: ["Open to work", "Front-End Developer", "Based in 🇮🇩"],
            description: "Front-End Developer with a background in Light Vehicle Engineering, passionate about building responsive, modern, and user-friendly web apps with React and Tailwind CSS.",
            viewProjects: "View Projects",
            resume: "Resume",
            stats: ["Projects", "Ecosystem", "UI Focused"],
        },
        about: {
            eyebrow: "ABOUT",
            title: "About Me",
            p1: "I'm a self-taught Front-End Developer with an unconventional background. I graduated from SMK Light Vehicle Engineering, then pivoted to software development out of curiosity and passion. Since 2025, I've been building web applications with React and Tailwind CSS, focusing on clean code, smooth interactions, and interfaces that feel good to use.",
            p2: "When I'm not coding, I'm exploring new tools, reading documentation, and looking for ways to make the web a little more beautiful.",
            tech: "TECH I USE",
        },
        experience: {
            eyebrow: "TIMELINE",
            title: "My Journey",
            items: [
                ["Mechanic", "Conducted quality inspections during production, performed routine machinery maintenance, and compiled daily, weekly, and monthly reports on production, quality, and issues."],
                ["SMK Light Vehicle Engineering", "Graduated with a focus in automotive engineering, building discipline, precision, and problem-solving skills that still shape how I write code."],
                ["Shipping Staff", "Maintained client relationships, ensured unit completeness and quality before shipment, explained usage procedures, and guaranteed on-time delivery."],
                ["Waiter", "Took accurate orders, explained daily specials, delivered food and beverages efficiently, and maintained clean table areas."],
                ["Front-End Developer (Self-Taught)", "Self-taught HTML, CSS, JavaScript, and React from scratch. Started building small projects, reading documentation, and improving continuously."],
                ["Building Production-Ready React Projects", "Created real-world applications including Jonkira, Task Manager with Kanban, and Weather App with real-time API integration."],
            ],
        },
        skills: { eyebrow: "EXPERTISE", title: "Skills", categories: ["Frontend", "Tools & Version Control", "Design & Motion", "Deployment & APIs"] },
        projects: {
            eyebrow: "WORK",
            title: "Projects",
            click: "Click to view details",
            modalEyebrow: "PROJECT",
            screenshot: "Screenshot coming soon",
            liveDemo: "Live Demo",
            sourceCode: "Source Code",
            descriptions: [
                "A modern restaurant landing page with clean design, smooth animations, and mobile-first responsiveness.",
                "Productivity-focused Kanban app with drag-and-drop interactions, local storage persistence, and clean UX.",
                "Real-time weather application powered by OpenWeatherMap API, with Vercel Serverless Functions for secure key handling.",
            ],
        },
        certificate: {
            eyebrow: "CERTIFICATION",
            title: "Professional Certificate",
            zoom: "Click to zoom",
            subtitle: "Front-End Developer Specialization",
            date: "June 2026",
            verified: "Verified",
            description: "Official certification from Meta, covering comprehensive front-end development skills from HTML and CSS fundamentals to advanced React, UX/UI design, and coding interview preparation.",
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
    hero: { ...translations.en.hero, typingPrefix: "作っています", typing: ["モダンなWebアプリ", "レスポンシブUI", "速くきれいなコード", "心地よい体験"], tags: ["仕事受付中", "フロントエンド開発者", "インドネシア在住 🇮🇩"], description: "軽自動車工学のバックグラウンドを持つフロントエンド開発者です。React と Tailwind CSS で、レスポンシブで使いやすいモダンなWebアプリを作っています。", viewProjects: "制作を見る", stats: ["制作", "エコシステム", "UI重視"] },
    about: { eyebrow: "概要", title: "私について", p1: "私は独学のフロントエンド開発者です。SMKの軽自動車工学を卒業後、好奇心と情熱からソフトウェア開発へ進みました。2025年から React と Tailwind CSS でWebアプリを作り、きれいなコード、滑らかな操作感、使いやすいUIを大切にしています。", p2: "コーディング以外では、新しいツールを試し、ドキュメントを読み、Webをより美しくする方法を探しています。", tech: "使用技術" },
    experience: { ...translations.en.experience, eyebrow: "タイムライン", title: "経歴", items: [["整備士", "生産時の品質確認、機械の定期メンテナンス、日次・週次・月次レポート作成を担当しました。"], ["SMK 軽自動車工学", "自動車工学を学び、規律、精度、問題解決力を身につけました。"], ["出荷スタッフ", "顧客対応、出荷前の品質確認、使用手順の説明、納期管理を担当しました。"], ["ウェイター", "正確な注文対応、日替わりメニューの説明、料理提供、テーブル清掃を行いました。"], ["フロントエンド開発者（独学）", "HTML、CSS、JavaScript、Reactをゼロから学び、小さなプロジェクトを作りながら成長しました。"], ["本番品質のReactプロジェクト制作", "Jonkira、Kanban型Task Manager、リアルタイムAPI連携のWeather Appを制作しました。"]] },
    skills: { eyebrow: "専門性", title: "スキル", categories: ["フロントエンド", "ツール & バージョン管理", "デザイン & モーション", "デプロイ & API"] },
    projects: { ...translations.en.projects, eyebrow: "制作", title: "プロジェクト", click: "クリックして詳細を見る", modalEyebrow: "プロジェクト", screenshot: "スクリーンショット準備中", liveDemo: "ライブデモ", sourceCode: "ソースコード", descriptions: ["クリーンなデザイン、滑らかなアニメーション、モバイルファースト対応のレストランLPです。", "ドラッグ&ドロップ、ローカル保存、整理されたUXを備えたKanbanアプリです。", "OpenWeatherMap API と Vercel Serverless Functions を使ったリアルタイム天気アプリです。"] },
    certificate: { ...translations.en.certificate, eyebrow: "認定", title: "プロフェッショナル認定", zoom: "クリックして拡大", date: "2026年6月", verified: "確認済み", description: "Meta公式認定。HTML/CSSの基礎から高度なReact、UX/UIデザイン、コーディング面接準備までを含みます。", completed: "9コース完了", view: "認定を見る", download: "PDFをダウンロード", closeZoom: "拡大表示を閉じる" },
    contact: { ...translations.en.contact, eyebrow: "お問い合わせ", title: "一緒に作りましょう", description: "プロジェクトの相談や挨拶だけでも歓迎です。新しい機会にいつでも open です。", fields: [["name", "名前", "お名前"], ["email", "メール", "you@example.com"], ["subject", "件名", "お問い合わせ内容"]], message: "メッセージ", messagePlaceholder: "メッセージを入力してください", success: "送信しました。 soon ご連絡します。", error: "送信に失敗しました。再試行するか直接メールしてください。", sending: "送信中...", send: "送信", fallbackSubject: "Portfolioからのメッセージ" },
    footer: { built: "React、Tailwind CSS、Framer Motionで制作", top: "上へ戻る ↑" },
};

translations.ko = {
    ...translations.en,
    nav: { about: "소개", journey: "여정", skills: "기술", projects: "프로젝트", certificate: "인증서", contact: "연락", music: "음악", play: "재생", pause: "일시정지", language: "언어" },
    hero: { ...translations.en.hero, typingPrefix: "저는 만듭니다", typing: ["모던 웹 앱", "반응형 UI", "깨끗하고 빠른 코드", "좋은 사용자 경험"], tags: ["구직 가능", "프론트엔드 개발자", "인도네시아 기반 🇮🇩"], description: "경량 차량 공학 배경을 가진 프론트엔드 개발자입니다. React와 Tailwind CSS로 반응형, 현대적, 사용자 친화적인 웹 앱을 만듭니다.", viewProjects: "프로젝트 보기", stats: ["프로젝트", "생태계", "UI 중심"] },
    about: { eyebrow: "소개", title: "소개", p1: "저는 독학으로 성장한 프론트엔드 개발자입니다. SMK 경량 차량 공학을 졸업한 뒤 호기심과 열정으로 소프트웨어 개발에 도전했습니다. 2025년부터 React와 Tailwind CSS로 웹 애플리케이션을 만들며, 깔끔한 코드와 부드러운 인터랙션, 사용하기 좋은 UI에 집중하고 있습니다.", p2: "코딩하지 않을 때는 새로운 도구를 탐색하고 문서를 읽으며 웹을 더 아름답게 만드는 방법을 찾습니다.", tech: "사용 기술" },
    experience: { ...translations.en.experience, eyebrow: "타임라인", title: "나의 여정", items: [["정비사", "생산 품질 검사, 기계 정기 점검, 생산과 품질 관련 일간/주간/월간 보고서를 작성했습니다."], ["SMK 경량 차량 공학", "자동차 공학을 전공하며 규율, 정확성, 문제 해결 능력을 키웠습니다."], ["출고 직원", "고객 관계 관리, 출고 전 품질 확인, 사용 절차 안내, 정시 배송을 담당했습니다."], ["웨이터", "정확한 주문 접수, 일일 메뉴 안내, 효율적인 서빙, 테이블 정리를 담당했습니다."], ["프론트엔드 개발자 (독학)", "HTML, CSS, JavaScript, React를 기초부터 독학하고 작은 프로젝트를 만들며 성장했습니다."], ["프로덕션 수준 React 프로젝트 제작", "Jonkira, Kanban Task Manager, 실시간 API Weather App을 제작했습니다."]] },
    skills: { eyebrow: "전문성", title: "기술", categories: ["프론트엔드", "도구 & 버전 관리", "디자인 & 모션", "배포 & API"] },
    projects: { ...translations.en.projects, eyebrow: "작업", title: "프로젝트", click: "클릭하여 자세히 보기", modalEyebrow: "프로젝트", screenshot: "스크린샷 준비 중", liveDemo: "라이브 데모", sourceCode: "소스 코드", descriptions: ["깔끔한 디자인, 부드러운 애니메이션, 모바일 우선 반응형 레스토랑 랜딩 페이지입니다.", "드래그 앤 드롭, 로컬 저장, 깔끔한 UX를 갖춘 Kanban 생산성 앱입니다.", "OpenWeatherMap API와 Vercel Serverless Functions를 사용한 실시간 날씨 앱입니다."] },
    certificate: { ...translations.en.certificate, eyebrow: "인증", title: "전문 인증서", zoom: "클릭하여 확대", date: "2026년 6월", verified: "검증됨", description: "Meta 공식 인증으로 HTML/CSS 기초부터 고급 React, UX/UI 디자인, 코딩 인터뷰 준비까지 다룹니다.", completed: "9개 과정 완료", view: "인증서 보기", download: "PDF 다운로드", closeZoom: "확대 닫기" },
    contact: { ...translations.en.contact, eyebrow: "연락하기", title: "함께 만들어 봅시다", description: "프로젝트가 있거나 인사만 하고 싶어도 좋습니다. 새로운 기회에 항상 열려 있습니다.", fields: [["name", "이름", "성함"], ["email", "이메일", "you@example.com"], ["subject", "제목", "무엇에 관한 메시지인가요?"]], message: "메시지", messagePlaceholder: "무엇을 이야기하고 싶나요?", success: "메시지가 전송되었습니다. 곧 연락드리겠습니다.", error: "전송에 실패했습니다. 다시 시도하거나 직접 이메일을 보내주세요.", sending: "전송 중...", send: "메시지 보내기", fallbackSubject: "Portfolio에서 온 메시지" },
    footer: { built: "React, Tailwind CSS & Framer Motion으로 제작", top: "맨 위로 ↑" },
};

translations.ar = {
    ...translations.en,
    nav: { about: "نبذة", journey: "المسار", skills: "المهارات", projects: "المشاريع", certificate: "الشهادة", contact: "تواصل", music: "الموسيقى", play: "تشغيل", pause: "إيقاف", language: "اللغة" },
    hero: { ...translations.en.hero, typingPrefix: "أبني", typing: ["تطبيقات ويب حديثة", "واجهات متجاوبة", "كودا نظيفا وسريعا", "تجارب استخدام مميزة"], tags: ["متاح للعمل", "مطور واجهات أمامية", "مقيم في 🇮🇩"], description: "مطور واجهات أمامية بخلفية في هندسة المركبات الخفيفة، أعمل على بناء تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام باستخدام React و Tailwind CSS.", viewProjects: "عرض المشاريع", stats: ["مشاريع", "النظام", "تركيز UI"] },
    about: { eyebrow: "نبذة", title: "من أنا", p1: "أنا مطور واجهات أمامية تعلمت ذاتيا بخلفية غير تقليدية. تخرجت في هندسة المركبات الخفيفة ثم انتقلت إلى تطوير البرمجيات بدافع الفضول والشغف. منذ 2025 أبني تطبيقات ويب باستخدام React و Tailwind CSS مع تركيز على الكود النظيف والتفاعلات السلسة والواجهات المريحة.", p2: "عندما لا أبرمج، أستكشف أدوات جديدة، أقرأ الوثائق، وأبحث عن طرق تجعل الويب أجمل.", tech: "التقنيات" },
    experience: { ...translations.en.experience, eyebrow: "الخط الزمني", title: "مساري", items: [["ميكانيكي", "أجريت فحوصات جودة أثناء الإنتاج، وصيانة روتينية للآلات، وأعددت تقارير يومية وأسبوعية وشهرية."], ["هندسة المركبات الخفيفة", "تخرجت بتركيز على هندسة السيارات، واكتسبت الانضباط والدقة ومهارات حل المشكلات."], ["موظف شحن", "حافظت على علاقات العملاء، وتحققت من جودة الوحدات قبل الشحن، وشرحت إجراءات الاستخدام، وضمنت التسليم في الوقت المحدد."], ["نادل", "سجلت الطلبات بدقة، وشرحت العروض اليومية، وقدمت الطعام والمشروبات بكفاءة، وحافظت على نظافة الطاولات."], ["مطور واجهات أمامية (تعلم ذاتي)", "تعلمت HTML و CSS و JavaScript و React من الصفر، وبنيت مشاريع صغيرة مع قراءة مستمرة للوثائق."], ["بناء مشاريع React جاهزة للإنتاج", "أنشأت تطبيقات عملية مثل Jonkira و Task Manager بنظام Kanban و Weather App بتكامل API لحظي."]] },
    skills: { eyebrow: "الخبرة", title: "المهارات", categories: ["الواجهات الأمامية", "الأدوات وإدارة الإصدارات", "التصميم والحركة", "النشر وواجهات API"] },
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
