import "./singlepost.css"
import image from "../singlePost1.jpg"
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={image} alt="" className="singlePostImg" />
        </div>
        <h1 className="singlePostTitle">Lorem ipsum dolor sit 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Dipesh Saxena</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque optio perferendis natus repellendus eveniet illo fugiat vero maiores aperiam, 
             totam accusantium possimus, iusto autem molestias nihil neque excepturi! Excepturi, quos.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque optio perferendis natus repellendus eveniet illo fugiat vero maiores aperiam, 
             totam accusantium possimus, iusto autem molestias nihil neque excepturi! Excepturi, quos.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque optio perferendis natus repellendus eveniet illo fugiat vero maiores aperiam, 
             totam accusantium possimus, iusto autem molestias nihil neque excepturi! Excepturi, quos.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque optio perferendis natus repellendus eveniet illo fugiat vero maiores aperiam, 
             totam accusantium possimus, iusto autem molestias nihil neque excepturi! Excepturi, quos.

        </p>
        
      
    </div>
  )
}
