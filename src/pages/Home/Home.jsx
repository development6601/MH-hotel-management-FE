import { Link } from "react-router-dom";
import "../Home/Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <section className='section1'>
        <div className="left">
          <div className="textContent">
            <h4>Book Your Stay and Enjoy</h4>
            <h4>Exceptional Comfort</h4>
          </div>

          <div className="btn">
            <Link className='menu' to={"/home"}>Book Now</Link>
            <Link className='menu' to={"/home"}>About Us</Link>

          </div>
        </div>
        <div className="right">
        </div>
      </section>
    </div>
  )
}

export default Home;


// https://in.pinterest.com/pin/83387030598801728/
// https://in.pinterest.com/pin/524247212894069602/
// https://in.pinterest.com/pin/1083537991624453679/