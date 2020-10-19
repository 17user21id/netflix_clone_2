import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
    const [show , handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
            return () => {
                window.removeEventListener("scroll");
            };

      




    }, []);
      
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"
            alt="netflix"
            />
           
            <img
             className="nav_avatar"
             src="https://assets.dryicons.com/uploads/icon/svg/8841/63a0a827-681d-4160-963c-efdbdbfc0c46.svg"
             alt="logo"
            />



        </div>
    )
}

export default Nav;
 