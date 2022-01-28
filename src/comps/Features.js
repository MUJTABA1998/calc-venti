import React from 'react'
import login from './asset/login.png'
import inputData from './asset/input.jpg'
import save from './asset/save.png'
import { motion } from 'framer-motion'


const Features = () => {
    return (
        <div className='features'>
            <h1><span>Features</span> of ventilation calculator</h1>
            <div className='feature-content'>
                <div className='feature f-1'>
                    <div className='f-content f-1-content'>
                        <h1>login to get access</h1>
                        <p>login or create account and get access to your data processing gadget</p>
                    </div>
                    <img src={login} alt='get access'/>
                </div>
                <div className='feature f-2'>
                    <img src={inputData} alt='get access'/>
                    <div className='f-content f-2-content'>
                        <h1>input data and make calculations</h1>
                        <p>input data of following fields according to instructions after it make calculation</p>
                    </div>
                </div>
                <motion.div className='feature f-3'>
                    <div className='f-content f-3-content'>
                        <h1>save to your device </h1>
                        <p>save calculated results to your pc or get via your account</p>
                    </div>
                    <img src={save} alt='get access'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Features;
