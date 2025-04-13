import { useLoaderData } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Github = () => {
    const data = useLoaderData();
    const {user} = useContext<any>(UserContext);

    console.log('Github data:',user);
    /** can load the data on page load using useeffect but can also be loaded in routes using loader  */
    //  const [data, setData] = useState<any>([]);
    //  useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then((data:any) => {
    //         setData(data);
    //     })
    //  }
    //  ,[]);
    return (  
    <>
    <div className="w-full p-4 bg-amber-400 text-black text-2xl text-center">
        <h2>Github Followers: {data.followers} </h2>
        <div>Name:{user.name}</div>
        <div>Email: {user.email}</div>
        <div>Tel: {user.tel}</div>
    </div> 
    </>
    );
}
 
export default Github;

export const gitFollowers = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}