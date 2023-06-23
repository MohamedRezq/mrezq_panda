import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Quick Links": "Quick Links",
      About: "About",
      Leadership: "Leadership",
      "Social Responsibility": "Social Responsibility",
      Careers: "Careers",
      Contact: "Contact",
      " Speak Up": "Speak Up",
      "ABOUT THIS WEBSITE": "ABOUT THIS WEBSITE",
      "Our History": "Our History",
      "Certificates and Awards": "Certificates and Awards",
      "Savola Corporate": "Savola Corporate",
      "FOLLOW US ON SOCIAL": "FOLLOW US ON SOCIAL",
      Facebook: "Facebook",
      Instagram: "Instagram",
      YouTube: "YouTube",
      Twitter: "Twitter",
      LinkedIn: "LinkedIn",
      "SHOP WITH US": "SHOP WITH US",
      "Panda Click": "Panda Click",
      Copyright: "Copyright",
      "ABOUT PANDA": "ABOUT PANDA",
      "SOCIAL RESPONSIBILITY": "SOCIAL RESPONSIBILITY",
      CAREERS: "CAREERS",
      CONTACT: "CONTACT",
      "BECOME A SUPPLIER": "BECOME A SUPPLIER",
      "PANDA PLUS": "PANDA PLUS",
    },
  },
  ar: {
    translation: {
      "QUICK LINKS": "الروابط السريعة",
      About: "نبذة عن بنده",
      Leadership: "القيادة",
      "Social Responsibility": "المسؤولية الاجتماعية",
      Careers: "وظائف",
      Contact: "تواصل معنا",
      "Speak Up": "برنامج الإبلاغ والإفصاح عن المخالفات",
      "ABOUT THIS WEBSITE": "حول هذا الموقع الإلكتروني",
      "Our History": "تاريخنا",
      "Certificates and Awards": "الشهادات والجوائز",
      "Savola Corporate": "مجموعة صافولا",
      "FOLLOW US ON SOCIAL": "تابعنا على مواقع التواصل",
      Facebook: "فيسبوك",
      Instagram: "انستجرام",
      YouTube: "يوتيوب",
      Twitter: "تويتر",
      LinkedIn: "لينكد إن",
      "SHOP WITH US": "تسوّق معنا",
      "Panda Click": "بنده كليك",
      "Copyright ": "جميع الحقوق محفوظة",
      "ABOUT PANDA": "نبذة عن بنده",
      "SOCIAL RESPONSIBILITY": "المسؤولية الاجتماعية",
      CAREERS: "وظائف",
      CONTACT: "تواصل معنا",
      "BECOME A SUPPLIER": "التسجيل كمورّد",
      "PANDA PLUS": "باندا بلس",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
