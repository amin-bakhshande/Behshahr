import http from "../interceptor";

export const PostRegisterApi = async (body) => {
    try {
        const response = await http.post(`/Sign/SendVerifyMessage`, body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 
export const PostRegisterApi2 = async (body) => {
    try {
        const response = await http.post(`/Sign/VerifyMessage`, body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 
export const PostRegisterApi3 = async (body) => {
    try {
        const response = await http.post(`/Sign/Register`, body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 