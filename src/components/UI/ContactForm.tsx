import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { ContactFormData } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { supabase } from '../../lib/supabase';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  const schema = yup.object({
    name: yup.string().required(t('الاسم مطلوب', 'Name is required')),
    email: yup
      .string()
      .email(t('البريد الإلكتروني غير صحيح', 'Invalid email'))
      .required(t('البريد الإلكتروني مطلوب', 'Email is required')),
    phone: yup.string(),
    service: yup.string().required(t('يرجى اختيار الخدمة', 'Please select a service')),
    message: yup.string().required(t('الرسالة مطلوبة', 'Message is required')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Insert form data into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            service: data.service,
            message: data.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        alert(t('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.', 'An error occurred while sending the message. Please try again.'));
        return;
      }

      alert(t('تم إرسال رسالتك بنجاح!', 'Your message has been sent successfully!'));
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      alert(t('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.', 'An error occurred while sending the message. Please try again.'));
    }
  };

  const services = [
    { value: 'bagged-cement', label_ar: 'توريد أسمنت معبأ', label_en: 'Bagged Cement Supply' },
    { value: 'bulk-cement', label_ar: 'توريد أسمنت سائب', label_en: 'Bulk Cement Supply' },
    { value: 'steel-reinforcement', label_ar: 'توريد حديد تسليح', label_en: 'Steel Reinforcement Supply' },
    { value: 'general-inquiry', label_ar: 'استفسار عام', label_en: 'General Inquiry' },
  ];

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('الاسم', 'Name')} *
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
            placeholder={t('ادخل اسمك', 'Enter your name')}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('البريد الإلكتروني', 'Email')} *
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
            placeholder={t('ادخل بريدك الإلكتروني', 'Enter your email')}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('رقم الهاتف', 'Phone Number')}
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
            placeholder={t('ادخل رقم هاتفك', 'Enter your phone number')}
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('الخدمة المطلوبة', 'Required Service')} *
          </label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
          >
            <option value="">{t('اختر الخدمة', 'Select Service')}</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {t(service.label_ar, service.label_en)}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('الرسالة', 'Message')} *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
          placeholder={t('اكتب رسالتك هنا...', 'Write your message here...')}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse hover-glow transform hover:scale-[1.02]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        ) : (
          <>
            <Send size={20} />
            <span>{t('إرسال الرسالة', 'Send Message')}</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;