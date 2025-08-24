import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GBM</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  {t('جي بي إم للتوكيلات التجارية', 'GBM Commercial Agency')}
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {t(
                'واحدة من أكبر وكلاء الأسمنت والحديد في مصر، نخدم السوق المحلي والدولي بأعلى معايير الجودة',
                'One of Egypt\'s largest cement and steel agents, serving local and international markets with the highest quality standards'
              )}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/201225510078"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t('روابط سريعة', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/', label_ar: 'الرئيسية', label_en: 'Home' },
                { path: '/about', label_ar: 'من نحن', label_en: 'About' },
                { path: '/products', label_ar: 'منتجاتنا', label_en: 'Products' },
                { path: '/services', label_ar: 'خدماتنا', label_en: 'Services' },
                { path: '/contact', label_ar: 'تواصل معنا', label_en: 'Contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {t(item.label_ar, item.label_en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t('خدماتنا', 'Our Services')}
            </h4>
            <ul className="space-y-3">
              {[
                { label_ar: 'توريد الأسمنت المعبأ', label_en: 'Bagged Cement Supply' },
                { label_ar: 'توريد الأسمنت السائب', label_en: 'Bulk Cement Supply' },
                { label_ar: 'توريد حديد التسليح', label_en: 'Steel Reinforcement Supply' },
                { label_ar: 'استشارات فنية', label_en: 'Technical Consulting' },
              ].map((service, index) => (
                <li key={index} className="text-gray-300">
                  {t(service.label_ar, service.label_en)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t('معلومات التواصل', 'Contact Information')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="mt-1 text-yellow-400" size={18} />
                <div>
                  <p className="text-gray-300">
                    {t(
                      '21 أبراج الفرسان، الطريق الدائري المقطم، برج صفينة، شقة 706',
                      '21 Al Forsan Towers, Ring Road Al Mokattam, Safina Tower, Apartment 706'
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="text-yellow-400" size={18} />
                <div>
                  <p className="text-gray-300">+20 1225510078</p>
                  <p className="text-gray-300">+20 1158259949</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="text-yellow-400" size={18} />
                <p className="text-gray-300">info@gbm-group.org</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-yellow-400" size={18} />
                <p className="text-gray-300">
                  {t('السبت - الخميس: 9:00 ص - 5:00 م', 'Sat - Thu: 9:00 AM - 5:00 PM')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {t('جي بي إم للتوكيلات التجارية', 'GBM Commercial Agency')} - {t('جميع الحقوق محفوظة', 'All Rights Reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;