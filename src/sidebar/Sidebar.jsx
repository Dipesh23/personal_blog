import "./sidebar.css"
import boy from "../boy.jpeg"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src={boy} alt="boy" />
           
            <p><b>Hello.. </b> I'm Dipesh Saxena. I'm a Web & Android Developer</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                
                <li className="sidebarListItem">Music</li>
                
                <li className="sidebarListItem">Style</li>
                
                <li className="sidebarListItem">Sports</li>
                
                <li className="sidebarListItem">Cinema</li>
                
                <li className="sidebarListItem">Tech</li>
            </ul>
            
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
      
    </div>
  )
}
