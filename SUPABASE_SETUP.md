# Supabase Setup Guide

## Prerequisites
1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project in your Supabase dashboard

## Setup Steps

### 1. Get Your Supabase Credentials
1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key

### 2. Configure Environment Variables
1. Create a `.env` file in your project root
2. Add your Supabase credentials:
```
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 3. Create Database Tables
In your Supabase dashboard, go to SQL Editor and create your tables. Example:

```sql
-- Example table creation
CREATE TABLE your_table_name (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE your_table_name ENABLE ROW LEVEL SECURITY;

-- Create policies (example for authenticated users)
CREATE POLICY "Users can view their own records" ON your_table_name
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own records" ON your_table_name
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### 4. Update the Example Component
In `src/components/ExampleSupabase.jsx`, replace `'your_table_name'` with your actual table name.

### 5. Test the Integration
1. Start your development server: `npm run dev`
2. Import and use the `ExampleSupabase` component in your app
3. Test authentication and database operations

## Available Functions

### Database Operations
- `getAllRecords(tableName)` - Get all records from a table
- `getRecordById(tableName, id)` - Get a single record by ID
- `insertRecord(tableName, record)` - Insert a new record
- `updateRecord(tableName, id, updates)` - Update a record
- `deleteRecord(tableName, id)` - Delete a record

### Authentication
- `signUp(email, password)` - User registration
- `signIn(email, password)` - User login
- `signOut()` - User logout

## Usage Example

```jsx
import { useSupabase } from '../context/SupabaseContext'
import { getAllRecords } from '../lib/database'

const MyComponent = () => {
  const { user } = useSupabase()
  
  const fetchData = async () => {
    try {
      const data = await getAllRecords('your_table_name')
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  
  return (
    <div>
      {user ? (
        <button onClick={fetchData}>Fetch Data</button>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  )
}
```

## Security Notes
- Always enable Row Level Security (RLS) on your tables
- Create appropriate policies for your use case
- Never expose your service role key in the frontend
- Use environment variables for sensitive data

## Troubleshooting
- Check browser console for error messages
- Verify your environment variables are correct
- Ensure your Supabase project is active
- Check RLS policies if you're getting permission errors 