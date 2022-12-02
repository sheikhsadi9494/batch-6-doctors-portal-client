import React from "react";
import bg from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <div className="" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
      <footer className="footer px-10 py-32 justify-start lg:justify-evenly text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className=" px-10 py-4 border-t text-base-content border-base-300">
     
       
          <p className="text-center">
          Copyright 2022 All Rights Reserved
          </p>
        
        
      </footer>
    </div>
  );
};

export default Footer;
