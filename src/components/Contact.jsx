"use client"

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

function Contact() {
  const [state, handleSubmit] = useForm("xdkawwyw");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f3e9d2] via-[#e8d6b5] to-[#d4bf96] flex items-center justify-center p-4">
        <motion.div 
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <p className="text-2xl font-semibold text-[#2a4359]">
            🎉 Thanks for your submission!
          </p>
          <p className="mt-4 text-[#2a4359]/80">
            We'll get back to you within 24 hours
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e9d2] via-[#e8d6b5] to-[#d4bf96] py-12 px-4 relative">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"/>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-8 text-[#2a4359] font-serif italic drop-shadow-lg text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2a4359]/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/50 border border-[#2a4359]/20 rounded-xl focus:ring-2 focus:ring-[#c44536] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2a4359]/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/50 border border-[#2a4359]/20 rounded-xl focus:ring-2 focus:ring-[#c44536] focus:border-transparent transition-all"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-[#c44536] text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2a4359]/80 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white/50 border border-[#2a4359]/20 rounded-xl focus:ring-2 focus:ring-[#c44536] focus:border-transparent transition-all"
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-[#c44536] text-sm mt-1"
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 bg-[#c44536] text-white rounded-xl font-medium hover:bg-[#b33d30] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Google Maps */}
          <motion.div 
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.556454678976!2d77.57920931528695!3d12.93564921983675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b12!2sSri%20Madhwa%20Yuvaka%20Sangha!5e0!3m2!1sen!2sin!4v1624452542103!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[400px] rounded-3xl border-2 border-white/20"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/3 left-10 w-24 h-24 bg-[#c44536]/10 rounded-full blur-xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default Contact