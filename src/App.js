import React, { useState, useEffect } from 'react'
import './styles.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from './firebase'

const theme = createMuiTheme()

export default function App() {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

    useEffect(()=>{
        firebase.isInitialized().then(val=>{
            setFirebaseInitialized(val)
        })
    })

    return firebaseInitialized !== false ? (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path="/merchant_payment_v2/" component={Login} />
                    <Route exact path="/merchant_payment_v2/register" component={Register} />
                    <Route exact path="/merchant_payment_v2/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    ) : <div id="loader"><CircularProgress /></div>
}
