import React, { useState, useEffect } from 'react'
import { useSupabase } from '../context/SupabaseContext'
import { getAllRecords, insertRecord, deleteRecord, signIn, signUp, signOut } from '../lib/database'

const ExampleSupabase = () => {
  const { user } = useSupabase()
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  const [newRecord, setNewRecord] = useState({ name: '', description: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  // Authentication state
  const [authMode, setAuthMode] = useState('signin') // 'signin' or 'signup'
  const [authData, setAuthData] = useState({ email: '', password: '' })
  const [authLoading, setAuthLoading] = useState(false)

  // Table name - you can change this to match your actual table
  const TABLE_NAME = 'example_records'

  // Fetch records on component mount
  useEffect(() => {
    if (user) {
      fetchRecords()
    }
  }, [user])

  const fetchRecords = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getAllRecords(TABLE_NAME)
      setRecords(data || [])
    } catch (error) {
      console.error('Error fetching records:', error)
      setError('Failed to fetch records. Please check your table configuration.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddRecord = async (e) => {
    e.preventDefault()
    if (!newRecord.name.trim()) {
      setError('Name is required')
      return
    }
    
    try {
      setLoading(true)
      setError('')
      await insertRecord(TABLE_NAME, newRecord)
      setNewRecord({ name: '', description: '' })
      setSuccess('Record added successfully!')
      fetchRecords() // Refresh the list
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Error adding record:', error)
      setError('Failed to add record. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteRecord = async (id) => {
    try {
      setLoading(true)
      setError('')
      await deleteRecord(TABLE_NAME, id)
      setSuccess('Record deleted successfully!')
      fetchRecords() // Refresh the list
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Error deleting record:', error)
      setError('Failed to delete record. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    if (!authData.email || !authData.password) {
      setError('Email and password are required')
      return
    }

    try {
      setAuthLoading(true)
      setError('')
      
      if (authMode === 'signup') {
        await signUp(authData.email, authData.password)
        setSuccess('Account created! Please check your email to verify your account.')
      } else {
        await signIn(authData.email, authData.password)
        setSuccess('Signed in successfully!')
      }
      
      setAuthData({ email: '', password: '' })
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Auth error:', error)
      setError(error.message || 'Authentication failed. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setSuccess('Signed out successfully!')
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Sign out error:', error)
      setError('Failed to sign out. Please try again.')
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Supabase Example</h2>
      
      {/* Error and Success Messages */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      
      {user ? (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Welcome, <strong>{user.email}</strong>!
            </p>
            <button 
              onClick={handleSignOut}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
            >
              Sign Out
            </button>
          </div>
          
          {/* Add new record form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add New Record</h3>
            <form onSubmit={handleAddRecord} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  value={newRecord.name}
                  onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Description"
                  value={newRecord.description}
                  onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                {loading ? 'Adding...' : 'Add Record'}
              </button>
            </form>
          </div>

          {/* Display records */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Records</h3>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            ) : records.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No records found. Add your first record above!</p>
            ) : (
              <div className="space-y-3">
                {records.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div>
                      <strong className="text-gray-800">{record.name}</strong>
                      {record.description && (
                        <p className="text-gray-600 text-sm mt-1">{record.description}</p>
                      )}
                    </div>
                    <button 
                      onClick={() => handleDeleteRecord(record.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">
            {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
          </h3>
          
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={authData.email}
                onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={authData.password}
                onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={authLoading}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              {authLoading ? 'Processing...' : (authMode === 'signin' ? 'Sign In' : 'Sign Up')}
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <button 
              onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
              className="text-blue-500 hover:text-blue-600 text-sm"
            >
              {authMode === 'signin' ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExampleSupabase 