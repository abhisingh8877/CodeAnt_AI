import React, { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { BsCodeSlash } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { Link,Routes,Route ,BrowserRouter} from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu ,RxCross1} from "react-icons/rx";
import "../Styles/Main.css";
import logo from '../Styles/logo.png'


import Repository from "./Repository";


const Main = () => {
  const [activeTab, setActiveTab] = useState("Repositories"); // Set default active tab
  const [isClicked,setClicked]=useState(false);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="main_component_page">
    <div className="left_side">
      <div className="heading_responsive">
        <div className="heading_main">
          <img src={logo} alt="CodeAnt AI long"/>
          <p>CodeAnt AI</p>
        </div>
        <div className="nav_berger">
          <button onClick={()=>setClicked(prev=>!prev)}>{!isClicked?<RxHamburgerMenu />:<RxCross1/>}</button>
        </div>
      </div>
      
        <div className={`menu_item_value ${isClicked?"show_menu":""}`}>
        <div className="user_name">
          <p>UtkarshDhairyaPa..</p>
          <div>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="nav_menu_item">
          {/* Top Navigation */}
          <div className="top_nav">
            <ul
              className={`left_bar_Link ${
                activeTab === "Repositories" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Repositories")}
            >
              <div>
                <TiHomeOutline />
              </div>
              <Link to="/Main/Repository" style={{ textDecoration: "none"}} className="link_url_route">
                Repositories
              </Link>
            </ul>
            <ul
              className={`left_bar_Link ${
                activeTab === "AI Code Review" ? "active" : ""
              }`}
              onClick={() => handleTabClick("AI Code Review")}
            >
              <div>
                <BsCodeSlash />
              </div>
              <Link to="#" style={{ textDecoration: "none" }} className="link_url_route">
                AI Code Review
              </Link>
            </ul>
            <ul
              className={`left_bar_Link ${
                activeTab === "Cloud Security" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Cloud Security")}
            >
              <div>
                <CiCloudOn />
              </div>
              <Link to="#" style={{ textDecoration: "none" }} className="link_url_route">
                Cloud Security
              </Link>
            </ul>
            <ul
              className={`left_bar_Link ${
                activeTab === "How to Use" ? "active" : ""
              }`}
              onClick={() => handleTabClick("How to Use")}
            >
              <div>
                <CgFileDocument />
              </div>
              <Link to="#" style={{ textDecoration: "none" }} className="link_url_route">
                How to Use
              </Link>
            </ul>
            <ul
              className={`left_bar_Link ${
                activeTab === "Setting" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Setting")}
            >
              <div>
                <IoSettingsOutline />
              </div>
              <Link to="#" style={{ textDecoration: "none" }} className="link_url_route">
                Setting
              </Link>
            </ul>
          </div>

          {/* Bottom Navigation */}
          <div className="bottom_nav">
            <ul
              className={`left_bar_Link ${
                activeTab === "Support" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Support")}
            >
              <div>
                <IoCallOutline />
              </div>
              <Link to="#" style={{ textDecoration: "none" }} className="link_url_route">
                Support
              </Link>
            </ul>
            <ul className="left_bar_Link Logout">
              <div>
                <IoIosLogOut />
              </div>
              <Link to='/' style={{ textDecoration: "none" }} className="link_url_route">
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div className="right_Main_component">
   <Routes>
   <Route path="Repository" element={<Repository  isClicked={isClicked}/>} />
   <Route path="AI_Code_Review" element={<div>AI Code Review Page</div>} />
</Routes>
    </div>
    </div>


  );
};

export default Main;
