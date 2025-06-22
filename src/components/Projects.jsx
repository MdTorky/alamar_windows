"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function Projects() {
  const { t, language } = useLanguage()

  const majorProjects = [
    {
      title: language === "ar" ? "كلية الملك عبد العزيز الحربية" : "King Abdul-Aziz Military College",
      desc:
        language === "ar"
          ? "تبديل ثلاث وحدات 3600 طن تبريد مع كامل الملحقات والمضخات"
          : "Replacement of three 3,600-ton refrigeration units with all accessories and pumps",
      icon: "🏛️",
    },
    {
      title: language === "ar" ? "برج المملكة" : "Kingdom Tower",
      desc:
        language === "ar"
          ? "تركيب عدد 2 وحدة شيلر 450 طن تبريد مع كامل الملحقات والمضخات"
          : "Installation of two chiller units, 450 refrigeration tons, with all accessories and pumps",
      icon: "🏗️",
    },
  ]

  const clients = [
    language === "ar" ? "الحرم المكي" : "Grand Mosque in Mecca",
    language === "ar" ? "الحرم المدني" : "The campus of the Medina Mosque",
    language === "ar" ? "مطار الملك خالد" : "King Khalid Airport",
    language === "ar" ? "مستشفى الملك فهد التخصصي" : "King Fahd Specialist Hospital",
    language === "ar" ? "أرامكو" : "Aramco",
    language === "ar" ? "سابك" : "Sabic",
    language === "ar" ? "جامعة الملك سعود" : "King Saud University",
    language === "ar" ? "وزارة الدفاع" : "Ministry of Defense",
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("projectsTitle")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("projectsSubtitle")}</p>
        </motion.div>

        {/* Major Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {majorProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl mb-6">{project.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Client List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {language === "ar" ? "شركاء النجاح" : "Partners of Success"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg text-center text-sm font-medium text-gray-700 hover:shadow-md transition-all duration-300"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
