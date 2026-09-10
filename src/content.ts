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
  howIWork: {
    eyebrow: string;
    title: string;
    intro: string;
    proofs: {
      number: string;
      context: string;
      title: string;
      evidence: string;
      trace: string[];
    }[];
  };
  jazireh: {
    eyebrow: string;
    title: string;
    intro: string;
    mediaLabel: string;
    mediaNote: string;
    mediaAlt: string;
    technicalLabel: string;
    plainLabel: string;
    stages: {
      id: string;
      label: string;
      technical: string;
      plain: string;
      detail: string;
    }[];
    contract: {
      expectedLabel: string;
      receivedLabel: string;
      expectedValue: string;
      receivedValues: string[];
    };
    resolution: string;
    contextLine: string;
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
    howIWork: {
      eyebrow: "How I work",
      title: "The screenshot is only the easy part.",
      intro:
        "The real work is everything around it: states, edge cases, production bugs, and the small decisions people actually feel.",
      proofs: [
        {
          number: "01",
          context: "Innoverse · team project",
          title: "Real products have more than one good screen.",
          evidence:
            "Innoverse had to support participants, teams, problems, submissions, judging, rankings, administration, and AI-assisted feedback inside one competition flow.",
          trace: ["Participants", "Submission", "Judging", "Ranking"],
        },
        {
          number: "02",
          context: "Jazireh · production debugging",
          title: "Working API. Broken experience.",
          evidence:
            "On Jazireh, the backend returned 200 OK while the interface still showed unavailable. The issue was the response contract: WordPress wrapped the data differently from what the frontend expected.",
          trace: ["200 OK", "UI unavailable", "response contract"],
        },
        {
          number: "03",
          context: "This portfolio · proof zero",
          title: "The details still matter when conditions change.",
          evidence:
            "This site is being built around responsive layouts, English and Persian direction changes, keyboard states, reduced motion, and real project media; not added later as decoration.",
          trace: ["390px", "RTL", "Keyboard", "Reduced motion"],
        },
      ],
    },
    jazireh: {
      eyebrow: "Production reality",
      title: "The API said 200 OK. The screen still said unavailable.",
      intro:
        "On Jazireh, the request succeeded, but the frontend and WordPress disagreed about the shape of the response.",
      mediaLabel: "Jazireh product screen showing the sky status and unavailable state",
      mediaNote: "Real Jazireh screen · sky status",
      mediaAlt:
        "Jazireh Astronomy homepage in Persian showing the sky status for Tehran with an unavailable weather value.",
      technicalLabel: "Technical signal",
      plainLabel: "Plain meaning",
      stages: [
        {
          id: "symptom",
          label: "Symptom",
          technical: "GET -> 200 OK",
          plain: "The request succeeded.",
          detail: "The network looked healthy, but the interface could still fall back to unavailable.",
        },
        {
          id: "cause",
          label: "Cause",
          technical: "expected data / received { success, data }",
          plain: "The interface looked in the wrong place for the data.",
          detail:
            "WordPress REST wrapped the useful response differently from what the frontend expected.",
        },
        {
          id: "fix",
          label: "Fix",
          technical: "normalize response handling",
          plain: "Read the response correctly before the UI trusts it.",
          detail:
            "The request layer had to account for the WordPress shape instead of masking the issue visually.",
        },
      ],
      contract: {
        expectedLabel: "Expected",
        receivedLabel: "Received",
        expectedValue: "data",
        receivedValues: ["success", "data"],
      },
      resolution:
        "The fix was not another visual patch. The request layer had to understand the response correctly before the interface could trust it.",
      contextLine: "Jazireh is an astronomy-related web project using frontend code, WordPress REST, and APIs.",
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
    howIWork: {
      eyebrow: "نحوه کار من",
      title: "اسکرین‌شات، فقط بخش آسون ماجراست.",
      intro:
        "کار واقعی چیزهاییه که دورش اتفاق می‌افته: حالت‌ها، لبه‌های کار، باگ‌های پروداکشن و تصمیم‌های کوچیکی که کاربر واقعاً حسشون می‌کنه.",
      proofs: [
        {
          number: "01",
          context: "Innoverse · پروژه تیمی",
          title: "محصول واقعی فقط یک صفحه خوشگل نیست.",
          evidence:
            "Innoverse باید شرکت‌کننده‌ها، تیم‌ها، مسئله‌ها، ارسال جواب‌ها، داوری، رتبه‌بندی، مدیریت و بازخورد مبتنی بر AI رو داخل یک جریان مسابقه پشتیبانی می‌کرد.",
          trace: ["شرکت‌کننده‌ها", "ارسال جواب", "داوری", "رتبه‌بندی"],
        },
        {
          number: "02",
          context: "Jazireh · دیباگ پروداکشن",
          title: "API سالم بود. تجربه کاربری نه.",
          evidence:
            "در Jazireh بک‌اند پاسخ 200 OK می‌داد، ولی رابط کاربری هنوز وضعیت unavailable نشون می‌داد. مشکل از قرارداد پاسخ بود؛ WordPress داده رو با ساختاری برمی‌گردوند که با چیزی که فرانت‌اند انتظار داشت فرق داشت.",
          trace: ["200 OK", "UI unavailable", "قرارداد پاسخ"],
        },
        {
          number: "03",
          context: "همین سایت · اولین مدرک",
          title: "جزئیات وقتی شرایط عوض میشه هم باید درست بمونن.",
          evidence:
            "همین سایت از اول با ریسپانسیو بودن، تغییر جهت انگلیسی و فارسی، حالت‌های کیبورد، Reduced Motion و تصاویر واقعی پروژه ساخته شده؛ نه اینکه آخر کار بهش اضافه بشن.",
          trace: ["390px", "RTL", "کیبورد", "Reduced motion"],
        },
      ],
    },
    jazireh: {
      eyebrow: "واقعیت پروداکشن",
      title: "API می‌گفت 200 OK. صفحه هنوز می‌گفت unavailable.",
      intro:
        "در Jazireh درخواست موفق بود، اما فرانت‌اند و WordPress ساختار پاسخ رو یکسان نمی‌دیدن.",
      mediaLabel: "اسکرین واقعی Jazireh با وضعیت آسمان و مقدار ناموجود",
      mediaNote: "اسکرین واقعی Jazireh · وضعیت آسمان",
      mediaAlt:
        "صفحه خانه Jazireh Astronomy به زبان فارسی که وضعیت آسمان تهران و مقدار ناموجود هوا را نشان می‌دهد.",
      technicalLabel: "نشانه فنی",
      plainLabel: "معنی ساده",
      stages: [
        {
          id: "symptom",
          label: "نشانه",
          technical: "GET -> 200 OK",
          plain: "درخواست موفق بود.",
          detail: "شبکه ظاهراً سالم بود، اما رابط کاربری هنوز می‌توانست به حالت unavailable برود.",
        },
        {
          id: "cause",
          label: "علت",
          technical: "expected data / received { success, data }",
          plain: "رابط کاربری دنبال داده در جای اشتباه می‌گشت.",
          detail:
            "WordPress REST داده اصلی را داخل ساختاری برمی‌گرداند که با انتظار فرانت‌اند یکی نبود.",
        },
        {
          id: "fix",
          label: "راه‌حل",
          technical: "normalize response handling",
          plain: "قبل از اعتماد رابط کاربری، پاسخ باید درست خوانده می‌شد.",
          detail:
            "لایه درخواست باید ساختار پاسخ WordPress را در نظر می‌گرفت، نه اینکه مشکل با یک وصله ظاهری پنهان شود.",
        },
      ],
      contract: {
        expectedLabel: "انتظار",
        receivedLabel: "دریافت",
        expectedValue: "data",
        receivedValues: ["success", "data"],
      },
      resolution:
        "راه‌حل یک وصله ظاهری دیگه نبود؛ لایه درخواست باید پاسخ رو درست می‌فهمید تا رابط کاربری بتونه به داده اعتماد کنه.",
      contextLine: "Jazireh یک پروژه وب مرتبط با نجوم است که با فرانت‌اند، WordPress REST و API درگیر بود.",
    },
  },
};
