import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "../Book-now/BookNow.scss";
import { DatePicker, Space, theme } from 'antd';
import { roomActions } from "../../../store/roomReducer/roomActions";
import { useSelector } from "react-redux";

const { RangePicker } = DatePicker;

const BookNow = () => {

  const { availableRooms } = roomActions();

  const rooms = useSelector(state => state.room.rooms);

  useEffect(() => {
    console.log(rooms);
    
  }, [rooms])


  const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const cellRender = (current, info) => {
    if (info.type !== 'date') {
      return info.originNode;
    }
    if (typeof current === 'number' || typeof current === 'string') {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div className="ant-picker-cell-inner" >
        {current.date()}
      </div>
    );
  };

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(null);

  const handleDateChange = (values, dateStrings) => {
    setCheckInDate(dateStrings[0]);
    setCheckOutDate(dateStrings[1]);
  }

  const handleSubmit = async () => {
    await availableRooms({ CheckInDate: checkInDate, CheckOutDate: checkOutDate, guestCount: Number(guestCount) });
  }


  return (
    <div className='BookNow'>
      {/* <div className="line1"></div> */}
      {/* <div className="line2"></div> */}
      <div className="inputContent">
        <h4>BOOK</h4>
        <h2>Choose Your stay</h2>

        <div className="inputs">

          {/* <ConfigProvider theme={{ token: { colorPrimary: "#2563eb", borderRadius: 12, }, }}>
            <div className="booking-date-wrapper">
              <RangePicker
                className="booking-range-picker"
                cellRender={cellRender}
                disabledDate={disabledDate}
                placeholder={["Check-in Date", "Check-out Date"]}
                format="DD MMM YYYY"
              />
            </div>
          </ConfigProvider> */}

          <Space size={12} vertical>
            {/* <DatePicker cellRender={cellRender} /> */}
            <DatePicker.RangePicker disabledDate={disabledDate} cellRender={cellRender} onChange={handleDateChange} placeholder={["Check-in Date", "Check-out Date"]} />
          </Space>

          <input type="text" placeholder="Number of Guest" onChange={(e) => {setGuestCount(Number(e.target.value))}}/>

          <button type="submit" onClick={handleSubmit} >Search</button>

        </div>
      </div>
    </div>
  )
}



export default BookNow




// import React from "react";
// import { DatePicker, ConfigProvider } from "antd";
// import dayjs from "dayjs";
// import "./BookingDatePicker.scss";

// const { RangePicker } = DatePicker;

// const BookingDatePicker = () => {

//   // Disable old dates
//   const disabledDate = (current) => {
//     return current && current < dayjs().startOf("day");
//   };

//   // Custom calendar cell
//   const cellRender = (current, info) => {
//     if (info.type !== "date") {
//       return info.originNode;
//     }

//     const isToday = current.isSame(dayjs(), "day");

//     return (
//       <div
//         className={`custom-date-cell ${isToday ? "today-cell" : ""}`}
//       >
//         {current.date()}
//       </div>
//     );
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: "#2563eb",
//           borderRadius: 12,
//         },
//       }}
//     >
//       <div className="booking-date-wrapper">
//         <RangePicker
//           className="booking-range-picker"
//           cellRender={cellRender}
//           disabledDate={disabledDate}
//           placeholder={["Check-in Date", "Check-out Date"]}
//           format="DD MMM YYYY"
//         />
//       </div>
//     </ConfigProvider>
//   );
// };

// export default BookingDatePicker;




// .booking-date-wrapper {
//   width: 100%;

//   .booking-range-picker {
//     width: 100%;
//     height: 55px;
//     border-radius: 14px;
//     padding: 0 14px;
//     font-size: 15px;
//     border: 1px solid #dcdcdc;
//     transition: all 0.3s ease;

//     &:hover {
//       border-color: #2563eb;
//     }

//     &.ant-picker-focused {
//       border-color: #2563eb;
//       box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
//     }

//     input {
//       font-size: 15px;
//       font-weight: 500;
//     }
//   }
// }

// // Calendar Cell
// .custom-date-cell {
//   width: 32px;
//   height: 32px;
//   line-height: 32px;
//   margin: auto;
//   border-radius: 50%;
//   transition: all 0.2s ease;
// }

// // Today Design
// .today-cell {
//   border: 2px solid #2563eb;
//   font-weight: bold;
// }

// // Selected Dates
// .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
//   background: #2563eb !important;
//   border-radius: 50% !important;
// }

// // Hover Effect
// .ant-picker-cell:hover .custom-date-cell {
//   background: rgba(37, 99, 235, 0.1);
// }

// const bookedDates = [
//   "2026-05-25",
//   "2026-05-26",
// ];

// const disabledDate = (current) => {
//   return (
//     current < dayjs().startOf("day") ||
//     bookedDates.includes(current.format("YYYY-MM-DD"))
//   );
// };