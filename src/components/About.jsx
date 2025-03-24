import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f3e9d2] via-[#e8d6b5] to-[#d4bf96] relative py-12 px-4">
            {/* Background texture */}
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
                    About ಧೀಮಹಿ 2025
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <motion.div 
                        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-semibold text-[#c44536] mb-6">Cultural Tapestry</h2>
                            <p className="text-lg text-[#2a4359]/90 leading-relaxed mb-6">
                                Our annual cultural extravaganza weaves together India's rich heritage with contemporary 
                                creativity. Over three immersive days, experience the living tapestry of:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Classical Arts Revival', 'Folk Traditions', 'Modern Interpretations', 'Cross-Cultural Fusion'].map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        className="flex items-center gap-3 text-[#2a4359]"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-2 h-2 bg-[#c44536] rounded-full"/>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                    >
                        <motion.div 
                            className="bg-[#2a4359]/90 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-semibold text-[#e9e2d4] mb-4">Celebration Pillars</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "200+", subtitle: "Artists" },
                                    { title: "3 Days", subtitle: "Duration" },
                                    { title: "15+", subtitle: "Art Forms" },
                                    { title: "∞", subtitle: "Memories" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                                        <div className="text-3xl font-bold text-[#c44536]">{stat.title}</div>
                                        <div className="text-sm text-[#e9e2d4]/80">{stat.subtitle}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-[#2a4359] mb-4">Our Vision</h3>
                            <p className="text-lg text-[#2a4359]/90 leading-relaxed">
                                We create bridges between generations through artistic dialogue, preserving tradition 
                                while embracing innovation. Join us in this vibrant journey where every rhythm tells 
                                a story and every color whispers heritage.
                            </p>
                        </motion.div>
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

export default About