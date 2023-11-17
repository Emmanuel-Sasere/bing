// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Closed from './components/Closed';
import './App.css'
import CardNavbar from './components/CardNavbar';

const App = () => {
    return (
        <div>
            <Router>
                <CardNavbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Closed' element={<Closed />} /> {/* Corrected path */}
                </Routes>
            </Router>
        </div>
    );
};

export default App;