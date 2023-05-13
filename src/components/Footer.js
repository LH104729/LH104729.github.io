import React from "react";
import {FaFacebookSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <>
        <div className="footer-wrapper">   
            <p>
                Stay connected
            </p>
            <a href="https://www.facebook.com/lh104729" target="_blank" rel="noreferrer">
                <FaFacebookSquare color="#5c5c5c"/>
            </a>
        </div>
    </>
  )
}

export default Footer