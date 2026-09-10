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
  },
};
