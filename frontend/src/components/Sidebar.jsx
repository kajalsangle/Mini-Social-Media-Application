import {
  FaHome,
  FaCompass,
  FaBell,
  FaUserFriends,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="profile"
        />

        <h3>Kajal</h3>

        <p>@kajal_23</p>
      </div>

      <ul>
        <li>
          <FaHome /> Home
        </li>

        <li>
          <FaCompass /> Explore
        </li>

        <li>
          <FaBell /> Notifications
        </li>

        <li>
          <FaUserFriends /> Friends
        </li>
      </ul>

      <button className="create-btn">
        + Create Post
      </button>
    </div>
  );
}

export default Sidebar;