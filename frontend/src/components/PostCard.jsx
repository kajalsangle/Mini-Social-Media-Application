import { useState } from "react";
import axios from "axios";
import {
FaHeart,
FaComment
} from "react-icons/fa";

function PostCard({
post,
fetchPosts
}) {

const user = JSON.parse(
localStorage.getItem("user")
);

const [comment, setComment] =
useState("");

const likePost = async () => {


try {

  await axios.put(
    `http://localhost:5000/api/posts/like/${post._id}`,
    {
      username: user?.username,
    }
  );

  fetchPosts();

} catch (error) {

  console.log(error);

}


};

const addComment = async () => {


if (!comment.trim()) return;

try {

  await axios.put(
    `http://localhost:5000/api/posts/comment/${post._id}`,
    {
      username: user?.username,
      comment,
    }
  );

  setComment("");

  fetchPosts();

} catch (error) {

  console.log(error);

}


};

return ( <div className="post-card">


  <div className="post-header">

    <img
      src="https://i.pravatar.cc/150?img=10"
      alt=""
    />

    <div>

      <h3>
        {post.username}
      </h3>

      <p>
        {new Date(
          post.createdAt
        ).toLocaleString()}
      </p>

    </div>

  </div>

  <div className="post-content">
    {post.text}
  </div>

  {post.image && (
    <img
      src={`http://localhost:5000${post.image}`}
      alt="post"
      className="post-image"
    />
  )}

  <div className="post-footer">

    <button
      onClick={likePost}
    >
      <FaHeart />
      {post.likes?.length || 0}
    </button>

    <button>
      <FaComment />
      {post.comments?.length || 0}
    </button>

  </div>

  <div className="comment-box">

    <input
      type="text"
      placeholder="Write a comment..."
      value={comment}
      onChange={(e) =>
        setComment(
          e.target.value
        )
      }
    />

    <button
      onClick={addComment}
    >
      Comment
    </button>

  </div>

  {post.comments?.map(
    (c, index) => (

      <div
        key={index}
        className="comment-item"
      >

        <strong>
          {c.username}
        </strong>

        : {c.comment}

      </div>

    )
  )}

</div>


);
}

export default PostCard;
