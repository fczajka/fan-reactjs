import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../Layout";
import Details from "../../pages/details";
import Home from "../../pages/home";

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
