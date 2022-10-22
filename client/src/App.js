import React from 'react';

import { Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signin";
import Account from "./components/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/" element={<Signup />} />
      <Route path="/" element={<Account />} />
    </Routes>
  );
}

export default App;
