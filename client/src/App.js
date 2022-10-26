import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import { lightTheme, darkTheme } from "./config/theme"
import { AuthContextProvider } from './context/AuthContext';

/// PAGES
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin"
import User from "./pages/user/User"

/// STATIC COMPONENTS
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(old => !old);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Header toggleTheme={toggleTheme} />
        <Wrapper>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Wrapper>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
