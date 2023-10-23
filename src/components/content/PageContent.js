import { react } from "react";
import PageForm from "./PageForm";

const PageContent = () => {
  return (
    <>
      <div className="page-body-container">
        <div className="company-detail-container">
            <div className="company-logo" style={{ background: `transparent url('/oracle.png') 0% 0% no-repeat padding-box` }}>
            <div className="change-option">Change</div>
            </div>
            <div className="company-detail">
                <div className="organisation-logo">
                Organisation Logo
                </div>
                <div  style={{ background: `transparent url('img/company-text.png') 0% 0% no-repeat padding-box` }} className="organisation-about">

                </div>
                <div className="error-message">
                Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1MB.
                </div>
            </div>
        </div>
        <PageForm/>
        
      </div>
    </>
  );
};

export default PageContent;
