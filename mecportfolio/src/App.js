import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
                <Route path="/project3" element={<Project3 />} />
                <Route path="/project4" element={<Project4 />} />
                <Route path="/project5" element={<Project5 />} />
            </Routes>
        </Router>
    );
}

export default App;
