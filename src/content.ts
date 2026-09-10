export type Language = "en" | "fa";

export type SiteCopy = {
  meta: {
    lang: Language;
    dir: "ltr" | "rtl";
    localeName: string;
  };
  nav: {
    identity: string;
    role: string;
    work: string;
    thinking: string;
    contact: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    contactNote: string;
    statusLabel: string;
    statusValue: string;
    detailLabel: string;
    detailValue: string;
    proofOne: string;
    proofTwo: string;
    proofThree: string;
    photoLabel: string;
  };
  featuredWork: {
    sectionLabel: string;
    eyebrow: string;
    title: string;
    summary: string;
    resultLabel: string;
    resultValue: string;
    roleLabel: string;
    roleValue: string;
    scopeLabel: string;
    scopeValue: string;
    mediaLabel: string;
    mediaPlaceholder: string;
    mediaNote: string;
    systemTitle: string;
    systemItems: string[];
    stackLabel: string;
    stack: string[];
    actionLabel: string;
    actionDetail: string;
    activeDetail: string;
  };
};

export const siteCopy: Record<Language, SiteCopy> = {
  en: {
    meta: {
      lang: "en",
      dir: "ltr",
      localeName: "English",
    },
    nav: {
      identity: "Artin Karimi",
      role: "Front-End Developer",
      work: "Work",
      thinking: "Thinking",
      contact: "Contact",
      languageLabel: "Switch language",
    },
    hero: {
      eyebrow: "Front-End Developer",
      title: "Frontend for real products, finished in the details.",
      titleAccent: "Artin Karimi",
      body:
        "I build frontend experiences for real products, with attention to the states, details, and interactions that make an interface feel ready to use.",
      primaryCta: "Start a conversation",
      secondaryCta: "See the first proof",
      contactNote: "Contact links will connect once the final channels are approved.",
      statusLabel: "Current focus",
      statusValue: "Product-grade frontend",
      detailLabel: "Working style",
      detailValue: "Clear first. Polished next. Shipped for real.",
      proofOne: "Responsive by design",
      proofTwo: "LTR / RTL ready",
      proofThree: "Reduced motion respected",
      photoLabel: "Personal photo placeholder",
    },
    featuredWork: {
      sectionLabel: "Featured work",
      eyebrow: "Real project proof",
      title: "Innoverse made competition flow manageable.",
      summary:
        "A competition platform built for ViaX Code Arena to manage participants, teams, problems, submissions, judging, and live leaderboard behavior.",
      resultLabel: "Competition result",
      resultValue: "Silver Medal",
      roleLabel: "Contribution",
      roleValue: "Team member and project presenter",
      scopeLabel: "Product scope",
      scopeValue: "Administration, anti-cheat thinking, submission processing, and AI-assisted judging feedback.",
      mediaLabel: "Innoverse media frame",
      mediaPlaceholder: "Screenshot-ready product frame",
      mediaNote: "Real Innoverse visuals can drop into this frame later.",
      systemTitle: "What the platform handled",
      systemItems: [
        "Participants and teams",
        "Problems and submissions",
        "Judging and feedback",
        "Leaderboard behavior",
      ],
      stackLabel: "Secondary technical context",
      stack: ["React", "Vite", "Tailwind", "PHP", "MySQL", "Docker", "Python"],
      actionLabel: "Preview project story",
      actionDetail: "The full case study route is not connected yet.",
      activeDetail:
        "Future story space reserved: problem, role, team decisions, judging flow, and shipped result.",
    },
  },
  fa: {
    meta: {
      lang: "fa",
      dir: "rtl",
      localeName: "فارسی",
    },
    nav: {
      identity: "آرتین کریمی",
      role: "توسعه‌دهنده فرانت‌اند",
      work: "کارها",
      thinking: "نگاه کاری",
      contact: "ارتباط",
      languageLabel: "تغییر زبان",
    },
    hero: {
      eyebrow: "توسعه‌دهنده فرانت‌اند",
      title: "فرانت‌اند برای محصول واقعی، پرداخت‌شده در جزئیات.",
      titleAccent: "آرتین کریمی",
      body:
        "من تجربه‌های فرانت‌اند برای محصولات واقعی می‌سازم؛ با توجه به وضعیت‌ها، جزئیات و تعامل‌هایی که باعث می‌شوند یک رابط آماده استفاده باشد.",
      primaryCta: "شروع گفتگو",
      secondaryCta: "دیدن اولین نشانه",
      contactNote: "لینک‌های ارتباطی بعد از تایید مسیرهای نهایی وصل می‌شوند.",
      statusLabel: "تمرکز فعلی",
      statusValue: "فرانت‌اند در سطح محصول",
      detailLabel: "سبک کار",
      detailValue: "اول واضح. بعد پرداخت‌شده. در نهایت قابل استفاده.",
      proofOne: "طراحی واکنش‌گرا",
      proofTwo: "آماده LTR / RTL",
      proofThree: "هماهنگ با کاهش حرکت",
      photoLabel: "جایگاه عکس شخصی",
    },
    featuredWork: {
      sectionLabel: "کار منتخب",
      eyebrow: "نمونه‌ای از پروژه واقعی",
      title: "Innoverse جریان مسابقه را قابل مدیریت کرد.",
      summary:
        "یک پلتفرم مسابقه برای ViaX Code Arena که برای مدیریت شرکت‌کننده‌ها، تیم‌ها، مسئله‌ها، ارسال‌ها، داوری و رفتار جدول رتبه‌بندی ساخته شد.",
      resultLabel: "نتیجه مسابقه",
      resultValue: "مدال نقره",
      roleLabel: "نقش",
      roleValue: "عضو تیم و ارائه‌دهنده پروژه",
      scopeLabel: "گستره محصول",
      scopeValue: "مدیریت، نگاه ضدتقلب، پردازش ارسال‌ها و بازخورد داوری با کمک هوش مصنوعی.",
      mediaLabel: "قاب رسانه Innoverse",
      mediaPlaceholder: "قاب آماده برای تصویر واقعی پروژه",
      mediaNote: "بعدا تصویر واقعی Innoverse به همین قاب اضافه می‌شود.",
      systemTitle: "پلتفرم چه چیزهایی را پوشش می‌داد",
      systemItems: [
        "شرکت‌کننده‌ها و تیم‌ها",
        "مسئله‌ها و ارسال‌ها",
        "داوری و بازخورد",
        "رفتار جدول رتبه‌بندی",
      ],
      stackLabel: "زمینه فنی در لایه دوم",
      stack: ["React", "Vite", "Tailwind", "PHP", "MySQL", "Docker", "Python"],
      actionLabel: "پیش‌نمایش داستان پروژه",
      actionDetail: "مسیر کیس‌استادی کامل هنوز وصل نشده است.",
      activeDetail:
        "فضای داستان آینده رزرو شد: مسئله، نقش، تصمیم‌های تیم، جریان داوری و نتیجه نهایی.",
    },
  },
};
