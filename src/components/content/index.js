import { react } from "react";
import ContentHeader from "./ContentHeader";
import "./content.css";
import PageContent from "./PageContent";

const Content = () => {
  return (
    <>
      <div className="content-main-container">
        <ContentHeader />
        <div className="content-body-header">
          <div className="body-header-left">
            <div className="order-detail">Details</div>
            <div className="about-page">
              Page to configure all the company details
            </div>
          </div>
          <div className="body-header-right">
            <div className="upload-btn">
              <img className="upload-icon" src="/img/upload-icon.png"></img>
              <div className="upload-btn-text">Bulk Upload</div>
            </div>
            <div className="save-btn">
              <img className="save-icon" src="/img/save-btn.png"></img>

              <div className="save-btn-text">Save</div>
            </div>
            <div className="group-btn">
              <img className="save-icon" src="/img/group-btn.png"></img>
            </div>
          </div>
        </div>
        <div className="body-header-seperator"></div>
        <PageContent />
        <div className="body-seperator"></div>
        <div className="page-bottom-dropdown-container">
          <div>
            <div className="dropdown-option-title">Lock Setup</div>
            <div className="dropdown-option-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div
            className="dropdown-down"
            style={{
              background: `transparent url('img/dropdown-down.svg') 0% 0% no-repeat padding-box`,
            }}
          ></div>
        </div>
        <div style={{ margin: "0" }} className="body-seperator"></div>
        <div className="page-bottom-dropdown-container">
          <div>
            <div className="dropdown-option-title">Integration Info</div>
            <div className="dropdown-option-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div
            className="dropdown-down"
            style={{
              background: `transparent url('img/dropdown-down.svg') 0% 0% no-repeat padding-box`,
            }}
          ></div>
        </div>
        <div style={{ margin: "0" }} className="body-seperator"></div>
        <div className="page-bottom-dropdown-container">
          <div>
            <div className="dropdown-option-title">AI Info</div>
            <div className="dropdown-option-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div
            className="dropdown-down"
            style={{
              background: `transparent url('img/dropdown-down.svg') 0% 0% no-repeat padding-box`,
            }}
          ></div>
        </div>
        <div className="page-bottom-dropdown-container">
            <div  style={{
              background: `transparent url('img/cloud.svg') 0% 0% no-repeat padding-box`,marginTop:"50px"
            }} className="cloud-img-container">

            </div>
          </div>
      </div>
    </>
  );
};

export default Content;
