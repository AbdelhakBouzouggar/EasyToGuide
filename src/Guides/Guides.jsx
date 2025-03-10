import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Sample data for guides
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
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
]

const Guides = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [priceRange, setPriceRange] = useState([0, 1000])

    // Get unique specialties for filter
    const specialties = [...new Set(guidesData.map(guide => guide.specialty))]

    // Filter guides based on search term, specialty, and price range
    const filteredGuides = guidesData.filter(guide => {
        const matchesSearch = guide.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              guide.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesSpecialty = selectedSpecialty === '' || guide.specialty === selectedSpecialty
        const matchesPrice = guide.price >= priceRange[0] && guide.price <= priceRange[1]
        
        return matchesSearch && matchesSpecialty && matchesPrice
    })

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-8">Find Your Perfect Guide in Marrakech</h1>
              
              {/* Search and Filters */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Search */}
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                    <input
                      type="text"
                      id="search"
                      placeholder="Search by name or description"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {/* Specialty Filter */}
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                    <select
                      id="specialty"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                      <option value="">All Specialties</option>
                      {specialties.map((specialty, index) => (
                        <option key={index} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      Price Range: {priceRange[0]} - {priceRange[1]} MAD
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="50"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span>to</span>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="50"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Guides List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.length > 0 ? (
                  filteredGuides.map(guide => (
                    <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
                      <img src={guide.image} alt={guide.name} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-xl font-bold">{guide.name}</h2>
                          <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {guide.price} {guide.currency}/day
                          </span>
                        </div>
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
                        
                        <p className="text-gray-700 mb-4 line-clamp-3">{guide.description}</p>
                        
                        <div className="flex space-x-2">
                          <Link
                            to={`/guides/${guide.id}`}
                            className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-4 rounded text-center transition-colors"
                          >
                            View Details
                          </Link>
                          <Link
                            to={`/guides/${guide.id}`}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
                          >
                            Hire Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-xl text-gray-600">No guides found matching your criteria. Please try different filters.</p>
                  </div>
                )}
              </div>
            </div>
        </div>
    )
}

export default Guides