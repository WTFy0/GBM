import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: '1988',
      title_ar: 'بداية الرحلة',
      title_en: 'Journey Begins',
      description_ar: 'بدأنا كمنشأة فردية في تجارة مواد البناء',
      description_en: 'Started as an individual establishment in construction materials trade',
    },
    {
      year: '2004',
      title_ar: 'التوسع',
      title_en: 'Expansion',
      description_ar: 'أصبحنا شركة تضامن وتوسعنا في الخدمات',
      description_en: 'Became a partnership company and expanded services',
    },
    {
      year: '2017',
      title_ar: 'الشركة المساهمة',
      title_en: 'Joint Stock Company',
      description_ar: 'تحولنا إلى شركة مساهمة برأس مال 100 مليون جنيه',
      description_en: 'Transformed into a joint stock company with 100 million EGP capital',
    },
    {
      year: '2024',
      title_ar: 'التوجه العالمي',
      title_en: 'Global Expansion',
      description_ar: 'بدء التوسع في الأسواق الدولية',
      description_en: 'Started expansion into international markets',
    },
  ];

  const values = [
    {
      icon: Award,
      title_ar: 'الجودة',
      title_en: 'Quality',
      description_ar: 'نلتزم بتوريد أفضل المنتجات التي تلبي أعلى معايير الجودة العالمية',
      description_en: 'We are committed to supplying the best products that meet the highest global quality standards',
    },
    {
      icon: Target,
      title_ar: 'الدقة',
      title_en: 'Precision',
      description_ar: 'نحرص على الدقة في كل التفاصيل من التوريد إلى التسليم',
      description_en: 'We ensure precision in every detail from supply to delivery',
    },
    {
      icon: Users,
      title_ar: 'الشراكة',
      title_en: 'Partnership',
      description_ar: 'نبني علاقات طويلة الأمد مع عملائنا وشركائنا',
      description_en: 'We build long-term relationships with our clients and partners',
    },
    {
      icon: Zap,
      title_ar: 'الكفاءة',
      title_en: 'Efficiency',
      description_ar: 'نوفر خدمات سريعة وفعالة لتلبية احتياجات عملائنا',
      description_en: 'We provide fast and efficient services to meet our clients\' needs',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('من نحن', 'About Us')}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t(
                'نحن وكالة جي بي إم التجارية، رائدة في مجال توريد مواد البناء في مصر منذ عام 1988',
                'We are GBM Commercial Agency, a leader in construction materials supply in Egypt since 1988'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('قصة نجاحنا', 'Our Success Story')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  'تأسست وكالة جي بي إم التجارية لتكون واحدة من أكبر وكلاء الأسمنت والحديد في مصر. نحن نفخر بخدمة عملائنا في القطاعين العام والخاص، ونساهم في بناء مستقبل مصر من خلال توريد أفضل مواد البناء.',
                  'GBM Commercial Agency was established to become one of Egypt\'s largest cement and steel agents. We pride ourselves on serving clients in both public and private sectors, contributing to building Egypt\'s future through supplying the finest construction materials.'
                )}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(
                  'على مدى أكثر من 35 عاماً، تطورنا من منشأة فردية صغيرة إلى شركة مساهمة كبرى برأس مال 100 مليون جنيه مصري، وأصبحنا شريكاً موثوقاً للعديد من المشاريع الكبرى في مصر.',
                  'Over more than 35 years, we evolved from a small individual establishment to a major joint stock company with a capital of 100 million Egyptian pounds, becoming a trusted partner for many major projects in Egypt.'
                )}
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('مسيرتنا عبر التاريخ', 'Our Journey Through Time')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white p-8 rounded-2xl shadow-lg max-w-md ${
                      index % 2 === 0 ? 'md:ml-auto md:mr-8 mx-auto' : 'md:mr-auto md:ml-8 mx-auto'
                    }`}
                  >
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {t(milestone.title_ar, milestone.title_en)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(milestone.description_ar, milestone.description_en)}
                    </p>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg relative z-10 mx-auto md:mx-0 my-4 md:my-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('قيمنا ومبادئنا', 'Our Values & Principles')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد علاقتنا مع عملائنا وشركائنا',
                'We believe in a set of core values that guide our work and define our relationship with our clients and partners'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(value.title_ar, value.title_en)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(value.description_ar, value.description_en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('انضم إلى شركائنا', 'Join Our Partners')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t(
                'كن جزءاً من قصة نجاحنا وتمتع بخدماتنا المتميزة وجودة منتجاتنا',
                'Be part of our success story and enjoy our excellent services and product quality'
              )}
            </p>
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t('تواصل معنا الآن', 'Contact Us Now')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;