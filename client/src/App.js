import React from 'react';

import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';

import { theme } from "./config/theme"

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";

import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
