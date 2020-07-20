import React from 'react';
import './styles.css';

function Footer () {
  var today = new Date().getFullYear()
  
  return(
    <div className="Footer">
      <span>Thiago Nascimento Copyright {today}</span> 
    </div>

  );
}

export default Footer;