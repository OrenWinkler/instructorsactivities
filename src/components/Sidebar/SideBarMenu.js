import React from "react";

const SideBarMenu = (props) => {
  return (
    <div className="container my-5">
      <div className="jumbotron py-3 .bg-dark">
        <div className="row">
          <div className="col-md-12">
            {props.navigationMenu.map((menuItem) => (
              <li>{menuItem.text}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
