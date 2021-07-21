import React from 'react';
import { Router } from '@reach/router'
// Pages
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'
// Components

// Styles
import './App.scss';

export const App = () => (
    <Router>
        <Landing path="/" />
        <NotFound default />
    </Router>
);