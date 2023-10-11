import { authFetch } from "../utils/authFetch";
import { ENV } from "../utils/constants"


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

export const userController = {
    getMe
}