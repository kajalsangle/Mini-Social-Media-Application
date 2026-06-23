import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="main-layout">

        <Sidebar />

        <div className="feed-container">

          <CreatePost
            fetchPosts={fetchPosts}
          />

          <div className="feed-tabs">
            <button className="active-tab">
              All Posts
            </button>

            <button>
              Most Liked
            </button>

            <button>
              Most Commented
            </button>
          </div>

          <div className="posts-section">

            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                fetchPosts={fetchPosts}
              />
            ))}

          </div>

        </div>

        <RightSidebar />

      </div>
    </>
  );
}

export default Feed;