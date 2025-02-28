import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' // 잡았다요놈 true === 'true'는 false니께.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
            localStorage.setItem('isLoggedIn', 'true')
        },

        logout: (state) => {
            state.isLoggedIn = false
            localStorage.removeItem('isLoggedIn')
        }
    }
})

// 액션생성 애들
export const {login, logout} = authSlice.actions

//스토어 뚝딱씨
const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store;