import "./header.css"
import IMAGE from '../assets/image/bgaz.png'

function Header() {
  return (
    <div className="header">
       <div className="headerTitle">
           <span className="headerTitlelg">My Blog</span>
           <span className="headerTitlesm">react & nodejs</span>
       </div>
       <img
       className="headerimg"
        src={IMAGE} alt="" />
    </div>
  )
}

export default Header
