import { react } from "react";

const PageForm = () => {
  return (
    <>
      <div className="form-container">
        <div className="left-form-sub-container">
          <div className="form-field-container">
            <div className="field-title">Org Id</div>
            <div className="field-input-field">
              <input placeholder="Enter Org ID" className="input-field" />
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Org Name</div>
            <div className="field-input-field">
              <input placeholder="Enter Org Name" className="input-field" />
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">No. of Integrations</div>
            <div className="field-input-field">
              <input
                placeholder="Select"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/dropdown.png') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Similar Month</div>
            <div className="field-input-field">
              <input
                placeholder="Select"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/dropdown.png') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Integration Months</div>
            <div className="field-input-field">
              <input
                placeholder="Select"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/dropdown.png') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">AI Cycle</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Org ID"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/dropdown.png') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">ERP Date (Agreed)</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Org ID"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/calender.svg') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Active AI Time</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Org ID"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/calender.svg') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container" style={{marginTop:"70px"}}>
            <div
              style={{
                background: `transparent url('img/selector-non-tick.svg') 0% 0% no-repeat padding-box`,
              }}
              className="erp-selector-container"
            >
              <div
                style={{
                  background: `transparent url('img/erp-text.svg') 0% 0% no-repeat padding-box`,
                }}
                className="erpfield-text"
              ></div>
              <div
                style={{
                  background: `transparent url('img/test1.svg') 0% 0% no-repeat padding-box`,
                }}
                className="erp-selector"
              ></div>
            </div>
          </div>
        </div>

        {/* right container */}
        <div className="right-form-sub-container">
          <div className="form-field-container">
            <div className="field-title">City Name</div>
            <div className="field-input-field">
              <input placeholder="Enter City Name" className="input-field" />
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Team Name</div>
            <div className="field-input-field">
              <input placeholder="Enter Team Name" className="input-field" />
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Team Count</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Team Count"
                list="questions"
                className="input-field"
              />
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Go Live Month</div>
            <div className="field-input-field">
              <input
                placeholder="Select"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/dropdown.png') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">TAT for Integration</div>
            <div className="field-input-field">
              <input
                placeholder="Select"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/dropdown.png') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Integration date</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Org ID"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/calender.svg') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">ERP Date (Agreed)</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Org ID"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/calender.svg') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div className="field-title">Active AI Time</div>
            <div className="field-input-field">
              <input
                placeholder="Enter Org ID"
                list="questions"
                className="input-field"
              />
              <div
                className="dropdown-icon"
                style={{
                  background: `transparent url('img/calender.svg') 0% 0% no-repeat padding-box`,
                }}
              ></div>
            </div>
          </div>
          <div className="form-field-container">
            <div
              style={{
                background: `transparent url('img/check-box.svg') 0% 0% no-repeat padding-box`,
              }}
              className="check-box"
            ></div>
          </div>
          <div className="checkbox-text">Monthly Cycles</div>
          <div className="form-field-container">
           <div style={{
                  background: `transparent url('img/selected-box.svg') 0% 0% no-repeat padding-box`,
                }} className="erp-selector-container">
                <div 
                style={{
                  background: `transparent url('img/selected-text.svg') 0% 0% no-repeat padding-box`,
                }}  className="erpfield-text"></div>
                <div style={{
                  background: `transparent url('img/selected-tick.svg') 0% 0% no-repeat padding-box`,
                }} className="erp-selector"></div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageForm;
