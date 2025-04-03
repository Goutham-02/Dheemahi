import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Trophy, Music, BookOpen, ChevronRight } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Dynamic background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Coding element */}
        <motion.div
          className="absolute top-[15%] left-[10%]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-400 blur-2xl opacity-20 rounded-full w-32 h-32" />
            <Code className="w-16 h-16 text-indigo-500/70" />
          </div>
        </motion.div>

        {/* Sports element */}
        <motion.div
          className="absolute top-[60%] right-[15%]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 rounded-full w-32 h-32" />
            <Trophy className="w-16 h-16 text-cyan-500/70" />
          </div>
        </motion.div>

        {/* Culture element */}
        <motion.div
          className="absolute top-[30%] right-[10%]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 blur-2xl opacity-20 rounded-full w-32 h-32" />
            <Music className="w-16 h-16 text-purple-500/70" />
          </div>
        </motion.div>

        {/* Knowledge element */}
        <motion.div
          className="absolute bottom-[20%] left-[15%]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 rounded-full w-32 h-32" />
            <BookOpen className="w-16 h-16 text-amber-500/70" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
                Sri Madhwa Yuvaka Sangha&reg;
              </span>
            </h1>
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-indigo-100">
              <span className="text-slate-800 font-medium">#88/1, K R Road</span>
              <div className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-blue-500" />
              <span className="text-slate-700">Bengaluru - 04</span>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-1 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Satpantha Students Union
              </span>
            </h1>
            <h1 className="text-1xl md:text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                Presents
              </span>
            </h1>
          </motion.div>

          {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Featured Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-6">
                Dheemahi 2025
              </h1>
              <div className="h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto w-32 mb-6" />
            </motion.div>

            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold text-slate-800">Annual Hostel Event</span>
                <p className="text-lg text-slate-600 text-center leading-relaxed mt-3 max-w-2xl mx-auto">
                  A vibrant celebration of sports, and knowledge at our premier annual hostel event.
                </p>
              </div>

              {/* Feature highlights */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-indigo-50 p-5 rounded-xl text-center">
                  <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-indigo-700">Coding Competition</h3>
                  <p className="text-sm text-slate-600 mt-2">Showcase your programming skills</p>
                </div>

                <div className="bg-cyan-50 p-5 rounded-xl text-center">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-cyan-700">Indoor Sports</h3>
                  <p className="text-sm text-slate-600 mt-2">Compete in chess, carrom, and more</p>
                </div>

                <div className="bg-purple-50 p-5 rounded-xl text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Music className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-purple-700">Cultural Events</h3>
                  <p className="text-sm text-slate-600 mt-2">Explore your cultural talent</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/events">
              <motion.div
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl p-5 text-center shadow-lg group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-lg flex items-center justify-center">
                  Register Now
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6,
                    }}
                  >
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </motion.span>
                </span>
              </motion.div>
            </Link>

            <Link to="/contact">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl p-5 text-center shadow-lg group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-lg flex items-center justify-center">
                  Contact Us
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6,
                    }}
                  >
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </motion.span>
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;