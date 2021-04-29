import React from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'
import './components/style.css'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;