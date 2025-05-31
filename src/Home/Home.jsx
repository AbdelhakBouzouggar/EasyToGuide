import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const sliderData = [
    {
        id: 1,
        title: "Jemaa el-Fnaa Square",
        description: "Experience the vibrant heart of Marrakech with its bustling markets and street performers.",
        image: "/Images/jemaa_el-fnaa.jpg"
    },
    {
        id: 2,
        title: "Majorelle Garden",
        description: "Explore the stunning botanical garden with its vibrant blue buildings and exotic plants.",
        image: "/Images/majorelle.jpg"
    },
    {
        id: 3,
        title: "Bahia Palace",
        description: "Discover the intricate architecture and beautiful gardens of this 19th-century palace.",
        image: "/Images/bahia-palace.jpg"
    },
    {
        id: 4,
        title: "Koutoubia Mosque",
        description: "Admire the iconic minaret that dominates Marrakech's skyline.",
        image: "/Images/koutoubia-marrakech.jpg"
    }
]

const topGuides = [
    {
        id: 1,
        name: "Ahmed Benali",
        specialty: "Historical Tours",
        rating: 4.9,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        name: "Fatima Zahra",
        specialty: "Food & Culture",
        rating: 4.8,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        name: "Youssef Mansour",
        specialty: "Desert Adventures",
        rating: 4.7,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
]

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1))
    }

    return (
        <div className="min-h-screen">
            <div className="relative h-[500px] overflow-hidden">
            {sliderData.map((slide, index) => (
                <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slide.description}</p>
                    <button
                        onClick={() => {
                            navigate("/guides")
                            window.scrollTo(0, 0)
                        }}
                        className="bg-[#d44b1d] hover:bg-[#d44b1dea] text-white font-bold py-3 px-6 rounded-full transition-colors cursor-pointer"
                    >
                        Find a Guide
                    </button>
                </div>
                </div>
            ))}

            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
                onClick={prevSlide}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
                onClick={nextSlide}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {sliderData.map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                ></button>
                ))}
            </div>
            </div>

            <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Top Guides in Marrakech</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {topGuides.map((guide) => (
                    <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                    <img src={guide.image} alt={guide.name} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{guide.name}</h3>
                        <p className="text-gray-600 mb-4">{guide.specialty}</p>
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
                        <button
                            onClick={() => {
                                navigate(`/guides/${guide.id}`)
                                window.scrollTo(0, 0)
                            }}
                            className="block text-center bg-[#d44b1d] hover:bg-[#d44b1dea] text-white font-medium py-2 px-4 rounded transition-colors cursor-pointer"
                        >
                            Book Now
                        </button>
                    </div>
                    </div>
                ))}
                </div>
                
                <div className="text-center mt-12">
                <button
                    onClick={() => {
                        navigate("/guides")
                        window.scrollTo(0, 0)
                    }}
                    className="inline-block border-2 border-[#d44b1d] text-[#d44b1d] hover:bg-[#d44b1d] hover:text-white font-bold py-3 px-6 rounded-full transition-colors cursor-pointer"
                >
                    View All Guides
                </button>
                </div>
            </div>
            </section>

            <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose EasyToGuide</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Verified Local Guides</h3>
                    <p className="text-gray-600">All our guides are carefully vetted locals with extensive knowledge of Marrakech.</p>
                </div>
                
                <div className="text-center p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">Book tours that fit your schedule with our easy-to-use platform.</p>
                </div>
                
                <div className="text-center p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                    <p className="text-gray-600">Our secure payment system ensures your booking process is safe and hassle-free.</p>
                </div>
                </div>
            </div>
            </section>

            <section className="py-16 bg-[#d44b1d] text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Explore Marrakech?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">Book your perfect guide today and discover the magic of Marrakech with a local expert.</p>
                <button
                    onClick={() => {
                        navigate("/guides")
                        window.scrollTo(0, 0)
                    }}
                    className="bg-white text-[#d44b1d] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors cursor-pointer"
                >
                    Find Your Guide
                </button>
            </div>
            </section>
        </div>
    )
}

export default Home
