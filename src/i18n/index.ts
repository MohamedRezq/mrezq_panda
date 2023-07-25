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
      "Leadership - Panda": "Leadership - Panda",
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
      "Leadership - Panda": "القيادة - بندا",
      "Our executive team of experienced retail experts is backed by a strongly motivated, diverse group of managers and staff dedicated to creating a competitive customer value proposition. Our highly seasoned and talented senior management team, with an average of nearly 30 years of retail industry experience, provides strong leadership to focus on our company’s overall growth and community partnership goals.":
        "يتم دعم فريقنا التنفيذي المكون من خبراء التجزئة ذوي الخبرة من قبل مجموعة متنوعة ومتنوعة من المديرين والموظفين الذين يكرسون جهودهم لإنشاء عرض قيمة تنافسية للعملاء. يوفر فريق الإدارة العليا المتمرس والموهوب لدينا ، والذي يتمتع بمتوسط ما يقرب من 30 عامًا من الخبرة في مجال تجارة التجزئة ، قيادة قوية للتركيز على النمو الشامل لشركتنا وأهداف الشراكة المجتمعية.",
      "Panda Leadership Team": "فريق قيادة باندا",
      "Chief Executive Officer": "الرئيس التنفيذي",
      "Dr. Bander Hamooh": "د. بندر حموه",
      "Abdullah Al Sabban": "عبدالله شعبان",
      "Chief Operations Officer": "رئيس العمليات",
      "Eric Deliers": "اريك ديليرس",
      "Chief Commercial Officer": "الرئيس التجاري",
      "Ryyan Tarabzoni": "ريان طرابزوني",
      "Chief Supply Chain Officer & CEO Advisor":
        "الرئيس التنفيذي لسلسلة التوريد ومستشار الرئيس التنفيذي",
      "Ahmed Chehade": "احمد شحاده",
      "Chief Marketing Officer": "كبير مسؤولي التسويق",
      "Fouad Reda": "فؤاد رضا",
      "Chief Business Support Officer": "كبير مسؤولي دعم الأعمال",
      "Mohammed Khorshid": "محمد خورشيد",
      "Chief Financial Officer": "المدير المالي",
      "Piyush Chowhan": "بيوش تشوهان",
      "Chief Digital Officer": "كبير المسؤولين الرقميين",
      "Wassim Al Tahawi": "وسيم الطحاوي",
      "Chief Governance, Risk, and Compliance Officer":
        "رئيس الحوكمة والمخاطر والامتثال",
      "Majid Basha": "ماجد باشا",
      "Chief of Staff": "رئيس العمال",
      "Hicham Aouda": "هشام عودة",
      "CEO Advisor for Business Development":
        "مستشار الرئيس التنفيذي لتطوير الأعمال",
      "Bandar Al Saidi": "بندر السعيدي",
      "Vice President for Commercial Food": "نائب الرئيس للأغذية التجارية",
      "Hisham BaEissa": "هشام باعيسى",
      "Director of Board Governance & Secretary": "مدير الحوكمة وأمين السر",
      "Executive Team": "الفريق التنفيذي",
      "Copyright © 2021 Panda. All rights reserved.": "حقوق",
      "About - Panda": "عن - باندا",
      "Our executive team of experienced retail experts is backed by a strongly motivated, diverse group of managers and staff dedicated to creating a competitive customer value proposition.":
        "يتم دعم فريقنا التنفيذي من خبراء البيع بالتجزئة ذوي الخبرة من قبل مجموعة متنوعة ومتنوعة من المديرين والموظفين الذين يكرسون جهودهم لإنشاء عرض قيمة تنافسية للعملاء.",
      "Our highly seasoned and talented senior management team, with an average of nearly 30 years of retail industry experience, provides strong leadership to focus on our company’s overall growth and community partnership goals.":
        "يوفر فريق الإدارة العليا المتمرس والموهوب لدينا ، والذي يتمتع بمتوسط ما يقرب من 30 عامًا من الخبرة في مجال تجارة التجزئة ، قيادة قوية للتركيز على النمو الشامل لشركتنا وأهداف الشراكة المجتمعية.",
      "Seasoned Leadership Team Driving Panda success":
        "فريق قيادة متمرس يقود نجاح الباندا",
      "Distribution fleet of trucks with 4 main distribution centers across the Kingdom":
        "أسطول توزيع من الشاحنات مع 4 مراكز توزيع رئيسية في جميع أنحاء المملكة",
      "SKUs of products displayed at our stores":
        "وحدات SKU للمنتجات المعروضة في متاجرنا",
      "Stores across the Kingdom (Excluding Jamjom and Egypt)":
        "المتاجر في جميع أنحاء المملكة (باستثناء جمجوم ومصر)",
      "Employees work with dedication and commitment":
        "يعمل الموظفون بتفان والتزام",
      "Customer shopping at our stores every year":
        "العملاء يتسوقون في متاجرنا كل عام",
      "Sales across all our stores (2021)": "المبيعات في جميع متاجرنا (2021)",
      "Headquartered in the Kingdom of Saudi Arabia, Panda Retail Company is one of the main retail chain businesses in the Middle East and the biggest grocery retailer in the country with more than 188 stores in 40 cities.":
        "يقع المقر الرئيسي لشركة بنده للتجزئة في المملكة العربية السعودية ، وهي واحدة من شركات سلسلة البيع بالتجزئة الرئيسية في الشرق الأوسط وأكبر متاجر البقالة بالتجزئة في البلاد مع أكثر من 188 متجرًا في 40 مدينة",
      "Panda operates 2 type of stores, Hyper Panda (larger stores) and Panda Supermarkets.":
        "تدير Panda نوعين من المتاجر ، Hyper Panda (متاجر أكبر) و Panda Supermarkets",
      "With more than 100 million customers visiting our stores every year, we operate 4 main distribution centers in the country with a fleet of more than 600 trucks to deliver 30,000 SKUs of food and non-food products to our stores.":
        "مع أكثر من 100 مليون عميل يزورون متاجرنا كل عام ، نقوم بتشغيل 4 مراكز توزيع رئيسية في الدولة بأسطول يتألف من أكثر من 600 شاحنة لتوصيل 30،000 SKU من المنتجات الغذائية وغير الغذائية إلى متاجرنا",
      "Since 2009, Panda has also introduced more than 400 private label products to serve our customers as a trusted retailer of choice in a number of food and non-food categories.":
        "منذ عام 2009 ، قدمت Panda أيضًا أكثر من 400 من منتجات العلامات التجارية الخاصة لخدمة عملائنا كبائع تجزئة موثوق به في عدد من الفئات الغذائية وغير الغذائية",
      "Over 17,000 employees work with dedication and commitment that is second to none in order to cater to the shopping needs of our customers.":
        "يعمل أكثر من 17000 موظف بتفان والتزام لا يعلى عليه من أجل تلبية احتياجات التسوق لعملائنا",
      "What we do": "الذي نفعله",
      "Million transactions": "مليون معاملة",
      "Achieved over 100+ million transactions through Panda chain of Hypermarkets and Supermarkets.":
        "بندا أنجزت أكثر من 100 مليون معاملة من خلال سلسلة من الهايبر ماركت والسوبر ماركت",
      "Our history of steady growth": "تاريخنا في النمو المطرد",
      Explore: "إستكشف",
      "Working with Panda": "العمل مع بندا",
      "We create an integrated work environment for you.":
        "نخلق لك بيئة عمل متكاملة",
      "Learn More": "إستكشف المزيد",
      "Partnering with Panda": "الشراكة مع بندا",
      "Please get in touch with the team if you have an enquiry.":
        "يرجى التواصل مع الفريق إذا كان لديك أي استفسار",
      "Contact Us": "اتصل بنا",
      "Stay Connected": "ابق على اتصال",
      KSA: "السعودية",
      "HQ, Saudi Arabia": "المقر الرئيسي ، المملكة العربية السعودية",
      "Customer Care Center:": ":مركز رعايه المستخدم",
      "P. O. Box:": ":صندوق البريد",
      Email: "بريد إلكتروني",
      Title: "اللقب",
      "Mr.": "/سيد",
      "Mrs.": "/سيدة",
      Name: "الإسم",
      Phone: "رقم الهاتف",
      Enquiry: "إستفسار",
      "Investor Enquiry": "إستفسار مستثمر",
      "Careers Enquiry": "إستفسار وظائف",
      "Supplier Enquiry": "إستفسار مورد",
      "Employee Enquiry": "إستفسار موظف",
      Other: "أخري",
      Message: "نص الرسالة",
      "Speak up": "تكلم",
      "If you suspect any possible violation of our Code of Conduct or any wrong practices speak up and report immediately.":
        "إذا كنت تشك في أي انتهاك محتمل لقواعد السلوك الخاصة بنا أو أي ممارسات خاطئة ، فتحدث وأبلغ على الفور",
      "Integrity is one of our values and is paramount to the success of our business. If you suspect any unethical activities or misconduct use the confidential Integrity Hotline which is completely independent and secure.":
        "النزاهة هي إحدى قيمنا وهي ذات أهمية قصوى لنجاح أعمالنا. إذا كنت تشك في وجود أي أنشطة غير أخلاقية أو سوء سلوك ، فاستخدم الخط الساخن للنزاهة وهو مستقل وآمن تمامًا",
      Submit: "أرسل",
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
