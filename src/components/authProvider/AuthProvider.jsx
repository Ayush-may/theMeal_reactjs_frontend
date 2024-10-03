import React, { createContext, useEffect, useState } from "react";
import axiosConfig from "../../api/axiosConfig";
// import { useNavigation } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuth, setAuth] = useState(false);
    // const navigate = useNavigation();

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosConfig.get("/authuser");
                setAuth(true);
            } catch (error) {
                setAuth(false);
            }
        })();
    }, []);

    // useEffect(() => {
    //     if (isAuth === false) {
    //         navigate("/login");
    //     }
    // }, [isAuth, setAuth]);
    
    return (
        <>
            <AuthContext.Provider value={{ isAuth, setAuth }}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;
