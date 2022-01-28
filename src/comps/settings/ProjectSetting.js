import React, {useState} from 'react';
import {FiSettings} from 'react-icons/fi'
import {bindActionCreators} from 'redux'
import {useDispatch} from 'react-redux'
import * as projectActionCreator from '../../store/actions/calcAction';
import Projects from './Projects';



const ProjectSetting = () => {


  const dispatch = useDispatch()
  const { addProject } = bindActionCreators(projectActionCreator, dispatch)

  const [name, setName] = useState('');
  const [sHeight, setSHeight] = useState(0);
  const [temp, setTemp] = useState(0);
  const [tunnel, setTunnel] = useState(0);
  const [msg, setMsg] = useState('')



  const handleProject = () => {
    addProject({
      name,
      siteHeight: sHeight,
      temp,
      noTunnel: tunnel 
    })
    setMsg('Project Added')
    setName('')
    setTemp(0)
    setTunnel(0)
    setSHeight(0)
  }






  return <><div className='project-setting'>
    {msg && <div className='p-msg'><h2>{msg}</h2></div>}
     <div className='project-setting-box'>
       <h1>Project Settings <FiSettings/></h1>
       <div className='form-input'>
        <label>
          <h5>Project Name</h5>
          <input type="text" placeholder="Enter Project Name" value={name} onChange={e => setName(e.target.value)}/>
        </label>
       </div>
       <div className='form-input'>
        <label>
          <h5>Site Height</h5>
          <input type="number" placeholder="Enter Site height" value={sHeight} onChange={e => setSHeight(e.target.value)} />
        </label>
       </div>
       <div className='form-input'>
        <label>
          <h5>Temperature</h5>
          <input type="number" placeholder="Enter Temperature" value={temp} onChange={e => setTemp(e.target.value)} />
        </label>
       </div>
       <div className='form-input'>
        <label>
          <h5>No. Of Tunnels</h5>
          <input type="number" placeholder="Enter No. Of Tunnels" value={tunnel} onChange={e => setTunnel(e.target.value)}/>
        </label>
       </div>
       <button className='project-action' onClick={handleProject}>Create Project</button>
     </div>
  </div>
  <Projects />
  </>;
};

export default ProjectSetting;
