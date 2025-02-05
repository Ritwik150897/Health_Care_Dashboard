import axios from "axios";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

const auth = {
    username: "coalition",
    password: "skills-test",
};

export const getPatientData = async () => {
    try {
        console.log("Fetching patient data...");

        const response = await axios.get(API_URL, { auth });

        console.log("Full API Response:", response);
        console.log("Response Data:", response.data);

        if (!Array.isArray(response.data)) {
            throw new Error("API response is not an array.");
        }

        const patient = response.data.find(p => p.name === "Jessica Taylor");

        if (!patient) {
            throw new Error("Jessica Taylor not found in API response.");
        }

        console.log("Jessica Taylor Data:", patient);
        return patient;
    } catch (error) {
        console.error("API Fetch Error:", error.message);
        return null;
    }
};