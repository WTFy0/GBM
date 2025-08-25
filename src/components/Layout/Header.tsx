import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name_ar: 'الرئيسية', name_en: 'Home', href: '/' },
    { name_ar: 'من نحن', name_en: 'About', href: '/about' },
    { name_ar: 'منتجاتنا', name_en: 'Products', href: '/products' },
    { name_ar: 'خدماتنا', name_en: 'Services', href: '/services' },
    { name_ar: 'تواصل معنا', name_en: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="tel:+201225510078"
                className="flex items-center hover:text-yellow-400 transition-colors"
              >
                <Phone size={14} className="mr-1 rtl:ml-1 rtl:mr-0" />
                +20 1225510078
              </a>
              <a
                href="mailto:info@gbm-group.org"
                className="flex items-center hover:text-yellow-400 transition-colors"
              >
                <Mail size={14} className="mr-1 rtl:ml-1 rtl:mr-0" />
                info@gbm-group.org
              </a>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mt-1 sm:mt-0">
              <Globe size={14} />
              <span>www.gbmcommercialagency.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GBM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                {t('جي بي إم للتوكيلات التجارية', 'GBM Commercial Agency')}
              </h1>
              <p className="text-sm text-purple-600 font-medium">
                {t('التجارة من أجل الدقة والربح', 'Trading for precision and profit')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-purple-600 relative ${
                  isActive(item.href)
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {t(item.name_ar, item.name_en)}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe size={16} />
              <span className="font-medium">{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                    isActive(item.href)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {t(item.name_ar, item.name_en)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;