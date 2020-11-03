import React from "react";
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <p className="mb-0 mt-4">Collection Leads - Customer Id: 300341302</p>
          <hr className="custom-hr" />
          <div className="col-sm-3">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
