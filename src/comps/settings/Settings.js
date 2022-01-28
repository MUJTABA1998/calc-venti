import React, { useState } from 'react';
import './setting.css'
import ProjectSetting from './ProjectSetting';
import TunnelSetting from './TunnelSetting';


const Settings = () => {

    const [showProjectSetting, setShowProjectSetting] = useState(false);
    const [showTunnelSetting, setShowTunnelSetting] = useState(false);
    

  return <div className='setting-page'>
      <div className='setting-actions'>
        <button className='set-action-1' onClick={() => {
            setShowTunnelSetting(false)
            setShowProjectSetting(true)
        }}>Project Setting</button>
        <button className='set-action-2' onClick={() => {
            setShowTunnelSetting(true)
            setShowProjectSetting(false)
        }}>Tunnel Setting</button>
      </div>
      <div className='setting-content'>
          {showProjectSetting && <ProjectSetting />}
          {showTunnelSetting && <TunnelSetting />}
      </div>
  </div>;
};

export default Settings;
