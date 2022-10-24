import React from 'react';

import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';

import { theme } from "./config/theme"

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
