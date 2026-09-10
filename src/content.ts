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
    artifactTitle: string;
    artifactNote: string;
    artifactItems: string[];
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
      eyebrow: "Front-End Developer / real product interfaces",
      title: "I build frontends that hold up in real use.",
      titleAccent: "Artin Karimi",
      body:
        "Not just the first clean screen. I care about the states, edges, and small interactions that make a product feel ready.",
      primaryCta: "Start a conversation",
      secondaryCta: "Look at the work",
      contactNote: "Direct contact links will be connected once the final channels are approved.",
      statusLabel: "How the work should feel",
      statusValue: "clear, tactile, finished",
      detailLabel: "Built for",
      detailValue: "people using real products, not portfolio screenshots",
      proofOne: "Responsive from the start",
      proofTwo: "English and Persian",
      proofThree: "Motion that steps aside",
      photoLabel: "Personal photo placeholder",
    },
    featuredWork: {
      sectionLabel: "Work, as evidence",
      eyebrow: "Innoverse / ViaX Code Arena",
      title: "A competition platform with real moving parts.",
      summary:
        "Innoverse was built for ViaX Code Arena to handle the practical flow of a competition: participants, teams, problems, submissions, judging, and live rankings.",
      resultLabel: "Competition result",
      resultValue: "Silver Medal",
      roleLabel: "Contribution",
      roleValue: "Team member and project presenter",
      scopeLabel: "Product scope",
      scopeValue:
        "Administration, anti-cheat considerations, submission processing, and AI-assisted judging feedback.",
      mediaLabel: "Abstract Innoverse project artifact",
      artifactTitle: "Competition system map",
      artifactNote:
        "An abstract view of teams, submissions, judging, and ranking moving through one product system.",
      artifactItems: ["Teams", "Problems", "Submissions", "Judging", "Leaderboard"],
      systemTitle: "What it had to coordinate",
      systemItems: [
        "Participants and teams",
        "Problems and submissions",
        "Judging and feedback",
        "Leaderboard behavior",
      ],
      stackLabel: "Secondary technical context",
      stack: ["React", "Vite", "Tailwind", "PHP", "MySQL", "Docker", "Python"],
      actionLabel: "Open the story outline",
      actionDetail: "The full case study is intentionally not connected yet.",
      activeDetail:
        "Reserved for the real case study: product problem, team role, judging flow, technical decisions, and the shipped competition result.",
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
      eyebrow: "توسعه‌دهنده فرانت‌اند / رابط‌های محصول واقعی",
      title: "فرانت‌اندی می‌سازم که در استفاده واقعی دوام بیاورد.",
      titleAccent: "آرتین کریمی",
      body:
        "فقط صفحه اولِ تمیز مهم نیست. من به وضعیت‌ها، لبه‌ها و تعامل‌های کوچکی توجه می‌کنم که محصول را آماده استفاده نشان می‌دهند.",
      primaryCta: "شروع گفتگو",
      secondaryCta: "دیدن کار",
      contactNote: "لینک‌های مستقیم ارتباط بعد از تایید مسیرهای نهایی وصل می‌شوند.",
      statusLabel: "حس نهایی کار",
      statusValue: "واضح، لمسی، کامل",
      detailLabel: "ساخته‌شده برای",
      detailValue: "آدم‌هایی که با محصول واقعی کار می‌کنند، نه فقط اسکرین‌شات رزومه",
      proofOne: "واکنش‌گرا از ابتدا",
      proofTwo: "انگلیسی و فارسی",
      proofThree: "حرکت بدون مزاحمت",
      photoLabel: "جایگاه عکس شخصی",
    },
    featuredWork: {
      sectionLabel: "کار، به‌عنوان مدرک",
      eyebrow: "Innoverse / ViaX Code Arena",
      title: "یک پلتفرم مسابقه با بخش‌های واقعی و درگیر.",
      summary:
        "Innoverse برای ViaX Code Arena ساخته شد تا جریان عملی یک مسابقه را پوشش دهد: شرکت‌کننده‌ها، تیم‌ها، مسئله‌ها، ارسال‌ها، داوری و رتبه‌بندی زنده.",
      resultLabel: "نتیجه مسابقه",
      resultValue: "مدال نقره",
      roleLabel: "نقش",
      roleValue: "عضو تیم و ارائه‌دهنده پروژه",
      scopeLabel: "گستره محصول",
      scopeValue: "مدیریت، نگاه ضدتقلب، پردازش ارسال‌ها و بازخورد داوری با کمک هوش مصنوعی.",
      mediaLabel: "آرتیفکت انتزاعی پروژه Innoverse",
      artifactTitle: "نقشه سیستم مسابقه",
      artifactNote:
        "برداشتی انتزاعی از حرکت تیم‌ها، ارسال‌ها، داوری و رتبه‌بندی در یک سیستم محصول.",
      artifactItems: ["تیم‌ها", "مسئله‌ها", "ارسال‌ها", "داوری", "رتبه‌بندی"],
      systemTitle: "چه چیزهایی را باید هماهنگ می‌کرد",
      systemItems: [
        "شرکت‌کننده‌ها و تیم‌ها",
        "مسئله‌ها و ارسال‌ها",
        "داوری و بازخورد",
        "رفتار جدول رتبه‌بندی",
      ],
      stackLabel: "زمینه فنی در لایه دوم",
      stack: ["React", "Vite", "Tailwind", "PHP", "MySQL", "Docker", "Python"],
      actionLabel: "باز کردن طرح داستان",
      actionDetail: "کیس‌استادی کامل فعلا عمدا وصل نشده است.",
      activeDetail:
        "رزرو برای کیس‌استادی واقعی: مسئله محصول، نقش تیمی، جریان داوری، تصمیم‌های فنی و نتیجه مسابقه.",
    },
  },
};
