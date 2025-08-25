import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import ContactForm from '../components/UI/ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title_ar: 'الهاتف',
      title_en: 'Phone',
      details: [
        { label_ar: 'مبيعات الأسمنت والحديد', label_en: 'Cement & Steel Sales', value: '+20 1225510078' },
        { label_ar: 'خدمة العملاء', label_en: 'Customer Service', value: '+20 1158259949' },
      ],
    },
    {
      icon: Mail,
      title_ar: 'البريد الإلكتروني',
      title_en: 'Email',
      details: [
        { label_ar: 'البريد الرسمي', label_en: 'Official Email', value: 'info@gbm-group.org' },
        { label_ar: 'الموقع الإلكتروني', label_en: 'Website', value: 'www.gbmcommercialagency.com' },
      ],
    },
    {
      icon: MapPin,
      title_ar: 'العنوان',
      title_en: 'Address',
      details: [
        {
          label_ar: 'المقر الرئيسي',
          label_en: 'Main Office',
          value: t(
            '21 أبراج الفرسان، الطريق الدائري المقطم، برج صفينة، شقة 706',
            '21 Al Forsan Towers, Ring Road Al Mokattam, Safina Tower, Apartment 706'
          ),
        },
      ],
    },
    {
      icon: Clock,
      title_ar: 'ساعات العمل',
      title_en: 'Working Hours',
      details: [
        {
          label_ar: 'أيام العمل',
          label_en: 'Working Days',
          value: t('السبت إلى الخميس: 9:00 ص - 5:00 م', 'Saturday to Thursday: 9:00 AM - 5:00 PM'),
        },
      ],
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
            backgroundImage: 'url("https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920")',
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
              {t('تواصل معنا', 'Contact Us')}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t(
                'نحن في استقبال جميع استفساراتكم ونتطلع للعمل معكم',
                'We welcome all your inquiries and look forward to working with you'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('تواصل معنا الآن', 'Contact Us Now')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t(
                    'نحن في استقبال جميع استفساراتكم على مدار الأسبوع',
                    'We welcome all your inquiries throughout the week'
                  )}
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('معلومات التواصل', 'Contact Information')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t(
                    'يمكنكم التواصل معنا عبر الوسائل التالية',
                    'You can contact us through the following methods'
                  )}
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {t(info.title_ar, info.title_en)}
                        </h3>
                        <div className="space-y-2">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                              <p className="text-sm font-medium text-purple-600 mb-1">
                                {t(detail.label_ar, detail.label_en)}
                              </p>
                              <p className="text-gray-700 leading-relaxed">{detail.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+201225510078"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse hover-glow"
                >
                  <Phone size={20} />
                  <span>{t('اتصل الآن', 'Call Now')}</span>
                </a>
                <a
                  href="https://wa.me/201225510078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white p-4 rounded-xl text-center font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse hover-glow"
                >
                  <MessageCircle size={20} />
                  <span>{t('واتساب', 'WhatsApp')}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('موقعنا', 'Our Location')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'يقع مقرنا الرئيسي في موقع استراتيجي بالقاهرة لخدمة عملائنا بسهولة',
                'Our main office is strategically located in Cairo to serve our clients easily'
              )}
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 bg-gradient-to-br from-purple-100 to-blue-100">
              {/* Interactive Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('موقعنا على الخريطة', 'Our Location on Map')}
                  </h3>
                  <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
                    <p className="text-gray-700 font-medium mb-2">
                      {t('العنوان الكامل:', 'Full Address:')}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {t(
                        '21 أبراج الفرسان، الطريق الدائري المقطم، برج صفينة، شقة 706، القاهرة، مصر',
                        '21 Al Forsan Towers, Ring Road Al Mokattam, Safina Tower, Apartment 706, Cairo, Egypt'
                      )}
                    </p>
                  </div>
                  <button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    {t('فتح في خرائط جوجل', 'Open in Google Maps')}
                  </button>
                </div>
              </div>
              
              {/* Location Details Overlay */}
              <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs"
                    >
                      <div className="flex items-center mb-2">
                        <MapPin className="text-purple-600 mr-2" size={20} />
                        <span className="font-semibold text-gray-900">
                          {t('المقطم، القاهرة', 'Al Mokattam, Cairo')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {t('موقع استراتيجي في قلب القاهرة', 'Strategic location in the heart of Cairo')}
                      </p>
                    </motion.div>

      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('الأسئلة الشائعة', 'Frequently Asked Questions')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question_ar: 'ما هي أوقات العمل؟',
                question_en: 'What are the working hours?',
                answer_ar: 'نعمل من السبت إلى الخميس من 9:00 صباحاً حتى 5:00 مساءً',
                answer_en: 'We work Saturday to Thursday from 9:00 AM to 5:00 PM',
              },
              {
                question_ar: 'هل تقدمون خدمة التوصيل؟',
                question_en: 'Do you provide delivery service?',
                answer_ar: 'نعم، نوفر خدمة التوصيل لجميع أنحاء مصر',
                answer_en: 'Yes, we provide delivery service throughout Egypt',
              },
              {
                question_ar: 'كيف يمكنني الحصول على عرض سعر؟',
                question_en: 'How can I get a price quote?',
                answer_ar: 'يمكنكم التواصل معنا عبر الهاتف أو الواتساب أو ملء نموذج الاستفسار',
                answer_en: 'You can contact us by phone, WhatsApp, or fill out the inquiry form',
              },
              {
                question_ar: 'هل منتجاتكم معتمدة؟',
                question_en: 'Are your products certified?',
                answer_ar: 'نعم، جميع منتجاتنا معتمدة ومطابقة للمواصفات المصرية والدولية',
                answer_en: 'Yes, all our products are certified and compliant with Egyptian and international standards',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(faq.question_ar, faq.question_en)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(faq.answer_ar, faq.answer_en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default Contact;