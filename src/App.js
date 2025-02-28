import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import Main from './landing/components/Main';
import Desc from "./landing/components/Desc";
import TodoMain4 from "./landing/components/TodoMain4";
import Header from "./landing/components/Header";
import Footer from "./landing/components/Footer";
import Unauthorized from "./landing/components/Unauthorized";
import SignInUp from "./landing/components/SignInUp";
import {Provider, useSelector} from "react-redux";
import store from "./store/store";
import NoticeList from "./landing/components/NoticeList";
import { createTheme, ThemeProvider } from '@mui/material';

const Layout = () => { //부모
    return (
        <div>
            <Header/>
            <Outlet/> {/*요기에 짜식들이 들어와*/}
            {/*<Footer/>*/}
        </div>
    )
}
const theme = createTheme({
    typography: {
        fontFamily: 'CookieRun_Black',  // 원하는 폰트 설정
        fontSize: 16,
        fontWeightLight: 300,           // 얇은 글꼴
        fontWeightRegular: 400,         // 정상 굵기 글꼴
        fontWeightMedium: 500,          // 중간 굵기 글꼴
        fontWeightBold: 700,
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    padding: 8,
                    borderBottom: 'none',
                    textAlign: 'center',
                    color: '#3A3A3A'
                },
                head: {
                    paddingBottom: 20,
                    fontSize: 14,
                    color: '#212529',
                    fontWeightMedium: 500,
                },
            },
        },
    },
})

const App = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/main' element={<Main/>}/>
                        <Route path='/desc' element={<Desc/>}/>
                        <Route path='/signinup' element={<SignInUp/>}/>
                        <Route path='/notice' element={<NoticeList/>}/>

                        {/*<Route path='/unauthorized' element={<Unauthorized/>}/>*/}

                        {/*로그인했으면 todo로 슝~, 아니면 로그인하슈 로,,,*/}
                        <Route path='/todomain' element={isLoggedIn ? <TodoMain4/> : <Unauthorized/>}/>
                    </Route>
                </Routes>
            </Provider>
        </ThemeProvider>
    );
};

export default App;