import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Shield, Clock, CheckCircle, Users, Wrench, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Package,
      title_ar: 'توريد الأسمنت المعبأ',
      title_en: 'Bagged Cement Supply',
      description_ar: 'نوفر جميع أنواع الأسمنت المعبأ من أفضل المصانع المصرية بأعلى معايير الجودة والتسليم في الوقت المحدد',
      description_en: 'We provide all types of bagged cement from the best Egyptian factories with highest quality standards and on-time delivery',
      features_ar: [
        'جودة مضمونة 100%',
        'تسليم سريع',
        'أسعار تنافسية',
        'خدمة عملاء متميزة',
      ],
      features_en: [
        '100% Guaranteed Quality',
        'Fast Delivery',
        'Competitive Prices',
        'Excellent Customer Service',
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Truck,
      title_ar: 'توريد الأسمنت السائب',
      title_en: 'Bulk Cement Supply',
      description_ar: 'خدمات توريد الأسمنت السائب للمشاريع الكبيرة ومحطات الخرسانة الجاهزة بكميات كبيرة',
      description_en: 'Bulk cement supply services for large projects and ready-mix concrete plants in large quantities',
      features_ar: [
        'كميات كبيرة',
        'نقل متخصص',
        'تخزين آمن',
        'جدولة مرنة',
      ],
      features_en: [
        'Large Quantities',
        'Specialized Transport',
        'Safe Storage',
        'Flexible Scheduling',
      ],
      image: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title_ar: 'توريد حديد التسليح',
      title_en: 'Steel Reinforcement Supply',
      description_ar: 'توريد حديد التسليح بجميع الأقطار والأطوال من أفضل مصانع الحديد في مصر',
      description_en: 'Supply of steel reinforcement in all diameters and lengths from the best steel factories in Egypt',
      features_ar: [
        'جميع الأقطار متوفرة',
        'مطابق للمواصفات',
        'تقطيع حسب الطلب',
        'شهادات جودة',
      ],
      features_en: [
        'All Diameters Available',
        'Standards Compliant',
        'Custom Cutting',
        'Quality Certificates',
      ],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const additionalServices = [
    {
      icon: Clock,
      title_ar: 'خدمة 24/7',
      title_en: '24/7 Service',
      description_ar: 'نوفر خدمة عملاء على مدار الساعة للرد على استفساراتكم',
      description_en: 'We provide 24/7 customer service to answer your inquiries',
    },
    {
      icon: Users,
      title_ar: 'استشارات فنية',
      title_en: 'Technical Consulting',
      description_ar: 'فريق من الخبراء لتقديم الاستشارات الفنية المتخصصة',
      description_en: 'Team of experts providing specialized technical consulting',
    },
    {
      icon: Wrench,
      title_ar: 'صيانة ودعم',
      title_en: 'Maintenance & Support',
      description_ar: 'خدمات الصيانة والدعم الفني المستمر',
      description_en: 'Continuous maintenance and technical support services',
    },
    {
      icon: Globe,
      title_ar: 'التصدير والاستيراد',
      title_en: 'Export & Import',
      description_ar: 'خدمات التصدير والاستيراد للأسواق العالمية',
      description_en: 'Export and import services for global markets',
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
            backgroundImage: 'url("https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=1920")',
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
              {t('خدماتنا', 'Our Services')}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t(
                'نقدم مجموعة شاملة من الخدمات المتخصصة في توريد مواد البناء بأعلى معايير الجودة',
                'We offer a comprehensive range of specialized services in construction materials supply with the highest quality standards'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('خدماتنا الرئيسية', 'Our Main Services')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {t(service.title_ar, service.title_en)}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t(service.description_ar, service.description_en)}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(t(service.features_ar.join('|'), service.features_en.join('|'))).split('|').map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="text-green-500 mr-3" size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      {t('اطلب الخدمة', 'Request Service')}
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={t(service.title_ar, service.title_en)}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('خدمات إضافية', 'Additional Services')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'بالإضافة إلى خدماتنا الأساسية، نوفر مجموعة من الخدمات الإضافية لدعم عملائنا',
                'In addition to our core services, we provide a range of additional services to support our clients'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                  <service.icon className="text-white" size={24} />
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('كيف نعمل', 'How We Work')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'عملية بسيطة ومنظمة لضمان أفضل خدمة لعملائنا',
                'A simple and organized process to ensure the best service for our clients'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title_ar: 'الاستفسار',
                title_en: 'Inquiry',
                description_ar: 'تواصل معنا لتحديد احتياجاتك',
                description_en: 'Contact us to define your needs',
              },
              {
                step: '02',
                title_ar: 'العرض',
                title_en: 'Proposal',
                description_ar: 'نقدم لك عرض سعر مفصل',
                description_en: 'We provide you with a detailed quote',
              },
              {
                step: '03',
                title_ar: 'التنفيذ',
                title_en: 'Execution',
                description_ar: 'نبدأ في تنفيذ طلبك بسرعة',
                description_en: 'We start executing your order quickly',
              },
              {
                step: '04',
                title_ar: 'التسليم',
                title_en: 'Delivery',
                description_ar: 'نسلمك المنتجات في الوقت المحدد',
                description_en: 'We deliver products on time',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {process.step}
                </div>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2 z-0" style={{ left: '60%', width: '80%' }}></div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(process.title_ar, process.title_en)}
                </h3>
                <p className="text-gray-600">
                  {t(process.description_ar, process.description_en)}
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
              {t('هل تريد الاستفادة من خدماتنا؟', 'Want to Benefit from Our Services?')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t(
                'تواصل معنا الآن وسنقوم بتقديم أفضل الحلول لاحتياجاتك',
                'Contact us now and we will provide the best solutions for your needs'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201225510078"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('اتصل بنا', 'Call Us')}
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('اطلب خدمة', 'Request Service')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;