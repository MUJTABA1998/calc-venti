import React, { useState } from 'react'

const CalculationForm = () => {


    




    return (
        <div className='cal-form'>
            <div className='cal-forms'>
                <div className='form-1'>
                    <h3>Inputs</h3>
                    <label>
                        <h6>Friction Coefficient</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Leakage</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Site Height [ M ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Temperature [ C ] </h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Air Volume At Front [ CBM/S ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Pressure At Duct End [ PA ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Duct Length [ M ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Duct Diameter [ M ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Ventilator Efficiency</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Zeta Loss Factor</h6>
                        <input type="number"/>
                    </label>
                </div>
                <div className='form-2'>
                <h3>Outputs</h3>
                    <label>
                        <h6>Air Density ( KGM-3 )</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>L/D Factor</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Pressure Factor {``} </h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Loss Factor </h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Ventilator Volume Supply [ CBM/S ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Stat. Pressure Loss [ PA ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Dyn. Pressure Loss [ PA ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Addit Losses [ PA ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Total Pressure Loss [ PA ]</h6>
                        <input type="number"/>
                    </label>
                    <label>
                        <h6>Minimum Inst. Capacity [ KW ]</h6>
                        <input type="number"/>
                    </label>
                </div>
            </div>
            <div className='cal-actions'>
                <button className='cal'>calculate</button>
                <button className='reset'>reset</button>
                <button className='upload'>upload</button>
                <button className='preview'>preview</button>
            </div>
        </div>
    )
}

export default CalculationForm
