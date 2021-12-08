import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'

export default function Router() {


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
