import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-4 ps-3" href="/">Welcome Back</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item mx-4">
                            <div class="bg-light py-1 px-2 rounded-2">
                                DATE: <span className='fw-semibold'>01/12/23</span>
                                {/* code can be added later to fetch and display system date */}
                            </div>
                        </li>
                        <li className="nav-item mx-4">
                            <div class="bg-light py-1 px-2  rounded-2">
                                TIME: <span className='fw-semibold'>11 PM</span>
                                {/* code can be added later to fetch and display system time */}
                            </div>
                        </li>
                        <li className="nav-item mx-4">
                            <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
                        </li>
                        <li className="nav-item mx-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EN
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Fr</a></li>
                                <li><a className="dropdown-item" href="/">Hi</a></li>
                                <li><a className="dropdown-item" href="/">Es</a></li>

                            </ul>
                        </li>
                        <li className="nav-item pe-3">
                            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-circle" alt="visitor pic" style={{ width: "2rem", height: "2rem" }} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
