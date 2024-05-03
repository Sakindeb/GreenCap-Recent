import React from "react";
// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/**import all components */
import Home from "./components/Home";
import Projects from "./components/Projects";
import Details from "./components/Details";
import Account from "./components/Client";
import Nav from './components/Navigation'
import Orders from "./components/Order";
/** Root routes */
// const router = createBrowserRouter([

//     {
//         path: '/',
//         element: <Home/>
//     },
//     {
//         path: '/projects',
//         element: <Projects/>
//     },
//     {
//         path: '/project/:id',
//         element: <Details/>
//     },
//     {
//         path: '/account',
//         element: <Account/>
//     }


// ])

export default function App(){
    return(
        <Router>
        <Nav />
        <Routes>
            <>
                <Route
                    exact
                    path="/"
                    element={<Account />}
                />
                <Route
                    path="/dashboard"
                    element={<Home/>}
                />
                <Route
                    path="/projects"
                    element={<Projects/>}
                />
                <Route
                    path="/project/:id"
                    element={<Details/>}
                />
                <Route
                    path="/orders"
                    element={<Orders/>}
                />
            </>
        </Routes>
</Router>
    )
}

// . /Users/mac/.local/share/virtualenvs/Greeen-Dei6xMMY/bin/activate <- Run to activate env