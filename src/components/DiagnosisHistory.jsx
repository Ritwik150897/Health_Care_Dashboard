import React from "react";
import BloodPressureChart from "./BloodPressureChart";
import VitalsSection from "./VitalsSection";
import "./DiagnosisHistory.css";

const DiagnosisHistory = ({ patient }) => {
    return (
        <div className="diagnosis-history-container">
            <h2 className="diagnosis-title">Diagnosis History</h2>
            <BloodPressureChart diagnosisHistory={patient.diagnosis_history} />
            <VitalsSection vitalsData={patient.diagnosis_history} />
        </div>
    );
};

export default DiagnosisHistory;