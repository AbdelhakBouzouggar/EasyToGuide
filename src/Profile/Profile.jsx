import React, { useState } from 'react'

const userData = {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+212 612-345678",
    country: "United States",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    joinedDate: "January 2023",
    upcomingTours: [
        {
            id: 1,
            date: "2023-08-15",
            guideName: "Ahmed Benali",
            tourType: "Historical Tour",
            status: "confirmed",
            price: 350,
            currency: "MAD"
        }
    ],
    pastTours: [
        {
            id: 1,
            date: "2023-06-10",
            guideName: "Fatima Zahra",
            tourType: "Food & Culture",
            rating: 5,
            review: "Fatima was an excellent guide! She showed us the best local food spots and shared fascinating insights about Moroccan cuisine and culture.",
            price: 300,
            currency: "MAD"
        },
        {
            id: 2,
            date: "2023-05-22",
            guideName: "Youssef Mansour",
            tourType: "Desert Adventure",
            rating: 4,
            review: "Great experience in the desert. The camel trek and overnight camping were unforgettable.",
            price: 450,
            currency: "MAD"
        }
    ],
    savedGuides: [
        {
            id: 3,
            name: "Laila Tazi",
            specialty: "Photography Tours",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        }
    ]
}

function Profile() {
    const [activeTab, setActiveTab] = useState('upcoming')
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        country: userData.country
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Updated profile data:', formData)
        setIsEditing(false)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="md:flex">
                        <div className="md:w-1/3 p-6 flex flex-col items-center justify-center border-r border-gray-200">
                        <img 
                            src={userData.image} 
                            alt={userData.name} 
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h1 className="text-2xl font-bold text-center">{userData.name}</h1>
                        <p className="text-gray-600 text-center">Member since {userData.joinedDate}</p>
                        </div>
                        <div className="md:w-2/3 p-6">
                        {isEditing ? (
                            <form onSubmit={handleSubmit}>
                            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                                    required
                                />
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                                    required
                                />
                                </div>
                                <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                                />
                                </div>
                                <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                                />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer"
                                >
                                Cancel
                                </button>
                                <button
                                type="submit"
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
                                >
                                Save Changes
                                </button>
                            </div>
                            </form>
                        ) : (
                            <div>
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold">Personal Information</h2>
                                <button
                                onClick={() => setIsEditing(true)}
                                className="text-green-600 hover:text-green-700 flex items-center cursor-pointer"
                                >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>
                                Edit Profile
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                <p className="text-sm text-gray-600 mb-1">Email</p>
                                <p className="font-medium">{userData.email}</p>
                                </div>
                                <div>
                                <p className="text-sm text-gray-600 mb-1">Phone</p>
                                <p className="font-medium">{userData.phone}</p>
                                </div>
                                <div>
                                <p className="text-sm text-gray-600 mb-1">Country</p>
                                <p className="font-medium">{userData.country}</p>
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="flex">
                        <button
                            className={`px-6 py-4 text-sm font-medium cursor-pointer ${
                            activeTab === 'upcoming' ? 'border-b-2 border-[#d44b1d] text-[#d44b1dea]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Upcoming Tours
                        </button>
                        <button
                            className={`px-6 py-4 text-sm font-medium cursor-pointer ${
                            activeTab === 'past' ? 'border-b-2 border-[#d44b1d] text-[#d44b1dea]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab('past')}
                        >
                            Past Tours
                        </button>
                        <button
                            className={`px-6 py-4 text-sm font-medium cursor-pointer ${
                            activeTab === 'saved' ? 'border-b-2 border-[#d44b1d] text-[#d44b1dea]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab('saved')}
                        >
                            Saved Guides
                        </button>
                        </nav>
                    </div>
                    
                    <div className="p-6">
                        {activeTab === 'upcoming' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Upcoming Tours</h2>
                            {userData.upcomingTours.length > 0 ? (
                            <div className="space-y-4">
                                {userData.upcomingTours.map(tour => (
                                <div key={tour.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold">{tour.tourType} with {tour.guideName}</h3>
                                        <p className="text-gray-600">
                                        {new Date(tour.date).toLocaleDateString('en-US', { 
                                            weekday: 'long', 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        tour.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
                                    </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                    <span className="font-medium">{tour.price} {tour.currency}</span>
                                    <div className="space-x-2">
                                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer">
                                        Cancel
                                        </button>
                                        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer">
                                        View Details
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            ) : (
                            <p className="text-gray-600">You don't have any upcoming tours. Browse our guides to book your next adventure!</p>
                            )}
                        </div>
                        )}
                        
                        {activeTab === 'past' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Past Tours</h2>
                            {userData.pastTours.length > 0 ? (
                            <div className="space-y-6">
                                {userData.pastTours.map(tour => (
                                <div key={tour.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold">{tour.tourType} with {tour.guideName}</h3>
                                        <p className="text-gray-600">
                                        {new Date(tour.date).toLocaleDateString('en-US', { 
                                            weekday: 'long', 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                        </p>
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
                                    <p className="text-gray-700 mb-3">{tour.review}</p>
                                    <div className="flex justify-between items-center">
                                    <span className="font-medium">{tour.price} {tour.currency}</span>
                                    <button className="px-4 py-2 border border-[#d44b1d] text-[#d44b1d] rounded-md hover:bg-[#fff4f1] cursor-pointer">
                                        Book Again
                                    </button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            ) : (
                            <p className="text-gray-600">You haven't taken any tours yet.</p>
                            )}
                        </div>
                        )}
                        
                        {activeTab === 'saved' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Saved Guides</h2>
                            {userData.savedGuides.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userData.savedGuides.map(guide => (
                                <div key={guide.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                    <img src={guide.image} alt={guide.name} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                    <h3 className="font-bold mb-1">{guide.name}</h3>
                                    <p className="text-gray-600 mb-4">{guide.specialty}</p>
                                    <div className="flex justify-between">
                                        <button className="text-red-600 hover:text-red-700 flex items-center cursor-pointer">
                                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            Remove
                                        </button>
                                        <button className="text-green-600 hover:text-green-700 cursor-pointer">
                                        View Profile
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            ) : (
                            <p className="text-gray-600">You haven't saved any guides yet. Browse our guides and save your favorites!</p>
                            )}
                        </div>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
