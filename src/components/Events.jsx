"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const eventData = {
  "2025-03-01": [
    { name: "Code-A-thon", time: "11:30 AM - 01:30 PM" },
    { name: "Dumb Charades", time: "02:30 PM - 05:30 PM" },
    { name: "Treasure Hunt (Online)", time: "09:30 PM" },
  ],
  "2025-03-02": [
    { name: "Treasure Hunt (Offline)", time: "07:00 AM" },
    { name: "Kannada Kalarava", time: "10:30 AM - 01:30 PM" },
    { name: "Quiz Round - 1", time: "04:00 PM - 05:00 PM" },
    { name: "Singing Competition", time: "05:30 PM - 07:00 PM" },
    { name: "Quiz Round - 2", time: "09:15 PM" },
  ],
  "2025-03-08": [
    { name: "Carrom", time: "10:00 AM" },
    { name: "Table Tennis", time: "02:00 PM - 5:30 PM" },
    { name: "Chess ", time: "02:00 PM - 5:30 PM" },
  ],
  "2025-03-09": [
    {
      name: "Badminton",
      time: "10:00 AM - 05:00 PM",
    },
  ],
  "2025-03-15": [
    { name: "Squid Game", time: "10:00 AM" }
  ],
}

function Events() {
  const [selectedDate, setSelectedDate] = useState("2025-03-01")
  const vintageColors = {
    primary: "#c44536",
    secondary: "#2a4359",
    accent: "#e9e2d4",
    background: "#f3e9d2"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e9d2] via-[#e8d6b5] to-[#d4bf96] py-12 px-4 relative">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

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
          Event Schedule
        </motion.h1>

        {/* Date Selector */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-4 mx-auto">
            {Object.keys(eventData).map((date) => {
              const isActive = date === selectedDate
              return (
                <motion.button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-6 py-3 rounded-full text-sm font-medium backdrop-blur-lg transition-all ${isActive
                      ? "bg-[#c44536] text-white shadow-lg"
                      : "bg-white/30 text-[#2a4359] hover:bg-white/50"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                  })}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDate}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#2a4359]">
              {new Date(selectedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventData[selectedDate].map((event, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-[#c44536] bg-white/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2a4359] mb-2">
                        {event.name}
                      </h3>
                      <p className="text-[#2a4359]/80 font-medium">
                        ⏳ {event.time}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        className="px-4 py-2 bg-[#c44536] text-white rounded-lg text-sm hover:bg-[#b33d30] transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Register
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 border border-[#2a4359] text-[#2a4359] rounded-lg text-sm hover:bg-[#2a4359]/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Rules
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-1/3 left-10 w-24 h-24 bg-[#c44536]/10 rounded-full blur-xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default Events