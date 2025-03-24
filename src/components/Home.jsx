import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e9d2] via-[#e8d6b5] to-[#d4bf96] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"/>
      
      <div 
        className="container mx-auto px-4 py-20 relative z-10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width/2);
          y.set(e.clientY - rect.top - rect.height/2);
        }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 group"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-[#2a4359] font-serif italic drop-shadow-lg">
            SRI MADHWA YUVAKA SANGHA &reg;
          </h1>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#c44536] transform -skew-x-12 opacity-70 group-hover:opacity-90 transition-opacity"/>
            <p className="relative text-xl font-medium text-[#e9e2d4] px-6 py-2">
              #88/1, K R Road, Bengaluru - 04
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Column */}
          <motion.div 
            className="relative lg:w-1/2"
            style={{ rotateX, rotateY }}
          >
            <div className="absolute inset-0 bg-[#2a4359] rounded-3xl transform rotate-3 shadow-2xl"/>
            <div className="relative bg-[#e9e2d4] rounded-3xl p-10 shadow-2xl border-2 border-white/20">
              <motion.h1
                className="text-7xl font-bold mb-8 text-[#c44536] text-center font-decorative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                ಧೀಮಹಿ - 2025
                <div className="absolute inset-0 border-2 border-[#c44536] rounded-3xl opacity-20"/>
              </motion.h1>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-[#c44536]"/>
                  <h3 className="text-2xl font-semibold text-[#2a4359]">HSVJ </h3>
                </div>
                <p className="text-lg text-[#2a4359]/90 leading-relaxed">
                Join us for an exciting lineup of events including CodeQuest, Dumb Charades, Treasure Hunt, cultural performances, quizzes, sports tournaments, and Squid Game!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-[#2a4359]/90 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
              <p className="text-lg text-[#e9e2d4] mb-6 leading-relaxed">
                Witness the convergence of classical arts and modern interpretations through:
              </p>
              <ul className="space-y-4">
                {['Live Folk Performances', 'Digital Art Installations', 'Gourmet Street Food Experience', 'Interactive Workshops'].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-[#e9e2d4]"
                    whileHover={{ x: 10 }}
                  >
                    <div className="h-2 w-2 bg-[#c44536] rounded-full"/>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link
              to="/events"
              className="inline-block w-full group"
            >
              <motion.div
                className="bg-[#c44536] hover:bg-[#b33d30] rounded-xl p-6 text-center transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
                <span className="text-xl font-semibold text-[#e9e2d4] flex items-center justify-center gap-2">
                  Explore Curated Experiences
                  <motion.span 
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#c44536]/20 rounded-full blur-xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-2/3 right-20 w-16 h-16 bg-[#2a4359]/20 rounded-full blur-xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  );
}

export default Home;