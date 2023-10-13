import AsyncStorage from "@react-native-async-storage/async-storage"
import { ENV } from "../utils/constants"

// función para traer favoritos
export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE);
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
    }
}

// función para añadir a favoritos
export const addFavoritosApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
}