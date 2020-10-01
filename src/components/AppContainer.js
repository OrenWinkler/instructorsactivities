import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import SelectedItemContainer from "./SelectedItemContainer";
import SideBar from "./Sidebar/SideBar";

const AppContainer = (props) => {
  //component initialize with static content
/*   useEffect(() => {
    console.log("AppContainer init")
  }, []); */

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
      <div className="jumbotron py-3 bg-primary">
          <div className = "row">
            <div className ="col-md-9">
                <SelectedItemContainer initialContent={props.initialContent}/>
            </div>
            <div className ="col-md-3">
                <SideBar initialContent={props.initialContent}/>
            </div>
          </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isInitialContentDataLoading: state.initialContentReducer.loading,
    initialContentDataLoadingError: state.initialContentReducer.error,
    isInitialized: state.initialContentReducer.initialized,
    initialContent: state.initialContentReducer.contentData.content
  };
};

export default connect(mapStateToProps)(AppContainer);
