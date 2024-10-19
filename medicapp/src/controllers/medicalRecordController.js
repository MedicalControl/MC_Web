import axios from "axios";

export const fetchMedicalRecord = async (numero, setRecord) => {
    try {
        const url = `api/app/medicalRecord`;
        
        console.log(`Numero: ${numero}`);

        const response = await axios.get(url, {
            headers: {
                'authorization': localStorage.getItem('token')
            },
            params: {numero: numero}  
        })

        setRecord(response.data);

        console.log(`Record: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error(`El error fue: ${error}`);
    }
}