// controllers/meController.js

import axios from "axios";

export const fetchMe = async (setMe) => {
    try {
        const url = "api/auth/me";
        const token = localStorage.getItem('token');

        console.log(`Token: ${token}`);

        const response = await axios.get(url, {
            headers: {
                'authorization': token
            }
        })

        setMe(response.data);

        console.log(`Usuario: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error(`El error fue: ${error}`);

    }
}