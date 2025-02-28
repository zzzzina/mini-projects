import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/store";

const SignInUp = () => {
    const [userInfo, setUserInfo] = useState({email: '', password: ''})
    const [isSignUp, setIsSignUp] = useState(true) // 가입화면 표시할꺼야
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setIsSignUp(false) // 응 로그인화면
        } else {
            setIsSignUp(true) // 가입화면 ㄱ
        }
    }, []);

    // 입력값들오가요    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    // 가입함미당
    const handleSignUp = (e) => {
        e.preventDefault()

        const storageUser = JSON.parse(localStorage.getItem('user'))
        if (storageUser && storageUser.email === userInfo.email) {
            alert('이미 가입함 ㅅㄱ')
            setUserInfo({email: '', password: ''})

        } else {
            localStorage.setItem('user', JSON.stringify(userInfo))
            alert('회원가입 완')
            setUserInfo({email: '', password: ''})
            setIsSignUp(false)
        }
    }

    // 로그인함미당
    const handleSignIn = (e) => {
        e.preventDefault()
        const storageData = JSON.parse(localStorage.getItem('user')) // 데이터 형식 변환해용
        if (storageData.email === userInfo.email &&
            storageData.password === userInfo.password
        ) {
            alert('로그인 완')
            dispatch(login())
            setUserInfo({email: '', password: ''})
            navigate('/todomain')

        } else {
            setError('이메일이나 비밀번호 확인하슈')
            setUserInfo({email: '', password: ''})
        }
    }

    return (
        <div>
            <div>
                <div style={{display: 'flex'}}>
                    <h2>{isSignUp ? '가입하슈' : '로그인하슈'}</h2>
                    <button style={{height: '25px', margin: '25px 0 0 15px'}}
                            onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? '로그인ㄱ' : '회원가입ㄱ'}
                    </button>
                </div>

                <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
                    <div style={{margin: '10px'}}>
                        <label>이메일</label>
                        <input style={{margin: '0 10px'}} type='email' name='email' value={userInfo.email}
                               onChange={handleInputChange}/>
                    </div>

                    <div style={{margin: '10px'}}>
                        <label>비밀번호</label>
                        <input style={{margin: '10px'}} type='password' name='password' value={userInfo.password}
                               onChange={handleInputChange}/>
                    </div>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <button style={{marginLeft: '100px'}} type='submit'>{isSignUp ? '가입하기' : '로그인'}</button>
                </form>
            </div>
        </div>
    );
};

export default SignInUp;