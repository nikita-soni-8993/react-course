import service from "../appwrite/config"
import {Link} from  "react-router-dom"

const PostCard = ({$id, title, featuredImage}:any) => {
    return (
         <Link to={`/post/${$id}`} >
            <div className="w-full bg-gray-100 rounded-xl p-4"> 
                <div className="w-full justify-centermb-4">
                    <img src={service.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
                </div>
                <h2 className="font-bold text-xl">{title}</h2>
            </div>
         </Link>
        );
}
 
export default PostCard