import React, { useState } from 'react';
import { connect } from "react-redux";

const SideBarTitle = (props) => {

    return (
      
        <div className="container my-5">
          <div className="jumbotron py-3 .bg-dark">
              <div className = "row">
              <div className ="col-md-12">SideBarTitle component {props.initialContent.sideMenuCaption.title}</div>
              </div>
          </div>
        </div>
      )
}

export default SideBarTitle;

