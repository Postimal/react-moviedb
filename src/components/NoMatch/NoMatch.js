import React from 'react';
import { Link } from 'react-router-dom';
import error from './error404.jpg';

 function NoMatch() {
    return (
        <div style={{width: '80vw', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: "column", margin:"0 auto"}}>
            <img src={error} alt="wrong url" style={{width:'80%', marginTop:'50px'}}/>
            <Link style={{color:'#ddd', textDecoration:'none', paddingTop:'20px'}} to={'/'}>Click and go back to Home!</Link>
            <a href="https://www.freepik.com/free-photos-vectors/business" style={{fontSize: '2vw', color:'#555', marginTop:'80px'}}>Business vector created by pikisuperstar - www.freepik.com</a>
        </div>
       
    )
}

export default NoMatch