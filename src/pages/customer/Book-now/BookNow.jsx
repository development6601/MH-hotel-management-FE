import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "../Book-now/BookNow.scss";
import { DatePicker, Space, theme } from 'antd';
import { roomActions } from "../../../store/roomReducer/roomActions";
import { useSelector } from "react-redux";
import { HiOutlineHome } from "react-icons/hi";
import { MdBed } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaBeer } from 'react-icons/fa';
import { IoWifiOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { PiDesk } from "react-icons/pi";
import { MdOutlineBathroom } from "react-icons/md";


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
        <div className="textContent">
          <h4>BOOK</h4>
          <h2>Choose Your stay</h2>
        </div>


        <div className="inputs">
          <Space size={12} vertical>
            {/* <DatePicker cellRender={cellRender} /> */}
            <DatePicker.RangePicker className="DatePicker" disabledDate={disabledDate} cellRender={cellRender} onChange={handleDateChange} placeholder={["Check-in Date", "Check-out Date"]} />
          </Space>

          <input className="guestNumber" type="number" placeholder="Number of Guest" onChange={(e) => { setGuestCount(Number(e.target.value)) }} />
          <button className="searchButton" type="submit" onClick={handleSubmit} ><i class="ri-search-line"></i>Search</button>
        </div>
      </div>
      {rooms ? <div className="rooms">

        <div className="room">
          <div className="content">
            <div className="imgOrBackground"><div className="available">Available</div></div>
            <div className="textContent">
              <div className="top">
                <h4>SINGLE</h4>
                <div className="type">
                  <div className="segment"><HiOutlineHome className="icon" />Budget</div>
                  <div className="badType"><MdBed />1</div>
                  <div className="person"><IoMdPerson />1</div>
                </div>
              </div>
              <div className="middle">
                <div className="facilitieas"><div className="firstIcon"><IoWifiOutline />Free WiFi</div><div className="secoendIcon"><MdLiveTv />TV</div></div>
                <div className="facilitieas"><div className="firstIcon"><PiDesk />Work Desk</div><div className="secoendIcon"><MdOutlineBathroom />Attached Bathroom</div></div>
              </div>
              <div className="bottom"><p>Spacious upgraded room with premium facilities and comfort.</p></div>
            </div>
          </div>
          <div className="price">
            <div className="amountAndButton">
              <div className="amount"><h2>₹1200</h2><p>(for per night)</p></div>
              <button type="button" className="select">Select</button>
            </div>
          </div>
        </div>
        <div className="room">
          <div className="content">
            <div className="imgOrBackground"><div className="available">Available</div></div>
            <div className="textContent">
              <div className="top">
                <h4>SINGLE</h4>
                <div className="type">
                  <div className="segment"><HiOutlineHome className="icon" />Budget</div>
                  <div className="badType"><MdBed />1</div>
                  <div className="person"><IoMdPerson />1</div>
                </div>
              </div>
              <div className="middle">
                <div className="facilitieas"><div className="firstIcon"><IoWifiOutline />Free WiFi</div><div className="secoendIcon"><MdLiveTv />TV</div></div>
                <div className="facilitieas"><div className="firstIcon"><PiDesk />Work Desk</div><div className="secoendIcon"><MdOutlineBathroom />Attached Bathroom</div></div>
              </div>
              <div className="bottom"><p>Spacious upgraded room with premium facilities and comfort.</p></div>
            </div>
          </div>
          <div className="price">
            <div className="amountAndButton">
              <div className="amount"><h2>₹1200</h2><p>(for per night)</p></div>
              <button type="button" className="select">Select</button>
            </div>
          </div>
        </div>

      </div> : <div>No Available Room</div>}
    </div>
  )
}

export default BookNow