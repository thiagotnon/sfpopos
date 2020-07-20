import React from 'react';
import { Link } from 'react-router-dom' ;
import './styles.css';

function POPOSSpace (props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className="POPOSSpace">
    <Link to={`/details/${id}`}>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello"/>
      <h1>{name}</h1>
      <div>{address}</div>
      <div className="hour">{hours}</div>
    </Link>
    </div>
  );
}

export default POPOSSpace;