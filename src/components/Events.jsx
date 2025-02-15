"use client"

import { useState } from "react"

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-800 mb-6">Event Schedule</h1>
      <div className="flex justify-center space-x-4 mb-6">
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(eventData).map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-full ${selectedDate === date ? "bg-orange-600 text-white" : "bg-orange-200 text-orange-800 hover:bg-orange-300"
                } transition-colors`}
            >
              {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Events on{" "}
            {new Date(selectedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventData[selectedDate].map((event, index) => (
              <li key={index} className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-gray-600">{event.time}</p>
                <p>{event.description}</p>
                <div className="mt-2 space-x-2">
                  <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                    Register
                  </button>
                  <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                    Rules
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Events

