import React from "react";
import "./VitalsSection.css";

const VitalsSection = ({ vitalsData }) => {
    if (!vitalsData || vitalsData.length === 0) {
        return <p>No vitals data available.</p>;
    }

    const latestVitals = vitalsData.slice(-1)[0];

    return (
        <div className="vitals-section">
            <div className="vital-card respiratory">
                <img src="/icons/respiratory rate.png" alt="Respiratory Rate" />
                <div className="vital-info">
                    <p className="vital-title">Respiratory Rate</p>
                    <p className="vital-value">{latestVitals.respiratory_rate.value} bpm</p>
                    <p className="vital-status">{latestVitals.respiratory_rate.levels}</p>
                </div>
            </div>

            <div className="vital-card temperature">
                <img src="/icons/temperature.png" alt="Temperature" />
                <div className="vital-info">
                    <p className="vital-title">Temperature</p>
                    <p className="vital-value">{latestVitals.temperature.value}°F</p>
                    <p className="vital-status">{latestVitals.temperature.levels}</p>
                </div>
            </div>

            <div className="vital-card heart-rate">
                <img src="/icons/HeartBPM.png" alt="Heart Rate" />
                <div className="vital-info">
                    <p className="vital-title">Heart Rate</p>
                    <p className="vital-value">{latestVitals.heart_rate.value} bpm</p>
                    <p className="vital-status">{latestVitals.heart_rate.levels}</p>
                </div>
            </div>
        </div>
    );
};

export default VitalsSection;