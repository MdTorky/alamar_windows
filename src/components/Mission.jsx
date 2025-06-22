"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function Mission() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t("missionTitle")}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("missionText")}</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <span className="text-blue-600 font-semibold">{t("excellence")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t("visionTitle")}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("visionText")}</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🌟</span>
              </div>
              <span className="text-blue-600 font-semibold">{t("firstChoice")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
