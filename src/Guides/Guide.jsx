import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// Sample data for guides (same as in Guides.jsx)
const guidesData = [
    {
        id: 1,
        name: "Ahmed Benali",
        specialty: "Historical Tours",
        price: 350,
        currency: "MAD",
        rating: 4.9,
        reviews: 127,
        languages: ["English", "French", "Arabic"],
        description: "Experienced guide with deep knowledge of Marrakech's historical sites and monuments. Specialized in cultural and architectural tours.",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        bio: "Born and raised in Marrakech, I've been a professional guide for over 15 years. I have a degree in Moroccan History from the University of Marrakech and I'm passionate about sharing the rich cultural heritage of my city with visitors from around the world.",
        experience: "15+ years",
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        tourHistory: [
          { id: 1, date: "2023-05-15", client: "John and Sarah", from: "USA", rating: 5, comment: "Ahmed was incredibly knowledgeable and showed us hidden gems we would never have found on our own." },
          { id: 2, date: "2023-04-22", client: "The Garcia Family", from: "Spain", rating: 5, comment: "Perfect tour for our family. Ahmed was patient with our children and made history come alive for them." },
          { id: 3, date: "2023-03-10", client: "Akiko", from: "Japan", rating: 4, comment: "Very informative tour of the medina and palaces. Ahmed knows so much about Marrakech history!" }
        ]
    },
    {
        id: 2,
        name: "Fatima Zahra",
        specialty: "Food & Culture",
        price: 300,
        currency: "MAD",
        rating: 4.8,
        reviews: 98,
        languages: ["English", "Spanish", "Arabic"],
        description: "Culinary expert offering food tours through Marrakech's vibrant markets and hidden gems. Learn about Moroccan cuisine and traditions.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        bio: "I grew up in a family of traditional Moroccan cooks and have been passionate about our cuisine since childhood. After culinary school, I decided to combine my love for food with tourism to create unique culinary experiences for visitors.",
        experience: "8 years",
        availability: ["Monday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        tourHistory: [
          { id: 1, date: "2023-06-02", client: "Emma and David", from: "UK", rating: 5, comment: "The food tour with Fatima was the highlight of our trip! We discovered amazing flavors and learned so much about Moroccan cuisine." },
          { id: 2, date: "2023-05-18", client: "Pierre", from: "France", rating: 5, comment: "As a chef myself, I was impressed by Fatima's knowledge. The cooking class was exceptional." },
          { id: 3, date: "2023-04-05", client: "The Wilson Group", from: "Australia", rating: 4, comment: "Great food tour! Fatima took us to authentic places and explained all the spices and ingredients." }
        ]
    },
    {
        id: 3,
        name: "Youssef Mansour",
        specialty: "Desert Adventures",
        price: 450,
        currency: "MAD",
        rating: 4.7,
        reviews: 112,
        languages: ["English", "French", "German", "Arabic"],
        description: "Adventure guide specializing in desert excursions, camel treks, and overnight camping experiences in the Sahara.",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        bio: "I was born in a small village near the Sahara and have spent my life exploring the desert. I know every dune and oasis in the region and love sharing the magic of the desert with travelers seeking adventure.",
        experience: "12 years",
        availability: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
        tourHistory: [
          { id: 1, date: "2023-05-25", client: "Michael and Friends", from: "Germany", rating: 5, comment: "Unforgettable desert experience! Youssef is an excellent guide who prioritizes safety while ensuring everyone has fun." },
          { id: 2, date: "2023-04-12", client: "The Johnson Family", from: "Canada", rating: 4, comment: "Our kids loved the camel ride and camping under the stars. Youssef made everyone feel comfortable and safe." },
          { id: 3, date: "2023-03-20", client: "Sophie and Thomas", from: "Belgium", rating: 5, comment: "The overnight desert camp was magical. Youssef's knowledge of the stars and desert wildlife added so much to the experience." }
        ]
    },
    {
        id: 4,
        name: "Laila Tazi",
        specialty: "Photography Tours",
        price: 380,
        currency: "MAD",
        rating: 4.9,
        reviews: 85,
        languages: ["English", "French", "Arabic"],
        description: "Professional photographer guiding you to the most photogenic spots in Marrakech. Perfect for photography enthusiasts of all levels.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        bio: "I've been a professional photographer for 10 years, specializing in travel and cultural photography. My work has been featured in several international magazines. I love helping visitors capture the beauty and essence of Marrakech.",
        experience: "10 years",
        availability: ["Monday", "Tuesday", "Thursday", "Friday", "Sunday"],
        tourHistory: [
          { id: 1, date: "2023-06-05", client: "James", from: "UK", rating: 5, comment: "Laila took me to amazing spots for photography and gave excellent technical advice. I came away with some of my best travel photos ever." },
          { id: 2, date: "2023-05-12", client: "The Kim Family", from: "South Korea", rating: 5, comment: "Wonderful photography tour! Laila knew exactly when and where to go for the best light and compositions." },
          { id: 3, date: "2023-04-18", client: "Carlos and Maria", from: "Brazil", rating: 4, comment: "Great experience learning about photography while exploring beautiful locations in Marrakech." }
        ]
    },
    {
        id: 5,
        name: "Omar Idrissi",
        specialty: "Garden & Nature Tours",
        price: 280,
        currency: "MAD",
        rating: 4.6,
        reviews: 76,
        languages: ["English", "Arabic"],
        description: "Botanical expert specializing in Marrakech's famous gardens, including Majorelle Garden and Menara Gardens.",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        bio: "With a background in botany and landscape architecture, I offer unique insights into Marrakech's historic gardens and their botanical treasures. I'm passionate about sharing the stories behind these green oases in the desert.",
        experience: "7 years",
        availability: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        tourHistory: [
          { id: 1, date: "2023-05-30", client: "Elizabeth", from: "USA", rating: 5, comment: "Omar's knowledge of plants and garden history is impressive. I learned so much about Moroccan garden design and plant species." },
          { id: 2, date: "2023-04-25", client: "The Müller Family", from: "Germany", rating: 4, comment: "Peaceful and educational tour of Marrakech's beautiful gardens. Omar was very informative." },
          { id: 3, date: "2023-03-15", client: "Hiroshi", from: "Japan", rating: 5, comment: "As a garden enthusiast, I thoroughly enjoyed Omar's detailed explanations of the garden designs and plant collections." }
        ]
    },
    {
        id: 6,
        name: "Samira Alaoui",
        specialty: "Shopping & Artisan Tours",
        price: 320,
        currency: "MAD",
        rating: 4.8,
        reviews: 93,
        languages: ["English", "French", "Spanish", "Arabic"],
        description: "Expert in Moroccan crafts and artisanal products. Navigate the souks with confidence and find authentic treasures.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        bio: "I come from a family of artisans and have spent years building relationships with the best craftspeople in Marrakech. I love connecting visitors with authentic Moroccan crafts and helping them understand the cultural significance behind each piece.",
        experience: "9 years",
        availability: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
        tourHistory: [
          { id: 1, date: "2023-06-10", client: "Jennifer and Friends", from: "Canada", rating: 5, comment: "Samira helped us navigate the souks and find beautiful, authentic items at fair prices. Her relationships with local artisans made the experience special." },
          { id: 2, date: "2023-05-05", client: "The Anderson Family", from: "USA", rating: 4, comment: "Great shopping tour! Samira showed us how various crafts are made and helped us find quality souvenirs." },
          { id: 3, date: "2023-04-20", client: "Luisa", from: "Italy", rating: 5, comment: "As a designer, I was looking for specific textiles and crafts. Samira knew exactly where to take me and provided fascinating cultural context." }
        ]
    }
]

const Guide = () => {
    const { id } = useParams()
    const [guide, setGuide] = useState(null)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('about')
    const [selectedDate, setSelectedDate] = useState('')

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => {
          const foundGuide = guidesData.find(g => g.id === parseInt(id))
          setGuide(foundGuide)
          setLoading(false)
        }, 500)
    }, [id])

    if (loading) {
        return (
          <div className="min-h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        )
    }

    if (!guide) {
        return (
          <div className="min-h-screen flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Guide Not Found</h2>
              <p className="text-gray-600 mb-6">The guide you're looking for doesn't exist or has been removed.</p>
              <Link to="/guides" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors">
                Back to Guides
              </Link>
            </div>
          </div>
        )
    }

    // Generate dates for the next 14 days for the booking calendar
    const generateDates = () => {
        const dates = []
        const today = new Date()
        
        for (let i = 1; i <= 14; i++) {
          const date = new Date(today)
          date.setDate(today.getDate() + i)
          
          // Only include dates that match the guide's availability
          const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
          if (guide.availability.includes(dayName)) {
            dates.push({
              value: date.toISOString().split('T')[0],
              label: date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
            })
          }
        }
        
        return dates
    }

    const availableDates = generateDates()

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              {/* Guide Profile */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={guide.image} alt={guide.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{guide.name}</h1>
                        <p className="text-gray-600 font-medium mb-2">{guide.specialty}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < Math.floor(guide.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-600 ml-2">
                            {guide.rating} ({guide.reviews} reviews)
                          </span>
                        </div>
                        
                        {/* Languages */}
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Languages:</p>
                          <div className="flex flex-wrap gap-1">
                            {guide.languages.map((language, index) => (
                              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Experience: {guide.experience}</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-green-100 text-green-800 text-xl font-bold px-4 py-2 rounded mb-2">
                          {guide.price} {guide.currency}
                          <span className="text-sm font-normal">/day</span>
                        </div>
                        
                        {/* Quick Booking */}
                        <div className="mt-4">
                          <div className="mb-3">
                            <select
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="">Select a date</option>
                              {availableDates.map((date) => (
                                <option key={date.value} value={date.value}>
                                  {date.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            className={`bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors ${
                              !selectedDate ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={!selectedDate}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex">
                    <button
                      className={`px-6 py-4 text-sm font-medium ${
                        activeTab === 'about' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('about')}
                    >
                      About
                    </button>
                    <button
                      className={`px-6 py-4 text-sm font-medium ${
                        activeTab === 'reviews' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Tour History & Reviews
                    </button>
                  </nav>
                </div>
                
                <div className="p-6">
                  {activeTab === 'about' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">About {guide.name}</h2>
                      <p className="text-gray-700 mb-6">{guide.bio}</p>
                      
                      <h3 className="text-lg font-bold mb-3">Availability</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                          <span
                            key={day}
                            className={`px-3 py-1 rounded-full text-sm ${
                              guide.availability.includes(day)
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3">What to Expect</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Personalized tour itinerary based on your interests</li>
                        <li>Insider knowledge of local culture and customs</li>
                        <li>Recommendations for restaurants, shops, and additional activities</li>
                        <li>Assistance with translation and navigation</li>
                        <li>Flexible pace to ensure a comfortable experience</li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'reviews' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Tour History & Reviews</h2>
                      
                      <div className="space-y-6">
                        {guide.tourHistory.map((tour) => (
                          <div key={tour.id} className="border-b border-gray-200 pb-6 last:border-0">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold">{tour.client}</h3>
                                <p className="text-sm text-gray-600">From: {tour.from} • Tour Date: {new Date(tour.date).toLocaleDateString()}</p>
                              </div>
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < tour.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700">{tour.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Similar Guides */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Similar Guides You Might Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {guidesData
                    .filter(g => g.id !== guide.id && g.specialty === guide.specialty)
                    .slice(0, 3)
                    .map(similarGuide => (
                      <div key={similarGuide.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
                        <img src={similarGuide.image} alt={similarGuide.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-1">{similarGuide.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{similarGuide.specialty}</p>
                          <div className="flex items-center mb-3">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(similarGuide.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-600 text-sm ml-1">
                              {similarGuide.rating} ({similarGuide.reviews})
                            </span>
                          </div>
                          <Link
                            to={`/guides/${similarGuide.id}`}
                            className="block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Guide
