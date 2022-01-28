import React, { useState } from 'react'
import DashNav from './DashNav'
import MyCalculations from './MyCalculations'
import AllCalculations from './AllCalculations'
import AllUsers from './AllUsers'
import Settings from './settings/Settings'



const Dashboard = () => {

    const [makeCalculation, setMakeCalculation] = useState(true);
    const [myCalculations, setMyCalculations] = useState(false);
    const [allCalculations, setAllCalculations] = useState(false);
    const [allUser, setAllUsers] = useState(false);

    
    return (
        <div className='dashboard'>
            <div className='user-info-'>
                <h2>Welcome user</h2>
                <button>Logout</button>
            </div>
            <DashNav  cal={setMakeCalculation} mCal={setMyCalculations} aCal={setAllCalculations} aUser={setAllUsers} />
            <div className='user-navigation'>
                {makeCalculation && <Settings />}
                {myCalculations && <MyCalculations />}
                {allCalculations && <AllCalculations />}
                {allUser && <AllUsers />}
            </div>
        </div>
    )
}

export default Dashboard
