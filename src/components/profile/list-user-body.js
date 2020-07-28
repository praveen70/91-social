import React from "react";
import { Link } from 'react-router-dom'


const Usercontent = ({ bodyData }) => {
  return (
    <React.Fragment>
      {bodyData &&
        bodyData &&
        bodyData.map((ele, index) => {
            
          return (
            <tr key={index}>
              <td>{ele.id}</td>
              <td><Link to="/cardview">{ele.title}</Link></td>
              <td>{ele.event_date_unix}</td>
              <td>{ele.event_date_utc}</td>
              <td><a href={ele.links.wikipedia}>{ele.links.wikipedia}</a></td>
              <td><a href={ele.links.article}>{ele.links.article}</a></td>
            </tr>
          );
        })}
    </React.Fragment>
  );
};

export default Usercontent;
