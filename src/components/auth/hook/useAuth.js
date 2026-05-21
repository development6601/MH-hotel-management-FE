import { useDispatch, useSelector } from "react-redux"
import { setUser, setLoading, setError } from "../../../store/Slices/authSlice.js"
import { login } from "../../../services/auth.api.js";

export const useAuth = () => {

    const dispatch = useDispatch();

    const loginCurrentUser = async ({ email, role, password }) => {
        
        try {
            dispatch(setLoading(false))
            
            const data = await login({ email, role, password });
            
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

    return {
        loginCurrentUser
    }
}