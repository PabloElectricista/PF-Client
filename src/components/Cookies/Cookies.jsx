import React, { useEffect, useState } from "react";
import style from "./Cookies.module.css";

function Cookies() {
    
    let [validates, setValidates] = useState(false)
    let validate = localStorage.getItem("cookies-aceptadas")

    function handleButton() {
        // dependece = true
        // e.preventDefault()
        localStorage.setItem("cookies-aceptadas", true)
        setValidates(validate)
    }
    
    return (
        <>
        {
            validate === "true" ?
            <>
            <div className={style.avisoCookies} >
            <img className={style.galleta} src="https://res.cloudinary.com/dyjgtikqw/image/upload/v1664895502/Ecommerce/3c32fc5df675e77467b0343ea7b46dbb_c1zj5v.png" alt="Cookie"/>
            <h3 className={style.titulo}>Cookies</h3>
            <p className={style.parrafo}>We use our own and third-party cookies to improve our services.</p>
            <button  className={style.boton} onClick={handleButton}>In agreement</button>
            <a className={style.enlace} href="https://www.bbc.com/mundo/noticias-40443519">Cookie notice</a>
            </div>
            <div className={style.fondoCookies}></div> 
            </>
            : 
            <>
            <div className={style.avisoCookiesActive} >
            <img className={style.galleta} src="https://res.cloudinary.com/dyjgtikqw/image/upload/v1664895502/Ecommerce/3c32fc5df675e77467b0343ea7b46dbb_c1zj5v.png" alt="Cookie"/>
            <h3 className={style.titulo}>Cookies</h3>
            <p className={style.parrafo}>We use our own and third-party cookies to improve our services.</p>
            <button  className={style.boton} onClick={handleButton}>In agreement</button>
            <a className={style.enlace} href="https://www.bbc.com/mundo/noticias-40443519">Cookie notice</a>
            </div>
            <div className={style.fondoCookiesActive}></div> 
            </>
        }
        </>
        )
}

export default Cookies