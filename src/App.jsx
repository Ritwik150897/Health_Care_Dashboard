import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import "./index.css";

const App = () => {
    const [selectedPatient, setSelectedPatient] = useState("Jessica Taylor");

    return (
        <div className="main-container">
            <Header />
            <div className="bottom-container">
                <Sidebar onSelectPatient={setSelectedPatient} />
                <Dashboard selectedPatient={selectedPatient} />
            </div>
        </div>
    );
};

export default App;