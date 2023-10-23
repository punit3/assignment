import { react } from "react";
import "./sidenav.css";

const SubNav = () => {
  return (
    <>
      <div className="sidenav-submenu">
        <div className="submenu-item-container">
          <div className="sub-item">Services Offered</div>
        </div>
        <div className="submenu-item-container active">
          <div className="sub-item">Org Setup</div>
        </div>
        <div className="subnav-bottom-seperator"></div>
        <div className="subnav-close-btn" style={{ background: `transparent url('img/nav-close-btn.svg') 0% 0% no-repeat padding-box` }}></div>
      </div>
    </>
  );
};

export default SubNav;
