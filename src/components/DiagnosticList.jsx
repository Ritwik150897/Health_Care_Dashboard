import React from "react";
import "./DiagnosticList.css";

const DiagnosticList = ({ diagnosticList }) => {
    if (!diagnosticList || diagnosticList.length === 0) {
        return <p>No diagnostic data available.</p>;
    }

    return (
        <div className="diagnostic-list-container">
            <h3 className="diagnostic-list-title">Diagnostic List</h3>
            <div className="table-container">
                <table className="diagnostic-table">
                    <thead>
                        <tr>
                            <th>Problem/Diagnosis</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diagnosticList.map((diagnosis, index) => (
                            <tr key={index}>
                                <td>{diagnosis.name}</td>
                                <td>{diagnosis.description}</td>
                                <td className="status">{diagnosis.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DiagnosticList;