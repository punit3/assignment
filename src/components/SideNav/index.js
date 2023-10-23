import { react } from "react";
import "./sidenav.css";
import SubNav from "./SubNav";

const SideNav = () => {
  return (
    <>
      <div className="sidenav-container">
        <div className="menu-container">
          <div
            className="dashboard-icon"
            style={{
              background: `transparent url('/img/dashboard.png') 0% 0% no-repeat padding-box`,
            }}
          ></div>
          <div className="dashboard-menu">DashBoard</div>
        </div>
        <div className="menu-container">
          <div
            className="work-history-icon"
            style={{
              background: `transparent url('/img/work-history.png') 0% 0% no-repeat padding-box`,
            }}
          ></div>
          <div className="work-history-menu">Monthly Process</div>
        </div>
        <div className="menu-container active-menu ">
          <div className="active-line"></div>
          <div
            className="settings-icon"
            style={{
              background: `transparent url('/img/settings.png') 0% 0% no-repeat padding-box`,
            }}
          ></div>
          <div className="settings-menu">Super Configura..</div>
        </div>
        <div className="menu-container">
          <div
            className="charts-icon"
            style={{
              background: `transparent url('/img/charts.png') 0% 0% no-repeat padding-box`,
            }}
          ></div>
          <div className="charts-menu">Master Reports</div>
        </div>
        <div className="menu-container">
          <div
            className="more-icon"
            style={{
              background: `transparent url('/img/more.png') 0% 0% no-repeat padding-box`,
            }}
          ></div>
          <div className="more-menu">More</div>
        </div>
      </div>
      <SubNav />
      <img className="line" src="/img/Line.png"></img>
    </>
  );
};

export default SideNav;
