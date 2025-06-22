"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function WhyChooseUs() {
  const { t } = useLanguage()

  const reasons = [
    { key: "qualityServices", icon: "✅" },
    { key: "keepPace", icon: "🚀" },
    { key: "efficiency", icon: "⏰" },
    { key: "team", icon: "👥" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("whyChooseTitle")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg"
            >
              <div className="text-3xl">{reason.icon}</div>
              <p className="text-lg text-gray-700 leading-relaxed">{t(reason.key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
