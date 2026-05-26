import { useSelector } from 'react-redux'
import './Profile.scss'
import { useState } from 'react';
const Profile = () => {

  const currentUser = useSelector((state) => state.auth.user);
  const userBookings = useSelector((state) => state.bookings.userBookings);

  console.log(currentUser);
  console.log(userBookings);

  const userRegisterAt = new Date(currentUser.createdAt);

  let completedStay = 0;
  let cancelleddStay = 0;
  let completedNights = 0;
  userBookings.reduce((accumulator, element, idx) => {
    if (element.status === "COMPLETED") {
      completedStay++;
      const totalNights = Math.ceil((new Date(element.checkOutDate) - new Date(element.checkInDate)) / (1000 * 60 * 60 * 24));
      completedNights += totalNights;
    }
    else if (element.status === "CANCELLED")
      cancelleddStay--;
  }, 0);

  const [activeComponent, setActiveComponent] = useState("PERSONALINFO");

  return (
    <div className="profile">
      <div className="sideBar">
        <div className="userDetailPart">
          <div className='UserImage'>
            <img src={`http://localhost:3000${currentUser.ProfilePic}`} alt="" />
          </div>
          <div className="UserDetails">
            <h4>{currentUser.name}</h4>
            <p>{currentUser.email}</p>
          </div>
        </div>
        <div className='line'></div>
        <div className='accountPart'>
          <p>ACCOUNT</p>
          <div className="menus">
            <div className='menu' onClick={(() => { setActiveComponent('PERSONALINFO') })}>
              <i className="ri-user-3-fill icon"></i>
              <p>Personal Info</p>
            </div>
            <div className='menu' onClick={(() => { setActiveComponent('SECURITY') })}>
              <i className="ri-git-repository-private-line icon"></i>
              <p>Security</p>
            </div>
            <div className='menu logout'>
              <i className="ri-logout-box-r-line icon"></i>
              <p>Logout</p>
            </div>
          </div>
        </div>

      </div>
      <div className="mainContent">
        <div className="userDashBoard">
          <div className="themeBackground"></div>
          <div className="profilePic">
            <div className='UserImage'>
              <img src={`http://localhost:3000${currentUser.ProfilePic}`} alt="" />
            </div>
            <button className='editProfileButton' type='button'>Edit Profile</button>
          </div>
          <div className="userContent">
            <div className="UserDetails">
              <h4>{currentUser.name}</h4>
              <p>{currentUser.email}</p>
            </div>
            <div className="tags">
              <div className='customerTag'>
                <i class="iconTag ri-user-line"></i>
                <p>CUSTOMER</p>
              </div>
              <div className='membership'>
                <p>MEMBER SINCE {userRegisterAt.toLocaleString('default', { month: 'short' })} {userRegisterAt.getDate()}</p>
              </div>
            </div>
            <div className="components">
              <div className="singleComp">
                <p>TOTAL BOOKINGS</p>
                <div className="content">
                  <p className='count'>{userBookings.length}</p>
                  <p className='countDetail'>All Time</p>
                </div>
              </div>
              <div className="singleComp">
                <p>COMPLETED STAY</p>
                <div className="content">
                  <p className='count'>{completedNights}</p>
                  <p className='countDetail'>Nights Enjoyed</p>
                </div>
              </div>
              <div className="singleComp">
                <p>COMPLETED</p>
                <div className="content">
                  <p className='count'>{completedStay}</p>
                  <p className='countDetail'>Bookings</p>
                </div>
              </div>
              <div className="singleComp">
                <p>CANCELLED</p>
                <div className="content">
                  <p className='count'>{cancelleddStay}</p>
                  <p className='countDetail'>Bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <p>Personal Info</p>
          <p>Security</p>
        </div>
      </div>
    </div>
  )
}

export default Profile

// https://www.figma.com/community/file/1592445546300627840/hotelify-hotel-management-admin-dashboard-ui-design-figma
// https://drive.google.com/drive/folders/17W7dAmVI7DvmfwQbSI-7tv3OHU50bZvu?usp=sharing