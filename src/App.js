import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import routes from './pages/router'
import { SnackbarProvider } from "notistack";
function App() {
    return (
        <>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            ></SnackbarProvider>
            <Routes >
                {
                    routes.map((data, index) => (
                        <Route exact={true} path={data.path} element={data.component} key={index} />
                    ))
                }
            </Routes>
        </>
    );
}

export default App;
