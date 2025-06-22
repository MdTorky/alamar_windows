"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="text-xl font-bold">{language === "ar" ? "نافذة العمار" : "Alamar Windows"}</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {language === "ar"
                ? "شركة متخصصة في المقاولات الكهروميكانيكية في المملكة العربية السعودية"
                : "Specialized electromechanical contracting company in Saudi Arabia"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">{language === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="space-y-2">
              {["home", "about", "services", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-gray-400 hover:text-white transition-colors">
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">{language === "ar" ? "تواصل معنا" : "Contact Info"}</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 Kingdom of Saudi Arabia</p>
              <p>📞 +966 XX XXX XXXX</p>
              <p>✉️ info@alamarwindows.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Alamar Windows. {t("footerText")}</p>
        </motion.div>
      </div>
    </footer>
  )
}
