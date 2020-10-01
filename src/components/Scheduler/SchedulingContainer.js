import React from 'react'
import DateFiltering from './Filtering/DateFiltering'
import MainFiltering from './Filtering/MainFiltering'
import SchedulerTable from './SchedulerTable'

const SchedulingContainer = () => {
    return (
        <div className="container my-5">
          <div className="jumbotron py-3 bg-secondary">
              <div className = "row">
              <div className ="col-md-6">
                    <MainFiltering/>
                </div>
                <div className ="col-md-6">
                    <DateFiltering/>
                </div>
              </div>
              <div className = "row">
                <div className ="col-md-12">
                    <SchedulerTable/>
                </div>
              </div>
          </div>
        </div>
      )
}

export default SchedulingContainer;
