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

  // Triple the partners for seamless infinite loop
  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="overflow-hidden relative bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 py-4 rounded-2xl">
      <motion.div
        className="flex space-x-8 rtl:space-x-reverse"
        animate={{
          x: [0, -100 * partners.length * 10], // Adjust based on card width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: partners.length * 6, // Even slower, smoother animation
            ease: "linear",
          },
        }}
        style={{ width: 'max-content' }}
      >
        {extendedPartners.map((partner, index) => (
          <div
            key={`${partner.name_en}-${index}`}
            className="flex-shrink-0 bg-white p-6 rounded-xl border border-purple-100 shadow-md min-w-[320px] mx-2 hover-glow"
          >
            <div className="flex items-center rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0 animate-bounce-gentle">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {t(partner.name_ar, partner.name_en)}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContinuousScroll;