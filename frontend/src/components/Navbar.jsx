import {
  FaBell,
  FaUserCircle,
  FaSearch
} from "react-icons/fa";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.removeItem("user");

    window.location.href = "/";

  };

  return (
    <div className="navbar">

      <div className="logo">
        MiniSocial
      </div>

      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search posts..."
        />
      </div>

      <div className="nav-right">

        <div className="user-info">

          <FaUserCircle />

          <span>
            {user?.username || "Guest"}
          </span>

        </div>

        <FaBell className="bell-icon" />

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;