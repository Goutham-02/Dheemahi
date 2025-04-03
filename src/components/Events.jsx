import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const eventData = {
  "2025-04-19": [
    { name: "<CodeQuest/>💻", time: "11:30 AM", link: "https://forms.gle/SidxniiiSaLzeVb36" },
    { name: "Dumb Charades", time: "02:30 PM", link: "https://forms.gle/Hqv9a4S1thTZDQzE6" },
    { name: "Treasure Hunt✨", time: "09:30 PM", link: "https://forms.gle/xJE8FywbycbjS9v36" },
  ],
  "2025-04-20": [
    { name: "Kannada Kalarava", time: "10:30 AM", link: "https://forms.gle/BPkAbF3t7jnZQDzf8" },
    { name: "General Quiz", time: "04:00 PM", link: "https://forms.gle/YYaZomjjWR4TSv8W6" },
    { name: "Singing Competition🎤🎶", time: "05:30 PM", link: "" },
    // { name: "General Quiz Round - 2", time: "08:30 PM", link: "" },
  ],
  "2025-04-26": [
    { name: "Carrom", time: "10:00 AM", link: "https://forms.gle/vZV7iTVcWVNGG3Hs7" },
    { name: "Table Tennis🏓", time: "02:00 PM", link: "https://forms.gle/rvutFNGhdn9CQttE9" },
    { name: "Chess♟️", time: "02:00 PM", link: "https://forms.gle/oLCyrNbXfXeF41Mf8" },
  ],
  "2025-04-27": [
    {
      name: "Badminton🏸", time: "10:00 AM", link: "https://forms.gle/pHwmrav7rPbNBzWA7"
    },
  ],
  "2025-05-01": [
    { name: "Squid Game🎁", time: "10:00 AM", link: "https://forms.gle/gfsPfyYvbiWMKS5a7" }
  ],
}

function Events() {
  const [selectedDate, setSelectedDate] = useState(Object.keys(eventData)[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-12 px-4 relative">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-7 text-slate-800 font-serif drop-shadow-lg text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Event Schedule
        </motion.h1>

        {/* Date Selector */}
        <div className="flex overflow-x-auto py-3 scrollbar-hide">
          <div className="flex space-x-4 mx-auto">
            {Object.keys(eventData).map((date) => {
              const isActive = date === selectedDate
                return (
                <motion.button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-6 py-3 cursor-pointer rounded-full text-sm font-semibold backdrop-blur-lg transition-all shadow-md ${isActive
                  ? "bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-400"
                  : "bg-white/50 text-slate-700 hover:bg-white/70 hover:shadow-lg"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
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
            <div className="flex justify-center my-4">
              <motion.a
              className="px-6 py-2.5 mb-2 bg-gradient-to-br cursor-pointer from-blue-500 via-indigo-600 to-purple-700 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:from-purple-700 hover:via-indigo-600 hover:to-blue-500 hover:bg-gradient-to-br"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/15pagMhYz01rVGi82t5NaDYYeznNVpHJC/view?usp=drive_link"
              target="_blank"
              >
              Rules & Guidelines
              </motion.a>
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
            <h2 className="text-3xl font-semibold mb-6 text-slate-800">
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
                  className="border-l-4 border-indigo-600 bg-white/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {event.name}
                      </h3>
                      <p className="text-slate-600 font-medium">
                        ⏳ {event.time}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors inline-block cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        href={event.link}
                        target="_blank"
                      >
                        Register
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-1/3 left-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default Events