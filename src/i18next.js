import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "home": "Home",
          "services": "Services",
          "gallery": "Photos Gallery",
          "testimonials": "Testimonials",
          "about": "About Us",
          "welcome_message": "Moving Doesn't have to be stressful",
          "first_q": "What's your current address ? ",
          "second_q": "Where do you want to move ? ",
          "third_q": "What items do you have ? ",
          "choose_data": "Choose a date ? ",
          "choose_time": "Choose a time ? ",
          "submit": "Submit",
          "name": "Name",
          "review": "Review",
          "happe_customers": "Happy Customers ",
          "about_us": "",
          "copy_rights": "Copyright © 2023 JadUmZug. All rights reserved"

        }
      },
      ar: {
        translation: {
          "home": "الصفحة الرئيسية",

          "services": "الخدمات",
          "gallery": "معرض الصور",
          "testimonials": "شهادات",
          "about": "من نحن",
          "welcome_message": "الانتقال لا يحتاج إلى أن يكون مجهدًا",
          "first_q": "ما هو عنوانك الحالي؟",
          "second_q": "إلى أين ترغب في الانتقال؟",
          "third_q": "ما اﻷغراض التي لديك؟",
          "choose_data": "اختر تاريخًا ؟",
          "choose_time": "اختر وقتًا ؟",
          "submit": "إرسال",
          "name": "الاسم",
          "review": "مراجعة",
          "happe_customers": "زبائن سعداء",
          "about_us": "",
          "copy_rights": "جميع الحقوق محفوظة © 2023 JadUmZug"
        }
      },
      de: {
        translation: {
          "home": "الصفحة الرئيسية",
          "services": "Dienstleistungen",
          "gallery": "Fotogalerie",
          "testimonials": "Kundenbewertungen",
          "about": "Über uns",
          "welcome_message": "Umziehen muss nicht stressig sein",
          "first_q": "Was ist Ihre aktuelle Adresse?",
          "second_q": "Wohin möchten Sie umziehen?",
          "third_q": "Welche Gegenstände haben Sie?",
          "choose_data": "Wählen Sie ein Datum?",
          "choose_time": "Wählen Sie eine Uhrzeit?",
          "submit": "Absenden",
          "name": "Name",
          "review": "Bewertung",
          "happe_customers": "Zufriedene Kunden",
          "about_us": "",
          "copy_rights": "Copyright © 2023 JadUmZug. Alle Rechte vorbehalten."
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
export default i18n;