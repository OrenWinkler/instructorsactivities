import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import SelectedItemContainer from "./SelectedItemContainer";
import SideBar from "./Sidebar/SideBar";
import * as InitialContentActions from "../actions/initialContentActions"


const AppContainer = (props) => {


  //component initialize with static content
/*   useEffect(() => {
    console.log("AppContainer init")
    props.dispatch(InitialContentActions.fetchInitialContent())
  }, []); */

  function handleclick() {
    props.dispatch(InitialContentActions.fetchInitialContent())
  }


  return (
    <div className="container my-5">
      <div className="jumbotron py-3 bg-primary">
          <div className = "row">
            <div className ="col-md-9">
                <SelectedItemContainer initialContent={props.initialContent}/>
                <button onClick={handleclick}>ReFetch</button>
            </div>
            <div className ="col-md-3">
                <SideBar/>
            </div>
          </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    initialContent: state.initialContentReducer.contentData.content
  };
};

export default connect(mapStateToProps)(AppContainer);
