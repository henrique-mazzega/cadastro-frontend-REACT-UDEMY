import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Header from '../components/template/Header'
import Nav from '../components/template/Nav'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
