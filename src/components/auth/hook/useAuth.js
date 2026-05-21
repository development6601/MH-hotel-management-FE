import { useDispatch, useSelector } from "react-redux"
import { setUser, setLoading, setError } from "../../../store/Slices/authSlice.js"
import { getMe, login, register } from "../../../services/auth.api.js";

export const useAuth = () => {

    const dispatch = useDispatch();

    const loginCurrentUser = async ({ email, password }) => {
        
        try {
            dispatch(setLoading(false))
            
            const data = await login({ email, password });
            
            dispatch(setUser(data.user));
            console.log(data.user);
            

        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Login failed"));
            console.log(error.response?.data?.message || "Login failed");
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    const registerUser = async ({ name, email, password, role, phone, ProfilePic }) => {
        try {
            const data = await register({ name, email, password, role, phone, ProfilePic });
            return data;

        } catch (error) {
            console.log(error.response?.data?.message || "Registration failed");
            return error.response?.data?.message || "Registration failed";
        }
    }

    const fetchUserData = async () => {
        try {
            dispatch(setLoading(false))
            
            const data = await getMe();
            
            dispatch(setUser(data.user));
            console.log(data.user);

        } catch (error) {
            console.log(error.response?.data?.message || "Fetching User Fail");
            return error.response?.data?.message || "Fetching User Fail";
        }
    }

    return {
        loginCurrentUser, registerUser, fetchUserData
    }
}