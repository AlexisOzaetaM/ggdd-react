import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Pages
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'
import { Coach } from './pages/Coach/'
import { CoachLogin } from './pages/Coach/Login'
// Components
import { Privateroute } from './components/PrivateRoute'
// Providers
import { AuthProvider } from './contexts/AuthContext'
// Styles
import './App.scss';

export const App = () => (
    <AuthProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Privateroute path="/coach" component={Coach} />
                <Route exact path="/login" component={CoachLogin} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    </AuthProvider>
);