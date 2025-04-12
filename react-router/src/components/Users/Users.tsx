import { useParams } from "react-router-dom";

const Users = () => {
    const {id} = useParams();
    return ( 
        <>
            <div>User: {id}</div>
        </>
     );
}
 
export default Users;