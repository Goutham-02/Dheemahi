import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-orange-800 mb-1 font-serif text-center">SRI MADHWA YUVAKA SANGHA (R)</h1>
      <p className="text-2xl font-medium text-orange-800 mb-15 font-serif text-center">#88/1, K R Road, Bengaluru - 04</p>

      <h1 className="text-6xl font-bold text-orange-800 mb-15 font-serif text-center">ಧೀಮಹಿ - 2025</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-lg mb-4 text-center">
          Experience the vibrant colors and rich traditions of India at our annual college cultural event!
        </p>
        <p className="text-lg mb-4 text-center">
          Join us for three days of music, dance, art, and celebration as we showcase the diverse cultural heritage of
          our nation.
        </p>
        <div className="text-center">
          <Link
            to="/events"
            className="inline-block bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors font-serif"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

