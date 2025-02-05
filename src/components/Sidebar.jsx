import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sidebar.css";

const Sidebar = ({ onSelectPatient }) => {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState("Jessica Taylor");

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
                    auth: { username: "coalition", password: "skills-test" },
                });
                setPatients(response.data);
            } catch (error) {
                console.error("API Fetch Error:", error);
            }
        };

        fetchPatients();
    }, []);

    const handlePatientSelect = (patientName) => {
        setSelectedPatient(patientName);
        onSelectPatient(patientName);
    };

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h3 className="sidebar-title">Patients</h3>
                <img src="/icons/search.png" alt="Search" className="search-icon" />
            </div>
            <ul className="patient-list">
                {patients.map((patient, index) => (
                    <li 
                        key={index} 
                        className={`patient-item ${patient.name === selectedPatient ? "selected" : ""}`}
                        onClick={() => handlePatientSelect(patient.name)}
                    >
                        <img src={patient.profile_picture} alt={patient.name} className="patient-avatar" />
                        <div className="sidebar-patient-info">
                            <p className="sidebar-patient-name">{patient.name}</p>
                            <p className="sidebar-patient-gender">{patient.gender}, {patient.age}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;