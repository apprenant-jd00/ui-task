import React, { Component } from 'react'
import "./TaskCard.css"

export class TaskCard extends Component {

    render() {
        let { title, imageUrl, newPage } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <div className="image-container">
                                <img src={imageUrl} className="img-fluid rounded-3" alt="" />
                                <a href={newPage} className="btn btn-circle border border-white border-3 overlay-button btn-lg"><img width="30" height="30" src="https://img.icons8.com/ios/50/F1F0F1/forward--v1.png" alt="forward--v1" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="fs-6 fw-bold pt-4 pb-2">{title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskCard