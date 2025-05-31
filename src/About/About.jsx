import React from 'react'
import { useNavigate } from 'react-router-dom'

const teamMembers = [
    {
        id: 1,
        name: "Abdelhak Bouzouggar",
        role: "Founder & CEO",
        bio: "With over 15 years of experience in tourism and technology, Abdelhak founded EasyToGuide to connect travelers with authentic local experiences in Morocco.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        gender: "male"
    },
    {
        id: 2,
        name: "Outouchente Oussama",
        role: "CTO",
        bio: "A tech enthusiast with a passion for creating seamless digital experiences, Oussama leads the development of our platform to ensure it's user-friendly and efficient.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        gender: "male"
    },
    {
        id: 3,
        name: "Azzedine Rih",
        role: "Operations Director",
        bio: "Azzedine brings extensive knowledge of Moroccan tourism and logistics to ensure our guides provide exceptional service and our tours run smoothly.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        gender: "male"
    },
    {
        id: 4,
        name: "Zahira Elkhouri",
        role: "Marketing & Community Manager",
        bio: "With her background in cultural studies and digital marketing, Zahira connects our platform with travelers and guides, building our community and brand.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        gender: "female"
    }
]

function About() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-[#d44b1d] text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About EasyToGuide</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Connecting travelers with authentic local experiences through our network of professional guides in Marrakech.
              </p>
            </div>
          </div>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <p className="text-gray-700 mb-6">
                    EasyToGuide was born from a simple observation: while Marrakech welcomes millions of tourists each year, 
                    many struggle to find authentic experiences beyond the typical tourist attractions. At the same time, 
                    many talented local guides with deep knowledge of the city's history, culture, and hidden gems lacked a 
                    platform to connect with travelers.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Founded in 2023 by a team of tourism professionals and tech enthusiasts, EasyToGuide bridges this gap by 
                    providing a user-friendly platform where travelers can discover, compare, and book tours with verified local guides.
                  </p>
                  <p className="text-gray-700">
                    Our mission is to create meaningful cultural exchanges that benefit both travelers and local communities. 
                    We carefully vet all our guides to ensure they provide exceptional service, authentic insights, and memorable experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p className="text-gray-700">
                    We believe in supporting local communities by creating sustainable tourism opportunities and promoting cultural exchange.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality</h3>
                  <p className="text-gray-700">
                    We are committed to excellence in every aspect of our service, from our platform to the guides we partner with.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Authenticity</h3>
                  <p className="text-gray-700">
                    We prioritize genuine experiences that showcase the true culture, history, and lifestyle of Marrakech.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-[#d44b1d] font-medium mb-4">{member.role}</p>
                      <p className="text-gray-700">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#d44b1d] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Whether you're a traveler seeking authentic experiences or a guide looking to share your expertise,
                we invite you to be part of our growing community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                    onClick={() => {
                        navigate("/login")
                        window.scrollTo(0, 0)
                    }}
                    className="bg-white text-[#d44b1d] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors cursor-pointer">
                  Become a Guide
                </button>
                <button
                    onClick={() => {
                        navigate("/contact")
                        window.scrollTo(0, 0)
                    }}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d44b1d] font-bold py-3 px-8 rounded-full text-lg transition-colors cursor-pointer">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
    )
}

export default About
