"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function Values() {
  const { t } = useLanguage()

  const values = [
    { key: "dependability", icon: "🛡️", color: "from-blue-500 to-blue-600" },
    { key: "creativity", icon: "💡", color: "from-purple-500 to-purple-600" },
    { key: "perfection", icon: "⭐", color: "from-yellow-500 to-yellow-600" },
    { key: "attention", icon: "👁️", color: "from-green-500 to-green-600" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("valuesTitle")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("valuesSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl "
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t(value.key)}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
