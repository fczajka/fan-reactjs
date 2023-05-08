import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from "./Components/ui/App";
import IsOpenContext from "./context/IsOpenContext";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const persistor = persistStore(store);

function Index() {
    const IsOpen = useState(false);
    return (
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <IsOpenContext.Provider value={IsOpen}>
                            <App />
                        </IsOpenContext.Provider>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    );
}

const container = document.getElementById("root");

if (!container) {
    throw new Error("No container to render to");
}

const root = ReactDOM.createRoot(container);
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
async () => await reportWebVitals();
