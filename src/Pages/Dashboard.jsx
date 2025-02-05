import React, { useEffect, useState } from "react";
import axios from "axios";
import DiagnosticList from "../components/DiagnosticList";
import LabResults from "../components/LabResults";
import PatientDetails from "../components/PatientDetails";
import DiagnosisHistory from "../components/DiagnosisHistory";
import "./Dashboard.css";

const Dashboard = ({ selectedPatient }) => {
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const response = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
                    auth: { username: "coalition", password: "skills-test" },
                });

                const patientData = response.data.find((p) => p.name === selectedPatient);
                if (!patientData) throw new Error("Selected patient data not found.");

                setPatient(patientData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPatientData();
    }, [selectedPatient]);

    if (loading) return <p>Loading patient data...</p>;
    if (error) return <p className="error-message">Error: {error}</p>;

    return (
        <div className="dashboard">
            <div className="Left-container">
                <DiagnosisHistory patient={patient} />
                <DiagnosticList diagnosticList={patient.diagnostic_list} />
            </div>
            <div className="Right-container">
                <PatientDetails patient={patient} />
                <LabResults labResults={patient.lab_results} />
            </div>
        </div>
    );
};

export default Dashboard;