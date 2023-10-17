import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

    const {pathName, search} = useLocation();

    const lastPath = pathName + search;
    localStorage.setItem('lastPath', lastPath);
    

  return (logged)
  ? children
  : <Navigate to="/login" />

}
