import React from 'react';
import './footer.css';
import NSE from "../../Assets/NSE Img.png";
import NUESA from "../../Assets/Nuesa logo.png";
import JOSTUM from "../../Assets/JOSTUM.png";


const Footer = () => {
  return (
    <footer className="footer">
      <p className='p1'>NUESA JOSTUM CHAPTER</p>
      <p className='p2'>Address: Nuesa Secreteriat, Old Engineering Auditorium, College of Engineering,
        NorthCore, Joseph Sarwuan Tarka University Makurdi, Benue State.
        </p>
      <div className='association'>
      <img src={JOSTUM} alt="JOSTUM logo" />
      <img src={NSE} alt="NSE logo" />
      <img src={NUESA} alt="NUESA logo" />
      </div>
      <p className='end'>© 2024 NUESA JOSTUM. All rights reserved.</p>
    </footer>
  )
}

export default Footer;