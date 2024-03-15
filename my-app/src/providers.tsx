'use client'
import React, { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import instance from "./services";
import { useCookies } from "react-cookie"

// Define the shape of your user object
interface User {
    id: string;
    username?: string;
    name: string
    email: string
    profile: string
    role: string
}

// Define the actions for the reducer
type Action =
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT" }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_ERROR"; payload: string };

// Define the shape of your AuthContext
interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;

    removeAuthTokenFromCookies: () => void;
    getAuthTokenFromCookies: () => string;
    setAuthTokenInCookies: (token: string) => void

    login: ({ id, name, email, profile, role }: User) => void;
    logout: () => void;
}

// * Initial reducer-state
const initialState = {
    user: null as User | null,
    loading: false,
    error: null as string | null,
};

// Reducer function
const authReducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        case "SET_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};


// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a custom hook to use the AuthContext
export const useAuth = () => {


    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [cookies, setCookie, removeCookie] = useCookies(['authToken'])
    function setAuthTokenInCookies(token: string) {
        setCookie('authToken', token, { httpOnly: true, path: "/" })
    }
    function getAuthTokenFromCookies() {
        const token = cookies?.['authToken'] || '';
        return token
    }
    function removeAuthTokenFromCookies() {
        removeCookie('authToken')
    }








    useEffect(
        () => {

            // TODO
            function fetchUser() {
                // try to get auth-token from the cookies;
                // & if token found, make an api-call to fetch user '/user' or something and pass token as header;
                // if token would be valid, we get current-User


                // return user


            }

            // fetch the user with token and store them inside the state and localstorage
            // fetchUser()
            // dispatch({type:"LOGIN", payload: {}})
        }, []
    )


    // dispatch({ type: "SET_ERROR", payload: 'null' })
    const login = ({ id, name, email, profile, role }: User) => {

        dispatch({ type: "SET_LOADING", payload: true });
        try {
            // TODO: call api in respective components
            // const { data } = await instance.post('/api/user/login', { email, password }) // requesting 

            localStorage.setItem("user", JSON.stringify({ id, name, email, profile, role }))  // seting in lc
            dispatch({ type: "LOGIN", payload: { id, name, email, profile, role } }) // setting in state


            // dispatch({ type: "LOGIN", payload: loggedInUser });
        } catch (error) {
            dispatch({ type: "SET_ERROR", payload: "Login failed. Please try again." });
        }
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider
            value={{ ...state, login, logout, getAuthTokenFromCookies, removeAuthTokenFromCookies, setAuthTokenInCookies }}
        >
            {children}
        </AuthContext.Provider>
    );
}; 

