import React from 'react'
import VisitorCard from './VisitorCard'

// uses visitor cards to display a list of users
export default function VisitorList() {
    return (
        <div className='text-center'>
            <div className="mx-auto">
                <VisitorCard visitorName="Ramesh" visitorType="Organisation" inTime=" 11:29 pm" outTime="11:29 pm" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <VisitorCard visitorName="Ramesh" visitorType="Organisation" inTime=" 11:29 pm" outTime="11:29 pm" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            </div>

        </div>
    )
}
