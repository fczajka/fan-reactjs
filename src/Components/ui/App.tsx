import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import Details from "../../pages/details/Details";
import Layout from "./Layout";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <Layout>
            <AnimatePresence mode="wait">
                <Routes key={location.pathname} location={location}>
                    <Route path="/details" element={<Details />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </AnimatePresence>
        </Layout>
    );
}

export default App;
