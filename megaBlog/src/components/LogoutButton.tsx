import { useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice";
import authService from "../appwrite/auth";

const LogoutButton = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(()=>{ 
            dispatch(logout())
        })
    }
    return ( 
        <button className="inline-block px-6">Logout</button>
     );
}
 
export default LogoutButton;