import React from 'react';
import {Link} from "react-router-dom";

const Unauthorized = () => {

    return (
        <div style={{margin: '0 auto'}}>
            <div style={{display: 'flex'}}>
                <h2>로그인하슈</h2>
                <Link to='/main' style={{margin: '25px 0 0 15px'}}>메인으로ㄱ</Link>
            </div>

            <img style={{height: '400px'}}
                 src="https://ilovecharacter.com/news/data/20230413/p1065577130390251_265_h.jpg"/>
        </div>
    );
};

export default Unauthorized;