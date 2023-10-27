import { authFetch } from "../utils/authFetch";
import { ENV } from "../utils/constants"
import { storageController } from "./token";


const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPINTS.USERS_ME}`;
        const response = await authFetch(url);

        return await response.json();
    } catch (error) {
        console.log("(users.js)", error);
        return null;
    }
}

const actualizaUser = async (id, data) => {
    
    const token = await storageController.getToken();
    // console.log("token", token)
    // console.log("users data",JSON.stringify(data))

    fetch(`${ENV.API_URL}/${ENV.ENDPINTS.USERS_UPDATE_USER}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}

export const userController = {
    getMe,
    actualizaUser
}