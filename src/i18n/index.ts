import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
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
      "PANDA PLUS": "بنده بلس",
      "Panda plus": "بنده بلس",
      "Better Than Ever...!": "...صارت أحلي",
      "Today, we offer you a new interactive shopping experience, that meets all your needs.":
        "نقدم لكم تجربة تسوق جديدة، تفاعلية و تلبى مختلف احتياجاتكم. اكتشفوا فرع بنده المجدد و الأقرب لكم",
      "Visit us at selected branches across the Kingdom & enjoy a unique shopping experience!":
        "",
      "LEARN MORE": "اكتشف المزيد",
      "About Panda": "عن بنده",
      "Panda from a small store in Riyadh to the largest retailer in Saudi Arabia.":
        "بنده من متجر صغير في الرياض إلى أكبر بائع تجزئة في المملكة العربية السعودية",
      "Panda was founded in 1978 and quickly established itself as one of the leading organizations in the retail sector in the Kingdom of Saudi Arabia. In 1994, Panda merged with Azizia Company to become Azizia Panda United. Later in 1998, The Company was acquired by Savola Group, a leading retail company specializing in food products and immediately revolutionized its business model.":
        "تأسست بنده عام ۱۹۷۸ وسرعان ما رسخت مكانتها كواحدة من المؤسسات الرائدة في قطاع التجزئة في المملكة العربية السعودية. في عام ۱۹۹٤ اندمجت بنده مع شركة العزيزية لتصبح عزيزية بنده المتحدة. في وقت لاحق من عام ۱۹۹۸ ، تم الاستحواذ على الشركة من قبل مجموعة صافولا ، وهي شركة تجزئة رائدة متخصصة في المنتجات الغذائية وأحدثت ثورة في نموذج أعمالها على الفور",
      "Our Brands": "علاماتنا التجارية",
      "With a focus on higher quality, Panda introduced in 2009 a portfolio of private label products ranging from food, non-food to personal care, home care and beauty care products.":
        "مع التركيز على الجودة العالية ،  في عام ۲۰۰۹ مجموعة من منتجات العلامات الخاصة التي تتراوح من المواد الغذائية وغير الغذائية إلى العناية الشخصية والعناية المنزلية ومنتجات العناية بالجمال",
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
      Panda: "بنده",
      "Leadership - Panda": "القيادة - بنده",
      "Our executive team of experienced retail experts is backed by a strongly motivated, diverse group of managers and staff dedicated to creating a competitive customer value proposition. Our highly seasoned and talented senior management team, with an average of nearly 30 years of retail industry experience, provides strong leadership to focus on our company’s overall growth and community partnership goals.":
        "يتم دعم فريقنا التنفيذي المكون من خبراء التجزئة ذوي الخبرة من قبل مجموعة متنوعة ومتنوعة من المديرين والموظفين الذين يكرسون جهودهم لإنشاء عرض قيمة تنافسية للعملاء. يوفر فريق الإدارة العليا المتمرس والموهوب لدينا ، والذي يتمتع بمتوسط ما يقرب من 30 عامًا من الخبرة في مجال تجارة التجزئة ، قيادة قوية للتركيز على النمو الشامل لشركتنا وأهداف الشراكة المجتمعية",
      "Panda Leadership Team": "فريق قيادة بنده",
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
      "About - Panda": "عن - بنده",
      "Our executive team of experienced retail experts is backed by a strongly motivated, diverse group of managers and staff dedicated to creating a competitive customer value proposition.":
        "يتم دعم فريقنا التنفيذي من خبراء البيع بالتجزئة ذوي الخبرة من قبل مجموعة متنوعة ومتنوعة من المديرين والموظفين الذين يكرسون جهودهم لإنشاء عرض قيمة تنافسية للعملاء",
      "Our highly seasoned and talented senior management team, with an average of nearly 30 years of retail industry experience, provides strong leadership to focus on our company’s overall growth and community partnership goals.":
        "يوفر فريق الإدارة العليا المتمرس والموهوب لدينا ، والذي يتمتع بمتوسط ما يقرب من 30 عامًا من الخبرة في مجال تجارة التجزئة ، قيادة قوية للتركيز على النمو الشامل لشركتنا وأهداف الشراكة المجتمعية",
      "Seasoned Leadership Team Driving Panda success":
        "فريق قيادة متمرس يقود نجاح البنده",
      "Distribution fleet of trucks with 4 main distribution centers across the Kingdom":
        "أسطول توزيع من الشاحنات مع ٤ مراكز توزيع رئيسية في جميع أنحاء المملكة",
      "SKUs of products displayed at our stores":
        "وحدات SKU للمنتجات المعروضة في متاجرنا",
      "Stores across the Kingdom (Excluding Jamjom and Egypt)":
        "متجر في جميع أنحاء المملكة (باستثناء جمجوم ومصر)",
      "Employees work with dedication and commitment":
        "موظف يعملون بتفان والتزام",
      "Customer shopping at our stores every year":
        "عميل يتسوقون في متاجرنا كل عام",
      "Sales across all our stores (2021)": "المبيعات في جميع متاجرنا (۲۰۲۱)",
      "Headquartered in the Kingdom of Saudi Arabia, Panda Retail Company is one of the main retail chain businesses in the Middle East and the biggest grocery retailer in the country with more than 188 stores in 40 cities.":
        "يقع المقر الرئيسي لشركة بنده للتجزئة في المملكة العربية السعودية ، وهي واحدة من شركات سلسلة البيع بالتجزئة الرئيسية في الشرق الأوسط وأكبر متاجر البقالة بالتجزئة في البلاد مع أكثر من ۱۸۸ متجرًا في ٤۰ مدينة",
      "Panda operates 2 type of stores, Hyper Panda (larger stores) and Panda Supermarkets.":
        "تدير بنده نوعين من المتاجر ، هايبر بنده (متاجر أكبر) و بنده سوبرماركت",
      "With more than 100 million customers visiting our stores every year, we operate 4 main distribution centers in the country with a fleet of more than 600 trucks to deliver 30,000 SKUs of food and non-food products to our stores.":
        "مع أكثر من ۱۰۰ مليون عميل يزورون متاجرنا كل عام ، نقوم بتشغيل ٤ مراكز توزيع رئيسية في الدولة بأسطول يتألف من أكثر من ٦۰۰ شاحنة لتوصيل ۳۰،۰۰۰ وحدة حفظ الأوراق المالية من المنتجات الغذائية وغير الغذائية إلى متاجرنا",
      "Since 2009, Panda has also introduced more than 400 private label products to serve our customers as a trusted retailer of choice in a number of food and non-food categories.":
        "منذ عام ۲۰۰۹ ، قدمت بنده أيضًا أكثر من ٤۰۰ من منتجات العلامات التجارية الخاصة لخدمة عملائنا كبائع تجزئة موثوق به في عدد من الفئات الغذائية وغير الغذائية",
      "Over 17,000 employees work with dedication and commitment that is second to none in order to cater to the shopping needs of our customers.":
        "يعمل أكثر من ۱۷۰۰۰ موظف بتفان والتزام لا يعلى عليه من أجل تلبية احتياجات التسوق لعملائنا",
      "What we do": "الذي نفعله",
      "Million transactions": "مليون معاملة",
      "Achieved over 100+ million transactions through Panda chain of Hypermarkets and Supermarkets.":
        "بنده أنجزت أكثر من ۱۰۰ مليون معاملة من خلال سلسلة من الهايبر ماركت والسوبر ماركت",
      "Our history of steady growth": "تاريخنا في النمو المطرد",
      Explore: "إستكشف",
      "Working with Panda": "العمل مع بنده",
      "We create an integrated work environment for you.":
        "نخلق لك بيئة عمل متكاملة",
      "Learn More": "إستكشف المزيد",
      "Partnering with Panda": "الشراكة مع بنده",
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
      "Best Management Talent": "أفضل موهبة إدارية",
      "by a coalition of human resources leadership of the United Kingdom":
        "من قبل ائتلاف من قيادة الموارد البشرية في المملكة المتحدة",
      "Asia’s Best Brand Awards": "جوائز أفضل علامة تجارية في آسيا",
      "in Singapore": "في سنغافورة",
      "Brand Excellence in Retail Award":
        "جائزة التميز للعلامة التجارية في البيع بالتجزئة",
      "by world conference of the brand":
        "من قبل المؤتمر العالمي للعلامة التجارية",
      "1st Place": "المركز الأول",
      "Best Saudi Working Environment": "أفضل بيئة عمل سعودية",
      "ranked in Eqtisadia Newspaper": "المرتبة في جريدة الاقتصادية",
      "Disabled Children Association Award": "جائزة جمعية الأطفال المعوقين",
      "for Leave the Change for Them initiative": "لمبادرة اترك التغيير لهم",
      "One of the Best 100 Brands": "واحدة من أفضل ۱۰۰ علامة تجارية",
      "Al-Watan Newspaper in collaboration with Ipsos Global":
        "جريدة الوطن بالتعاون مع إبسوس جلوبال",
      "Global Brand Excellence Award": "جائزة التميز للعلامة التجارية العالمية",
      "generated by the word conference of the brand":
        "تم إنشاؤها بواسطة كلمة مؤتمر للعلامة التجارية",
      "for the retail sector by ET NOW international": "جائزة القيادة الآسيوية",
      "Best Employer in Middle East & North of Africa Region":
        "أفضل صاحب عمل في منطقة الشرق الأوسط وشمال إفريقيا",
      "by Aon Hewitt": "بواسطة آون هيويت",
      "Asia’s Best Employer Awards": "جوائز أفضل رب عمل في آسيا",
      "by Company Consultant CMO in Singapore":
        "بواسطة مستشار شركة كبير مسؤولي التسويق في سنغافورة",
      "The Saudi Award for Social Responsibility":
        "الجائزة السعودية للمسؤولية الاجتماعية",
      ", as the best company in the Kingdom in the field of Social Responsibility by the Chamber of Commerce and Industry in Jeddah":
        "كأفضل شركة بالمملكة في مجال المسؤولية الاجتماعية من قبل الغرفة التجارية الصناعية بجدة",
      "Achieved the second ranking for": "حقق الترتيب الثاني لـ",
      "Best Social Responsibility initiatives":
        "أفضل مبادرات المسؤولية الاجتماعية",
      "for “my environment my friend ” Project in World Retail Congress in Paris":
        "لمشروع 'بيئتي صديقي' في المؤتمر العالمي للبيع بالتجزئة في باريس",
      "by CMO in Asia": "بواسطة كبير مسؤولي التسويق في آسيا",
      "Best Food Market Award": "جائزة أفضل سوق للمواد الغذائية",
      "for the best food retail market in Arab word":
        "لأفضل سوق بيع بالتجزئة للمواد الغذائية في العالم العربي",
      "ranked 6th in Eqtisadia Newspaper":
        "المرتبة السادسة في جريدة الاقتصادية",
      "Sustainable Marketing Excellence Award":
        "جائزة التميز في التسويق المستدام",
      "Best Use of Social Media in Marketing Award": "",
      "Top 100 Brand": "أفضل 100 علامة تجارية",
      "in Saudi Arabia by Watan Newspaper in Riyadh":
        "في المملكة العربية السعودية من جريدة وطن بالرياض",
      "Best Retail Company": "أفضل شركة بيع بالتجزئة",
      "by Arabian Business in Riyadh": "من أريبيان بزنس في الرياض",
      "Brand Impact Leader by Brand Z. number 1 as the Brand Impact Leader in Saudi Arabia and the 10th most valuable brand in Saudi Arabia by the first ever Brand Valuation Report in Saudi Arabia published by Prince Mohammad Bin Salman College":
        "رائد تأثير العلامة التجارية من قبل العلامة التجارية Z. رقم ۱ كقائد تأثير العلامة التجارية في المملكة العربية السعودية والعلامة التجارية العاشرة الأكثر قيمة في المملكة العربية السعودية من خلال تقرير تقييم العلامة التجارية الأول على الإطلاق في المملكة العربية السعودية الذي نشرته كلية الأمير محمد بن سلمان",
      "Best Companies Award for Employees with Disability as the second foreign company given by the Government of Brazil in association with the United Nations":
        "جائزة أفضل الشركات للموظفين ذوي الإعاقة باعتبارها ثاني شركة أجنبية تمنحها حكومة البرازيل بالاشتراك مع الأمم المتحدة",
      "Best Companies Award for Employees with Disability at the United Nations Headquarters in NY":
        "جائزة أفضل الشركات للموظفين ذوي الإعاقة في مقر الأمم المتحدة في نيويورك",
      "Mowaamah Inclusion Certificate": "شهادة شمولية الموائمة",
      "Ministry of Labor & Social Development awarded Panda its Gold standard Mowaamah Certificate. This was in recognition for its long-standing commitment as a disability friendly organization and for its programs and initiatives in relation to the employment of people with disabilities in the Kingdom":
        "وزارة العمل والتنمية الاجتماعية منحت بنده شهادة المواامة ذات المعيار الذهبي. جاء ذلك تقديراً لالتزامها الطويل الأمد كمنظمة صديقة للإعاقة ولبرامجها ومبادراتها فيما يتعلق بتوظيف الأشخاص ذوي الإعاقة في المملكة.",
      "Saudization Award": "جائزة السعودة",
      "His Highness Prince of Al-Qassim Region and His Excellency Minister of Labor & Social Development recognized Panda Retail Company with the Saudization Award for realizing 60% Saudization of staff in the Company’s stores across Al-Qassim Region":
        "كرّم سمو أمير منطقة القصيم ومعالي وزير العمل والتنمية الاجتماعية شركة بنده للتجزئة بجائزة السعودة لتحقيق نسبة 60٪ من توطين الموظفين في متاجر الشركة في منطقة القصيم",
      "Awarded as one of the Most Supportive Brands in Saudi Arabia":
        "مُنحت كواحدة من أكثر العلامات التجارية دعماً في المملكة العربية السعودية",
      "by IPSOS, a global leader in market research":
        "من قطاع معهد استطلاعات الرأي العام ، شركة عالمية رائدة في أبحاث السوق",
      "Awarded as one of the Most Valuable Brands in Saudi Arabia and United Arab Emirates":
        "مُنحت كواحدة من أكثر العلامات التجارية قيمة في المملكة العربية السعودية والإمارات العربية المتحدة",
      "by the world’s largest advertising group WPP and its subsidiary Kantar, a leading research, consumer insights and data company":
        "من قبل أكبر مجموعة إعلانية في العالم المجموعة الدولية لخدمات الدعاية والتسويق وشركتها الفرعية كانتار ، وهي شركة رائدة في مجال الأبحاث وإحصاءات المستهلكين وبيانات",
      "Panda Click application won": "فاز تطبيق بنده كليك",
      "Bronze Award": "جائزة برونزية",
      "from Huawei Developers Competition": "من مسابقة مطوري هواوي",
      "Asian Leadership Award": "جائزة القيادة الآسيوية",
      "Largest Retail Chain in the Middle East":
        "أكبر سلسلة بيع بالتجزئة في الشرق الأوسط",
      "Panda is one of the largest retail chain businesses in the Middle East and the main player in the retail sector in KSA.":
        "بنده هي واحدة من أكبر شركات سلاسل البيع بالتجزئة في الشرق الأوسط واللاعب الرئيسي في قطاع التجزئة في المملكة العربية السعودية",
      "Began in the heart of Riyadh": "بدأت في قلب الرياض",
      "Beginnings in the heart of Riyadh Panda started from a small store in Riyadh and grew to become the largest retailer in Saudi Arabia.":
        "بدايات في قلب الرياض بدأت بنده من متجر صغير في الرياض ونمت لتصبح أكبر بائع تجزئة في المملكة العربية السعودية",
      "Our Awards": "جوائزنا",
      "Our achievements": "إنجازاتنا",
      "Our success is wholly dependent on the communities and the customers we serve. We strive every day to nurture our entire Panda team, our communities, to surprise and delight with constant improvements to the quality of life of everyone in the region. With this in mind we work hard to achieve in every area of life Panda touches. Our collective achievements are also our inspiration to carry on the work we do to the best of our ability.":
        "يعتمد نجاحنا كليًا على المجتمعات والعملاء الذين نخدمهم. نحن نسعى جاهدين كل يوم لرعاية فريق بنده بأكمله ، ومجتمعاتنا ، من أجل المفاجأة والبهجة من خلال التحسينات المستمرة لجودة حياة كل فرد في المنطقة. مع وضع هذا في الاعتبار ، نعمل بجد لتحقيقه في كل مجال من مجالات الحياة التي تلمسها بنده. إن إنجازاتنا الجماعية هي أيضًا مصدر إلهامنا لمواصلة العمل الذي نقوم به بأفضل ما في وسعنا",
      "Certificates & Awards": "الشهادات والجوائز",
      "Certificates & Awards - Panda": "الشهادات والجوائز - بنده",
      "2010": "۲۰۱۰",
      "2011": "۲۰۱۱",
      "2012": "۲۰۱۲",
      "2013": "۲۰۱۳",
      "2014": "۲۰۱٤",
      "2015": "۲۰۱٥",
      "2017": "۲۰۱۷",
      "2018": "۲۰۱۸",
      "2020": "۲۰۲۰",
      "17,000+": "أكثر من ۱۷,۰۰۰",
      "30,000+": "أكثر من ۳۰,۰۰۰",
      "100+ Million": "أكثر من ۱۰۰ مليون ",
      "11.9 Billion": "حوالي ۱۱.۹ مليار",
      "600+": "أكثر من ٦۰۰",
      "188": "۱۸۸",
      "100+": "+۱۰۰",
      WhatsApp: "واتساب",
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
