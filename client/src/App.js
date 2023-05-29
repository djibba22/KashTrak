
import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout';
import { Home } from './Home';
import { About } from './About';
import { Dashboard } from './Dashboard';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <div>
    <h1>KashTrak</h1>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
