import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { useConfig } from "@dhis2/app-runtime";
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

const AppWrapper = () => {  
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
}

export default AppWrapper;