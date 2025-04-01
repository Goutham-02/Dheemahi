import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

function Contact() {
  const [state, handleSubmit] = useForm("xdkawwyw");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-4">
        <motion.div 
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <p className="text-2xl font-semibold text-slate-800">
            🎉 Thanks for your submission!
          </p>
          <p className="mt-4 text-slate-600">
            Thank you for providing your valuable feedback!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-12 px-4 relative">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"/>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-8 text-slate-800 font-serif drop-shadow-lg text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <motion.div 
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-indigo-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-indigo-600 text-sm mt-1"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info Box */}
            <motion.div 
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700">Phone Numbers</h4>
                    <div className="mt-1 space-y-1">
                      <a className="text-slate-600" href="tel:9008236947">Srivatsa S: +91 90082 36947</a><br />
                      <a className="text-slate-600" href="tel:8660187891">Srivatsa N: +91 86601 87891</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700">Address</h4>
                    <p className="text-slate-600 mt-1">#88/1, K R Road, Bengaluru - 560 004</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div 
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.265126172907!2d77.5734071!3d12.9548793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15faaa74dd43%3A0x517b0248e308423b!2sSri%20Madhwa%20Yuvaka%20Sangha(R.)!5e0!3m2!1sen!2sin!4v1742876558074!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[500px] rounded-3xl border-2 border-white/20"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/3 left-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default Contact