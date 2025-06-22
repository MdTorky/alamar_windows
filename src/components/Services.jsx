"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function Services() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: "❄️",
      title: language === "ar" ? "أعمال التبريد والتكييف" : "Refrigeration & Air Conditioning",
      desc:
        language === "ar"
          ? "فك وتركيب وصيانة مبردات الهواء المركزية"
          : "Installation and maintenance of central air cooling systems",
    },
    {
      icon: "🏗️",
      title: language === "ar" ? "أبراج التبريد" : "Cooling Towers",
      desc:
        language === "ar"
          ? "أعمال فك وتركيب وصيانة أبراج التبريد"
          : "Dismantling, installation and maintenance of cooling towers",
    },
    {
      icon: "⚡",
      title: language === "ar" ? "لوحات التحكم الكهربائية" : "Electrical Control Panels",
      desc:
        language === "ar"
          ? "فك وتركيب وصيانة لوحات التحكم والكهرباء"
          : "Installation and maintenance of control and electrical panels",
    },
    {
      icon: "🔧",
      title: language === "ar" ? "المضخات والصمامات" : "Pumps & Valves",
      desc:
        language === "ar"
          ? "أعمال فك وتركيب وصيانة وموازنة المضخات والصمامات"
          : "Installation, maintenance and balancing of pumps and valves",
    },
    {
      icon: "🧊",
      title: language === "ar" ? "تجميد المواسير" : "Pipe Freezing System",
      desc: language === "ar" ? "تجميد المواسير حتى قطر 18 بوصة" : "Pipe freezing system up to 18 inches diameter",
    },
    {
      icon: "🔥",
      title: language === "ar" ? "الهوت تابينج" : "Hot Tapping System",
      desc: language === "ar" ? "أعمال الهوت تابينج حتي قطر 48 بوصة" : "Hot tapping system up to 48 inches diameter",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("servicesTitle")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t("servicesSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
