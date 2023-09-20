import React from "react";
import Styles from  './aboutme.module.css';

const AboutMe = ()=>{

        return(
            <>
                <div className={Styles.rainbow}>
                        <h2 style={{textAlign:"center"}}>
                            <img src="" alt=""/> 
                                Thank you for visiting this site. 
                            <img src="" alt=""/> 
                        </h2>
                        <p>This site is developed by <b>Md Arif Alam</b></p>
                        <p>
                            You can find the source code of this project in my github acount- 
                            <a href="https://github.com/md-arif-alam">
                                <img src="./img/icons8-github-30.png"alt=""/>github repository
                            </a>
                        </p>
                        
                        {/* <a 
                        href="index.html" 
                        >
                        <button style={{borderRadius:"30px", borderStyle:"none", backgroundColor:"rgba(250, 27, 91, 0.854)",padding:"10px",margin:"10px"}}>Back to the site</button>
                        </a> */}
                </div>
            </>
        );
    }
export default AboutMe;