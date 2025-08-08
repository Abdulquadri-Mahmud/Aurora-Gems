import ScrollToTop from '../component/scroll-to-top/SrollToTop.jsx'
import Home from '../pages/Home.jsx'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BottomNav from '../component/BottomNav/BottomNav.jsx'

import CategoryPage from '../pages/categoryPage/CategoryPage.jsx'
import CategoryPopupMenu from '../component/BottomNav/CategoryPopupMenu.jsx'
import SignIn from '../pages/auths/SignIn.jsx'
import SignUp from '../pages/auths/SignUp.jsx'
import VerifyEmail from '../pages/auths/VerifyEmail.jsx'

export default function AppRoutes() {
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<CategoryPage/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/verify-email' element={<VerifyEmail/>}/>
        </Routes>
         {/* <BottomNav /> */}
    </Router>
  )
}