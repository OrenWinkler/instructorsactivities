import React, { useState } from 'react';
import { connect } from "react-redux";

const SideBarTitle = (props) => {

  if (props.isInitialContentDataLoading) {
    return <>loading...</>;
  }

  if (props.initialContentDataLoadingError != "") {
    return <>Error: {props.initialContentDataLoadingError}</>;
  }

  if (!props.isInitialized) {
    return <></>;
  }

    return (
      
        <div className="container my-5">
          <div className="jumbotron py-3 .bg-dark">
              <div className = "row">
              <div className ="col-md-12">SideBarTitle component {props.sideMenuCaption.title}</div>
              </div>
          </div>
        </div>
      )
}

const mapStateToProps = (state) => {
  return {
    isInitialContentDataLoading: state.initialContentReducer.loading,
    initialContentDataLoadingError: state.initialContentReducer.error,
    isInitialized: state.initialContentReducer.initialized,
    sideMenuCaption: state.initialContentReducer.contentData.content.sideMenuCaption
  };
};

export default connect(mapStateToProps)(SideBarTitle);

