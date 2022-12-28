import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./index.css";
import App from "./pages/home/App";
import Details from "./pages/details/Details";
import Layout from "./Components/ui/Layout";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const persistor = persistStore(store);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/details" element={<Details />} />
                            <Route path="/" element={<App />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
async () => await reportWebVitals();
