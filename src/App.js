import React from "react";
import Profile from './components/profile/profile';
import NavPanel from './components/nav-panel/nav-panel';
import TopBox from "./components/top-box/top-box";
import Breadcrumb from './components/breadcrumb/breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomAccordian from './components/accordian/accordian';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <p className="mb-0 mt-4">Collection Leads - Customer Id: 300341302</p>
          <hr className="custom-hr" />
        </div>
        <div className="col-sm-3">
          <Profile />
          <NavPanel />
        </div>
        <div className="col-sm-9">
          <div className="row">
            <div className="col-sm-6">
              <TopBox title="Recovery Payment Plan" details="Active" colorVarient="color-varient1"
                icon={<FontAwesomeIcon className="icon" icon={['fas', 'flag']} fixedWidth />} />
            </div>
            <div className="col-sm-6">
              <TopBox title="Total Outstanding As Of Today" details="LKR 41,250.00" colorVarient="color-varient2"
                icon={<FontAwesomeIcon className="icon" icon={['fas', 'lightbulb']} fixedWidth />} />
            </div>
            <div className="col-sm-12">
              <p className="mt-4 mb-0">Current Risk Ownership</p>
              <Breadcrumb />
            </div>

            <div className="col-sm-12 d-flex justify-content-end mb-5">
              <button type="button" className="btn btn-primary ml-2 custom-btn">Create Note</button>
              <button type="button" className="btn btn-primary ml-2 custom-btn">Create Activity</button>
              <button type="button" className="btn btn-primary ml-2 custom-btn">Re-Assign</button>
              <button type="button" className="btn btn-primary ml-2 custom-btn">Update Recovery</button>
            </div>

            <div className="col-sm-12">
              <CustomAccordian />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
