import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const user = {
        email:'jeevan',
        password:'1234'
    }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pref,setPref]=useState(true)

 const login = (data) => {
  try  {
    if((user.email === data.email && user.password === data.password))
    setIsLoggedIn(true);
    else{
    alert('Invalid Credentials')
    setIsLoggedIn(false);
       }
   } catch(err) {
    console.log(err);
  }
};


  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout,pref,setPref }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
