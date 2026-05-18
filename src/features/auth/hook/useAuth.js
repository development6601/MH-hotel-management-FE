import { useDispatch, useSelector } from "react-redux"
import { setUser, setLoading, setError } from "../authSlice.js"
import { login } from "../services/auth.api";

export const useAuth = () => {

    const dispatch = useDispatch();

    const loginCurrentUser = async ({ email, role, password }) => {
        
        try {
            dispatch(setLoading(false))
            
            const data = await login({ email, role, password });
            // console.log(data.user);
            
            dispatch(setUser(data.user));

        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Login failed"));
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return {
        loginCurrentUser
    }
}