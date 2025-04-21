import { useEffect, useState } from 'react'

import './App.css'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import NotesPage from './NotesPage'
import AboutPage from './AboutPage'
import Contacts from './Contacts'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<Contacts />} />
      {/* <Route path="/cv" element={<CVPage />} /> */}
      {/* ещё можно: <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App