import React, { useState } from 'react'

// Sample user settings data
const initialSettings = {
    account: {
        email: "john.smith@example.com",
        password: "••••••••",
        phone: "+212 612-345678"
    },
    notifications: {
        emailNotifications: true,
        smsNotifications: false,
        promotionalEmails: true,
        tourReminders: true,
        guideMessages: true
    },
    privacy: {
        profileVisibility: "public", // public, registered, private
        showReviews: true,
        shareActivity: true
    },
    preferences: {
        language: "english",
        currency: "MAD",
        timeFormat: "24h"
    }
}

const Settings = () => {
    const [settings, setSettings] = useState(initialSettings)
    const [activeTab, setActiveTab] = useState('account')
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [notification, setNotification] = useState(null)

    const handleToggleChange = (category, setting) => {
        setSettings({
            ...settings,
            [category]: {
              ...settings[category],
              [setting]: !settings[category][setting]
            }
        })
        
        showNotification(`${setting} setting updated successfully`)
    }

    const handleSelectChange = (category, setting, value) => {
        setSettings({
            ...settings,
            [category]: {
              ...settings[category],
              [setting]: value
            }
        })
        
        showNotification(`${setting} setting updated successfully`)
    }

    const handlePasswordChange = (e) => {
        const { name, value } = e.target
        setPasswordData({
            ...passwordData,
            [name]: value
        })
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        
        // Validate passwords
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            showNotification("New passwords don't match", "error")
            return
        }
        
        if (passwordData.newPassword.length < 8) {
            showNotification("Password must be at least 8 characters", "error")
            return
        }
        
        // Here you would typically send the password change request to your backend
        console.log('Password change requested:', passwordData)
        
        // Reset form and close modal
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        })
        setShowPasswordModal(false)
        
        showNotification("Password updated successfully")
    }

    const showNotification = (message, type = "success") => {
        setNotification({ message, type })
        
        // Clear notification after 3 seconds
        setTimeout(() => {
            setNotification(null)
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
            
            {/* Notification */}
            {notification && (
              <div className={`mb-6 p-4 rounded-md ${
                notification.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {notification.message}
              </div>
            )}
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b">
                <button
                  className={`px-6 py-4 text-lg font-medium ${
                    activeTab === 'account' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('account')}
                >
                  Account
                </button>
                <button
                  className={`px-6 py-4 text-lg font-medium ${
                    activeTab === 'notifications' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('notifications')}
                >
                  Notifications
                </button>
                <button
                  className={`px-6 py-4 text-lg font-medium ${
                    activeTab === 'privacy' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('privacy')}
                >
                  Privacy
                </button>
                <button
                  className={`px-6 py-4 text-lg font-medium ${
                    activeTab === 'preferences' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('preferences')}
                >
                  Preferences
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {/* Account Settings */}
                {activeTab === 'account' && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Account Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <div className="flex items-center">
                          <input
                            type="email"
                            value={settings.account.email}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 bg-gray-50"
                            readOnly
                          />
                          <button className="ml-4 text-green-600 hover:text-green-700 font-medium">
                            Change
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className="flex items-center">
                          <input
                            type="password"
                            value={settings.account.password}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 bg-gray-50"
                            readOnly
                          />
                          <button 
                            className="ml-4 text-green-600 hover:text-green-700 font-medium"
                            onClick={() => setShowPasswordModal(true)}
                          >
                            Change
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <div className="flex items-center">
                          <input
                            type="tel"
                            value={settings.account.phone}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 bg-gray-50"
                            readOnly
                          />
                          <button className="ml-4 text-green-600 hover:text-green-700 font-medium">
                            Change
                          </button>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
                        <p className="text-gray-600 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-gray-600 text-sm">Receive notifications via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.emailNotifications}
                            onChange={() => handleToggleChange('notifications', 'emailNotifications')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">SMS Notifications</h3>
                          <p className="text-gray-600 text-sm">Receive notifications via text message</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.smsNotifications}
                            onChange={() => handleToggleChange('notifications', 'smsNotifications')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Promotional Emails</h3>
                          <p className="text-gray-600 text-sm">Receive emails about promotions and special offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.promotionalEmails}
                            onChange={() => handleToggleChange('notifications', 'promotionalEmails')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Tour Reminders</h3>
                          <p className="text-gray-600 text-sm">Receive reminders about upcoming tours</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.tourReminders}
                            onChange={() => handleToggleChange('notifications', 'tourReminders')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Guide Messages</h3>
                          <p className="text-gray-600 text-sm">Receive notifications when guides message you</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.guideMessages}
                            onChange={() => handleToggleChange('notifications', 'guideMessages')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Privacy Settings */}
                {activeTab === 'privacy' && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Profile Visibility</label>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          value={settings.privacy.profileVisibility}
                          onChange={(e) => handleSelectChange('privacy', 'profileVisibility', e.target.value)}
                        >
                          <option value="public">Public - Anyone can view your profile</option>
                          <option value="registered">Registered Users - Only registered users can view your profile</option>
                          <option value="private">Private - Only you and guides you book can view your profile</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Show Reviews</h3>
                          <p className="text-gray-600 text-sm">Allow others to see reviews you've written</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.privacy.showReviews}
                            onChange={() => handleToggleChange('privacy', 'showReviews')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Share Activity</h3>
                          <p className="text-gray-600 text-sm">Share your booking activity with other users</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.privacy.shareActivity}
                            onChange={() => handleToggleChange('privacy', 'shareActivity')}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-lg font-bold mb-2">Data & Privacy</h3>
                        <p className="text-gray-600 mb-4">
                          You can request a copy of your data or delete all your data from our platform.
                        </p>
                        <div className="flex space-x-4">
                          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md">
                            Download My Data
                          </button>
                          <button className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded-md">
                            Delete My Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Preferences Settings */}
                {activeTab === 'preferences' && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">User Preferences</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Language</label>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          value={settings.preferences.language}
                          onChange={(e) => handleSelectChange('preferences', 'language', e.target.value)}
                        >
                          <option value="english">English</option>
                          <option value="french">French</option>
                          <option value="arabic">Arabic</option>
                          <option value="spanish">Spanish</option>
                          <option value="german">German</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Currency</label>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          value={settings.preferences.currency}
                          onChange={(e) => handleSelectChange('preferences', 'currency', e.target.value)}
                        >
                          <option value="MAD">Moroccan Dirham (MAD)</option>
                          <option value="USD">US Dollar (USD)</option>
                          <option value="EUR">Euro (EUR)</option>
                          <option value="GBP">British Pound (GBP)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Time Format</label>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          value={settings.preferences.timeFormat}
                          onChange={(e) => handleSelectChange('preferences', 'timeFormat', e.target.value)}
                        >
                          <option value="24h">24-hour (14:30)</option>
                          <option value="12h">12-hour (2:30 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Password Change Modal */}
          {showPasswordModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Change Password</h3>
                  <button 
                    onClick={() => setShowPasswordModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handlePasswordSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowPasswordModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
    )
}

export default Settings
