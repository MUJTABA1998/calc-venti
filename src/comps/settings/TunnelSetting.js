import React , { useEffect, useState } from 'react'
import CalculationForm from '../CalculationForm';
import {FiSettings} from 'react-icons/fi'
import './setting.css'
import {useSelector} from 'react-redux'


export const TunnelSetting = () => {


    let audit = "Audit Tunnel";
    let nonAudit = "Non Audit Tunnel"

    const [showForm, setShowForm] = useState(false)
    const [tunnelType, setTunnelType] = useState();
    const [projectName, setProjectName] = useState('');
    const [tunnelName, setTunnelName] = useState('');
    const [formError, setFormError] = useState('');
    const [showTunnel, setShowTunnel] = useState(false)
    const [auditLength, setAuditLength] = useState(0);
    const [auditArea, setAuditArea] = useState(0);
    const [tunnelLength, setTunnelLength] = useState(0);
    const [preDuctLength, setPreDuctLength] = useState(0);
    const [rav, setRav] = useState(0);
    const [preDuctDia, setPreDuctDia] = useState(0);
    const [restFields, setRestFields] = useState(false);
    const [vMethod, setVMethod] = useState();
    const [tMethod, setTMethod] = useState();
    const [typeTunnel, setTypeTunnel] = useState();
    const [sizeTunnel, setSizeTunnel] = useState(0);
    const [timeCons, setTimeCons] = useState(0);
    const [unitKw, setUnitKw] = useState(0);
    const [file, setFile] = useState(null)
    const [more, setMore] = useState(false)

    console.log(file);


    // show form
    const handleShowForm = () => {
       setShowForm(true)
    }

    const handleValues = () => {
        setTunnelLength(0);
        setTMethod(null)
        setTypeTunnel(null);
        setPreDuctDia(0);
        setPreDuctLength(0);
        setSizeTunnel(0)
        setTimeCons(0)
        setFile(null)
        setVMethod(null)
        setUnitKw(0)
        setRav(0)
    }

    useEffect(() => {
        if(tunnelType === audit){
            setShowTunnel(true)
            setMore(true)
        }
        if(tunnelType === nonAudit){
            setShowTunnel(false)
            setMore(false)
        }
    }, [tunnelType, audit, nonAudit])


    const projects = useSelector(state => state.calculation.projects)

    const names = projects.map(pr => pr.name)


    return (
        <div className='calculation'>
            {formError && <div className='project-error'>{formError}</div>}
            <div className='cal-info'>
                <h1>Tunnel Settings <FiSettings/></h1>
                <label>
                    <h5>Project Name</h5>
                    <br/>
                    <select className='tunnel' value={projectName} onChange={(e) => {
                        setProjectName(e.target.value);
                    }}>
                        <option selected disabled>Select Project Name</option>
                        {
                            names.map((name,index) => {
                                return(
                                    <option key={index}>{name}</option>
                                )
                            })
                        }
                        </select>
                </label>
                <label>
                    <h5>Tunnel name</h5>
                    <br/>
                    <input type="text" value={tunnelName} onChange={e => setTunnelName(e.target.value)} required/>
                </label>
                <label>
                    <h5>Tunnel Audit Type</h5>
                    <br/>
                    <select className='tunnel' value={tunnelType} onChange={(e) => {
                        setTunnelType(e.target.value);
                        setRestFields(true);
                    }}>
                        <option selected disabled>Select Tunnel Audit Type</option>
                        <option>{audit}</option>
                        <option>{nonAudit}</option>
                    </select>
                </label>
                {
                    showTunnel &&
                    <label>
                        <h5 className='tunnel-req'>Audit length</h5>
                        <br/>
                        <input type="number"  value={auditLength} onChange={e => setAuditLength(e.target.value)} required/>
                    </label>
                }
                {
                    showTunnel &&
                    <label>
                        <h5 className='tunnel-req'>Audit Area</h5>
                        <br/>
                        <input type="number"  value={auditArea} onChange={e => setAuditArea(e.target.value)} required/>
                    </label>
                }
               {
                   restFields &&
                   <div>
                        <label>
                            <h5>Tunnel length</h5>
                            <br/>
                            <input type="number" value={tunnelLength} onChange={e => setTunnelLength(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Prefered Duct length</h5>
                            <br/>
                            <input type="number" value={preDuctLength} onChange={e => setPreDuctLength(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Prefered RAV</h5>
                            <br/>
                            <input type="number" value={rav} onChange={e => setRav(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Prefered Duct Diameter</h5>
                            <br/>
                            <input type="number" value={preDuctDia} onChange={e => setPreDuctDia(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Ventilation Method</h5>
                            <br/>
                            <select className='tunnel' value={vMethod} onChange={(e) => {
                                setVMethod(e.target.value);
                            }}>
                                <option selected disabled>Select Ventilation Method</option>
                                <option>Forcing</option>
                                <option>Exhaust</option>
                            </select>
                        </label>
                        <label>
                            <h5>Tunneling Method</h5>
                            <br/>
                            <select className='tunnel' value={tMethod} onChange={(e) => {
                                setTMethod(e.target.value);
                            }}>
                                <option selected disabled>Select Tunneling Method</option>
                                <option>D and B</option>
                                <option>Heading and Benching</option>
                                <option>TBM</option>
                            </select>
                        </label>
                        <label>
                            <h5>Type of Tunnel</h5>
                            <br/>
                            <select className='tunnel' value={typeTunnel} onChange={(e) => {
                                setTypeTunnel(e.target.value);
                            }}>
                                <option selected disabled>Select Tunnel Type</option>
                                <option>D Shape</option>
                                <option>Horse Shoe</option>
                            </select>
                        </label>
                        <label>
                            <h5>Size Of Tunnel</h5>
                            <br/>
                            <input type="number" value={sizeTunnel} onChange={e => setSizeTunnel(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Time For Construction [ Days ]</h5>
                            <br/>
                            <input type="number" value={timeCons} onChange={e => setTimeCons(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Unit Per KW</h5>
                            <br/>
                            <input type="number" value={unitKw} onChange={e => setUnitKw(e.target.value)} required/>
                        </label>
                        <label>
                            <h5>Attach File</h5>
                            <br/>
                            <input type="file" onChange={e => setFile(e.target.files[0])}/>
                        </label>
                        <label>
                            <h5>Note</h5>
                            <br/>
                            <textarea col='10' rows={10}></textarea>
                        </label>
                        
                   </div>
               }
               {
                   restFields &&
                    <div className='tunnel-action'>
                        <button className='create-action' onClick={handleShowForm}>Save And Calculate</button>
                        {more && <button className='create-action' onClick={handleValues}>Add More</button>}
                    </div>
}
                {formError && <div className='project-error'>{formError}</div>}
            </div>
            {showForm && <CalculationForm />}
        </div>
    )
}



export default TunnelSetting


