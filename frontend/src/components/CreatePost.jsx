import { useState } from "react";
import axios from "axios";
import { FaImage, FaSmile } from "react-icons/fa";

function CreatePost({ fetchPosts }) {

const user = JSON.parse(
localStorage.getItem("user")
);

const [text, setText] = useState("");
const [image, setImage] = useState(null);

const handlePost = async () => {


if (!text && !image) return;

try {

  const formData = new FormData();

  formData.append(
    "userId",
    user?._id
  );

  formData.append(
    "username",
    user?.username
  );

  formData.append(
    "text",
    text
  );

  if (image) {
    formData.append(
      "image",
      image
    );
  }

  await axios.post(
    "http://localhost:5000/api/posts/create",
    formData
  );

  setText("");
  setImage(null);

  fetchPosts();

} catch (error) {

  console.log(error);

}


};

return ( <div className="create-post-card">


  <h2>
    What's on your mind,
    {" "}
    {user?.username}
    ?
  </h2>

  <textarea
    placeholder="Share your thoughts..."
    value={text}
    onChange={(e) =>
      setText(e.target.value)
    }
  />

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setImage(
        e.target.files[0]
      )
    }
  />

  <div className="post-actions">

    <div className="icons">
      <FaImage />
      <FaSmile />
    </div>

    <button onClick={handlePost}>
      Create Post
    </button>

  </div>

</div>


);
}

export default CreatePost;
