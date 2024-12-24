import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
// import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from "lucide-react";
import { Toaster } from 'react-hot-toast'


function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  

  useEffect(()=>{
    checkAuth()
  }, [checkAuth])

  console.log({authUser})

  if (isCheckingAuth && !authUser) 
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
  )
  return (
    <>
   

     <Navbar/>
     <Routes>
     <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        {/* <Route path="/settings" element={<SettingsPage />} /> */}
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>


    <Toaster/>

    </>
  )
}

export default App
