import React from "react";
import "./LabResults.css";

const LabResults = ({ labResults }) => {
    if (!labResults || labResults.length === 0) {
        return <p>No lab results available.</p>;
    }

    return (
        <div className="lab-results-container">
            <h3 className="lab-results-title">Lab Results</h3>
            <ul className="lab-results-list">
                {labResults.map((result, index) => (
                    <li key={index} className="lab-result-item">
                        {result}
                        <button className="download-btn" onClick={() => handleDownload(result)}>
                            <img src="Download.png" alt="Download" className="download-icon" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LabResults;