import React from "react";
import SideBarMenu from "./SideBarMenu";
import SideBarTitle from "./SideBarTitle";

const SideBar = (props) => {
  return (
    <div className="container my-5">
      <div className="jumbotron py-3 bg-secondary">
        <div className="row">
          <div className="col-md-12">
            <SideBarTitle sideMenuCaption={props.initialContent.sideMenuCaption}/>
          </div>
          <div className="col-md-12">
            <SideBarMenu navigationMenu={props.initialContent.navigationMenu}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
