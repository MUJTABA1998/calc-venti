import React from 'react';
import {useSelector} from 'react-redux'


const Projects = () => {

  const projects = useSelector(state => state.calculation.projects)

  return <div className='projects'>
      <h1>Projects</h1>
      <table>
          <tr>
            <th>Project Name</th>
            <th>Site Height</th>
            <th>Temperature</th>
            <th>No .of Tunnels</th>
          </tr>
          {
            projects.map((pr, index) => {
              return(
                <tr key={index}>
                  <td>{pr.name}</td>
                  <td>{pr.siteHeight}</td>
                  <td>{pr.temp}</td>
                  <td>{pr.noTunnel}</td>
                </tr>
              )
            })
          }
        </table>
  </div>;
};

export default Projects;
