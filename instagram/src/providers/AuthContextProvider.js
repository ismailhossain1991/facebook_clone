import AuthContext from "../context/AuthContext";
import cookie from 'js-cookie';
import { useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

// initail state
export const INITIAL_STATE = {
    isUserLoggedIn : false,
    user : {}
}


// create providers
const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE );

    return(
        <AuthContext.Provider value={{
            isUserLoggedIn : state.isUserLoggedIn,
            user : state.user,
            dispatch
        }}>
            {children}

        </AuthContext.Provider>
    );

}

// export default 
export default AuthContextProvider;