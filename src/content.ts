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
    screens: {
      label: string;
      alt: string;
    }[];
    systemTitle: string;
    systemItems: string[];
    stackLabel: string;
    stack: string[];
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
      title: "Frontend work for products people actually use.",
      titleAccent: "Artin Karimi",
      body:
        "I build interfaces with the less glamorous parts in mind too: responsive layouts, edge states, interaction details, and the polish that makes a product feel ready.",
      primaryCta: "See Innoverse",
      secondaryCta: "View product states",
      contactNote: "Focused on frontend roles and product-minded web work.",
      statusLabel: "Frontend focus",
      statusValue: "Product-grade frontend",
      detailLabel: "What I care about",
      detailValue: "Clear flows, careful states, and interfaces that hold together.",
      proofOne: "Responsive by design",
      proofTwo: "LTR / RTL ready",
      proofThree: "Reduced motion respected",
    },
    featuredWork: {
      sectionLabel: "Featured work",
      eyebrow: "Real project proof",
      title: "Innoverse was built for a real coding competition.",
      summary:
        "A team-built platform for ViaX Code Arena, covering the practical parts of a competition: participants, teams, problems, submissions, judging, and leaderboard behavior.",
      resultLabel: "Competition result",
      resultValue: "Silver Medal",
      roleLabel: "Contribution",
      roleValue: "Team member and project presenter",
      scopeLabel: "Product scope",
      scopeValue: "Administration, anti-cheat considerations, submission processing, and AI-assisted judging feedback.",
      mediaLabel: "Innoverse product screenshots",
      mediaPlaceholder: "ViaX Code Arena login, dashboard, problems, and leaderboard views",
      mediaNote: "Real project screens from the Innoverse competition platform.",
      screens: [
        {
          label: "Entry",
          alt:
            "ViaX Code Arena login screen with demo workspaces for participant, judge, and admin roles.",
        },
        {
          label: "Dashboard",
          alt:
            "ViaX Code Arena participant dashboard showing team progress, solved problems, score, rank, and recent submissions.",
        },
        {
          label: "Problems",
          alt:
            "ViaX Code Arena problems view with filters and solved programming challenge cards.",
        },
        {
          label: "Leaderboard",
          alt:
            "ViaX Code Arena leaderboard ranking teams by accepted score, solved problems, attempts, and acceptance timing.",
        },
      ],
      systemTitle: "What the product had to support",
      systemItems: [
        "Participants and teams",
        "Problems and submissions",
        "Judging and feedback",
        "Leaderboard behavior",
      ],
      stackLabel: "Built with",
      stack: ["React", "Vite", "Tailwind", "PHP", "MySQL", "Docker", "Python"],
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
      title: "فرانت‌اند برای محصولاتی که واقعاً استفاده می‌شوند.",
      titleAccent: "آرتین کریمی",
      body:
        "من رابط‌هایی می‌سازم که فقط در اولین نگاه خوب نیستند؛ واکنش‌گرایی، وضعیت‌های مختلف، جزئیات تعامل و حس آماده‌بودن محصول هم برایم مهم است.",
      primaryCta: "دیدن Innoverse",
      secondaryCta: "دیدن حالت‌های محصول",
      contactNote: "متمرکز بر فرانت‌اند و تجربه‌های وب محصول‌محور.",
      statusLabel: "تمرکز فرانت‌اند",
      statusValue: "فرانت‌اند در سطح محصول",
      detailLabel: "چیزی که برایم مهم است",
      detailValue: "جریان واضح، وضعیت‌های دقیق و رابطی که در استفاده واقعی دوام بیاورد.",
      proofOne: "طراحی واکنش‌گرا",
      proofTwo: "آماده LTR / RTL",
      proofThree: "هماهنگ با کاهش حرکت",
    },
    featuredWork: {
      sectionLabel: "کار منتخب",
      eyebrow: "نمونه‌ای از پروژه واقعی",
      title: "Innoverse برای یک مسابقه برنامه‌نویسی واقعی ساخته شد.",
      summary:
        "یک پلتفرم تیمی برای ViaX Code Arena که بخش‌های عملی مسابقه را پوشش می‌داد: شرکت‌کننده‌ها، تیم‌ها، مسئله‌ها، ارسال‌ها، داوری و رفتار جدول رتبه‌بندی.",
      resultLabel: "نتیجه مسابقه",
      resultValue: "مدال نقره",
      roleLabel: "نقش",
      roleValue: "عضو تیم و ارائه‌دهنده پروژه",
      scopeLabel: "گستره محصول",
      scopeValue: "مدیریت، ملاحظات ضدتقلب، پردازش ارسال‌ها و بازخورد داوری با کمک هوش مصنوعی.",
      mediaLabel: "تصاویر واقعی محصول Innoverse",
      mediaPlaceholder: "نمای ورود، داشبورد، مسئله‌ها و جدول رتبه‌بندی ViaX Code Arena",
      mediaNote: "تصاویر واقعی از پلتفرم مسابقه Innoverse.",
      screens: [
        {
          label: "ورود",
          alt:
            "صفحه ورود ViaX Code Arena با فضای نمونه برای نقش‌های شرکت‌کننده، داور و مدیر.",
        },
        {
          label: "داشبورد",
          alt:
            "داشبورد شرکت‌کننده در ViaX Code Arena با پیشرفت تیم، مسئله‌های حل‌شده، امتیاز، رتبه و ارسال‌های اخیر.",
        },
        {
          label: "مسئله‌ها",
          alt:
            "نمای مسئله‌های ViaX Code Arena با فیلترها و کارت‌های چالش‌های برنامه‌نویسی حل‌شده.",
        },
        {
          label: "رتبه‌بندی",
          alt:
            "جدول رتبه‌بندی ViaX Code Arena که تیم‌ها را بر اساس امتیاز پذیرفته‌شده، مسئله‌های حل‌شده، تلاش‌ها و زمان پذیرش مرتب می‌کند.",
        },
      ],
      systemTitle: "محصول باید چه چیزهایی را پشتیبانی می‌کرد",
      systemItems: [
        "شرکت‌کننده‌ها و تیم‌ها",
        "مسئله‌ها و ارسال‌ها",
        "داوری و بازخورد",
        "رفتار جدول رتبه‌بندی",
      ],
      stackLabel: "ساخته‌شده با",
      stack: ["React", "Vite", "Tailwind", "PHP", "MySQL", "Docker", "Python"],
    },
  },
};
