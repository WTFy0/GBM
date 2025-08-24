import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Building, Shield, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import ContinuousScroll from '../components/UI/ContinuousScroll';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: 35, suffix: '+', label_ar: 'سنة خبرة', label_en: 'Years Experience' },
    { number: 500, suffix: '+', label_ar: 'مشروع منجز', label_en: 'Completed Projects' },
    { number: 250, suffix: '+', label_ar: 'عميل راضي', label_en: 'Satisfied Clients' },
    { number: 24, suffix: '/7', label_ar: 'دعم العملاء', label_en: 'Customer Support' },
  ];

  const services = [
    {
      icon: Building,
      title_ar: 'توريد الأسمنت المعبأ',
      title_en: 'Bagged Cement Supply',
      description_ar: 'توريد جميع أنواع الأسمنت المعبأ بأعلى معايير الجودة',
      description_en: 'Supply of all types of bagged cement with highest quality standards',
    },
    {
      icon: Truck,
      title_ar: 'توريد الأسمنت السائب',
      title_en: 'Bulk Cement Supply',
      description_ar: 'خدمات توريد الأسمنت السائب للمشاريع الكبيرة',
      description_en: 'Bulk cement supply services for large-scale projects',
    },
    {
      icon: Shield,
      title_ar: 'توريد حديد التسليح',
      title_en: 'Steel Reinforcement Supply',
      description_ar: 'توريد حديد التسليح من أفضل المصانع المحلية',
      description_en: 'Steel reinforcement supply from the best local factories',
    },
  ];

  const partners = [
    { name_ar: 'الشركة الوطنية للأسمنت ببني سويف', name_en: 'National Company for Cement in Beni Suef' },
    { name_ar: 'شركة العريش للأسمنت', name_en: 'Al-Arish Cement Company' },
    { name_ar: 'شركة السويس للصلب', name_en: 'Suez Steel Company' },
    { name_ar: 'شركة المدينة للصلب', name_en: 'Al-Madina Steel Company' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('وكالة جي بي إم التجارية', 'GBM Commercial Agency')}
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-yellow-400 mb-6 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('التجارة من أجل الدقة والربح', 'Trading for precision and profit')}
            </motion.p>
            
            <motion.p
              className="text-xl text-gray-200 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t(
                'واحدة من أكبر وكلاء الأسمنت والحديد في مصر، نخدم السوق المحلي والدولي بأعلى معايير الجودة والاحترافية',
                'One of Egypt\'s largest cement and steel agents, serving local and international markets with the highest standards of quality and professionalism'
              )}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover-glow inline-flex items-center justify-center animate-pulse-slow"
              >
                {t('تواصل معنا', 'Contact Us')}
                <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" size={20} />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover-glow inline-flex items-center justify-center"
              >
                {t('منتجاتنا', 'Our Products')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('أرقامنا تتحدث', 'Our Numbers Speak')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl font-bold text-purple-600 mb-2"
                />
                <p className="text-gray-600 font-medium">
                  {t(stat.label_ar, stat.label_en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('خدماتنا', 'Our Services')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover-lift hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-bounce-gentle">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(service.title_ar, service.title_en)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.description_ar, service.description_en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('شركاؤنا', 'Our Partners')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'نتشرف بالشراكة مع أفضل الشركات في مصر لتوريد أعلى جودة من الأسمنت والحديد',
                'We are proud to partner with the best companies in Egypt to supply the highest quality cement and steel'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ContinuousScroll partners={partners} />
            </motion.div>
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
              {t('هل تحتاج إلى منتجاتنا؟', 'Need Our Products?')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t(
                'تواصل معنا الآن للحصول على أفضل الأسعار وخدمة متميزة',
                'Contact us now for the best prices and excellent service'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201225510078"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('اتصل الآن', 'Call Now')}
              </a>
              <a
                href="https://wa.me/201225510078"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('واتساب', 'WhatsApp')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;