import { useEffect, useState } from 'react';
import  authService from './appwrite/auth';
import './App.css'
import { useDispatch } from 'react-redux';
import { login, logout } from './reducers/authSlice';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


const App =() =>{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=>{  setError(error) })
    .finally(()=>{
        setLoading(false)
      })
  },[])

  return !loading ? (
    <div className="w-full h-screen flex flex-col">
      <Header/>
         <Outlet/>
      <Footer/>
      {error && <p>{error}</p>}
    </div>
  ) : (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  )
}

export default App
