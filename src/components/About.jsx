"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function About() {
    // Sample event details
    const eventDetails = [
        { title: "100+", subtitle: "Participantions" },
        { title: "5 Days", subtitle: "Duration" },
        { title: "10+", subtitle: "Activities" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 relative py-12 px-4">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=100&width=100')]" />

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-8 text-indigo-700 text-center"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                >
                    About ಧೀಮಹಿ 2025
                </motion.h1>

                {/* Main content card */}
                <motion.div
                    className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        Dheemahi 2025 is our annual flagship event that brings together talent, creativity, and knowledge in a
                        celebration of excellence. Join us for an unforgettable experience that showcases the best of our community.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {eventDetails.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-4 bg-indigo-50 rounded-xl"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-3xl font-bold text-indigo-600">{stat.title}</div>
                                <div className="text-sm text-slate-600">{stat.subtitle}</div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

                {/* Registration info */}
                <motion.div
                    className="bg-indigo-600 text-white rounded-2xl p-8 shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Join Us This Year</h2>
                    <p className="mb-6">
                        Registration is now open for Dheemahi 2025. Secure your spot and be part of this extraordinary celebration
                        of talent.
                    </p>
                    <motion.button
                        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/events">Register Now</Link>
                    </motion.button>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-20 left-0 w-20 h-20 bg-indigo-300/30 rounded-full blur-xl"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-0 w-24 h-24 bg-cyan-300/30 rounded-full blur-xl"
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    )
}

