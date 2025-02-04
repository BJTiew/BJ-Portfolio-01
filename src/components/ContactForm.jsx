"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-ios-text-light dark:text-ios-text-dark">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 mt-1 bg-white border rounded-lg dark:bg-ios-card-dark border-ios-gray-light dark:border-ios-gray-dark focus:ring-2 focus:ring-ios-primary-light dark:focus:ring-ios-primary-dark"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ios-text-light dark:text-ios-text-dark">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 mt-1 bg-white border rounded-lg dark:bg-ios-card-dark border-ios-gray-light dark:border-ios-gray-dark focus:ring-2 focus:ring-ios-primary-light dark:focus:ring-ios-primary-dark"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ios-text-light dark:text-ios-text-dark">
          Subject
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 mt-1 bg-white border rounded-lg dark:bg-ios-card-dark border-ios-gray-light dark:border-ios-gray-dark focus:ring-2 focus:ring-ios-primary-light dark:focus:ring-ios-primary-dark"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ios-text-light dark:text-ios-text-dark">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="w-full px-4 py-2 mt-1 bg-white border rounded-lg dark:bg-ios-card-dark border-ios-gray-light dark:border-ios-gray-dark focus:ring-2 focus:ring-ios-primary-light dark:focus:ring-ios-primary-dark"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-6 py-3 text-white transition-colors rounded-full bg-ios-primary-light dark:bg-ios-primary-dark hover:bg-ios-secondary-light dark:hover:bg-ios-secondary-dark disabled:opacity-50 ${
          status === 'sending' ? 'cursor-not-allowed' : ''
        }`}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 dark:text-green-400"
        >
          Message sent successfully!
        </motion.p>
      )}
      
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 dark:text-red-400"
        >
          Failed to send message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm; 