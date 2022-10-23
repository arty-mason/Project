import React from 'react';

import { Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
