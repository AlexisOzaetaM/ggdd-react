import React from 'react';
import { Router } from '@reach/router'
// Pages
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'
import { CoachLogin } from './pages/Coach/Login'
// Components

// Providers
import { AuthProvider } from './contexts/AuthContext'
// Styles
import './App.scss';

export const App = () => (
    <AuthProvider>
        <Router>
            <Landing path="/" />
            <CoachLogin path="/coach/login" />
            <NotFound default />
        </Router>
    </AuthProvider>
);