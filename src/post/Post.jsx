import "./post.css"
import snow from '../snow.jpg'

export default function post() {
  return (
    <div className="post">
        <img
        className="postImg"
        src={snow}
        alt=""
        />  
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Dipesh Saxena
            </span>
             <hr/>
             <span className="postDate">1 hour ago</span>
        </div>    
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic tempora, reprehenderit ad ducimus iste perspiciatis voluptatum beatae eos in totam fuga repellat numquam perferendis dignissimos, sit repellendus corrupti obcaecati!

        </p>
    </div>
  )
}
