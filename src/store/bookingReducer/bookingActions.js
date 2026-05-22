import { useDispatch } from "react-redux";
import { fetchMyBookings } from "../../services/booking.api";

export const bookingActions = () => {

    const dispatch = useDispatch();

    const getMyBookings = () => {

        try {
            
            const data = await fetchMyBookings();
            
        } catch (error) {
            
        }
    }
}