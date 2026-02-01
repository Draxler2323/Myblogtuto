import "./header.css"
import IMAGE from '../assets/image/hd1.jpg'

function Header() {
  return (
    <div className="header">
       <div className="headerTitle">
           <span className="headerTitlelg">My Blog</span>
           <span className="headerTitlesm">react & nodejs</span>
           <button className="headerTitleA">Tech_AzedPro.com</button>
       </div>
       <img
       className="headerimg"
        src={IMAGE}  alt="" />
    </div>
  )
}

export default Header
