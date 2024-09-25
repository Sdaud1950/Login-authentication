import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Mycontext from './components/Store/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const localStoragedata = localStorage.getItem("Logged")

    if (localStoragedata === '1') {
      setIsLoggedIn(true)
    }


  }, [])


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem("Logged", "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("Logged")
    setIsLoggedIn(false);
  };

  return (
    <Mycontext.Provider value={{
      isLoggedIn:isLoggedIn,
onLogout:logoutHandler
    }}>

      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Mycontext.Provider>

  );
}

export default App;
