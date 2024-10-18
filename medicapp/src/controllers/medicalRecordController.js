import axios from "axios";

export const fetchMedicalRecord = async (numero, setRecord) => {
    try {
        const url = "api/app/medicalRecord"

        const response = await axios.get(url, {
            numero: numero  
        })

        setRecord(response.data);

        console.log(`Record: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error(`El error fue: ${error}`);
    }
}