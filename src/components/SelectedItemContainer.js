import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import SchedulingContainer from "./Scheduler/SchedulingContainer";

function SelectedItemContainer(props) {

  if (props.selectedMenuItem == 1) {
    return <>load messages componnent</>;
  } 
  else if (props.selectedMenuItem == 2) {
      return (
        <>
          <SchedulingContainer staticContent={props.staticContent} />
        </>
      );
  } 
  else if (props.selectedMenuItem == 3) {
      return <>load organizations componnent</>;
  } 
  else {
      return <>no component loaded</>;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMenuItem: state.initialContentReducer.contentData.content.selectedmenuItem
  };
};

export default connect(mapStateToProps)(SelectedItemContainer);

