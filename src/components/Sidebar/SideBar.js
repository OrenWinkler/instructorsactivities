import React from "react";
import SideBarMenu from "./SideBarMenu";
import SideBarTitle from "./SideBarTitle";

const SideBar = () => {
  return (
    <div className="container my-5">
      <div className="jumbotron py-3 bg-secondary">
        <div className="row">
          <div className="col-md-12">
            <SideBarTitle />
          </div>
          <div className="col-md-12">
            <SideBarMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
