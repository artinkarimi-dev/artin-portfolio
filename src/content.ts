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
    skills: string;
    about: string;
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
    supporting: string;
    mediaLabel: string;
    mediaNote: string;
    mediaAlt: string;
    screens: {
      label: string;
      note: string;
      alt: string;
    }[];
    details: {
      label: string;
      value: string;
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    backendNote: string;
    groups: {
      label: string;
      title: string;
      description: string;
      items: string[];
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    secondaryBody: string;
    tertiaryBody: string;
    snapshotLabel: string;
    snapshot: {
      label: string;
      value: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    intentLine: string;
    ctaLabel: string;
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
      skills: "Skills",
      about: "About",
      contact: "Contact",
      languageLabel: "Switch language",
    },
    hero: {
      eyebrow: "Front-End Developer",
      title: "I build the part of a product people actually see, use, and remember.",
      titleAccent: "Artin Karimi",
      body:
        "I work with React and modern web tools to turn ideas into polished, responsive web experiences that feel ready for real use.",
      primaryCta: "See my work",
      secondaryCta: "Work with me",
      contactNote: "Available for frontend roles, freelance projects, and thoughtful collaborations.",
      statusLabel: "Role",
      statusValue: "Front-End Developer",
      detailLabel: "Focus",
      detailValue: "Polished web products that people can understand and use.",
      proofOne: "Real project work",
      proofTwo: "English / Persian",
      proofThree: "Built with care",
    },
    featuredWork: {
      sectionLabel: "Selected work",
      eyebrow: "Project proof",
      title: "Innoverse",
      summary:
        "A coding competition platform built with my team for ViaX Code Arena.",
      resultLabel: "Result",
      resultValue: "Silver Medal · ViaX Code Arena",
      roleLabel: "Contribution",
      roleValue: "Team member and project presenter",
      scopeLabel: "What we built",
      scopeValue:
        "One place for participants, teams, problems, submissions, judging, and rankings.",
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
      systemTitle: "Product areas",
      systemItems: [
        "Participants and teams",
        "Problems and submissions",
        "Judging and feedback",
        "Leaderboard behavior",
      ],
      stackLabel: "Context",
      stack: ["React", "PHP", "MySQL", "Docker"],
    },
    howIWork: {
      eyebrow: "Working together",
      title: "What I care about when I build.",
      intro:
        "I don't want to sell you a list of buzzwords. These are the things I actually care about when a project has my name on it.",
      proofs: [
        {
          number: "01",
          context: "Product feel",
          title: "It should feel finished.",
          evidence:
            "A website can technically work and still feel rough. I care about the layout, responsiveness, interaction, consistency, and the small details people notice.",
          trace: ["Layout", "Responsiveness", "Interaction", "Consistency"],
        },
        {
          number: "02",
          context: "Real projects",
          title: "I work with real constraints.",
          evidence:
            "Real projects come with changing requirements, backend integrations, unexpected problems, and things that work differently outside a perfect demo. I've worked through that reality.",
          trace: ["Requirements", "Integrations", "Unexpected issues", "Usable result"],
        },
        {
          number: "03",
          context: "Product thinking",
          title: "I care about the product, not just the code.",
          evidence:
            "I try to understand what the person using the product needs, what the business is trying to achieve, and how the frontend can make both sides work better.",
          trace: ["User need", "Business goal", "Frontend decision", "Better product"],
        },
      ],
    },
    jazireh: {
      eyebrow: "Another build",
      title: "Jazireh",
      intro:
        "An astronomy website built around content, real data, and an interactive web experience.",
      supporting:
        "I worked on the frontend experience and the connection between the site, WordPress, and external data, turning a content-heavy idea into a responsive product people can actually use.",
      mediaLabel: "Jazireh astronomy website screenshot",
      mediaNote: "Real Jazireh screen",
      mediaAlt:
        "Jazireh Astronomy homepage in Persian with astronomy content, navigation, and sky status cards.",
      screens: [
        {
          label: "Home",
          note: "Brand, content, and sky status",
          alt:
            "Jazireh Astronomy homepage with Persian astronomy navigation, hero copy, YouTube channel card, and sky status cards.",
        },
        {
          label: "Live data",
          note: "Solar, Earth, and earthquake data",
          alt:
            "Jazireh data section showing sun imagery, Earth from space, and recent earthquake information in Persian.",
        },
        {
          label: "Radar",
          note: "Interactive sky/radar view",
          alt:
            "Jazireh radar view showing astronomy objects and a guided radar interface in Persian.",
        },
      ],
      details: [
        {
          label: "Focus",
          value: "Frontend experience",
        },
        {
          label: "Project type",
          value: "Astronomy content and data website",
        },
        {
          label: "Context",
          value: "Frontend · WordPress · APIs",
        },
      ],
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Frontend is my main lane. I can work beyond it when the product needs it.",
      intro:
        "Most of my work lives in React, UI, responsive behavior, and the details that make a web product feel finished.",
      backendNote:
        "Frontend is my main focus, but I’m comfortable working across the backend when a project needs it. I’ve worked with PHP, MySQL, APIs, WordPress, integrations, and deployment as part of real projects.",
      groups: [
        {
          label: "Core",
          title: "Frontend",
          description:
            "The browser-facing work: structure, interaction, responsive UI, and product polish.",
          items: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Vite",
            "Responsive UI",
            "Motion",
            "API integration",
          ],
        },
        {
          label: "Hands-on project experience",
          title: "Backend & data",
          description:
            "Practical backend work used to connect the frontend to real content, data, and project requirements.",
          items: ["PHP", "MySQL", "REST APIs", "WordPress", "Frontend/backend integration"],
        },
        {
          label: "Shipping",
          title: "Workflow",
          description:
            "The practical layer around getting work beyond localhost and into something people can use.",
          items: ["Git", "GitHub", "Docker", "Deployment", "Debugging", "Responsive testing"],
        },
      ],
    },
    about: {
      eyebrow: "A little about me",
      title: "I’m a frontend-focused developer who learns by building real things.",
      body:
        "Most of my work lives in React and the browser, but real projects rarely stop there. I’ve also worked with APIs, PHP, MySQL, WordPress, deployment, and the backend pieces needed to get the product working.",
      secondaryBody:
        "I like understanding how the whole product fits together, even when frontend is the part I care about most.",
      tertiaryBody:
        "I’m interested in frontend roles, freelance projects, and collaborations with people building something worth shipping.",
      snapshotLabel: "Professional snapshot",
      snapshot: [
        {
          label: "Main focus",
          value: "Frontend development with React and modern web tools",
        },
        {
          label: "Project context",
          value: "Team project work, real integrations, and project presentation",
        },
        {
          label: "Open to",
          value: "Employment, freelance work, and thoughtful collaboration",
        },
      ],
    },
    contact: {
      eyebrow: "Let's work together",
      title: "Hiring, building something, or looking for someone to collaborate with?",
      body:
        "I'm open to frontend roles, freelance projects, and collaborations with developers, designers, and people building something interesting.",
      intentLine: "Job · Freelance · Collaboration",
      ctaLabel: "Start a conversation",
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
      role: "برنامه‌نویس فرانت‌اند",
      work: "کارها",
      skills: "مهارت‌ها",
      about: "درباره",
      contact: "ارتباط",
      languageLabel: "تغییر زبان",
    },
    hero: {
      eyebrow: "برنامه‌نویس فرانت‌اند",
      title: "من بخشی از محصول را می‌سازم که آدم‌ها می‌بینند، با آن کار می‌کنند و به خاطر می‌سپارند.",
      titleAccent: "آرتین کریمی",
      body:
        "با React و ابزارهای مدرن وب کار می‌کنم تا ایده‌ها به تجربه‌های وب صیقل‌خورده، واکنش‌گرا و آماده استفاده واقعی تبدیل شوند.",
      primaryCta: "دیدن کارها",
      secondaryCta: "همکاری با من",
      contactNote: "آماده برای فرصت‌های فرانت‌اند، پروژه‌های فریلنس و همکاری‌های جدی.",
      statusLabel: "نقش",
      statusValue: "برنامه‌نویس فرانت‌اند",
      detailLabel: "تمرکز",
      detailValue: "محصولات وب صیقل‌خورده که آدم‌ها بتوانند بفهمند و استفاده کنند.",
      proofOne: "کار واقعی",
      proofTwo: "انگلیسی / فارسی",
      proofThree: "ساخته‌شده با دقت",
    },
    featuredWork: {
      sectionLabel: "کار منتخب",
      eyebrow: "نمونه پروژه",
      title: "Innoverse",
      summary:
        "پلتفرم مسابقه برنامه‌نویسی که همراه تیمم برای ViaX Code Arena ساختیم.",
      resultLabel: "نتیجه",
      resultValue: "مدال نقره · ViaX Code Arena",
      roleLabel: "نقش",
      roleValue: "عضو تیم و ارائه‌دهنده پروژه",
      scopeLabel: "چیزی که ساختیم",
      scopeValue:
        "یک فضای واحد برای شرکت‌کننده‌ها، تیم‌ها، مسئله‌ها، ارسال‌ها، داوری و رتبه‌بندی.",
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
      systemTitle: "بخش‌های محصول",
      systemItems: [
        "شرکت‌کننده‌ها و تیم‌ها",
        "مسئله‌ها و ارسال‌ها",
        "داوری و بازخورد",
        "رفتار جدول رتبه‌بندی",
      ],
      stackLabel: "زمینه فنی",
      stack: ["React", "PHP", "MySQL", "Docker"],
    },
    howIWork: {
      eyebrow: "همکاری",
      title: "وقتی چیزی می‌سازم، این‌ها برایم مهم‌اند.",
      intro:
        "نمی‌خواهم خودم را با چند کلمه تکراری معرفی کنم. این‌ها چیزهایی هستند که وقتی اسمم پای یک پروژه است واقعاً برایم اهمیت دارند.",
      proofs: [
        {
          number: "01",
          context: "حس محصول",
          title: "باید حس تمام‌شده داشته باشد.",
          evidence:
            "یک سایت می‌تواند از نظر فنی کار کند اما هنوز خام و ناتمام به نظر برسد. من به چیدمان، واکنش‌گرایی، تعامل، هماهنگی و جزئیات کوچکی که کاربر حس می‌کند اهمیت می‌دهم.",
          trace: ["چیدمان", "واکنش‌گرایی", "تعامل", "هماهنگی"],
        },
        {
          number: "02",
          context: "پروژه واقعی",
          title: "با محدودیت‌های واقعی کار می‌کنم.",
          evidence:
            "پروژه واقعی همیشه مثل دموی تمیز و کامل پیش نمی‌رود؛ نیازها عوض می‌شوند، اتصال به بک‌اند وجود دارد، مشکل‌های غیرمنتظره پیش می‌آید و بعضی چیزها بیرون از محیط ایده‌آل فرق می‌کنند. من با این واقعیت کار کرده‌ام.",
          trace: ["نیازها", "اتصال‌ها", "مشکل‌های واقعی", "نتیجه قابل استفاده"],
        },
        {
          number: "03",
          context: "نگاه محصولی",
          title: "فقط کد برایم مهم نیست؛ خود محصول هم مهم است.",
          evidence:
            "سعی می‌کنم بفهمم کسی که از محصول استفاده می‌کند چه نیازی دارد، کسب‌وکار به چه نتیجه‌ای می‌خواهد برسد و فرانت‌اند چطور می‌تواند بین این دو بهتر پل بزند.",
          trace: ["نیاز کاربر", "هدف کسب‌وکار", "تصمیم فرانت‌اند", "محصول بهتر"],
        },
      ],
    },
    jazireh: {
      eyebrow: "یک ساخت دیگر",
      title: "Jazireh",
      intro:
        "یک وب‌سایت نجومی برای محتوا، داده‌های واقعی و تجربه‌ای تعاملی از دنیای فضا.",
      supporting:
        "من روی تجربه فرانت‌اند و اتصال بین سایت، WordPress و داده‌های بیرونی کار کردم تا یک ایده محتوایی سنگین به محصولی واکنش‌گرا و قابل استفاده تبدیل شود.",
      mediaLabel: "اسکرین‌شات وب‌سایت نجومی Jazireh",
      mediaNote: "اسکرین واقعی Jazireh",
      mediaAlt:
        "صفحه خانه Jazireh Astronomy به زبان فارسی با محتوای نجومی، ناوبری و کارت‌های وضعیت آسمان.",
      screens: [
        {
          label: "خانه",
          note: "برند، محتوا و وضعیت آسمان",
          alt:
            "صفحه خانه Jazireh Astronomy با ناوبری فارسی، متن اصلی، کارت کانال یوتیوب و وضعیت آسمان.",
        },
        {
          label: "داده‌ها",
          note: "خورشید، زمین و زمین‌لرزه‌ها",
          alt:
            "بخش داده‌های Jazireh با تصویر خورشید، زمین از فضا و اطلاعات زمین‌لرزه‌های اخیر.",
        },
        {
          label: "رادار",
          note: "نمای تعاملی آسمان و رادار",
          alt:
            "نمای رادار Jazireh با اجرام نجومی و رابط راهنمای رصدی به زبان فارسی.",
        },
      ],
      details: [
        {
          label: "تمرکز",
          value: "تجربه فرانت‌اند",
        },
        {
          label: "نوع پروژه",
          value: "وب‌سایت نجومی مبتنی بر محتوا و داده",
        },
        {
          label: "زمینه",
          value: "فرانت‌اند · WordPress · API",
        },
      ],
    },
    skills: {
      eyebrow: "توانایی‌ها",
      title: "تمرکز اصلی من فرانت‌اند است؛ ولی وقتی پروژه نیاز داشته باشد، همان‌جا متوقف نمی‌شوم.",
      intro:
        "بیشتر کارم در React، رابط کاربری، واکنش‌گرایی و جزئیاتی است که باعث می‌شود یک محصول وب آماده و قابل استفاده حس شود.",
      backendNote:
        "تمرکز اصلی من فرانت‌اند است، اما وقتی پروژه نیاز داشته باشد با بخش‌های بک‌اند هم کار می‌کنم. در پروژه‌های واقعی با PHP، MySQL، APIها، WordPress، اتصال فرانت و بک‌اند و دیپلوی هم کار کرده‌ام.",
      groups: [
        {
          label: "اصلی",
          title: "فرانت‌اند",
          description:
            "بخشی که کاربر می‌بیند و با آن کار می‌کند: ساختار، تعامل، واکنش‌گرایی و حس نهایی محصول.",
          items: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Vite",
            "رابط واکنش‌گرا",
            "Motion",
            "اتصال به API",
          ],
        },
        {
          label: "تجربه عملی در پروژه",
          title: "بک‌اند و داده",
          description:
            "دانش عملی برای وصل کردن فرانت‌اند به محتوا، داده و نیازهای واقعی پروژه.",
          items: ["PHP", "MySQL", "REST APIs", "WordPress", "اتصال فرانت و بک‌اند"],
        },
        {
          label: "تحویل کار",
          title: "فرایند ساخت",
          description:
            "لایه عملی کار برای اینکه پروژه از لوکال‌هاست بیرون بیاید و واقعاً قابل استفاده شود.",
          items: ["Git", "GitHub", "Docker", "دیپلوی", "دیباگ", "تست واکنش‌گرایی"],
        },
      ],
    },
    about: {
      eyebrow: "کمی درباره من",
      title: "من برنامه‌نویس فرانت‌اند هستم و بیشتر با ساختن پروژه‌های واقعی یاد می‌گیرم.",
      body:
        "بخش اصلی کارم React و فرانت‌اند است، ولی پروژه واقعی همیشه پشت مرورگر تمام نمی‌شود. برای همین با API، PHP، MySQL، WordPress، دیپلوی و بخش‌هایی از بک‌اند هم کار کرده‌ام.",
      secondaryBody:
        "دوست دارم فقط یک صفحه را پیاده نکنم؛ بفهمم کل محصول چطور کنار هم کار می‌کند.",
      tertiaryBody:
        "به فرصت‌های فرانت‌اند، پروژه‌های فریلنس و همکاری با آدم‌هایی علاقه دارم که چیزی ارزشمند برای ساختن دارند.",
      snapshotLabel: "نمای حرفه‌ای کوتاه",
      snapshot: [
        {
          label: "تمرکز اصلی",
          value: "فرانت‌اند با React و ابزارهای مدرن وب",
        },
        {
          label: "زمینه پروژه",
          value: "کار تیمی، اتصال‌های واقعی و ارائه پروژه",
        },
        {
          label: "آماده برای",
          value: "فرصت کاری، پروژه فریلنس و همکاری جدی",
        },
      ],
    },
    contact: {
      eyebrow: "برای همکاری",
      title: "برای استخدام، پروژه یا همکاری دنبال توسعه‌دهنده فرانت‌اند هستی؟",
      body:
        "برای فرصت‌های کاری، پروژه‌های فریلنس و همکاری با برنامه‌نویس‌ها، طراح‌ها و تیم‌هایی که دارن چیز جالبی می‌سازن، خوشحال می‌شم صحبت کنیم.",
      intentLine: "استخدام · پروژه فریلنس · همکاری",
      ctaLabel: "بیا صحبت کنیم",
    },
  },
};
