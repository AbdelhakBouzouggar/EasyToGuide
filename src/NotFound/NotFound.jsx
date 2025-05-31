import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="container mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-8 max-w-lg mx-auto">
                    <div className="text-blue-600 mb-4">
                        <svg 
                            className="mx-auto h-24 w-24" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                    </div>

                    <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        The page you are looking for doesn't exist or has been removed.
                    </p>

                    <button
                        onClick={() => {
                            navigate('/')
                            window.scrollTo(0, 0)
                        }}
                        className="bg-[#d44b1d] hover:bg-[#d44b1dea] text-white font-medium py-2 px-6 rounded transition-colors cursor-pointer" 
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
