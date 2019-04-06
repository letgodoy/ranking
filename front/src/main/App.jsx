import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Routes from './Routes'
import Nav from '../components/template/Nav'

export default props =>
    <HashRouter>
        <div className="app">
            <Nav />
            <Routes />
        </div>
    </HashRouter>
