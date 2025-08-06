import React, { useState, useEffect } from 'react'
import { useSupabase } from '../context/SupabaseContext'
import { getAllRecords, insertRecord, deleteRecord } from '../lib/database'

const ExampleSupabase = () => {
  const { user, supabase } = useSupabase()
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  const [newRecord, setNewRecord] = useState({ name: '', description: '' })

  // Fetch records on component mount
  useEffect(() => {
    fetchRecords()
  }, [])

  const fetchRecords = async () => {
    try {
      setLoading(true)
      const data = await getAllRecords('your_table_name')
      setRecords(data)
    } catch (error) {
      console.error('Error fetching records:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddRecord = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await insertRecord('your_table_name', newRecord)
      setNewRecord({ name: '', description: '' })
      fetchRecords() // Refresh the list
    } catch (error) {
      console.error('Error adding record:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteRecord = async (id) => {
    try {
      setLoading(true)
      await deleteRecord('your_table_name', id)
      fetchRecords() // Refresh the list
    } catch (error) {
      console.error('Error deleting record:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h2>Supabase Example</h2>
      
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          
          {/* Add new record form */}
          <form onSubmit={handleAddRecord}>
            <input
              type="text"
              placeholder="Name"
              value={newRecord.name}
              onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newRecord.description}
              onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Record'}
            </button>
          </form>

          {/* Display records */}
          <div>
            <h3>Records</h3>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {records.map((record) => (
                  <li key={record.id}>
                    <strong>{record.name}</strong> - {record.description}
                    <button onClick={() => handleDeleteRecord(record.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <p>Please sign in to view records.</p>
      )}
    </div>
  )
}

export default ExampleSupabase 