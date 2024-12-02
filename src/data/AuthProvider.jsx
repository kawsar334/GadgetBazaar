import React, { createContext, useContext, useReducer } from 'react';

// Initial State
const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

// Reducer Function
function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
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

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user, token) => {
        dispatch({ type: 'LOGIN', payload: { user, token } });
    };

    const logout = () => {
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
                login,
                logout,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Custom Hook to Use Auth Context
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
