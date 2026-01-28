import React from 'react'
import DarkModeToggle from './DarkModeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white text-black
                    dark:bg-gray-900 dark:text-white p-4">
      <DarkModeToggle />

      <h1 className="text-2xl mt-4">
        Dark mode should change background
      </h1>
    </div>
  )
}

export default App
