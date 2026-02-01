import "./sidebar.css"
import IMAGE from '../assets/image/a.png'

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img  
                    src={IMAGE}
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Eligendi, aspernatur
                    eaque consectetur commodi laborum modi
                    aliquid eos. Sint doloribus ducimus tenetur
                    facere itaque magni expedita. Magnam consequatur id
                    asperiores voluptatibus.
                </p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIE</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistItem">Life</li>
                    <li className="sidebarlistItem">Music</li>
                    <li className="sidebarlistItem">Sport</li>
                    <li className="sidebarlistItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarsocial">
                    <i className="sidebaricon fa-brands fa-facebook"></i>
                    <i className="sidebaricon fa-brands fa-twitter"></i>
                    <i className="sidebaricon fa-brands fa-pinterest"></i>
                    <i className="sidebaricon fa-brands fa-square-instagram"></i>
                </div>
            </div>

        </div>
    )
}
