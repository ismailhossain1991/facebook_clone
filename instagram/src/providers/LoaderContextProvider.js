import { useReducer } from "react";
import LoaderContext from "../context/LoaderContext";
import LoaderReducer from "../reducers/LoaderReducer";

// initail state
export const INITIAL_STATE = 0;


// create providers
const LoaderContextProvider = ({ children }) => {

const [loaderState, loaderDispatch] = useReducer( LoaderReducer, INITIAL_STATE );

    return(
        <LoaderContext.Provider
         value={{
            loaderState,
            loaderDispatch
        }}>
            {children}

        </LoaderContext.Provider>
    );

}

// export default 
export default LoaderContextProvider;