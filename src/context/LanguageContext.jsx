import { createContext, useContext, useState } from "react"

const LanguageContext = createContext(undefined)

const translations = {
  ar: {
    // Header
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    projects: "مشاريعنا",
    contact: "اتصل بنا",

    // Hero
    heroTitle: "نافذة العمار للمقاولات الكهروميكانيكية",
    heroSubtitle:
      "شركة متخصصة في المملكة العربية السعودية تساهم بشكل كبير في التطور من خلال تقديم خدمات متنوعة وبجودة عالية",
    getStarted: "ابدأ معنا",

    // About
    aboutTitle: "من نحن",
    aboutText:
      "نافذة العمار للمقاولات الكهروميكانيكية تعد من الشركات المتخصصة في المملكة العربية السعودية التي تساهم بشكل كبير في التطور من خلال تقديم خدمات متنوعة وبجودة عالية بأقصى درجات الاحترافية والابداع وهدفنا من ذلك تحقيق أكبر عائد واستفادة لخدمة شركاؤنا و نفخر بكوننا جزء من تحقيق رؤية المملكة 2030 للارتقاء بمعاير الجودة والاستدامة ومطابقة المواصفات العالمية.",
    Excellence: "التميز",
    Innovation: "الابتكار",
    Vision: "رؤية",
    partOfVision: "جزء من رؤية السعودية 2030",
    cuttingEdge: "الحلول المتطورة",
    highestQuality: "أعلى معايير الجودة",

    // Mission & Vision
    missionTitle: "رسالتنا",
    missionText: "التميز والريادة في كسب ثقة شركاؤنا من خلال خدمات وحلول مبتكرة ومتكاملة ومنفذة بدقة وجودة عالية.",
    visionTitle: "رؤيتنا",
    visionText:
      "الوصول لأن نصبح الخيار الاول في مجال المقاولات والمساهمة في تكوين المجتمع العمراني الامثل في صورة مزيج بين أصالة الماضي والهوية الوطنية ومواكبة التطور التقني والحفاظ علي التوازن البيئي و ذلك من خلال تقديم خدمات احترافية متكاملة وفق أعلي معايير للجودة.",
    excellence: "التميز والقيادة",
    firstChoice: "الاختيار الأول في المقاولات",

    // Values
    valuesTitle: "قيمنا",
    valuesSubtitle: "قيمنا الراسخة والتي نحافظ عليها طوال مسيرتنا",
    dependability: "الجدارة",
    creativity: "الإبداع",
    perfection: "الإتقان",
    attention: "الإهتمام",

    // Services
    servicesTitle: "خدماتنا",
    servicesSubtitle: "خدماتنا تتمحور حول تقديم حلول احترافية وسريعة لتطوير أعمال شركائنا من العملاء",

    // Why Choose Us
    whyChooseTitle: "لماذا نافذة العمار للمقاولات الكهروميكانيكية؟",
    qualityServices: "لأننا نوفر خدمات عالية الجودة",
    keepPace: "نواكب التطور والإبداع فيما يتعلق بما نقدمه من خدمات",
    efficiency: "نعمل على إنجاز المشاريع بأعلى كفاءة ممكنة وفي الوقت المحدد",
    team: "لدينا فريق عمل من أعلي الكوادر الفنية والمهنية والمدربة علي أعلي مستويات الجودة",

    // Projects
    projectsTitle: "مشاريعنا",
    projectsSubtitle: "نفخر بإنجازاتنا في مشاريع متنوعة عبر المملكة",

    // Contact
    contactTitle: "اتصل بنا",
    contactSubtitle: "نحن هنا لخدمتكم",
    address: "العنوان",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    yourName: 'اسمك',
    yourEmail: "بريدك الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "إرسال",

    // Footer
    footerText: "جميع الحقوق محفوظة",
  },
  en: {
    // Header
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",

    // Hero
    heroTitle: "Alamar Windows for Electro Mechanic Construction",
    heroSubtitle:
      "A specialized company in Saudi Arabia that contributes significantly to development by providing diverse services of high quality",
    getStarted: "Get Started",

    // About
    aboutTitle: "About Us",
    aboutText:
      "Alamar Windows for Electromechanics Contracting is one of the specialist institutions in the Kingdom of Saudi Arabia that contributes significantly to development by providing diverse services of high quality and with the utmost professionalism and creativity. Our goal is to achieve the greatest return and benefit from serving our partners. We are proud to be part of achieving the Kingdom's Vision 2030 to raise standards of quality and sustainability and conform to international specifications.",
    Excellence: "Excellence",
    Innovation: "Innovation",
    Vision: "Vision",
    partOfVision: "Part of Saudi Vision 2030",
    cuttingEdge: "Cutting-edge solutions",
    highestQuality: "Highest quality standards",

    // Mission & Vision
    missionTitle: "Our Mission",
    missionText:
      "Our mission is excellence and leadership in gaining the trust of our partners through innovative and integrated services and solutions implemented with high accuracy and reliability.",
    visionTitle: "Our Vision",
    visionText:
      "Achieving to become the first choice in the field of contracting and contributing to the formation of the ideal urban community in the form of a mixture between the authenticity of the past and national identity, keeping pace with technical development and maintaining environmental balance, by providing integrated professional services according to the highest standards of quality.",
    excellence: "Excellence & Leadership",
    firstChoice: "First Choice in Contracting",


    // Values
    valuesTitle: "Our Values",
    valuesSubtitle: "Our established values which we maintain throughout our journey",
    dependability: "Dependability",
    creativity: "Creativity",
    perfection: "Perfection",
    attention: "Attention",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle:
      "Our services revolve around providing professional and quick solutions to develop the business of our client partners",

    // Why Choose Us
    whyChooseTitle: "Why Alamar Windows for Electromechanical Contracting?",
    qualityServices: "Because we provide high quality services",
    keepPace: "We keep pace with developments in the services we provide",
    efficiency: "We work to complete projects with the highest possible efficiency and on time",
    team: "We have a team of the highest technical and professional staff trained to the highest levels of quality",

    // Projects
    projectsTitle: "Our Projects",
    projectsSubtitle: "We are proud of our achievements in diverse projects across the Kingdom",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "We are here to serve you",
    address: "Address",
    phone: "Phone",
    email: "Email",
    yourName: 'Your Name',
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",

    // Footer
    footerText: "All rights reserved",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"} dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
