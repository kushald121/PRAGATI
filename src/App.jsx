import React from 'react'
import Navbar from "./components/navbar";
import Profileicon from "./components/profileicon";
import ContactPage from './pages/ContactPage';
import Student_Dashboard from './components/Student_Dashboard/Student_Dashboard';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profileicon/>
      <ContactPage />
      <Student_Dashboard />
    </div>
  )
}


export default App
