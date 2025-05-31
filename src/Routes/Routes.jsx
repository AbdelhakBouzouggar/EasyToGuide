import React from 'react'
import { BrowserRouter as Router, Routes as RouterRoutes, Route, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Guides from '../Guides/Guides'
import Guide from '../Guides/Guide'
import About from '../About/About'
import Profile from '../Profile/Profile'
import Contact from '../Contact/Contact'
import Settings from '../Settings/Settings'
import NotFound from '../NotFound/NotFound'

const Layout = ({ children }) => {
    const location = useLocation()
    
    const validRoutes = [
        '/',
        '/guides',
        '/guides/:id',
        '/about',
        '/contact',
        '/profile',
        '/settings'
    ]

    const isNotFound = !validRoutes.some(route => {
        const pathRegex = new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`)
        return pathRegex.test(location.pathname)
    })

    return (
        <div className="min-h-screen flex flex-col">
            {!isNotFound && <Header />}
            <main className="flex-grow pt-24">{children}</main>
            {!isNotFound && <Footer />}
        </div>
    )
}

const Routes = () => {
    return (
        <Router>
            <Layout>
                <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/guides/:id" element={<Guide />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
                </RouterRoutes>
            </Layout>
        </Router>
    )
}

export default Routes
