import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import authService from '../appwrite/auth';
import { login, logout } from '../store/authSlice';
import { Header, Footer } from './index';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;