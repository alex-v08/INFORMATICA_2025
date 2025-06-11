import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseInfo from './components/CourseInfo';
import Modules from './components/Modules';
import Schedule from './components/Schedule';
import Evaluation from './components/Evaluation';
import Navigation from './components/Navigation';
import GoogleDocsTemplates from './components/GoogleDocsTemplates';
import GoogleDocsIndices from './components/GoogleDocsIndices';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<CourseInfo />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/google-docs-templates" element={<GoogleDocsTemplates />} />
          <Route path="/google-docs-indices" element={<GoogleDocsIndices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
