import "./navbar.css" 
import IMAGE from '../assets/image/az.jpg'


export default function Navbar() {
  return (
    <div className="nav">
      <div className="navleft">
      <i className="navicon fa-brands fa-facebook"></i>
      <i className="navicon fa-brands fa-twitter"></i>
      <i className="navicon fa-brands fa-pinterest"></i>
      <i className="navicon fa-brands fa-square-instagram"></i>
      </div>
      <div className="navcenter">
        <ul className="navlist">
          <li className="navlistItem">HOME</li>
          <li className="navlistItem">ABOUT</li>
          <li className="navlistItem">CONTACT</li>
          <li className="navlistItem">WRITE</li>
          <li className="navlistItem">LOGIN</li>
        </ul>
      </div>
      <div className="navright">
      <img
      className="navimg"
      src={IMAGE} alt="" />
      <i className=" navsearch fa-brands fa-searchengin"></i>
      </div>
    </div>
  )
}
