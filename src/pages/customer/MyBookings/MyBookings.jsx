import React, { useEffect, useState } from 'react'
import '../MyBookings/MyBookings.scss'
import { useSelector } from 'react-redux';
import BookingCard from './BookingCard';
import { bookingActions } from '../../../store/bookingReducer/bookingActions';

const MyBookings = () => {

  const { userBookings, loading } = useSelector(state => state.bookings);

  const { myBookings } = bookingActions();
  
  useEffect(() => {
    myBookings();
    console.log(userBookings);
    
  }, []);

  const [BookingsToShow, setBookingsToShow] = useState(userBookings);

  const handlePendingBookings = () => {
    setBookingsToShow(userBookings.filter(booking => {
      return booking.status === "PENDING";
    }));
  }
  const handleConformedBookings = () => {
    setBookingsToShow(userBookings.filter(booking => {
      return booking.status === "CONFORMED";
    }));
  }
  const handlePreviousBookings = () => {
    setBookingsToShow(userBookings.filter(booking => {
      return booking.status !== "PENDING" || booking.status !== "CONFIRMED";
    }));
  }

  return (
    <div className='MyBookings'>
      <h4>BOOKING LIST</h4>
      <div className="content">
        <div className="buttons">
          <button className='btn' onClick={handlePendingBookings}>PENDING</button>
          <button className='btn' onClick={handleConformedBookings}>CONFORMED</button>
          <button className='btn' onClick={handlePreviousBookings}>PREVIOUS</button>
        </div>
        <div className="bookingCards">
          {BookingsToShow ? BookingsToShow.map((booking) => {
            return <BookingCard key={booking._id} booking={booking} />
          }) : <div>Their Is No Bookings</div>}
        </div>
      </div>
    </div>
  )
}

export default MyBookings