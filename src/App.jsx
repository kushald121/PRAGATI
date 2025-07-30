import React from 'react'
import Navbar from "./components/navbar";
import Profileicon from "./components/profileicon";
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profileicon/>
      <ContactPage />
    </div>
  )
}

export default App
