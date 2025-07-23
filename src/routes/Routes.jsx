import SignIn from '../pages/SignIn.jsx'
import ScrollToTop from '../component/scroll-to-top/SrollToTop.jsx'
import Home from '../pages/Home.jsx'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BottomNav from '../component/BottomNav/BottomNav.jsx'

export default function AppRoutes() {
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
        </Routes>
         <BottomNav />
    </Router>
  )
}