import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import "./BloodPressureChart.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ diagnosisHistory }) => {
    if (!diagnosisHistory || diagnosisHistory.length === 0) {
        return <p>No blood pressure data available.</p>;
    }

    const filteredData = diagnosisHistory.slice(-6);

    const chartData = {
        labels: filteredData.map(entry => `${entry.month}, ${entry.year}`),
        datasets: [
            {
                label: "Systolic",
                data: filteredData.map(entry => entry.blood_pressure.systolic.value),
                borderColor: "#007089",
                backgroundColor: "#007089",
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
            {
                label: "Diastolic",
                data: filteredData.map(entry => entry.blood_pressure.diastolic.value),
                borderColor: "#A8EB12",
                backgroundColor: "#A8EB12",
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { grid: { display: false } },
            y: { min: 60, max: 180 }
        }
    };

    const latestData = filteredData[filteredData.length - 1];

    return (
        <div className="chart-container">
            <div className="chart-container-inner">
                <div className="chart-header">
                    <h3>Blood Pressure</h3>
                </div>
                <div className="chart-content">
                    <Line data={chartData} options={options} />
                    {/* <div className="chart-info">
                        <div className="info-item">
                            <span className="dot systolic"></span> Systolic
                            <strong>{latestData.blood_pressure.systolic.value}</strong>
                            <p>▲ {latestData.blood_pressure.systolic.levels}</p>
                        </div>
                        <div className="info-item">
                            <span className="dot diastolic"></span> Diastolic
                            <strong>{latestData.blood_pressure.diastolic.value}</strong>
                            <p>▼ {latestData.blood_pressure.diastolic.levels}</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BloodPressureChart;