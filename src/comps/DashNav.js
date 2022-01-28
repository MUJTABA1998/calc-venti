import React from 'react'

const DashNav = ({ cal, mCal, aCal, aUser }) => {
    return (
        <div className='dash-nav'>
            <ul>
                <li
                    onClick={() => {
                        cal(true);
                        mCal(false);
                        aCal(false);
                        aUser(false);
                    }}
                >Make calculation</li>
                <li
                    onClick={() => {
                        cal(false);
                        mCal(true);
                        aCal(false);
                        aUser(false);
                    }}
                >My calculations</li>
                <li
                    onClick={() => {
                        cal(false);
                        mCal(false);
                        aCal(true);
                        aUser(false);
                    }}
                >All calculations</li>
                <li
                    onClick={() => {
                        cal(false);
                        mCal(false);
                        aCal(false);
                        aUser(true);
                    }}
                >All users</li>
            </ul>
        </div>
    )
}

export default DashNav
