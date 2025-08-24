import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Award, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('cement');

  const categories = [
    { id: 'cement', label_ar: 'منتجات الأسمنت', label_en: 'Cement Products', icon: Package },
    { id: 'steel', label_ar: 'منتجات الحديد', label_en: 'Steel Products', icon: Award },
  ];

  const cementCompanies = [
    {
      id: 'ncc',
      name_ar: 'الشركة الوطنية للأسمنت ببني سويف',
      name_en: 'National Company for Cement in Beni Suef',
      products: [
        {
          name_ar: 'الأسمنت البورتلاندي رتبة CEM I 42.5 N',
          name_en: 'Portland Cement Grade CEM I 42.5 N',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
          specifications_ar: 'أسمنت عالي الجودة مناسب لجميع أعمال البناء والإنشاءات',
          specifications_en: 'High-quality cement suitable for all construction and building works',
          packaging: '50 kg bags',
        },
        {
          name_ar: 'الأسمنت البورتلاندي رتبة CEM I 52.5 N',
          name_en: 'Portland Cement Grade CEM I 52.5 N',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
          specifications_ar: 'أسمنت عالي المقاومة للمشاريع الخاصة والمنشآت الثقيلة',
          specifications_en: 'High-strength cement for special projects and heavy structures',
          packaging: '50 kg bags',
        },
      ],
    },
    {
      id: 'arish',
      name_ar: 'شركة العريش للأسمنت',
      name_en: 'Al-Arish Cement Company',
      products: [
        {
          name_ar: 'أسمنت العسكري',
          name_en: 'Military Cement',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
          specifications_ar: 'أسمنت عالي الجودة للمشاريع الحكومية والعسكرية',
          specifications_en: 'High-quality cement for government and military projects',
          packaging: '50 kg bags',
        },
      ],
    },
  ];

  const steelCompanies = [
    {
      id: 'suez-steel',
      name_ar: 'شركة السويس للصلب',
      name_en: 'Suez Steel Company',
      products: [
        {
          name_ar: 'حديد التسليح عالي الجودة',
          name_en: 'High-Quality Steel Reinforcement',
          image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400',
          specifications_ar: 'حديد تسليح يلبي جميع المواصفات المصرية والدولية',
          specifications_en: 'Steel reinforcement meeting all Egyptian and international standards',
        },
      ],
    },
    {
      id: 'madina-steel',
      name_ar: 'شركة المدينة للصلب',
      name_en: 'Al-Madina Steel Company',
      products: [
        {
          name_ar: 'حديد التسليح المضلع',
          name_en: 'Ribbed Steel Reinforcement',
          image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400',
          specifications_ar: 'حديد تسليح مضلع عالي المقاومة',
          specifications_en: 'High-strength ribbed steel reinforcement',
        },
      ],
    },
  ];

  const getCurrentProducts = () => {
    return activeCategory === 'cement' ? cementCompanies : steelCompanies;
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920")',
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
              {t('منتجاتنا', 'Our Products')}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t(
                'نقدم مجموعة شاملة من أفضل منتجات الأسمنت والحديد من أفضل المصانع في مصر',
                'We offer a comprehensive range of the best cement and steel products from the finest factories in Egypt'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-24 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-xl p-2 flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <category.icon size={20} />
                  <span>{t(category.label_ar, category.label_en)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {getCurrentProducts().map((company, companyIndex) => (
            <motion.div
              key={company.id}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
            >
              {/* Company Header */}
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">
                    {company.name_en.split(' ')[0].charAt(0)}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t(company.name_ar, company.name_en)}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {company.products.map((product, productIndex) => (
                  <motion.div
                    key={productIndex}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift hover-glow group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (companyIndex * 0.1) + (productIndex * 0.1) }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={t(product.name_ar, product.name_en)}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="bg-yellow-400 px-3 py-1 rounded-full">
                            <Award size={16} className="inline mr-1" />
                            <span className="text-sm font-semibold text-black">
                              {t('عالي الجودة', 'High Quality')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {t(product.name_ar, product.name_en)}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {t(product.specifications_ar, product.specifications_en)}
                      </p>

                      {product.packaging && (
                        <div className="flex items-center text-sm text-purple-600 mb-4">
                          <Package size={16} className="mr-2" />
                          <span>{product.packaging}</span>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover-glow transform hover:scale-[1.02]">
                          {t('طلب عرض سعر', 'Request Quote')}
                        </button>
                        <button className="p-3 border border-purple-200 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors hover:scale-110 transform">
                          <Truck size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('ضمان الجودة', 'Quality Assurance')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                'جميع منتجاتنا تخضع لاختبارات صارمة وتلتزم بأعلى معايير الجودة المصرية والدولية',
                'All our products undergo strict testing and comply with the highest Egyptian and international quality standards'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title_ar: 'شهادات الجودة',
                title_en: 'Quality Certificates',
                description_ar: 'جميع منتجاتنا معتمدة ومطابقة للمواصفات',
                description_en: 'All our products are certified and compliant with specifications',
              },
              {
                icon: Package,
                title_ar: 'فحص دوري',
                title_en: 'Regular Inspection',
                description_ar: 'نقوم بفحص دوري لضمان جودة المنتجات',
                description_en: 'We conduct regular inspections to ensure product quality',
              },
              {
                icon: Truck,
                title_ar: 'تسليم آمن',
                title_en: 'Safe Delivery',
                description_ar: 'نضمن وصول المنتجات بأفضل حالة',
                description_en: 'We ensure products arrive in the best condition',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(feature.title_ar, feature.title_en)}
                </h3>
                <p className="text-gray-600">
                  {t(feature.description_ar, feature.description_en)}
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
              {t('هل تحتاج عرض سعر؟', 'Need a Quote?')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t(
                'تواصل معنا الآن للحصول على أفضل الأسعار وخدمة سريعة ومميزة',
                'Contact us now for the best prices and fast, excellent service'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201225510078"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('اتصل للاستفسار', 'Call for Inquiry')}
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('طلب عرض سعر', 'Request Quote')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;