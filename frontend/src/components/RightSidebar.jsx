function RightSidebar() {
  return (
    <div className="right-sidebar">

      <div className="suggestion-card">
        <h3>Suggested Users</h3>

        <div className="user-item">
          <img src="https://i.pravatar.cc/150?img=20" alt="" />
          <div>
            <h4>Neha Patel</h4>
            <p>@neha25</p>
          </div>
          <button className="follow-btn">
            Follow
          </button>
        </div>

        <div className="user-item">
          <img src="https://i.pravatar.cc/150?img=21" alt="" />
          <div>
            <h4>Rohit Sharma</h4>
            <p>@rohit10</p>
          </div>
          <button className="follow-btn">
            Follow
          </button>
        </div>

        <div className="user-item">
          <img src="https://i.pravatar.cc/150?img=22" alt="" />
          <div>
            <h4>Priya Singh</h4>
            <p>@priya21</p>
          </div>
          <button className="follow-btn">
            Follow
          </button>
        </div>
      </div>

      <div className="trending-card">
        <h3>Trending 🔥</h3>

        <p>#WebDevelopment</p>
        <p>#ReactJS</p>
        <p>#NodeJS</p>
        <p>#MongoDB</p>
        <p>#Programming</p>
      </div>
    </div>
  );
}

export default RightSidebar;