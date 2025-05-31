import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setAlertMessage('Passwords do not match.')
            setShowAlert(true)
            return
        }

        setAlertMessage('Registration successful!')
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
            navigate('/')
        }, 3000)
    }

    return (
        <div className="flex items-center justify-center">
            {showAlert && (
                <div className={`fixed top-2 left-1/2 transform -translate-x-1/2 ${alertMessage === 'Registration successful!' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-300 ease-in-out`}>
                    {alertMessage}
                </div>
            )}

            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#d44b1d] focus:outline-none focus:border-[#d44b1d]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#d44b1d] hover:bg-[#d44b1dea] text-white font-medium py-2 px-4 rounded transition-colors cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <span onClick={() => navigate('/login')} className="text-[#d44b1d] hover:underline cursor-pointer">
                        Login
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register
