import "./styles/Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const firstInitial = user?.firstName?.charAt(0) || "";
  const lastInitial = user?.lastName?.charAt(0) || "";

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-top-header">
        <button className="back-btn">
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="profile-title">Profile</h1>
        <button className="menu-btn">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>

      {/* Profile Picture Section */}
      <div className="profile-pic-section">
        <div className="profile-avatar-large">
          <span>
            {firstInitial}
            {lastInitial}
          </span>
          <div className="camera-icon">
            <i className="fas fa-camera"></i>
          </div>
        </div>
        <h2 className="profile-user-name">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="profile-user-email">{user?.email}</p>
      </div>

      {/* Profile Info Card */}
      <div className="profile-info-card">
        {/* First Name */}
        <div className="form-field">
          <label className="field-label">FIRST NAME</label>
          <p className="field-value">{user?.firstName}</p>
        </div>

        {/* Last Name */}
        <div className="form-field">
          <label className="field-label">LAST NAME</label>
          <p className="field-value">{user?.lastName}</p>
        </div>

        {/* Email */}
        <div className="form-field">
          <label className="field-label">EMAIL ADDRESS</label>
          <p className="field-value">{user?.email}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="profile-buttons">
        <button className="btn-edit-profile">
          <i className="fas fa-edit"></i> Edit Profile
        </button>
        <button className="btn-signout">Sign Out</button>
      </div>

      {/* Settings Section */}
      <div className="settings-section">
        <h3 className="settings-title">SETTINGS</h3>
        <div className="settings-list">
          <div className="setting-item">
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="setting-item">
            <i className="fas fa-shield-alt"></i>
            <span>Privacy & Security</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="setting-item">
            <i className="fas fa-question-circle"></i>
            <span>Help Center</span>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
