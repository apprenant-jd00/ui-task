import React, { Component } from 'react'

export class VisitorCard extends Component {

    render() {
        let { visitorName, imageUrl, visitorType, inTime, outTime } = this.props;
        return (
            <div>
      <div className="my-2 py-3 rounded-2 bg-light">
        <div className="text-center">
          <div className="row align-items-center">
            <div className="col-sm-3 col-md-2 col-lg-1 text-end">
              <img src={imageUrl} className="rounded-circle img-fluid" alt="visitor img" style={{ width: "3rem", height: "3rem" }} />
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2">
              <p className="fw-semibold text-start">{visitorName}</p>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2">
              <p className="">Visitor type: <span className='fw-semibold'>{visitorType}</span></p>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2">
              <p className="">In Time: <span className='fw-semibold'>{inTime}</span></p>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2">
              <p className="">Out Time: <span className='fw-semibold'>{outTime}</span></p>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2 text-end">
              <button className="btn btn-outline-danger px-4">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
}

export default VisitorCard