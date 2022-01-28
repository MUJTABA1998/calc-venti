import React from 'react'
import { Link } from 'react-router-dom'
import {FaLongArrowAltRight} from 'react-icons/fa'
import data2 from './asset/data2.png'
import {motion} from 'framer-motion'


const Main = () => {
    return (
        <div className='main-section'>
            <div className='main-content'>
                <div className='content-1'>
                    <h4>calculations are not easy</h4>
                    <h2>let's make it easy.</h2>
                    <Link to="">get start <span><FaLongArrowAltRight /></span></Link>
                </div>
                <motion.div className='content-2'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 2}}
                >
                    <img src={data2} alt='data'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Main
