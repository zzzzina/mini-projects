import React, {useState} from 'react';
import cong from '../../assets/cong.jpg';
import {Link} from "react-router-dom";



const Main = () => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <h2>메인화면은 떠리</h2>
                <Link to='/SignInUp' style={{margin: '25px 0 0 15px'}}>가보자가보자</Link>
            </div>

            <img style={{width: '600px'}} src={cong}/>
        </div>
    )
}

export default Main;