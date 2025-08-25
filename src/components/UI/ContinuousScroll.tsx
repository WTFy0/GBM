import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Partner {
  name_ar: string;
  name_en: string;
}

interface ContinuousScrollProps {
  partners: Partner[];
}

const ContinuousScroll: React.FC<ContinuousScrollProps> = ({ partners }) => {
  const { t } = useLanguage();

  // Double the partners for seamless infinite loop
  const extendedPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden relative bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 py-8 rounded-2xl">
      <motion.div
        className="flex space-x-8 rtl:space-x-reverse"
        animate={{
          x: [0, -100 * partners.length * 8], // Smooth continuous movement
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: partners.length * 8, // Slower, smoother animation
            ease: "linear",
          },
        }}
        style={{ width: 'max-content' }}
      >
        {extendedPartners.map((partner, index) => (
          <div
            key={`${partner.name_en}-${index}`}
            className="flex-shrink-0 bg-white p-6 rounded-xl border border-purple-100 shadow-md min-w-[350px] mx-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* Partner Logo Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">
                    {partner.name_en.split(' ')[0].charAt(0)}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-1">
                  {t(partner.name_ar, partner.name_en)}
                </h3>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
                  <span>{t('شريك معتمد', 'Certified Partner')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContinuousScroll;