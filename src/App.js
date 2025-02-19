import React, {useState} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import Main from './landing/components/Main';
import Desc from "./landing/components/Desc";
import TodoMain4 from "./landing/components/TodoMain4";
import Header from "./landing/components/Header";
import Footer from "./landing/components/Footer";
import Unauthorized from "./landing/components/Unauthorized";
import SignInUp from "./landing/components/SignInUp";

const Layout = () => { //부모
    return (
        <div>
            <Header/>
            <Outlet/> {/*요기에 짜식들이 들어와*/}
            <Footer/>
        </div>
    )
}

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/main' element={<Main/>} />
                <Route path='/desc' element={<Desc/>}/>
                <Route path='signinup' element={<SignInUp setIsLoggedIn={setIsLoggedIn} />} />
                {/*로그인했으면 todo*/}
                <Route path='todomain' element={isLoggedIn ? <TodoMain4 /> : <Unauthorized />} />
            </Route>
        </Routes>
    );
};

export default App;