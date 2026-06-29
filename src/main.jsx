import React from "react";
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <ErrorBoundary>
                <AnimatePresence mode="wait">
                    <App />
                </AnimatePresence>
            </ErrorBoundary>
        </HelmetProvider>
    </React.StrictMode>
);
