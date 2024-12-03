import React, { createContext, useContext, useReducer } from 'react';



const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('token'),
    token: null,
    loading: false,
    error: null,
};

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                loading: true,
                error: null, 
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                error: null,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        default:
            return state;
    }
}


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const loginStart = () => {
        dispatch({ type: 'LOGIN_START' });
    };

    const loginSuccess = (user, token) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
        
    };

    const loginFailure = (error) => {
        dispatch({ type: 'LOGIN_FAILURE', payload: { error } });
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    };

    const updateUser = (updatedUserData) => {
        dispatch({ type: 'UPDATE_USER', payload: updatedUserData });
    };

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                token: state.token,
                loading: state.loading,
                error: state.error,
                loginStart,
                loginSuccess,
                loginFailure,
                logout,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Custom Hook to Use Auth Context
// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// }
