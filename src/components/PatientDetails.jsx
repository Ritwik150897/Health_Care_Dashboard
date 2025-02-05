import React from "react";
import "./PatientDetails.css";

const PatientDetails = ({ patient }) => {
    if (!patient) {
        return <p>No patient details available.</p>;
    }

    return (
        <div className="patient-details-container">
            <img className="patient-profile-picture" src={patient.profile_picture} alt={patient.name} />
            <h3 className="patient-name">{patient.name}</h3>

            <div className="patient-info">
                <div className="patient-info-item">
                    <img src="/icons/BirthIcon.png" alt="DOB" className="info-icon" />
                    <div>
                        <p className="info-label">Date Of Birth</p>
                        <p className="info-value">{patient.date_of_birth}</p>
                    </div>
                </div>

                <div className="patient-info-item">
                    <img src="/icons/FemaleIcon.png" alt="Gender" className="info-icon" />
                    <div>
                        <p className="info-label">Gender</p>
                        <p className="info-value">{patient.gender}</p>
                    </div>
                </div>

                <div className="patient-info-item">
                    <img src="/icons/PhoneIcon.png" alt="Phone" className="info-icon" />
                    <div>
                        <p className="info-label">Contact Info.</p>
                        <p className="info-value">{patient.phone_number}</p>
                    </div>
                </div>

                <div className="patient-info-item">
                    <img src="/icons/PhoneIcon.png" alt="Emergency Contact" className="info-icon" />
                    <div>
                        <p className="info-label">Emergency Contacts</p>
                        <p className="info-value">{patient.emergency_contact}</p>
                    </div>
                </div>

                <div className="patient-info-item">
                    <img src="/icons/InsuranceIcon.png" alt="Insurance" className="info-icon" />
                    <div>
                        <p className="info-label">Insurance Provider</p>
                        <p className="info-value">{patient.insurance_type}</p>
                    </div>
                </div>
            </div>

            <button className="show-all-button">Show All Information</button>
        </div>
    );
};

export default PatientDetails;