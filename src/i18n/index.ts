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
      "Panda App": "Panda App",
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
      "Shop with us": "تسوّق معنا",
      "Panda App": "تطبيق بنده",
      "Panda app": "تطبيق بنده",
      "Copyright ": "جميع الحقوق محفوظة",
      "ABOUT PANDA": "نبذة عن بنده",
      "SOCIAL RESPONSIBILITY": "المسؤولية الاجتماعية",
      CAREERS: "وظائف",
      CONTACT: "تواصل معنا",
      "BECOME A SUPPLIER": "التسجيل كمورّد",
      "PANDA PLUS": "باندا بلس",
      "Panda plus": "باندا بلس",
      "Better Than Ever...!": "...صارت أحلي",
      "Today, we offer you a new interactive shopping experience, that meets all your needs.":
        "نقدم لكم تجربة تسوق جديدة، تفاعلية و تلبى مختلف احتياجاتكم. اكتشفوا فرع باندا المجدد و الأقرب لكم",
      "Visit us at selected branches across the Kingdom & enjoy a unique shopping experience!":
        "",
      "LEARN MORE": "اكتشف المزيد",
      "About Panda": "عن باندا",
      "Panda from a small store in Riyadh to the largest retailer in Saudi Arabia.":
        "بنده من متجر صغير في الرياض إلى أكبر بائع تجزئة في المملكة العربية السعودية",
      "Panda was founded in 1978 and quickly established itself as one of the leading organizations in the retail sector in the Kingdom of Saudi Arabia. In 1994, Panda merged with Azizia Company to become Azizia Panda United. Later in 1998, The Company was acquired by Savola Group, a leading retail company specializing in food products and immediately revolutionized its business model.":
        "تأسست بنده عام 1978 وسرعان ما رسخت مكانتها كواحدة من المؤسسات الرائدة في قطاع التجزئة في المملكة العربية السعودية. في عام 1994 اندمجت بنده مع شركة العزيزية لتصبح عزيزية بنده المتحدة. في وقت لاحق من عام 1998 ، تم الاستحواذ على الشركة من قبل مجموعة صافولا ، وهي شركة تجزئة رائدة متخصصة في المنتجات الغذائية وأحدثت ثورة في نموذج أعمالها على الفور",
      "Our Brands": "علاماتنا التجارية",
      "With a focus on higher quality, Panda introduced in 2009 a portfolio of private label products ranging from food, non-food to personal care, home care and beauty care products.":
        "مع التركيز على الجودة العالية ،  في عام 2009 مجموعة من منتجات العلامات الخاصة التي تتراوح من المواد الغذائية وغير الغذائية إلى العناية الشخصية والعناية المنزلية ومنتجات العناية بالجمال.",
      "PERSONAL CARE": "رعاية شخصية",
      "BREAKFAST DIET & ORGANIC": "حمية الفطور والعضوية",
      BEVERAGES: "مشروبات",
      "ENTERTAINMENT & PET FOOD": "الترفيه وأغذية الحيوانات الأليفة",
      "BAKERY & PASTRY": "مخبز و معجنات",
      "DAILY SELF SERVICE": "الخدمة الذاتية اليومية",
      "FROZEN FOODS": "أغذية مجمدة",
      "BEAUTY CARE": "العناية بالجمال",
      "Partnering with our communities for a better life.":
        "الشراكة مع مجتمعاتنا من أجل حياة أفضل",
      "Panda offers a unique retail experience for individuals and families by providing the best value of fresh foods and products. We empower our customers and communities to improve their quality of life by creating value and enhancing well-being.":
        "تقدم بنده تجربة بيع بالتجزئة فريدة للأفراد والعائلات من خلال توفير أفضل قيمة للأطعمة والمنتجات الطازجة. نحن نمكّن عملائنا ومجتمعاتنا من تحسين نوعية حياتهم من خلال خلق القيمة وتعزيز الرفاهية",
      "Our Vision": "رؤيتنا",
      "To be the sustainable leading retailer, innovating to delight the communities we serve every day.":
        "أن نكون تاجر تجزئة رائد ومستدام ، نبتكر لإسعاد المجتمعات التي نخدمها كل يوم",
      "Our Mission": "مهمتنا",
      "To empower our colleagues, customers, and communities to improve their quality of life by creating value and enhancing well-being.":
        "لتمكين زملائنا وعملائنا ومجتمعاتنا من تحسين نوعية حياتهم من خلال خلق قيمة وتعزيز الرفاهية",
      "Our Values": "قيمنا",
      "Our values are who we are, where we come from and our values inspire us.":
        "قيمنا هي من نحن ومن أين أتينا وقيمنا تلهمنا",
      Ownership: "ملكية",
      "We believe ownership with passion are the fuel of excellence":
        "نؤمن بأن الملكية مع الشغف هي وقود التميز",
      "Customer Excellence": "تميز العملاء",
      "We believe that a happy customer is the best way to succeed":
        "نعتقد أن العميل السعيد هو أفضل طريقة للنجاح",
      Teamwork: "العمل الجماعى",
      "We believe that everyone contributes to the worth of others":
        "نعتقد أن كل شخص يساهم في قيمة الآخرين",
      Integrity: "نزاهة",
      "We believe in succeeding with integrity": "نحن نؤمن بالنجاح بنزاهة",
      Agility: "رشاقة",
      "We believe in agility to drive change": "نحن نؤمن بالرشاقة لدفع التغيير",
      Panda: "باندا",
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
