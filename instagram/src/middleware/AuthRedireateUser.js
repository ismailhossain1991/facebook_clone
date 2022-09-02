import { useContext} from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';


// create authenticate
const AuthRedireateUser = ({ children }) => {

const { isUserLoggedIn } = useContext(AuthContext);
return isUserLoggedIn ?  <Navigate to="/" /> : children;

} 

// export default middlewares
export default AuthRedireateUser;