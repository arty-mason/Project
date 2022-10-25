import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import { theme } from "./config/theme"
import { AuthContextProvider } from './context/AuthContext';

/// PAGES
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";

/// STATIC COMPONENTS
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Wrapper>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
