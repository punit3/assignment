import { react } from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src="/logo.png"></img>
        </div>
        <div className="header-seperator-line"></div>

        <div className="time-stamp">Pay Cycle: 31-May-2021 to 31-June-2021</div>
        <div className="company-name">Amazon India Pvt Ltd</div>
        <div className="dropdown-down-arrow" style={{
                  background: `transparent url('img/arrow-dropdown.svg') 0% 0% no-repeat padding-box`,
                }}></div>
        <div className="help-icon">
          <img src="/img/help-icon.svg"></img>
        </div>
        <div className="support">SUPPORT</div>
        <div className="notification-red"></div>
        <div className="notification-icon">
          <img src="/img/notifications-icon.svg"></img>
        </div>
        <div className="notifications-text">NOTIFICATIONS</div>
        <div className="login-avatar">
          <img src="/img/login-avatar.svg"></img>
          <img className="avatar-name" src="/img/R.svg"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
