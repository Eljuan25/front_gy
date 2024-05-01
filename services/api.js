import { API_BASE_URL } from "../apiConfig";

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`); 
        if (!response.ok) {
             throw new Error('Could not get user list');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting users:', error); 
        throw error;
    }
};

export const getPosts = async () => {
    try{const response = await fetch (`${API_BASE_URL}/posts`);
    if(!response.ok){
        throw new Error('Could not get post');

    }
    const data = await response.json();
    return data;
    }catch (error){
        console.error ('Error gettin posts:', error);
        throw error;
    }
};

export const getActiveStorage = async (attachmentId) => {
    try{
        const response = await fetch (`${API_BASE_URL}/active_storage/${attachmentId}`);
        if(!response.ok){
            throw new Error('Could not get active storage data');
        }
        const data = await response.json();
        return data;       
        }catch(error){
            console.error('Error gettin active storage data:',error)
            throw error;
    }

};

export const getMessages = async () => {
    try{
        const response = await fetch (`${API_BASE_URL}/massages`);
        if(!response.ok){
            throw new Error('could no get massages');
        }
    const data = await response.json();
    return data;
    }catch(error){
        console.error('error gettin massages',error)
        throw error;
    }
}; 


