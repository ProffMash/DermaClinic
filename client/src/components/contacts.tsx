import React, { useState } from 'react';
import { createContact } from '../Api/contactApi';

export default function Contacts() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createContact(formData);
      console.log('Contact form submitted successfully:', formData);
      alert('Your message has been sent successfully!');
      setFormData({ email: '', subject: '', message: '' }); // Reset the form
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-[95%] rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border text-base sm:text-sm"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-[95%] rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border text-base sm:text-sm"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-[95%] rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border text-base sm:text-sm"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 text-base sm:text-sm mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}