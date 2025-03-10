import React from 'react'
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Guides from '../Guides/Guides'
import Guide from '../Guides/Guide'
import About from '../About/About'
import Profile from '../Profile/Profile'
import Contact from '../Contact/Contact'
import Settings from '../Settings/Settings'

const Routes = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                <RouterRoutes>
                    <Route path="/" element={<Home />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/guides/:id" element={<Guide />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </RouterRoutes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default Routes
