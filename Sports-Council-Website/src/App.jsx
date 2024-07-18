import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Events from './pages/Events'
import Team from './pages/Team'
import ClubAndSocities from './pages/ClubAndSocities'
import Gallery from './pages/Gallery'
import Contact from './pages/contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className='max-w-screen h-screen font-poppins'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/facilities' element={<Facilities/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/clubsAndSocities' element={<ClubAndSocities/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contant' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      </div>
    </>
  )
}

export default App
