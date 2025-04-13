import UserContext from "./UserContext";

import { useState } from "react";

const UserContextProvider = ({children}:any) =>{
    const [user, setUser] = useState<any>('');

    return (
        <UserContext.Provider value={{ user,setUser }}>  
                       {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;