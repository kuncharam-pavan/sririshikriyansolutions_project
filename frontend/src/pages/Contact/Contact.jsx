import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, Building2 } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const Contact = () => {
  const { showToast } = useProperties();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast('Thank you! Your message has been submitted successfully.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Haven Real Estate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Have questions about buying, selling, or listing a property? Our real estate specialists are here to assist you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Headquarters</span>
              </h3>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">HAVEN Real Estate</strong>
                    <span>Financial District, Gachibowli</span>
                    <span className="block">Hyderabad, Telangana 500032</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>+91 90000 00000</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>contact@havenrealestate.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Operating Hours</span>
              </h3>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">9:00 AM – 8:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday – Sunday:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">10:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out the form below and one of our dedicated property advisors will get back to you within 2 hours.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold">
                  Thank you! Your message has been submitted successfully. We will get in touch shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what property types or locations you are interested in..."
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Submitting...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
