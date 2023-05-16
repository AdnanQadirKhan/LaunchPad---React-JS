import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import routes from './pages/router'
import { SnackbarProvider } from "notistack";
import AdressContext from "./AddressContext";
import { useState } from "react";
function App() {
    const [ address , setAddress ] = useState("");
    return (
        <>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <AdressContext.Provider value={{ address , setAddress}}>

            <Routes >
                {
                    routes.map((data, index) => (
                        <Route exact={true} path={data.path} element={data.component} key={index} />
                    ))
                }
            </Routes>
            </AdressContext.Provider>

            </SnackbarProvider>
        </>
    );
}

export default App;
